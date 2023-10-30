import DiceBase from './DiceBase.ts';

export default class DiceFace4 extends DiceBase {
	protected drawGraphs() {
		if (this.TEXT_STYLE.length === 0) {
			this.TEXT_STYLE = `font-family:"Times New Roman", "Kaiti";font-size:${
				this.SIDE_LENGTH * 0.25
			}mm;`;
		}

		const HEIGHT_OF_ONE = this.SIDE_LENGTH * 1.732 * 0.5;
		const HEIGHT_OF_TWO = HEIGHT_OF_ONE * 2;

		let x1 = 0, x2 = 0, y1 = 0, y2 = 0;

		// 内部横线
		x1 = this.SIDE_LENGTH * 0.5, x2 = x1 + this.SIDE_LENGTH, y1 = HEIGHT_OF_ONE, y2 = y1;
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);
		x1 = 0, x2 = x1 + this.SIDE_LENGTH, y1 += HEIGHT_OF_ONE, y2 = y1;
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		// 内部左下斜线
		x1 = this.SIDE_LENGTH, x2 = this.SIDE_LENGTH * 0.5, y1 = 0, y2 = HEIGHT_OF_ONE;
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);
		x1 += this.SIDE_LENGTH * 0.5,
			x2 += this.SIDE_LENGTH * 0.5,
			y1 += HEIGHT_OF_ONE,
			y2 += HEIGHT_OF_ONE;
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		// 内部右下斜线
		x1 = this.SIDE_LENGTH * 0.5, x2 = this.SIDE_LENGTH, y1 = HEIGHT_OF_ONE, y2 = HEIGHT_OF_TWO;
		this.appendLine(
			this.svg,
			this.INNER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);
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

		const { SIDE_LENGTH } = this;
		const EXTNED_SCALE = SIDE_LENGTH < 3 ? 1 : (SIDE_LENGTH <= 10 ? 0.5 : 0.15);
		const EXTNED_LENGTH = EXTNED_SCALE * this.SIDE_LENGTH;
		const OFFSET_X = EXTNED_LENGTH * 0.5;
		const OFFSET_Y = EXTNED_LENGTH * Math.cos(30 / 180 * Math.PI);

		// 外部线
		x1 = 0, x2 = this.SIDE_LENGTH * 0.5, y1 = HEIGHT_OF_TWO, y2 = HEIGHT_OF_ONE;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 -= OFFSET_Y;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		x1 = x2, x2 = this.SIDE_LENGTH * 1 - EXTNED_LENGTH, y1 = y2, y2 = 0;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 += 0;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		x1 = x2, x2 += this.SIDE_LENGTH * 0.5, y1 = y2, y2 += HEIGHT_OF_ONE;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 += 0;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		x1 = x2, x2 = this.SIDE_LENGTH * 2 + OFFSET_X, y1 = y2, y2 = HEIGHT_OF_TWO - OFFSET_Y;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		x1 = x2, x2 -= this.SIDE_LENGTH, y1 = y2, y2 -= 0;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		x1 = x2, x2 = OFFSET_X, y1 = y2, y2 -= 0;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);

		x1 = x2, x2 = 0, y1 = y2, y2 = HEIGHT_OF_TWO;
		this.appendLine(
			this.svg,
			this.OUTER_LINE_STYLE,
			x1,
			x2,
			y1,
			y2,
			this.viewBox,
		);
	}

	protected setTextsInfo() {
		// 12 text elements: 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4
		// console.log(this.infos);

		const SIN60 = Math.sin(Math.PI * 60 / 180);
		const COS60 = Math.cos(Math.PI * 60 / 180);
		const HALF_COS60_AND_OFFSET = COS60 * 0.75;
		const MINI_OFFSET_SCALE_OF_Y = COS60 * 0.075;

		const { infos, SIDE_LENGTH, setSvgTextInfo } = this;

		const X1 = SIDE_LENGTH * HALF_COS60_AND_OFFSET;
		const X2 = SIDE_LENGTH * 0.5;
		const X3 = SIDE_LENGTH * (1 - HALF_COS60_AND_OFFSET);
		const X4 = SIDE_LENGTH * (0.5 + HALF_COS60_AND_OFFSET);
		const X5 = SIDE_LENGTH * 1;
		const X6 = SIDE_LENGTH * (1.5 - HALF_COS60_AND_OFFSET);
		const X7 = SIDE_LENGTH * (1 + HALF_COS60_AND_OFFSET);
		const X8 = SIDE_LENGTH * 1.5;
		const X9 = SIDE_LENGTH * (2 - HALF_COS60_AND_OFFSET);

		const Y1 = SIDE_LENGTH * (SIN60 * 0.5 + MINI_OFFSET_SCALE_OF_Y);
		const Y2 = SIDE_LENGTH * SIN60 * 0.85;
		const Y3 = SIDE_LENGTH * SIN60 * 1.15;
		const Y4 = SIDE_LENGTH * (SIN60 * 1.5 - MINI_OFFSET_SCALE_OF_Y);
		const Y5 = SIDE_LENGTH * (SIN60 * 1.5 + MINI_OFFSET_SCALE_OF_Y);
		const Y6 = SIDE_LENGTH * SIN60 * 1.85;

		[
			{ x: X5, y: Y2, rotate: 0 },
			{ x: X3, y: Y5, rotate: -120 },
			{ x: X7, y: Y5, rotate: 120 },

			{ x: X4, y: Y1, rotate: 120 },
			{ x: X4, y: Y4, rotate: 60 },
			{ x: X8, y: Y6, rotate: 0 },

			{ x: X6, y: Y1, rotate: -120 },
			{ x: X6, y: Y4, rotate: -60 },
			{ x: X2, y: Y6, rotate: 0 },

			{ x: X5, y: Y3, rotate: -180 },
			{ x: X1, y: Y5, rotate: 120 },
			{ x: X9, y: Y5, rotate: -120 },
		].map(({ x, y, rotate }, n) => {
			setSvgTextInfo(infos[n], x, y, rotate);
		});
	}
}
