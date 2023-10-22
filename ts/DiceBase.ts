// deno-lint-ignore-file no-namespace prefer-namespace-keyword
import dom from "./dom.ts";
import svgHelper from "./svgHelper.ts";

const { SVG_NS, SVG_XLINKNS } = dom;
type SvgTextInfo = svgHelper.SvgTextInfo;
type RotateType = svgHelper.RotateType;
type ViewBoxType = svgHelper.ViewBoxType;

module edu.sonya.cc {
  export abstract class DiceBase {
    protected readonly SVG_NS: string = SVG_NS;
    protected readonly SVG_XLINKNS: string = SVG_XLINKNS;

    protected svg: SVGElement;
    protected SIDE_LENGTH: number;
    protected INNER_LINE_STYLE: string;
    protected OUTER_LINE_STYLE: string;
    protected viewBox: {
      left: number;
      right: number;
      top: number;
      bottom: number;
    };
    protected OPTIONS: object;
    protected mmToPxScale: number;

    protected infos: {
      content: any;
      x: number;
      y: number;
      rotate: number | "auto" | "auto-reverse";
    }[];

    protected CONTENTS: any[];

    constructor(
      svg: SVGElement,
      SIDE_LENGTH: number,
      INNER_LINE_STYLE: string,
      OUTER_LINE_STYLE: string,
      viewBox: { left: number; right: number; top: number; bottom: number },
      OPTIONS: object,
      mmToPxScale: number,
      infos: {
        content: any;
        x: number;
        y: number;
        rotate: number | "auto" | "auto-reverse";
      }[],
      CONTENTS: any[],
    ) {
      this.svg = svg;
      this.SIDE_LENGTH = SIDE_LENGTH;
      this.INNER_LINE_STYLE = INNER_LINE_STYLE;
      this.OUTER_LINE_STYLE = OUTER_LINE_STYLE;
      this.viewBox = viewBox;
      this.OPTIONS = OPTIONS;
      this.mmToPxScale = mmToPxScale;

      this.infos = infos;

      this.CONTENTS = CONTENTS;
    }

    public draw() {
      this.drawGraphs();
      this.drawTexts();
    }

    protected setSvgTextInfo(
      info: SvgTextInfo,
      x: number,
      y: number,
      rotate: RotateType,
    ) {
      info.x = x;
      info.y = y;
      info.rotate = rotate;
    }

    protected appendLine(
      svg: SVGElement,
      STYLE: string,
      x1: number,
      x2: number,
      y1: number,
      y2: number,
      viewBox: ViewBoxType | null,
    ) {
      const line = document.createElementNS(SVG_NS, "line") as SVGLineElement;
      line.setAttribute("x1", `${x1}mm`);
      line.setAttribute("x2", `${x2}mm`);
      line.setAttribute("y1", `${y1}mm`);
      line.setAttribute("y2", `${y2}mm`);

      if (viewBox) {
        viewBox.left = Math.min(viewBox.left, x1, x2);
        viewBox.right = Math.max(viewBox.right, x1, x2);
        viewBox.top = Math.min(viewBox.top, y1, y2);
        viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
      }

      line.setAttribute("style", STYLE);
      svg.appendChild(line);
    }

    protected appendCircle(
      svg: SVGElement,
      STYLE: string,
      cx: number,
      cy: number,
      radius: number,
      viewBox: ViewBoxType | null,
    ) {
      const circle = document.createElementNS(
        SVG_NS,
        "circle",
      ) as SVGCircleElement;
      circle.setAttribute("cx", `${cx}mm`);
      circle.setAttribute("cy", `${cy}mm`);
      circle.setAttribute("r", `${radius}mm`);
      circle.setAttribute("fill", "#ffffff");

      if (viewBox) {
        viewBox.left = Math.min(viewBox.left, cx - radius);
        viewBox.right = Math.max(viewBox.right, cx + radius);
        viewBox.top = Math.min(viewBox.top, cy - radius);
        viewBox.bottom = Math.max(viewBox.bottom, cy + radius);
      }

      circle.setAttribute("style", STYLE);
      svg.appendChild(circle);
    }

    protected appendTspan(
      text: SVGTextElement,
      STYLE: string,
      CHAR: string,
      dx: number,
      dy: number,
      rotate: RotateType,
    ) {
      // https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan
      const tspan = document.createElementNS(
        SVG_NS,
        "tspan",
      ) as SVGTSpanElement;
      tspan.setAttribute("dx", `${dx}mm`);
      tspan.setAttribute("dy", `${dy}mm`);
      tspan.setAttribute("rotate", rotate.toString());
      tspan.setAttribute(
        "style",
        STYLE.concat(
          "dominant-baseline:middle;text-anchor:middle;",
          CHAR === "6" || CHAR === "9" ? "text-decoration:underline;" : "",
          CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : "",
        ),
      );

      tspan.innerHTML = CHAR;
      text.appendChild(tspan);
    }

    protected getSinByAngle(angle: number) {
      return Math.sin(angle * Math.PI / 180);
    }
    protected getCosByAngle(angle: number) {
      return Math.cos(angle * Math.PI / 180);
    }

    // protected fixContent(content)  { return content.toString().replace(/([69])/gi, '<font style="text-decoration:underline;">$1</font>'); }

    protected abstract drawGraphs(): void;
    protected abstract drawTexts(): void;
  }
}

export default edu.sonya.cc.DiceBase;
