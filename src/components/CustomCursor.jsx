import { useEffect, useRef } from "react";

/**
 * Branded round globe cursor.
 * - Follows the pointer with light smoothing.
 * - An outer ring uses mix-blend-mode: difference so it inverts/contrasts
 *   against whatever background it is over (adapts to background colour).
 * - A gloss "shine" sweeps across the globe at a few-second interval.
 * Only enabled on devices with a fine, hovering pointer (desktops).
 */
export default function CustomCursor() {
  const orbRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    const orb = orbRef.current;
    if (!orb) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor");

    // target = real pointer position, pos = smoothed orb position
    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let raf = 0;
    let visible = false;

    const render = () => {
      pos.x += (target.x - pos.x) * 0.22;
      pos.y += (target.y - pos.y) * 0.22;
      orb.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(render);
    };
    raf = requestAnimationFrame(render);

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        orb.classList.add("is-visible");
      }
      const interactive = e.target.closest?.(
        "a, button, [role='button'], input, textarea, select, label, summary"
      );
      orb.classList.toggle("is-active", !!interactive);
    };
    const onLeave = () => {
      visible = false;
      orb.classList.remove("is-visible");
    };
    const onDown = () => orb.classList.add("is-down");
    const onUp = () => orb.classList.remove("is-down");

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      root.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <div className="cursor-orb" ref={orbRef} aria-hidden="true">
      <span className="cursor-orb__ring" />
      <span className="cursor-orb__globe" />
      <span className="cursor-orb__shine" />
    </div>
  );
}
