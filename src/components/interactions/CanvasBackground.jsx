"use client";

import { useEffect, useRef } from "react";

/*
  Interactive dot-grid background — ports the inline p5 sketch from index.html.
  Navy field rgb(1,6,122); dots brighten within 64px of a moving cursor.
  p5 is browser-only, so it's dynamically imported inside the effect.
*/
export default function CanvasBackground() {
  const hostRef = useRef(null);

  useEffect(() => {
    let instance;
    let cancelled = false;

    import("p5").then(({ default: p5 }) => {
      if (cancelled || !hostRef.current) return;

      const dotSize = 3;
      const spacing = dotSize * 8;
      const areaOfEffect = 64;

      const sketch = (p) => {
        let dots = [];
        let mouseIsMoving = false;
        let moveTimer;

        const buildDots = () => {
          dots = [];
          for (let i = 0; i < p.width; i += spacing) {
            for (let j = 0; j < p.height; j += spacing) {
              dots.push({ x: i + spacing / 2, y: j + spacing / 2, t: 30 });
            }
          }
        };

        p.setup = () => {
          p.createCanvas(p.windowWidth, p.windowHeight);
          buildDots();
          p.noStroke();
        };

        p.draw = () => {
          p.background(1, 6, 122);
          for (const dot of dots) {
            const distance = p.dist(p.mouseX, p.mouseY, dot.x, dot.y);
            if (mouseIsMoving && distance < areaOfEffect) {
              dot.t = 200;
            } else {
              dot.t = Math.max(40, dot.t - 10);
            }
            p.fill(200, dot.t);
            p.ellipse(dot.x, dot.y, dotSize);
          }
        };

        p.mouseMoved = () => {
          mouseIsMoving = true;
          clearTimeout(moveTimer);
          moveTimer = setTimeout(() => {
            mouseIsMoving = false;
          }, 100);
        };

        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
          buildDots();
        };
      };

      instance = new p5(sketch, hostRef.current);
    });

    return () => {
      cancelled = true;
      instance?.remove();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-[100dvh] w-[100dvw] bg-blue-100"
    />
  );
}
