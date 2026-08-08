'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap, prefersReducedMotion } from '@/lib/gsap';

/** Builds a soft radial glow texture used for the halo sprite. */
function makeGlowTexture() {
  const size = 256;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  g.addColorStop(0, 'rgba(245,184,65,0.55)');
  g.addColorStop(0.35, 'rgba(167,139,250,0.28)');
  g.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  return new THREE.CanvasTexture(canvas);
}

/**
 * Iridescent 3D sculpture: a violet-faceted solid inside gold wireframe,
 * a glowing halo sprite, a teal orbit ring, an orbiting octahedron and a
 * dust field. Motion is split across three groups so scroll-scrub, idle
 * spin and pointer parallax never fight:
 *   scrollGroup → GSAP scrubbed rotation   (skipped for reduced motion)
 *   spinGroup   → constant idle rotation
 *   pointerGroup→ eased cursor parallax
 */
export default function ThreeScene({ className = '' }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const reduced = prefersReducedMotion();

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.35, 7.5);
    camera.lookAt(0, 0, 0);

    const scrollGroup = new THREE.Group();
    const spinGroup = new THREE.Group();
    const pointerGroup = new THREE.Group();
    scrollGroup.add(spinGroup);
    spinGroup.add(pointerGroup);
    scene.add(scrollGroup);

    // --- Glow halo behind the sculpture ---
    const halo = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: makeGlowTexture(),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
    );
    halo.scale.setScalar(7);
    pointerGroup.add(halo);

    // --- Faceted violet solid ---
    const solidGeo = new THREE.IcosahedronGeometry(1.32, 1);
    const solidMat = new THREE.MeshStandardMaterial({
      color: 0x181828,
      flatShading: true,
      roughness: 0.35,
      metalness: 0.85,
      emissive: 0x8b5cf6,
      emissiveIntensity: 0.08,
    });
    const solid = new THREE.Mesh(solidGeo, solidMat);
    pointerGroup.add(solid);

    // --- Gold wireframe shell ---
    const edgeGeo = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.92, 1));
    const edgeMat = new THREE.LineBasicMaterial({
      color: 0xf5b841,
      transparent: true,
      opacity: 0.95,
    });
    const wire = new THREE.LineSegments(edgeGeo, edgeMat);
    pointerGroup.add(wire);

    // --- Gold orbit ring (base) ---
    const ringGeo = new THREE.RingGeometry(2.55, 2.59, 128);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xf5b841,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = -0.4;
    scrollGroup.add(ring);

    // --- Teal tilted orbit ring ---
    const tealRingGeo = new THREE.RingGeometry(3.05, 3.08, 128);
    const tealRingMat = new THREE.MeshBasicMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
      depthWrite: false,
    });
    const tealRing = new THREE.Mesh(tealRingGeo, tealRingMat);
    tealRing.rotation.x = Math.PI / 2;
    tealRing.rotation.z = 0.5;
    tealRing.rotation.y = 0.4;
    scrollGroup.add(tealRing);

    // --- Orbiting octahedron (satellite) ---
    const satGeo = new THREE.OctahedronGeometry(0.22, 0);
    const satMat = new THREE.MeshStandardMaterial({
      color: 0x2dd4bf,
      emissive: 0x2dd4bf,
      emissiveIntensity: 0.55,
      metalness: 0.7,
      roughness: 0.25,
    });
    const sat = new THREE.Mesh(satGeo, satMat);
    const satOrbit = new THREE.Group();
    satOrbit.add(sat);
    sat.position.set(3.2, 0, 0);
    scene.add(satOrbit);

    // --- Dust particles ---
    const COUNT = 420;
    const positions = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      const r = 2.4 + Math.random() * 3.4;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.02,
      transparent: true,
      opacity: 0.5,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const dust = new THREE.Points(pGeo, pMat);
    scene.add(dust);

    // --- Colored lights ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.5));
    const goldKey = new THREE.DirectionalLight(0xf5b841, 2.4);
    goldKey.position.set(4, 5, 4);
    scene.add(goldKey);
    const violetRim = new THREE.DirectionalLight(0x8b5cf6, 1.6);
    violetRim.position.set(-4, -2, -3);
    scene.add(violetRim);
    const tealFill = new THREE.DirectionalLight(0x2dd4bf, 0.9);
    tealFill.position.set(0, -4, 3);
    scene.add(tealFill);

    // --- Sizing + responsive placement ---
    const resize = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();

      const small = w < 768;
      const medium = w < 1280;
      pointerGroup.position.x = small ? 0 : medium ? 1.15 : 1.85;
      pointerGroup.scale.setScalar(small ? 0.58 : medium ? 0.8 : 0.95);
    };
    resize();
    window.addEventListener('resize', resize);

    // --- Pointer parallax ---
    let mx = 0;
    let my = 0;
    const onPointerMove = (e: PointerEvent) => {
      const r = wrap.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width - 0.5;
      my = (e.clientY - r.top) / r.height - 0.5;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // --- GSAP scroll-scrubbed rotation ---
    let scrollTween: gsap.core.Tween | null = null;
    if (!reduced) {
      scrollTween = gsap.to(scrollGroup.rotation, {
        y: Math.PI * 0.9,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.2,
        },
      });
    }

    // --- Render loop ---
    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!reduced) {
        const t = clock.getElapsedTime();
        spinGroup.rotation.y += 0.0024;
        spinGroup.rotation.x = Math.sin(t * 0.22) * 0.14;
        pointerGroup.position.y = Math.sin(t * 0.6) * 0.16;
        pointerGroup.rotation.x += (my * 0.55 - pointerGroup.rotation.x) * 0.04;
        pointerGroup.rotation.y += (mx * 0.55 - pointerGroup.rotation.y) * 0.04;
        satOrbit.rotation.y = t * 0.6;
        dust.rotation.y = t * 0.018;
        solidMat.emissiveIntensity = 0.08 + Math.sin(t * 1.4) * 0.06;
      }
      renderer.render(scene, camera);
    };
    tick();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      scrollTween?.scrollTrigger?.kill();
      scrollTween?.kill();
      renderer.dispose();
      solidGeo.dispose();
      solidMat.dispose();
      edgeGeo.dispose();
      edgeMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      tealRingGeo.dispose();
      tealRingMat.dispose();
      satGeo.dispose();
      satMat.dispose();
      pGeo.dispose();
      pMat.dispose();
    };
  }, []);

  return (
    <div ref={wrapRef} className={className}>
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
    </div>
  );
}
