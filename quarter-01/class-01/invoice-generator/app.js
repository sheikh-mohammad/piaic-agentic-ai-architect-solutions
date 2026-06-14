/* ============================================================
   Invoice Generator — App Logic
   ============================================================ */

/* ---- State ---- */
let state = {
  products: JSON.parse(localStorage.getItem('ig_products') || '[]'),
  invoiceNumber: parseInt(localStorage.getItem('ig_invoiceNum') || '1'),
  editingProductId: null,
};

/* ---- Auto-save draft helper ---- */
const DRAFT_KEY = 'ig_draft';

function saveDraft() {
  const draft = {
    invoiceDate: invoiceDate?.value || '',
    dueDate: dueDate?.value || '',
    recipientName: recipientName?.value || '',
    recipientAddress: recipientAddr?.value || '',
    recipientEmail: recipientEmail?.value || '',
    notes: notes?.value || '',
    taxRate: taxRate?.value || '0',
    discount: discount?.value || '0',
  };
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
}

function loadDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch { return null; }
}

function applyDraft(draft) {
  if (!draft) return;
  if (draft.invoiceDate) invoiceDate.value = draft.invoiceDate;
  if (draft.dueDate) dueDate.value = draft.dueDate;
  if (draft.recipientName) recipientName.value = draft.recipientName;
  if (draft.recipientAddress) recipientAddr.value = draft.recipientAddress;
  if (draft.recipientEmail) recipientEmail.value = draft.recipientEmail;
  if (draft.notes) notes.value = draft.notes;
  if (draft.taxRate) taxRate.value = draft.taxRate;
  if (draft.discount) discount.value = draft.discount;
}

let signatureData = null;      // dataURL for the main signature
let sigDrawing = false;        // flag for modal canvas drawing

/* ---- DOM refs ---- */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

const themeToggle    = $('#themeToggle');
const sidebar        = $('#sidebar');
const mobileMenuBtn  = $('#mobileMenuBtn');
const toggleSidebar  = $('#toggleSidebar');
const productName    = $('#productName');
const productPrice   = $('#productPrice');
const saveProductBtn = $('#saveProductBtn');
const cancelEditBtn  = $('#cancelEditProductBtn');
const productList    = $('#productList');
const itemsBody      = $('#itemsBody');
const addRowBtn      = $('#addRowBtn');
const invoiceDate    = $('#invoiceDate');
const dueDate        = $('#dueDate');
const invoiceNumber  = $('#invoiceNumber');
const recipientName  = $('#recipientName');
const recipientAddr  = $('#recipientAddress');
const recipientEmail = $('#recipientEmail');
const notes          = $('#notes');
const subtotalEl     = $('#subtotal');
const taxRate        = $('#taxRate');
const discount       = $('#discount');
const grandTotalEl   = $('#grandTotal');
const sigCanvas      = $('#signatureCanvas');
const sigModal       = $('#sigModal');
const sigModalCanvas = $('#sigModalCanvas');
const sigClearBtn    = $('#sigClearBtn');
const sigAcceptBtn   = $('#sigAcceptBtn');
const clearSignature = $('#clearSignature');
const exportPdfBtn   = $('#exportPdfBtn');
const exportExcelBtn = $('#exportExcelBtn');
const resetBtn       = $('#resetInvoiceBtn');

/* ============================================================
   INIT
   ============================================================ */
function init() {
  setDefaultDates();
  applyDraft(loadDraft());
  invoiceNumber.textContent = String(state.invoiceNumber).padStart(3, '0');
  renderProducts();
  renderInvoiceRows();
  calcTotals();
  setupSignaturePad();
  bindEvents();
  loadTheme();
}

function setDefaultDates() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const val = `${yyyy}-${mm}-${dd}`;
  if (!invoiceDate.value) invoiceDate.value = val;
  // due date = 30 days from now
  const due = new Date(today);
  due.setDate(due.getDate() + 30);
  const dy = due.getFullYear();
  const dm = String(due.getMonth() + 1).padStart(2, '0');
  const dd2 = String(due.getDate()).padStart(2, '0');
  if (!dueDate.value) dueDate.value = `${dy}-${dm}-${dd2}`;
}

/* ============================================================
   THEME
   ============================================================ */
function loadTheme() {
  const saved = localStorage.getItem('ig_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);
}

function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme');
  const next = cur === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('ig_theme', next);
  updateThemeIcon(next);
  // Re-draw signature with new theme colors
  if (signatureData) {
    const img = new Image();
    img.onload = () => {
      clearCanvas(sigCtx, 300, 80);
      sigCtx.drawImage(img, 0, 0, 300, 80);
    };
    img.src = signatureData;
  } else {
    drawSigPlaceholder();
  }
  // Update modal canvas background
  clearCanvas(modalCtx, 400, 150);
}

function updateThemeIcon(t) {
  themeToggle.innerHTML = t === 'dark'
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

/* ============================================================
   TOAST
   ============================================================ */
function toast(msg, type = 'success') {
  const container = document.querySelector('.toast-container');
  if (!container) {
    const div = document.createElement('div');
    div.className = 'toast-container';
    document.body.appendChild(div);
  }
  const el = document.createElement('div');
  el.className = `toast ${type}`;
  el.innerHTML = `<i class="fas ${type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle'}"></i> ${msg}`;
  document.querySelector('.toast-container').appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

/* ============================================================
   PRODUCTS (CRUD)
   ============================================================ */
function renderProducts() {
  if (!state.products.length) {
    productList.innerHTML = `<div class="product-empty"><i class="fas fa-box-open"></i><p>No products yet.<br>Add one above.</p></div>`;
    return;
  }
  productList.innerHTML = state.products.map(p => `
    <div class="product-item" data-id="${p.id}">
      <div class="product-item-info">
        <div class="product-item-name">${escHtml(p.name)}</div>
        <div class="product-item-price">$${Number(p.price).toFixed(2)}</div>
      </div>
      <div class="product-item-actions">
        <button class="btn-icon edit-product" title="Edit"><i class="fas fa-pen"></i></button>
        <button class="btn-icon delete-product" title="Delete" style="color:var(--danger)"><i class="fas fa-trash"></i></button>
      </div>
    </div>
  `).join('');
}

function saveProduct() {
  const name = productName.value.trim();
  const price = parseFloat(productPrice.value);
  if (!name) { toast('Product name is required.', 'error'); return; }
  if (isNaN(price) || price < 0) { toast('Enter a valid price.', 'error'); return; }

  if (state.editingProductId) {
    const idx = state.products.findIndex(p => p.id === state.editingProductId);
    if (idx > -1) {
      state.products[idx] = { ...state.products[idx], name, price };
    }
    state.editingProductId = null;
    saveProductBtn.innerHTML = '<i class="fas fa-save"></i> Save';
    cancelEditBtn.style.display = 'none';
  } else {
    state.products.push({ id: Date.now(), name, price });
  }

  localStorage.setItem('ig_products', JSON.stringify(state.products));
  productName.value = '';
  productPrice.value = '';
  renderProducts();
  renderInvoiceRows();
  toast('Product saved!');
}

function editProduct(id) {
  const p = state.products.find(x => x.id === id);
  if (!p) return;
  productName.value = p.name;
  productPrice.value = p.price;
  state.editingProductId = id;
  saveProductBtn.innerHTML = '<i class="fas fa-pen"></i> Update';
  cancelEditBtn.style.display = 'inline-flex';
}

function cancelEditProduct() {
  state.editingProductId = null;
  productName.value = '';
  productPrice.value = '';
  saveProductBtn.innerHTML = '<i class="fas fa-save"></i> Save';
  cancelEditBtn.style.display = 'none';
}

function deleteProduct(id) {
  if (!confirm('Delete this product?')) return;
  state.products = state.products.filter(p => p.id !== id);
  localStorage.setItem('ig_products', JSON.stringify(state.products));
  renderProducts();
  renderInvoiceRows();
  toast('Product deleted.');
}

/* ============================================================
   INVOICE ROWS
   ============================================================ */
function renderInvoiceRows() {
  const rows = getRows();
  if (!rows.length) {
    // add one empty row
    addRow();
    return;
  }
  itemsBody.innerHTML = rows.map((r, i) => buildRowHtml(r, i)).join('');
  populateProductDropdowns();
  reattachRowEvents();
  calcTotals();
}

function buildRowHtml(r, idx) {
  const productOpts = state.products.map(p =>
    `<option value="${p.id}" ${p.id === r.productId ? 'selected' : ''}>${escHtml(p.name)}</option>`
  ).join('');
  return `
    <tr data-row="${idx}">
      <td>
        <select class="product-select" data-idx="${idx}">
          <option value="">-- Select --</option>
          ${productOpts}
        </select>
      </td>
      <td>
        <input type="text" class="row-desc" value="${escHtml(r.desc || '')}" placeholder="Description" data-idx="${idx}" />
      </td>
      <td>
        <input type="number" class="row-qty" value="${r.qty}" min="1" step="1" data-idx="${idx}" />
      </td>
      <td>
        <input type="number" class="row-price" value="${Number(r.price).toFixed(2)}" min="0" step="0.01" data-idx="${idx}" />
      </td>
      <td class="row-total" data-idx="${idx}">$${(r.qty * r.price).toFixed(2)}</td>
      <td>
        <button class="btn-icon delete-row" data-idx="${idx}" title="Remove"><i class="fas fa-times"></i></button>
      </td>
    </tr>
  `;
}

function getRows() {
  const stored = localStorage.getItem('ig_rows');
  return stored ? JSON.parse(stored) : [];
}

function saveRows(rows) {
  localStorage.setItem('ig_rows', JSON.stringify(rows));
}

function addRow() {
  const rows = getRows();
  rows.push({ productId: null, desc: '', qty: 1, price: 0 });
  saveRows(rows);
  renderInvoiceRows();
  // scroll to bottom of table
  itemsBody.lastElementChild?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function deleteRow(idx) {
  let rows = getRows();
  if (rows.length <= 1) {
    // reset instead
    rows = [{ productId: null, desc: '', qty: 1, price: 0 }];
  } else {
    rows.splice(idx, 1);
  }
  saveRows(rows);
  renderInvoiceRows();
}

function reattachRowEvents() {
  // Product select change
  document.querySelectorAll('.product-select').forEach(sel => {
    sel.addEventListener('change', (e) => {
      const idx = parseInt(e.target.dataset.idx);
      const pid = e.target.value ? parseInt(e.target.value) : null;
      const rows = getRows();
      rows[idx].productId = pid;
      if (pid) {
        const product = state.products.find(p => p.id === pid);
        if (product) {
          rows[idx].desc = product.name;
          if (rows[idx].price === 0) rows[idx].price = product.price;
        }
      }
      saveRows(rows);
      renderInvoiceRows();
    });
  });

  // Description, qty, price inputs
  document.querySelectorAll('.row-desc, .row-qty, .row-price').forEach(inp => {
    inp.addEventListener('input', (e) => {
      const idx = parseInt(e.target.dataset.idx);
      const rows = getRows();
      const cls = e.target.className;
      if (cls.includes('row-desc')) rows[idx].desc = e.target.value;
      else if (cls.includes('row-qty')) rows[idx].qty = parseInt(e.target.value) || 1;
      else if (cls.includes('row-price')) rows[idx].price = parseFloat(e.target.value) || 0;
      saveRows(rows);
      // Just update total cell without full re-render
      const totalCell = document.querySelector(`.row-total[data-idx="${idx}"]`);
      if (totalCell) {
        totalCell.textContent = `$${(rows[idx].qty * rows[idx].price).toFixed(2)}`;
      }
      calcTotals();
    });
  });

  // Delete buttons
  document.querySelectorAll('.delete-row').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.dataset.idx);
      deleteRow(idx);
    });
  });
}

function populateProductDropdowns() {
  document.querySelectorAll('.product-select').forEach(sel => {
    const currentVal = sel.value;
    sel.innerHTML = `<option value="">-- Select --</option>`
      + state.products.map(p =>
        `<option value="${p.id}">${escHtml(p.name)}</option>`
      ).join('');
    sel.value = currentVal;
  });
}

/* ============================================================
   CALCULATIONS
   ============================================================ */
function calcTotals() {
  const rows = getRows();
  const subtotal = rows.reduce((sum, r) => sum + (r.qty || 0) * (r.price || 0), 0);
  const taxPct = parseFloat(taxRate.value) || 0;
  const discAmt = parseFloat(discount.value) || 0;
  const taxAmt = subtotal * (taxPct / 100);
  const grand = subtotal + taxAmt - discAmt;

  subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  grandTotalEl.textContent = `$${Math.max(0, grand).toFixed(2)}`;
}

/* ============================================================
   SIGNATURE PAD
   ============================================================ */
let sigCtx = null;
let modalCtx = null;

function setupSignaturePad() {
  sigCtx = sigCanvas.getContext('2d');
  modalCtx = sigModalCanvas.getContext('2d');
  drawSigPlaceholder();
  clearCanvas(modalCtx, 400, 150);

  // Click to open modal
  sigCanvas.addEventListener('click', () => {
    sigModal.classList.add('active');
    // restore existing signature on modal
    if (signatureData) {
      const img = new Image();
      img.onload = () => {
        clearCanvas(modalCtx, 400, 150);
        modalCtx.drawImage(img, 0, 0, 400, 150);
      };
      img.src = signatureData;
    }
  });

  // Modal drawing
  sigModalCanvas.addEventListener('mousedown', (e) => {
    sigDrawing = true;
    const rect = sigModalCanvas.getBoundingClientRect();
    modalCtx.beginPath();
    modalCtx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  });
  sigModalCanvas.addEventListener('mousemove', (e) => {
    if (!sigDrawing) return;
    const rect = sigModalCanvas.getBoundingClientRect();
    modalCtx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    modalCtx.strokeStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#fff' : '#000';
    modalCtx.lineWidth = 2;
    modalCtx.lineCap = 'round';
    modalCtx.stroke();
  });
  sigModalCanvas.addEventListener('mouseup', () => { sigDrawing = false; });
  sigModalCanvas.addEventListener('mouseleave', () => { sigDrawing = false; });

  // Touch support for modal
  sigModalCanvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    sigDrawing = true;
    const rect = sigModalCanvas.getBoundingClientRect();
    const touch = e.touches[0];
    modalCtx.beginPath();
    modalCtx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
  });
  sigModalCanvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!sigDrawing) return;
    const rect = sigModalCanvas.getBoundingClientRect();
    const touch = e.touches[0];
    modalCtx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
    modalCtx.strokeStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#fff' : '#000';
    modalCtx.lineWidth = 2;
    modalCtx.lineCap = 'round';
    modalCtx.stroke();
  });
  sigModalCanvas.addEventListener('touchend', () => { sigDrawing = false; });
}

function clearCanvas(ctx, w, h) {
  ctx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#2a2a38' : '#f0f0f5';
  ctx.fillRect(0, 0, w, h);
}

/* ============================================================
   SIGNATURE MODAL ACTIONS
   ============================================================ */
sigClearBtn.addEventListener('click', () => {
  clearCanvas(modalCtx, 400, 150);
  signatureData = null;
});

sigAcceptBtn.addEventListener('click', () => {
  // Check if anything was drawn (pixel not equal to blank)
  const imageData = modalCtx.getImageData(0, 0, 400, 150).data;
  let hasDrawing = false;
  for (let i = 0; i < imageData.length; i += 4) {
    if (imageData[i + 3] > 0) { hasDrawing = true; break; }
  }
  if (!hasDrawing) {
    // No drawing — reset signature
    signatureData = null;
    drawSigPlaceholder();
    sigModal.classList.remove('active');
    return;
  }
  signatureData = sigModalCanvas.toDataURL();
  // Draw onto the small canvas
  const img = new Image();
  img.onload = () => {
    clearCanvas(sigCtx, 300, 80);
    sigCtx.drawImage(img, 0, 0, 300, 80);
  };
  img.src = signatureData;
  sigModal.classList.remove('active');
});

function drawSigPlaceholder() {
  clearCanvas(sigCtx, 300, 80);
  sigCtx.fillStyle = document.documentElement.getAttribute('data-theme') === 'dark' ? '#6b6b82' : '#9a9aae';
  sigCtx.font = '14px Segoe UI, sans-serif';
  sigCtx.textAlign = 'center';
  sigCtx.fillText('Click to sign', 150, 44);
}

// Clear main signature
clearSignature.addEventListener('click', () => {
  signatureData = null;
  drawSigPlaceholder();
});

// Close modal on overlay click
sigModal.addEventListener('click', (e) => {
  if (e.target === sigModal) sigModal.classList.remove('active');
});

/* ============================================================
   EXPORT: PDF
   ============================================================ */
async function exportPDF() {
  try {
    exportPdfBtn.disabled = true;
    exportPdfBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';

    const invoiceEl = document.getElementById('invoice');
    const originalOverflow = invoiceEl.style.overflow;
    const originalMaxH = invoiceEl.style.maxHeight;

    // Expand invoice fully so html2canvas captures everything
    invoiceEl.style.overflow = 'visible';
    invoiceEl.style.maxHeight = 'none';

    // brief yield for repaint
    await new Promise(r => setTimeout(r, 100));

    const canvas = await html2canvas(invoiceEl, {
      scale: 2,
      backgroundColor: null,
      logging: false,
      allowTaint: false,
      useCORS: true,
    });

    // restore
    invoiceEl.style.overflow = originalOverflow;
    invoiceEl.style.maxHeight = originalMaxH;

    const imgData = canvas.toDataURL('image/png');
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = (canvas.height * pdfW) / canvas.width;

    let heightLeft = pdfH;
    let position = 0;
    const pageHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(imgData, 'PNG', 0, position, pdfW, pdfH);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - pdfH; // negative offset
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pdfW, pdfH);
      heightLeft -= pageHeight;
    }

    pdf.save(`Invoice_${invoiceNumber.textContent}.pdf`);
    toast('PDF exported successfully!');
  } catch (err) {
    console.error(err);
    toast('PDF export failed. Check console.', 'error');
  } finally {
    exportPdfBtn.disabled = false;
    exportPdfBtn.innerHTML = '<i class="fas fa-file-pdf"></i> Export PDF';
  }
}

/* ============================================================
   EXPORT: EXCEL
   ============================================================ */
function exportExcel() {
  try {
    const rows = getRows();
    const data = [
      ['INVOICE', '', '', '', ''],
      [`Invoice #`, invoiceNumber.textContent, '', 'Date:', invoiceDate.value],
      ['', '', '', '', ''],
      ['Bill To:', '', '', '', ''],
      ['Name:', recipientName.value || '(not set)', '', '', ''],
      ['', '', '', '', ''],
      ['Item', 'Description', 'Quantity', 'Unit Price', 'Total'],
    ];

    rows.forEach(r => {
      data.push([
        r.desc || '',
        '',
        r.qty || 0,
        r.price || 0,
        (r.qty || 0) * (r.price || 0),
      ]);
    });

    const subtotal = rows.reduce((s, r) => s + (r.qty || 0) * (r.price || 0), 0);
    const taxPct = parseFloat(taxRate.value) || 0;
    const discAmt = parseFloat(discount.value) || 0;
    const taxAmt = subtotal * (taxPct / 100);
    const grand = Math.max(0, subtotal + taxAmt - discAmt);

    data.push(['', '', '', '', '']);
    data.push(['', '', '', 'Subtotal:', `$${subtotal.toFixed(2)}`]);
    data.push(['', '', '', `Tax (${taxPct}%):`, `$${taxAmt.toFixed(2)}`]);
    data.push(['', '', '', 'Discount:', `-$${discAmt.toFixed(2)}`]);
    data.push(['', '', '', 'Total:', `$${grand.toFixed(2)}`]);

    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);

    // Column widths
    ws['!cols'] = [
      { wch: 20 }, { wch: 25 }, { wch: 12 }, { wch: 14 }, { wch: 14 },
    ];

    XLSX.utils.book_append_sheet(wb, ws, 'Invoice');
    XLSX.writeFile(wb, `Invoice_${invoiceNumber.textContent}.xlsx`);
    toast('Excel file exported!');
  } catch (err) {
    console.error(err);
    toast('Excel export failed.', 'error');
  }
}

/* ============================================================
   RESET INVOICE
   ============================================================ */
function resetInvoice() {
  if (!confirm('Start a new invoice? Current data will be cleared.')) return;
  localStorage.removeItem('ig_rows');
  invoiceDate.value = '';
  dueDate.value = '';
  recipientName.value = '';
  recipientAddr.value = '';
  recipientEmail.value = '';
  notes.value = '';
  taxRate.value = '0';
  discount.value = '0';
  signatureData = null;
  clearCanvas(sigCtx, 300, 80);
  // increment invoice number
  state.invoiceNumber += 1;
  localStorage.setItem('ig_invoiceNum', String(state.invoiceNumber));
  invoiceNumber.textContent = String(state.invoiceNumber).padStart(3, '0');
  setDefaultDates();
  renderInvoiceRows();
  calcTotals();
  toast('New invoice ready!');
}

/* ============================================================
   UTILITY
   ============================================================ */
function escHtml(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

/* ============================================================
   EVENT BINDING
   ============================================================ */
function bindEvents() {
  themeToggle.addEventListener('click', toggleTheme);
  mobileMenuBtn.addEventListener('click', () => sidebar.classList.add('open'));
  toggleSidebar.addEventListener('click', () => sidebar.classList.remove('open'));
  // close sidebar on click outside
  document.addEventListener('click', (e) => {
    if (window.innerWidth <= 900) {
      if (!sidebar.contains(e.target) && e.target !== mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    }
  });

  saveProductBtn.addEventListener('click', saveProduct);
  cancelEditBtn.addEventListener('click', cancelEditProduct);
  productName.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); productPrice.focus(); } });
  productPrice.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); saveProduct(); } });

  // Delegate product list clicks
  productList.addEventListener('click', (e) => {
    const item = e.target.closest('.product-item');
    if (!item) return;
    const id = parseInt(item.dataset.id);
    if (e.target.closest('.edit-product')) editProduct(id);
    if (e.target.closest('.delete-product')) deleteProduct(id);
  });

  addRowBtn.addEventListener('click', addRow);

  // Tax / discount recalc + auto-save
  taxRate.addEventListener('input', () => { calcTotals(); saveDraft(); });
  discount.addEventListener('input', () => { calcTotals(); saveDraft(); });

  // Auto-save draft on field changes
  [invoiceDate, dueDate, recipientName, recipientAddr, recipientEmail, notes]
    .forEach(el => el.addEventListener('input', saveDraft));

  // Export
  exportPdfBtn.addEventListener('click', exportPDF);
  exportExcelBtn.addEventListener('click', exportExcel);
  resetBtn.addEventListener('click', resetInvoice);
  const printBtn = $('#printBtn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
}

/* ---- Start ---- */
document.addEventListener('DOMContentLoaded', init);
