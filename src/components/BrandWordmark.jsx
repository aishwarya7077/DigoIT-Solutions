// Shared text wordmark for "Digoit GLOBAL" — reused by the navbar and footer
// so the typography (font, weight, colors, gold accent) stays identical in both.
export default function BrandWordmark() {
  return (
    <span className="brand-wm">
      <span className="brand-wm__name">
        D<span className="brand-wm__i">&#305;</span>goit
      </span>
      <span className="brand-wm__sub">GLOBAL</span>
    </span>
  );
}
