import { useEffect, useRef } from 'react';

// Drifting "network" of nodes behind the page; the cursor links to and gently pulls nearby nodes.
const LINK_DIST = 130;     // max distance between two linked nodes
const CURSOR_DIST = 190;   // cursor reach
const CURSOR_PULL = 0.02;  // how strongly nodes drift toward the cursor

function readColors() {
  const css = getComputedStyle(document.documentElement);
  return {
    node: css.getPropertyValue('--net-rgb').trim() || '124, 58, 237',
    cursor: css.getPropertyValue('--net-cursor-rgb').trim() || '14, 116, 144',
  };
}

export default function NetworkBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = 0;
    let height = 0;
    let nodes = [];
    let colors = readColors();
    let frame = 0;
    const mouse = { x: 0, y: 0, active: false };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(110, Math.round((width * height) / 15000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 1.2,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CURSOR_DIST && dist > 1) {
            n.x += dx * CURSOR_PULL * (1 - dist / CURSOR_DIST);
            n.y += dy * CURSOR_PULL * (1 - dist / CURSOR_DIST);
          }
        }
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }

      // node-to-node links
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < LINK_DIST) {
            ctx.strokeStyle = `rgba(${colors.node}, ${0.22 * (1 - dist / LINK_DIST)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // cursor links
      if (mouse.active) {
        ctx.lineWidth = 1.2;
        for (const n of nodes) {
          const dist = Math.hypot(mouse.x - n.x, mouse.y - n.y);
          if (dist < CURSOR_DIST) {
            ctx.strokeStyle = `rgba(${colors.cursor}, ${0.55 * (1 - dist / CURSOR_DIST)})`;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(n.x, n.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = `rgba(${colors.cursor}, 0.8)`;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.fillStyle = `rgba(${colors.node}, 0.55)`;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      draw();
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => { mouse.active = false; };

    // Re-read colors when the light/dark theme changes
    const themeObserver = new MutationObserver(() => {
      colors = readColors();
      if (reducedMotion) draw();
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

    resize();
    window.addEventListener('resize', resize);

    if (reducedMotion) {
      draw();
    } else {
      window.addEventListener('pointermove', onMove, { passive: true });
      document.documentElement.addEventListener('pointerleave', onLeave);
      loop();
    }

    return () => {
      cancelAnimationFrame(frame);
      themeObserver.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      document.documentElement.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="network-canvas" aria-hidden="true" />;
}
