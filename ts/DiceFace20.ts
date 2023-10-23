import DiceBase from "./DiceBase.ts";


  export default class DiceFace20 extends DiceBase {
    protected drawGraphs() {
      const pasteRegionScale = 0.2;
      const pasteRegion = this.SIDE_LENGTH * pasteRegionScale;
      const pasteRegionPx = pasteRegion * this.mmToPxScale;

      const ANGLE60 = Math.PI * 60 / 180;
      const SIN60 = Math.sin(ANGLE60);
      const COS60 = Math.cos(ANGLE60);

      const OneX = this.SIDE_LENGTH * COS60;
      const OneY = this.SIDE_LENGTH * SIN60;

      const pasteRegionShortBiasX = pasteRegion * COS60;
      const pasteRegionShortBiasY = pasteRegion * SIN60;

      const pasteRegionLongBias = this.SIDE_LENGTH * (1 - pasteRegionScale);
      const pasteRegionLongBiasX = pasteRegionLongBias * COS60;
      const pasteRegionLongBiasY = pasteRegionLongBias * SIN60;

      const TwoY = OneY * 2;
      const ThreeY = OneY * 3;

      let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
      let FIVE_SIDE = this.SIDE_LENGTH * 5;
      x1 = pasteRegionLongBiasX + pasteRegion, x2 = x1 + FIVE_SIDE;
      y1 = OneY, y2 = y1;
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        x1,
        x2,
        y1,
        y2,
        this.viewBox,
      );

      x1 = x1 - OneX, x2 = x1 + FIVE_SIDE;
      y1 += OneY, y2 = y1;
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        x1,
        x2,
        y1,
        y2,
        this.viewBox,
      );

      x1 -= OneX, x2 = x1 - OneX;
      y1 = OneY, y2 = TwoY;
      for (let i = 0; i < 5; ++i) {
        x1 += this.SIDE_LENGTH, x2 += this.SIDE_LENGTH;
        this.appendLine(
          this.svg,
          this.INNER_LINE_STYLE,
          x1,
          x2,
          y1,
          y2,
          this.viewBox,
        );
      }

      x1 = pasteRegionShortBiasX, x2 = x1 + OneX;
      y1 = TwoY, y2 = ThreeY;
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        x1,
        x2,
        y1,
        y2,
        this.viewBox,
      );

      x1 += OneX, x2 += OneX * 2;
      y1 = OneY, y2 = y1 + TwoY;
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        x1,
        x2,
        y1,
        y2,
        this.viewBox,
      );

      x1 -= OneX;
      y1 = 0;
      for (let i = 0; i < 3; ++i) {
        x1 += this.SIDE_LENGTH, x2 += this.SIDE_LENGTH;
        this.appendLine(
          this.svg,
          this.INNER_LINE_STYLE,
          x1,
          x2,
          y1,
          y2,
          this.viewBox,
        );
      }

      x1 += this.SIDE_LENGTH, x2 += OneX;
      y2 = TwoY;
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        x1,
        x2,
        y1,
        y2,
        this.viewBox,
      );

      x1 += this.SIDE_LENGTH, x2 += OneX;
      y2 = OneY;
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        x1,
        x2,
        y1,
        y2,
        this.viewBox,
      );

      const OneXPx = OneX * this.mmToPxScale;
      const OneYPx = OneY * this.mmToPxScale;
      const pasteRegionShortBiasXPx = pasteRegionShortBiasX * this.mmToPxScale;
      const pasteRegionShortBiasYPx = pasteRegionShortBiasY * this.mmToPxScale;

      const pasteRegionLongBiasXPx = pasteRegionLongBiasX * this.mmToPxScale;
      const pasteRegionLongBiasYPx = pasteRegionLongBiasY * this.mmToPxScale;

      const path = document.createElementNS(this.SVG_NS,"path") as unknown as SVGPathElement;
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "#000000");
      path.setAttribute(
        "d",
        `M 0, ${OneYPx + pasteRegionLongBiasYPx} `
          .concat(
            `l ${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
            `h ${pasteRegionPx}`,
            `l ${OneXPx}, -${OneYPx}`,
            `h ${pasteRegionPx}`,
            `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
            `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
            `l ${OneXPx}, -${OneYPx}`,
            `h ${pasteRegionPx}`,
            `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
            `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
            `l ${OneXPx}, -${OneYPx}`,
            `h ${pasteRegionPx}`,
            `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
            `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
            `l ${OneXPx}, -${OneYPx}`,
            `h ${pasteRegionPx}`,
            `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
            `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
            `l ${OneXPx}, -${OneYPx}`,
            `h ${pasteRegionPx}`,
            `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
            `l -${
              pasteRegionShortBiasXPx +
              OneXPx * 2
            }, ${pasteRegionShortBiasYPx + OneYPx * 2}`,
            `h -${pasteRegionPx}`,
            `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
            `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
            `l -${OneXPx}, ${OneYPx}`,
            `h -${pasteRegionPx}`,
            `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
            `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
            `l -${OneXPx}, ${OneYPx}`,
            `h -${pasteRegionPx}`,
            `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
            `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
            `l -${OneXPx}, ${OneYPx}`,
            `h -${pasteRegionPx}`,
            `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
            `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
            `l -${OneXPx}, ${OneYPx}`,
            `h -${pasteRegionPx}`,
            `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
            `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
            " z",
          ),
      );
      this.svg.appendChild(path);

      this.viewBox.right = this.SIDE_LENGTH * 5 + OneX + pasteRegion;
      this.viewBox.bottom = OneY * 3;
    }

    protected setTextsInfo() {
      // 20 text elements.
      this.setSvgTextInfo(
        this.infos[0],
        this.SIDE_LENGTH * 27.5 / 25,
        this.SIDE_LENGTH * 15.0 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[1],
        this.SIDE_LENGTH * 52.5 / 25,
        this.SIDE_LENGTH * 15.0 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[2],
        this.SIDE_LENGTH * 77.5 / 25,
        this.SIDE_LENGTH * 15.0 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[3],
        this.SIDE_LENGTH * 102.5 / 25,
        this.SIDE_LENGTH * 15.0 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[4],
        this.SIDE_LENGTH * 127.5 / 25,
        this.SIDE_LENGTH * 15.0 / 25,
        0,
      );

      this.setSvgTextInfo(
        this.infos[5],
        this.SIDE_LENGTH * 15.0 / 25,
        this.SIDE_LENGTH * 36.65 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[6],
        this.SIDE_LENGTH * 40.0 / 25,
        this.SIDE_LENGTH * 36.65 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[7],
        this.SIDE_LENGTH * 65.0 / 25,
        this.SIDE_LENGTH * 36.65 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[8],
        this.SIDE_LENGTH * 90.0 / 25,
        this.SIDE_LENGTH * 36.65 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[9],
        this.SIDE_LENGTH * 115.0 / 25,
        this.SIDE_LENGTH * 36.65 / 25,
        0,
      );

      this.setSvgTextInfo(
        this.infos[10],
        this.SIDE_LENGTH * 115.0 / 25,
        this.SIDE_LENGTH * 38.75 / 25,
        180,
      );
      this.setSvgTextInfo(
        this.infos[11],
        this.SIDE_LENGTH * 90.0 / 25,
        this.SIDE_LENGTH * 38.75 / 25,
        180,
      );
      this.setSvgTextInfo(
        this.infos[12],
        this.SIDE_LENGTH * 65.0 / 25,
        this.SIDE_LENGTH * 38.75 / 25,
        180,
      );
      this.setSvgTextInfo(
        this.infos[13],
        this.SIDE_LENGTH * 40.0 / 25,
        this.SIDE_LENGTH * 38.75 / 25,
        180,
      );
      this.setSvgTextInfo(
        this.infos[14],
        this.SIDE_LENGTH * 15.0 / 25,
        this.SIDE_LENGTH * 38.75 / 25,
        180,
      );

      this.setSvgTextInfo(
        this.infos[15],
        this.SIDE_LENGTH * 127.5 / 25,
        this.SIDE_LENGTH * 16.25 / 25,
        180,
      );
      this.setSvgTextInfo(
        this.infos[16],
        this.SIDE_LENGTH * 102.5 / 25,
        this.SIDE_LENGTH * 16.25 / 25,
        180,
      );
      this.setSvgTextInfo(
        this.infos[17],
        this.SIDE_LENGTH * 77.5 / 25,
        this.SIDE_LENGTH * 16.25 / 25,
        180,
      );
      this.setSvgTextInfo(
        this.infos[18],
        this.SIDE_LENGTH * 52.5 / 25,
        this.SIDE_LENGTH * 16.25 / 25,
        180,
      );
      this.setSvgTextInfo(
        this.infos[19],
        this.SIDE_LENGTH * 27.5 / 25,
        this.SIDE_LENGTH * 16.25 / 25,
        180,
      );
    }
  }
