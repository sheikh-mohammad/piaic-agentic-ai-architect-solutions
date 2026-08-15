"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

/* ════════════════════════════════════════════════════════════════════
   PlasmaCore — procedural fusion core rendered with a custom shader.
   One WebGL context. Performance-first:
   - deferred context creation (requestIdleCallback / rAF after paint)
   - DPR capped at 1.75, no MSAA (shader does the shading)
   - render loop pauses when off-screen or tab hidden
   - respects prefers-reduced-motion (single static frame)
   - full disposal on unmount + graceful CSS fallback
   ════════════════════════════════════════════════════════════════════ */

const NOISE = /* glsl */ `
vec3 mod289(vec3 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x){ return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x){ return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v){
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
            i.z + vec4(0.0, i1.z, i2.z, 1.0))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0))
          + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

float fbm(vec3 p){
  float f = 0.0;
  float a = 0.5;
  for(int i = 0; i < 4; i++){
    f += a * snoise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return f;
}
`;

const VERTEX = /* glsl */ `
uniform float uTime;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vPos;
varying float vDisp;
${NOISE}
void main(){
  vec3 dir = normalize(position);
  float disp = fbm(dir * 1.6 + uTime * 0.12) * 0.3;
  vec3 displaced = position + normal * disp;
  vec4 mv = modelViewMatrix * vec4(displaced, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vViewDir = normalize(-mv.xyz);
  vPos = displaced;
  vDisp = disp;
  gl_Position = projectionMatrix * mv;
}
`;

const FRAGMENT = /* glsl */ `
uniform float uTime;
uniform vec3 uDeep;
uniform vec3 uEmber;
uniform vec3 uAmber;
uniform vec3 uHot;
varying vec3 vNormal;
varying vec3 vViewDir;
varying vec3 vPos;
varying float vDisp;
${NOISE}
void main(){
  vec3 N = normalize(vNormal);
  vec3 V = normalize(vViewDir);
  float fresnel = pow(1.0 - abs(dot(N, V)), 2.4);
  float surface = fbm(normalize(vPos) * 3.0 + uTime * 0.08);
  float heat = clamp(vDisp * 1.4 + surface * 0.6 + 0.2, 0.0, 1.0);

  vec3 col = mix(uDeep, uEmber, heat);
  col = mix(col, uAmber, clamp(heat * 1.5 - 0.45, 0.0, 1.0));
  col = mix(col, uHot, clamp(heat * 1.9 - 1.05, 0.0, 1.0) * smoothstep(0.55, 1.0, fresnel));
  col += uAmber * pow(fresnel, 2.0) * 1.5;
  col += uHot * pow(fresnel, 5.0) * 0.8;

  gl_FragColor = vec4(col, 1.0);
}
`;

const GLOW_VERTEX = /* glsl */ `
varying vec3 vNormal;
varying vec3 vViewDir;
void main(){
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  vNormal = normalize(normalMatrix * normal);
  vViewDir = normalize(-mv.xyz);
  gl_Position = projectionMatrix * mv;
}
`;

const GLOW_FRAGMENT = /* glsl */ `
uniform vec3 uEmber;
varying vec3 vNormal;
varying vec3 vViewDir;
void main(){
  float f = pow(1.0 - abs(dot(normalize(vNormal), normalize(vViewDir))), 1.8);
  gl_FragColor = vec4(uEmber * f, f * 0.85);
}
`;

function makeRadialTexture(size: number, stops: Array<[number, string]>) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  );
  for (const [offset, color] of stops) g.addColorStop(offset, color);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, size, size);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

const webglAvailable = () => {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
};

export default function PlasmaCore() {
  const holderRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);
  const failedRef = useRef(false);

  useEffect(() => {
    const holder = holderRef.current;
    if (!holder) return;
    if (failedRef.current) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let sphereGroup: THREE.Group | null = null;
    let coreSprite: THREE.Sprite | null = null;
    let halo: THREE.Sprite | null = null;
    let ring: THREE.Points | null = null;
    let glowMesh: THREE.Mesh | null = null;
    let shellMat: THREE.ShaderMaterial | null = null;
    let coreMat: THREE.ShaderMaterial | null = null;
    let paused = false;
    let visible = true;
    let destroyed = false;
    const timer = new THREE.Timer();
    let speed = 1;

    const start = () => {
      if (!renderer || paused) return;
      paused = false;
      renderer.setAnimationLoop(loop);
    };
    const stop = () => {
      if (!renderer) return;
      paused = true;
      renderer.setAnimationLoop(null);
    };

    const io = new IntersectionObserver(([entry]) => {
      const nowVisible = entry.isIntersecting;
      if (nowVisible === visible) return;
      visible = nowVisible;
      if (nowVisible) start();
      else stop();
    }, { threshold: 0.01 });

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (visible) start();
    };

    const onResize = () => {
      if (!renderer || !camera || !sphereGroup) return;
      const w = holder.clientWidth || 1;
      const h = holder.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
      const mobile = w < 640;
      sphereGroup.scale.setScalar(mobile ? 0.6 : 1);
      sphereGroup.position.set(mobile ? 0 : 0.5, mobile ? -0.35 : 0, 0);
      camera.position.set(0, 0, mobile ? 4.5 : 3.8);
    };

    const loop = () => {
      if (destroyed || !renderer || !scene || !camera || !sphereGroup) return;
      timer.update();
      const t = timer.getElapsed() * speed;

      // Static orientation — the object only tilts toward the pointer.
      // No autonomous rotation (a continuously spinning hero object reads
      // as amateur); the shader keeps the surface alive instead.
      if (finePointer) {
        mouse.currentX += (mouse.targetX - mouse.currentX) * 0.05;
        mouse.currentY += (mouse.targetY - mouse.currentY) * 0.05;
        sphereGroup.rotation.y = mouse.currentX * 0.35;
        sphereGroup.rotation.x = -mouse.currentY * 0.25;
      } else {
        sphereGroup.rotation.y = 0;
        sphereGroup.rotation.x = 0;
      }

      if (coreSprite) {
        const s = 1 + Math.sin(t * 1.4) * 0.03;
        coreSprite.scale.setScalar(s);
        (coreSprite.material as THREE.SpriteMaterial).opacity =
          0.62 + Math.sin(t * 1.4 + 0.4) * 0.12;
      }
      if (coreMat) coreMat.uniforms.uTime.value = t;
      // glow shell shader is time-static — no uTime uniform to update

      renderer.render(scene, camera);
    };

    const mouse = { targetX: 0, targetY: 0, currentX: 0, currentY: 0 };
    const onMouse = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const build = () => {
      try {
        if (!webglAvailable()) throw new Error("no-webgl");
        renderer = new THREE.WebGLRenderer({
          antialias: false,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        });
      } catch {
        failedRef.current = true;
        setFailed(true);
        return;
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
      renderer.setClearColor(0x000000, 0);
      const canvas = renderer.domElement;
      canvas.style.cssText =
        "position:absolute;inset:0;width:100%;height:100%;display:block;pointer-events:none;";
      canvas.setAttribute("aria-hidden", "true");
      holder.appendChild(canvas);

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);

      const geo = new THREE.IcosahedronGeometry(1, 5);

      coreMat = new THREE.ShaderMaterial({
        vertexShader: VERTEX,
        fragmentShader: FRAGMENT,
        uniforms: {
          uTime: { value: 0 },
          uDeep: { value: new THREE.Color("#0c0a08") },
          uEmber: { value: new THREE.Color("#ff3d00") },
          uAmber: { value: new THREE.Color("#ffb01f") },
          uHot: { value: new THREE.Color("#ffe0b8") },
        },
      });
      const core = new THREE.Mesh(geo, coreMat);

      shellMat = new THREE.ShaderMaterial({
        vertexShader: GLOW_VERTEX,
        fragmentShader: GLOW_FRAGMENT,
        uniforms: { uEmber: { value: new THREE.Color("#ff7a33") } },
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      glowMesh = new THREE.Mesh(geo, shellMat);
      glowMesh.scale.setScalar(1.06);

      sphereGroup = new THREE.Group();
      sphereGroup.add(core, glowMesh);
      scene.add(sphereGroup);

      // hot inner core sprite
      const coreTex = makeRadialTexture(128, [
        [0, "rgba(255,224,184,1)"],
        [0.22, "rgba(255,122,51,0.95)"],
        [0.5, "rgba(255,90,31,0.35)"],
        [1, "rgba(255,90,31,0)"],
      ]);
      coreSprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: coreTex,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          transparent: true,
        })
      );
      coreSprite.scale.setScalar(0.85);
      sphereGroup.add(coreSprite);

      // ambient halo
      const haloTex = makeRadialTexture(128, [
        [0, "rgba(255,176,31,0.28)"],
        [0.4, "rgba(255,90,31,0.12)"],
        [1, "rgba(255,90,31,0)"],
      ]);
      halo = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: haloTex,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          transparent: true,
          opacity: 0.6,
        })
      );
      halo.scale.setScalar(6.5);
      sphereGroup.add(halo);

      // particle ring
      const dotTex = makeRadialTexture(32, [
        [0, "rgba(255,244,232,1)"],
        [0.4, "rgba(255,176,31,0.6)"],
        [1, "rgba(255,90,31,0)"],
      ]);
      const count = 1500;
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count; i++) {
        const ang = Math.random() * Math.PI * 2;
        const r = 1.7 + Math.pow(Math.random(), 1.6) * 1.1;
        const tilt = (Math.random() - 0.5) * 0.7;
        pos[i * 3] = Math.cos(ang) * r;
        pos[i * 3 + 1] = Math.sin(ang) * r * 0.55 + tilt * 0.35;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 0.55;
      }
      const ringGeo = new THREE.BufferGeometry();
      ringGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      ring = new THREE.Points(
        ringGeo,
        new THREE.PointsMaterial({
          map: dotTex,
          size: 0.055,
          transparent: true,
          opacity: 0.8,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          sizeAttenuation: true,
        })
      );
      sphereGroup.add(ring);

      onResize();

      if (reduced) {
        // one static frame, no animation
        speed = 0;
        timer.reset();
        renderer.render(scene, camera);
        return;
      }

      if (finePointer) window.addEventListener("mousemove", onMouse, { passive: true });
      io.observe(holder);
      document.addEventListener("visibilitychange", onVisibility);
      window.addEventListener("resize", onResize);

      start();
    };

    // Defer heavy init until the browser is idle (after first paint).
    const schedule =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback ??
      ((cb: () => void) => window.setTimeout(cb, 120));
    const idleId = schedule(() => {
      if (destroyed) return;
      build();
    });

    return () => {
      destroyed = true;
      if (typeof idleId === "number") window.clearTimeout(idleId as number);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
      stop();
      if (renderer && scene) {
        scene.traverse((obj) => {
          if (obj instanceof THREE.Mesh || obj instanceof THREE.Points) {
            obj.geometry?.dispose();
            const mat = obj.material as THREE.Material | THREE.Material[];
            if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
            else mat?.dispose();
          }
        });
        if (coreSprite) (coreSprite.material as THREE.SpriteMaterial).map?.dispose();
        if (halo) (halo.material as THREE.SpriteMaterial).map?.dispose();
        if (ring) (ring.material as THREE.PointsMaterial).map?.dispose();
        timer.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      }
    };
  }, []);

  if (failed) {
    // CSS fallback orb — no WebGL, still on-brand
    return (
      <div
        ref={holderRef}
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="h-[52vmin] w-[52vmin] rounded-full bg-[radial-gradient(circle_at_38%_38%,#ffe0b8_0%,#ff7a33_22%,#ff3d00_48%,#2a1206_78%,transparent_100%)] blur-[2px]" />
      </div>
    );
  }

  return <div ref={holderRef} aria-hidden="true" className="absolute inset-0" />;
}
