# Invoice Generator

**Submitted by:** Sheikh Mohammad

---

## Project Overview

A fully functional, web-based Invoice Generator application that allows users to create, manage, and export professional invoices. Built with vanilla HTML, CSS, and JavaScript, the application features a modern dark-themed UI with light mode support, product inventory management, and multiple export formats (PDF and Excel).

---

## Features & Functionalities

### 1. Product Management
- **Add Products** — Add new products with a name and unit price
- **Edit Products** — Modify existing product details inline
- **Delete Products** — Remove products from the inventory
- **Persistent Storage** — All products are saved in the browser's localStorage and persist across sessions

### 2. Invoice Builder
- **Line Items** — Add multiple items to the invoice with auto-calculating totals
- **Product Selection** — Select products from a dropdown (auto-populated from the product inventory)
- **Quantity Control** — Adjust quantities per line item
- **Manual Entry** — Enter custom descriptions and prices directly

### 3. Recipient Information
- Recipient name, address, and email fields for billing details

### 4. Date Management
- **Invoice Date** — Automatically set to the current date
- **Due Date** — Automatically set to 30 days from the current date

### 5. Financial Calculations
- **Subtotal** — Auto-calculated from all line items
- **Tax (%)** — Percentage-based tax applied to the subtotal
- **Discount** — Flat discount amount subtracted from the total
- **Grand Total** — Final amount after tax and discount

### 6. Signature Pad
- **Drawable Canvas** — Click to open an interactive signature drawing modal
- **Clear & Redraw** — Clear the signature and sign again
- **Touch Support** — Works with both mouse and touch input

### 7. Notes & Terms
- Free-text field for payment terms, notes, or additional information

### 8. Export Options
- **PDF Export** — Generates a professionally formatted PDF file using html2canvas and jsPDF
- **Excel Export** — Exports invoice data as a structured .xlsx file using SheetJS
- **Print** — Browser-native print functionality with print-specific CSS styling for clean output

### 9. Appearance
- **Dark Theme** — Modern dark interface as the default theme
- **Light Theme** — Toggle to light mode with a single click
- **Theme Persistence** — Theme preference is saved across sessions

### 10. Data Persistence
- Products, invoice drafts, and theme preferences are all stored in localStorage
- Work is never lost on page refresh

### 11. Invoice Numbering
- Auto-incrementing invoice numbers (001, 002, 003, ...)
- New invoices automatically receive the next sequential number

### 12. Mobile Responsive
- Sidebar collapses into a slide-out menu on smaller screens
- Touch-friendly signature pad
- Adaptive layout for all screen sizes

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML5 | Application structure |
| CSS3 | Styling & responsive design |
| Vanilla JavaScript | Application logic |
| jsPDF 2.5.1 | PDF generation |
| html2canvas 1.4.1 | Invoice screenshot capture |
| SheetJS (xlsx) 0.18.5 | Excel file export |
| Font Awesome 6.5.1 | UI icons |
| localStorage | Client-side data persistence |

---

## How to Use

1. **Add Products** — In the sidebar, enter a product name and price, then click "Save"
2. **Build Invoice** — Select products from dropdowns, set quantities, adjust prices as needed
3. **Fill Details** — Enter recipient information, adjust tax/discount if applicable
4. **Sign** — Click the signature area to draw your signature
5. **Export** — Click "Export PDF" or "Export Excel" to download the invoice
6. **New Invoice** — Click "New Invoice" to reset and increment the invoice number

---

## File Structure

```
invoice-generator/
├── index.html      # Main application HTML
├── styles.css      # All styles (dark/light themes, responsive, print)
├── app.js          # Application logic (CRUD, calculations, exports)
└── README.md       # Project documentation
```

---

*Assignment project — Invoice Generator with product management and multi-format export.*
