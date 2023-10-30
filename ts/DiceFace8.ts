import DiceBase from './DiceBase.ts';

export default class DiceFace8 extends DiceBase {
	protected drawGraphs() {
		if (this.TEXT_STYLE.length === 0) {
			this.TEXT_STYLE = `font-family:"Times New Roman", "Kaiti";font-size:${
				this.SIDE_LENGTH * 0.45
			}mm;`;
		}

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

		// const EXTNED_SCALE = 0.15;
		const { SIDE_LENGTH } = this;
		const EXTNED_SCALE = SIDE_LENGTH < 3 ? 1 : (SIDE_LENGTH <= 10 ? 0.5 : 0.15);
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

		x1 = x2, x2 += this.SIDE_LENGTH * 0.5 - OFFSET_X, y1 = y2, y2 = HEIGHT_OF_ONE - OFFSET_Y;
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

		x1 = x2, x2 -= OFFSET_X + this.SIDE_LENGTH * 0.5, y1 = y2, y2 -= OFFSET_Y + HEIGHT_OF_ONE;
		this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);

		this.viewBox.right = this.SIDE_LENGTH * 3.5 + EXTNED_LENGTH * Math.sin(45 / 180 * Math.PI);
		this.viewBox.bottom = BOTTOM;
	}

	protected setTextsInfo() {
		// 8 text elements: 1, 2, 3, 4, 5, 6, 7, 8
		// console.log(this.infos);

		const { infos, SIDE_LENGTH, setSvgTextInfo } = this;

		const HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
		const X1 = HALF_SIDE_LENGTH;
		const X2 = X1 + HALF_SIDE_LENGTH;
		const X3 = X2 + HALF_SIDE_LENGTH;
		const X4 = X3 + HALF_SIDE_LENGTH;
		const X5 = X4 + HALF_SIDE_LENGTH;
		const X6 = X5 + HALF_SIDE_LENGTH;

		const SIN60 = Math.sin(Math.PI * 60 / 180);
		const Y1 = SIDE_LENGTH * SIN60 * 0.70;
		const Y2 = SIDE_LENGTH * SIN60 * 1.30;
		const Y3 = SIDE_LENGTH * SIN60 * 1.70;
		const Y4 = SIDE_LENGTH * SIN60 * 2.30;

		[
			{ x: X3, y: Y1, rotate: 0 },

			{ x: X6, y: Y3, rotate: 0 },
			{ x: X4, y: Y3, rotate: 0 },
			{ x: X2, y: Y3, rotate: 0 },

			{ x: X5, y: Y2, rotate: 180 },
			{ x: X1, y: Y2, rotate: 180 },
			{ x: X3, y: Y2, rotate: 180 },

			{ x: X4, y: Y4, rotate: 180 },
		].map(({ x, y, rotate }, n) => {
			setSvgTextInfo(infos[n], x, y, rotate);
		});
	}
}
