export function appendText(
  svg: SVGElement,
  STYLE: string,
  content: (I18nable | string),
  x: number,
  y: number,
  rotate: RotateType,
  viewBox: ViewBoxType | null,
) {
  const g = document.createElementNS(SVG_NS, "g") as SVGGElement;
  // g.setAttribute('x', `${x}mm`);
  // g.setAttribute('y', `${y}mm`);
  // g.setAttribute('style', 'display:flex;justify-content:center;align-items:center;overflow:hidden;');
  if (rotate) {
    g.setAttribute(
      "style",
      `transform: rotate(${rotate}deg);transform-origin: 50% 50%;`,
    );
  }

  svg.appendChild(g);

  const text = document.createElementNS(SVG_NS, "text") as SVGTextElement;
  text.setAttribute("x", `${x}mm`);
  text.setAttribute("y", `${y}mm`);
  text.setAttribute(
    "style",
    "dominant-baseline:middle;text-anchor:middle;",
  );
  // text.setAttribute('dx', '0');
  // text.setAttribute('dy', '0');
  // text.setAttribute('rotate', rotate.toString());

  if (CONTENT.indexOf("<") > -1) {
    text.innerHTML = CONTENT;
  } else {
    CONTENT.split("").forEach((char, index) => {
      SvgHelper.appendTspan(text, "", char, "0", "0");
    });
  }

  g.appendChild(text);

  if (viewBox) {
    // left/top/right/bottom/width/height
    const clientRects = text.getClientRects();
    const { left: x1, right: x2, top: y1, bottom: y2 } = (clientRects.length
      ? clientRects.item(0)
      : text.getBoundingClientRect()) as DOMRect;
    viewBox.left = Math.min(viewBox.left, x1, x2);
    viewBox.right = Math.max(viewBox.right, x1, x2);
    viewBox.top = Math.min(viewBox.top, y1, y2);
    viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
  }

  text.setAttribute("style", STYLE);
}