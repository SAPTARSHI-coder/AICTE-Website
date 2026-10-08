"use client";

import React, { useEffect, useRef } from "react";

interface CircuitNode {
  x: number;
  y: number;
  radius: number;
  type: "via" | "pad" | "chip";
  connected: number[];
}

interface CircuitTrace {
  from: number;
  to: number;
  // Waypoint for 45-degree corner bend
  bendX: number;
  bendY: number;
  color: "copper" | "blue" | "cyan" | "gold";
  width: number;
}

interface Pulse {
  traceIdx: number;
  progress: number;
  speed: number;
  direction: 1 | -1;
  color: "cyan" | "gold" | "blue";
  size: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let dpr = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    let mouseX = -9999;
    let mouseY = -9999;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let tiltX = 0;
    let tiltY = 0;

    let lastScrollY = window.scrollY;
    let scrollSpeed = 0;

    const setupDimensions = () => {
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };

    setupDimensions();

    const isDark = () => document.documentElement.classList.contains("dark");

    // ─── Generate EEE Circuit Board Layout ────────────────────────────────────
    const nodes: CircuitNode[] = [];
    const traces: CircuitTrace[] = [];
    const pulses: Pulse[] = [];

    const generateCircuit = () => {
      nodes.length = 0;
      traces.length = 0;
      pulses.length = 0;

      const cols = Math.max(6, Math.floor(width / 140));
      const rows = Math.max(5, Math.floor(height / 120));
      const spacingX = width / cols;
      const spacingY = height / rows;

      // 1. Generate grid nodes with jitter (PCB circuit pad layout)
      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const jitterX = ((c * 17 + r * 31) % 35) - 17;
          const jitterY = ((c * 23 + r * 19) % 35) - 17;
          const x = c * spacingX + jitterX;
          const y = r * spacingY + jitterY;

          const isChip = (r === 2 && c === 2) || (r === Math.floor(rows * 0.7) && c === Math.floor(cols * 0.75));
          nodes.push({
            x,
            y,
            radius: isChip ? 14 : Math.random() > 0.4 ? 3.5 : 2.5,
            type: isChip ? "chip" : Math.random() > 0.5 ? "via" : "pad",
            connected: [],
          });
        }
      }

      // 2. Connect nodes with authentic 45-degree angled PCB circuit traces
      const colors: ("copper" | "blue" | "cyan" | "gold")[] = [
        "copper",
        "cyan",
        "gold",
        "blue",
      ];

      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        // Connect to nearest neighbor nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Only connect if reasonable distance and not too crowded
          if (dist > 40 && dist < spacingX * 1.6 && n1.connected.length < 3 && n2.connected.length < 3) {
            // Authentic 45-degree routing bend calculation
            let bendX = n1.x;
            let bendY = n1.y;

            if (Math.abs(dx) > Math.abs(dy)) {
              // Horizontal major, 45 degree turn
              const offset = Math.abs(dy);
              bendX = n1.x + (dx > 0 ? dx - offset : dx + offset);
              bendY = n1.y;
            } else {
              // Vertical major, 45 degree turn
              const offset = Math.abs(dx);
              bendX = n1.x;
              bendY = n1.y + (dy > 0 ? dy - offset : dy + offset);
            }

            traces.push({
              from: i,
              to: j,
              bendX,
              bendY,
              color: colors[(i + j) % colors.length],
              width: n1.type === "chip" || n2.type === "chip" ? 1.8 : 1.2,
            });

            n1.connected.push(j);
            n2.connected.push(i);
          }
        }
      }

      // 3. Spawn active logic pulses traveling on traces
      const pulseCount = Math.min(traces.length, Math.floor(traces.length * 0.75));
      for (let p = 0; p < pulseCount; p++) {
        pulses.push({
          traceIdx: Math.floor(Math.random() * traces.length),
          progress: Math.random(),
          speed: Math.random() * 0.006 + 0.003,
          direction: Math.random() > 0.5 ? 1 : -1,
          color: Math.random() > 0.5 ? "cyan" : "gold",
          size: Math.random() * 2 + 2.5,
        });
      }
    };

    generateCircuit();

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      targetTiltX = (e.clientX / width - 0.5) * 8;
      targetTiltY = (e.clientY / height - 0.5) * 6;
    };

    const handleScroll = () => {
      const curY = window.scrollY;
      scrollSpeed = (curY - lastScrollY) * 0.0004;
      lastScrollY = curY;
    };

    const handleResize = () => {
      setupDimensions();
      generateCircuit();
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.015;
      scrollSpeed *= 0.92;

      tiltX += (targetTiltX - tiltX) * 0.05;
      tiltY += (targetTiltY - tiltY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const dark = isDark();

      // ─── 1. Draw Wafer Ring & Coordinate Crosshairs (Semiconductor Fab feel) ───
      ctx.save();
      ctx.translate(tiltX, tiltY);

      const crosshairColor = dark ? "rgba(56, 189, 248, 0.05)" : "rgba(37, 99, 235, 0.035)";
      const crosshairSize = 5;
      for (let x = 70; x < width; x += 140) {
        for (let y = 60; y < height; y += 120) {
          ctx.strokeStyle = crosshairColor;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(x - crosshairSize, y);
          ctx.lineTo(x + crosshairSize, y);
          ctx.moveTo(x, y - crosshairSize);
          ctx.lineTo(x, y + crosshairSize);
          ctx.stroke();
        }
      }

      // ─── 2. Draw Circuit Traces with 45-degree EDA Routing ───────────────────
      for (let i = 0; i < traces.length; i++) {
        const trace = traces[i];
        const n1 = nodes[trace.from];
        const n2 = nodes[trace.to];
        if (!n1 || !n2) continue;

        // Proximity to mouse probe
        const midX = (n1.x + n2.x) / 2;
        const midY = (n1.y + n2.y) / 2;
        const dMouse = Math.sqrt((midX - mouseX) ** 2 + (midY - mouseY) ** 2);
        const isHovered = dMouse < 140;
        const hoverBoost = isHovered ? (1 - dMouse / 140) * 0.45 : 0;

        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(trace.bendX, trace.bendY);
        ctx.lineTo(n2.x, n2.y);

        if (dark) {
          // Dark Mode: Glowing Luminescent PCB Traces (Gentle & Atmospheric)
          if (trace.color === "cyan") {
            ctx.strokeStyle = isHovered
              ? `rgba(0, 240, 255, ${0.65 + hoverBoost})`
              : `rgba(56, 189, 248, ${0.18 + hoverBoost})`;
          } else if (trace.color === "gold") {
            ctx.strokeStyle = isHovered
              ? `rgba(251, 191, 36, ${0.65 + hoverBoost})`
              : `rgba(245, 158, 11, ${0.16 + hoverBoost})`;
          } else {
            ctx.strokeStyle = isHovered
              ? `rgba(96, 165, 250, ${0.6 + hoverBoost})`
              : `rgba(59, 130, 246, ${0.14 + hoverBoost})`;
          }
          ctx.lineWidth = trace.width + (isHovered ? 0.6 : 0);
          ctx.stroke();
        } else {
          // Light Mode: Authentic Copper & Blueprint Cobalt Traces (Softened & Non-distracting)
          if (trace.color === "copper" || trace.color === "gold") {
            // Realistic Copper PCB Trace in light mode
            ctx.strokeStyle = isHovered
              ? `rgba(180, 83, 9, ${0.5 + hoverBoost})`
              : `rgba(217, 119, 6, ${0.18 + hoverBoost})`;
          } else {
            // Precision Blue Logic Trace in light mode
            ctx.strokeStyle = isHovered
              ? `rgba(29, 78, 216, ${0.5 + hoverBoost})`
              : `rgba(37, 99, 235, ${0.16 + hoverBoost})`;
          }
          ctx.lineWidth = trace.width + (isHovered ? 0.5 : 0);
          ctx.stroke();
        }
      }

      // ─── 3. Draw Active Logic Pulses / Current Signals ───────────────────────
      for (let i = 0; i < pulses.length; i++) {
        const p = pulses[i];
        p.progress += (p.speed + Math.abs(scrollSpeed)) * p.direction;

        if (p.progress >= 1) {
          p.progress = 0;
          p.traceIdx = Math.floor(Math.random() * traces.length);
        } else if (p.progress <= 0) {
          p.progress = 1;
          p.traceIdx = Math.floor(Math.random() * traces.length);
        }

        const trace = traces[p.traceIdx];
        if (!trace) continue;
        const n1 = nodes[trace.from];
        const n2 = nodes[trace.to];
        if (!n1 || !n2) continue;

        // Calculate position along piecewise 2-segment path: (n1 -> bend) and (bend -> n2)
        const d1 = Math.sqrt((trace.bendX - n1.x) ** 2 + (trace.bendY - n1.y) ** 2);
        const d2 = Math.sqrt((n2.x - trace.bendX) ** 2 + (n2.y - trace.bendY) ** 2);
        const total = d1 + d2;
        let px = n1.x;
        let py = n1.y;

        if (total > 0) {
          const t1 = d1 / total;
          if (p.progress < t1) {
            const localT = p.progress / t1;
            px = n1.x + (trace.bendX - n1.x) * localT;
            py = n1.y + (trace.bendY - n1.y) * localT;
          } else {
            const localT = (p.progress - t1) / (1 - t1);
            px = trace.bendX + (n2.x - trace.bendX) * localT;
            py = trace.bendY + (n2.y - trace.bendY) * localT;
          }
        }

        // Draw glowing signal pulse bead
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);

        if (dark) {
          if (p.color === "gold") {
            ctx.fillStyle = "rgba(251, 191, 36, 0.95)";
            ctx.shadowColor = "#fbbf24";
          } else {
            ctx.fillStyle = "rgba(0, 240, 255, 0.95)";
            ctx.shadowColor = "#00f0ff";
          }
          ctx.shadowBlur = 8;
        } else {
          if (p.color === "gold") {
            ctx.fillStyle = "rgba(217, 119, 6, 0.95)"; // Copper signal
          } else {
            ctx.fillStyle = "rgba(29, 78, 216, 0.95)"; // Logic High blue
          }
          ctx.shadowBlur = 3;
          ctx.shadowColor = "rgba(37, 99, 235, 0.4)";
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // ─── 4. Draw Via Pads, Solder Rings & Microchip Footprints ───────────────
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        if (n.type === "chip") {
          // Draw Microchip QFP / BGA Package outline
          const chipSize = 36;
          ctx.save();
          ctx.translate(n.x, n.y);

          // Package body
          ctx.beginPath();
          ctx.roundRect(-chipSize / 2, -chipSize / 2, chipSize, chipSize, 4);
          if (dark) {
            ctx.fillStyle = "rgba(10, 18, 36, 0.75)";
            ctx.strokeStyle = "rgba(56, 189, 248, 0.5)";
          } else {
            ctx.fillStyle = "rgba(241, 245, 249, 0.85)";
            ctx.strokeStyle = "rgba(37, 99, 235, 0.5)";
          }
          ctx.lineWidth = 1.5;
          ctx.fill();
          ctx.stroke();

          // Gold corner index dot (Pin 1 marker)
          ctx.beginPath();
          ctx.arc(-chipSize / 2 + 5, -chipSize / 2 + 5, 2, 0, Math.PI * 2);
          ctx.fillStyle = dark ? "#fbbf24" : "#d97706";
          ctx.fill();

          // Silicon die central core
          ctx.strokeRect(-6, -6, 12, 12);

          ctx.restore();
        } else {
          // Draw Standard Via / Solder Pad (Concentric Ring + Core)
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);

          if (dark) {
            // Outer ring
            ctx.strokeStyle = "rgba(56, 189, 248, 0.6)";
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Inner hole
            ctx.beginPath();
            ctx.arc(n.x, n.y, Math.max(1, n.radius * 0.45), 0, Math.PI * 2);
            ctx.fillStyle = "#060913";
            ctx.fill();
          } else {
            // Light Mode: Copper solder ring with golden tint
            ctx.strokeStyle = "rgba(217, 119, 6, 0.65)";
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Inner hole
            ctx.beginPath();
            ctx.arc(n.x, n.y, Math.max(1, n.radius * 0.45), 0, Math.PI * 2);
            ctx.fillStyle = "rgba(219, 234, 254, 0.9)";
            ctx.fill();
          }
        }
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Interactive EEE Circuit & Silicon Wafer Canvas with soft depth-of-field blur */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block filter blur-[1.5px] scale-[1.01]"
      />

      {/* Frosted diffusion layer to ensure text remains crisp & readable */}
      <div className="absolute inset-0 backdrop-blur-[0.5px] pointer-events-none" />

      {/* Dark Mode: Deep Luminescent Silicon Nebula Glow */}
      <div
        className="hidden dark:block absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1200px 750px at 50% 12%, rgba(14, 116, 144, 0.18), transparent 75%), radial-gradient(ellipse 950px 650px at 85% 85%, rgba(30, 58, 138, 0.22), transparent 70%), radial-gradient(circle 600px at 15% 75%, rgba(245, 158, 11, 0.08), transparent 65%)",
        }}
      />

      {/* Light Mode: Technical Semiconductor Blueprint & Silicon Substrate (No longer basic flat white!) */}
      <div
        className="dark:hidden absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1100px 700px at 85% 15%, rgba(219, 234, 254, 0.55), transparent 70%), radial-gradient(ellipse 1000px 650px at 15% 85%, rgba(254, 243, 199, 0.45), transparent 65%), radial-gradient(circle 600px at 50% 50%, rgba(224, 242, 254, 0.35), transparent 60%)",
        }}
      />

      {/* High-Tech Semiconductor Wafer Grid Texture */}
      <div className="absolute inset-0 wafer-grid opacity-15 dark:opacity-15 pointer-events-none" />
    </div>
  );
}
