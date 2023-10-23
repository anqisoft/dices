import DiceBase from "./DiceBase.ts";


  export default class DiceFace8 extends DiceBase {
    protected drawGraphs() {
      const HEIGHT_OF_ONE = this.SIDE_LENGTH * 1.732 * 0.5;
      const HEIGHT_OF_TWO = HEIGHT_OF_ONE * 2;
      const BOTTOM = HEIGHT_OF_ONE * 3;

      // 内部横线
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        0,
        this.SIDE_LENGTH * 2,
        HEIGHT_OF_ONE,
        HEIGHT_OF_ONE,
        null,
      );
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        this.SIDE_LENGTH * 0.5,
        this.SIDE_LENGTH * 2.5,
        HEIGHT_OF_TWO,
        HEIGHT_OF_TWO,
        null,
      );

      // 内部左下斜线
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        this.SIDE_LENGTH * 1,
        this.SIDE_LENGTH * 0.5,
        HEIGHT_OF_ONE,
        HEIGHT_OF_TWO,
        null,
      );
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        this.SIDE_LENGTH * 2,
        this.SIDE_LENGTH * 1.5,
        HEIGHT_OF_ONE,
        HEIGHT_OF_TWO,
        null,
      );
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        this.SIDE_LENGTH * 3,
        this.SIDE_LENGTH * 2,
        HEIGHT_OF_ONE,
        BOTTOM,
        null,
      );

      // 内部右下斜线
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        this.SIDE_LENGTH * 1,
        this.SIDE_LENGTH * 1.5,
        HEIGHT_OF_ONE,
        HEIGHT_OF_TWO,
        null,
      );
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        this.SIDE_LENGTH * 1.5,
        this.SIDE_LENGTH * 2.5,
        0,
        HEIGHT_OF_TWO,
        null,
      );
      this.appendLine(
        this.svg,
        this.INNER_LINE_STYLE,
        this.SIDE_LENGTH * 3,
        this.SIDE_LENGTH * 3.5,
        HEIGHT_OF_ONE,
        HEIGHT_OF_TWO,
        null,
      );

      const EXTNED_SCALE = 0.15;
      const EXTNED_LENGTH = EXTNED_SCALE * this.SIDE_LENGTH;
      const OFFSET_X = EXTNED_LENGTH * 0.5;
      const OFFSET_Y = EXTNED_LENGTH * Math.cos(30 / 180 * Math.PI);

      let x1 = 0, x2 = 0, y1 = 0, y2 = 0;

      // 外部线
      x1 = 0, x2 = OFFSET_X, y1 = HEIGHT_OF_ONE, y2 = HEIGHT_OF_ONE - OFFSET_Y;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 = this.SIDE_LENGTH - OFFSET_X, y1 = y2;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 = this.SIDE_LENGTH, y1 = y2, y2 = HEIGHT_OF_ONE;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 += this.SIDE_LENGTH * 0.5, y1 = y2, y2 = 0;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 = 0;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2,
        x2 += this.SIDE_LENGTH * 0.5 - OFFSET_X,
        y1 = y2,
        y2 = HEIGHT_OF_ONE - OFFSET_Y;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 += this.SIDE_LENGTH + EXTNED_LENGTH, y1 = y2, y2 += 0;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2,
        x2 += this.SIDE_LENGTH * 0.5 - EXTNED_LENGTH + OFFSET_X,
        y1 = y2,
        y2 += HEIGHT_OF_ONE - OFFSET_Y;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 -= this.SIDE_LENGTH, y1 = y2, y2 += 0;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 += OFFSET_X, y1 = y2, y2 += OFFSET_Y;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2,
        x2 += EXTNED_LENGTH - this.SIDE_LENGTH * 0.5 - OFFSET_X,
        y1 = y2,
        y2 += HEIGHT_OF_ONE - OFFSET_Y;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 -= EXTNED_LENGTH, y1 = y2, y2 += 0;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 -= this.SIDE_LENGTH * 0.5, y1 = y2, y2 -= HEIGHT_OF_ONE;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2, x2 -= this.SIDE_LENGTH - OFFSET_X * 2, y1 = y2, y2 += 0;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      x1 = x2,
        x2 -= OFFSET_X + this.SIDE_LENGTH * 0.5,
        y1 = y2,
        y2 -= OFFSET_Y + HEIGHT_OF_ONE;
      this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

      this.viewBox.right = this.SIDE_LENGTH * 3.5 + EXTNED_LENGTH;
      this.viewBox.bottom = BOTTOM;
    }

    protected setTextsInfo() {
      // 8 text elements.
      // this.setSvgTextInfo(infos[0], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 15.0 / 25, 0);
      // this.setSvgTextInfo(infos[1], SIDE_LENGTH * 78.0 / 25, SIDE_LENGTH * 38.0 / 25, 180);
      // this.setSvgTextInfo(infos[2], SIDE_LENGTH * 25.5 / 25, SIDE_LENGTH * 38.0 / 25, 0);
      // this.setSvgTextInfo(infos[3], SIDE_LENGTH * 53.0 / 25, SIDE_LENGTH * 38.0 / 25, 180);
      // this.setSvgTextInfo(infos[4], SIDE_LENGTH * 50.0 / 25, SIDE_LENGTH * 38.0 / 25, 0);
      // this.setSvgTextInfo(infos[5], SIDE_LENGTH * 28.5 / 25, SIDE_LENGTH * 38.0 / 25, 180);
      // this.setSvgTextInfo(infos[6], SIDE_LENGTH * 75.0 / 25, SIDE_LENGTH * 39.0 / 25, 0);
      // this.setSvgTextInfo(infos[7], SIDE_LENGTH * 41.5 / 25, SIDE_LENGTH * 17.5 / 25, 180);

      this.setSvgTextInfo(
        this.infos[0],
        this.SIDE_LENGTH * 37.5 / 25,
        this.SIDE_LENGTH * 15.0 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[5],
        this.SIDE_LENGTH * 78.0 / 25,
        this.SIDE_LENGTH * 38.0 / 25,
        180,
      );
      this.setSvgTextInfo(
        this.infos[3],
        this.SIDE_LENGTH * 25.5 / 25,
        this.SIDE_LENGTH * 38.0 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[6],
        this.SIDE_LENGTH * 53.0 / 25,
        this.SIDE_LENGTH * 38.0 / 25,
        180,
      );

      this.setSvgTextInfo(
        this.infos[2],
        this.SIDE_LENGTH * 50.0 / 25,
        this.SIDE_LENGTH * 38.0 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[4],
        this.SIDE_LENGTH * 28.5 / 25,
        this.SIDE_LENGTH * 38.0 / 25,
        180,
      );
      this.setSvgTextInfo(
        this.infos[1],
        this.SIDE_LENGTH * 75.0 / 25,
        this.SIDE_LENGTH * 39.0 / 25,
        0,
      );
      this.setSvgTextInfo(
        this.infos[7],
        this.SIDE_LENGTH * 41.5 / 25,
        this.SIDE_LENGTH * 17.5 / 25,
        180,
      );
    }
  }
