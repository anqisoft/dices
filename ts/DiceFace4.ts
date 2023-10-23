import DiceBase from './DiceBase.ts';

export default class DiceFace4 extends DiceBase {
	protected drawGraphs() {
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

		const EXTNED_SCALE = 0.15;
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
		// 12 text elements.

		// this.setSvgTextInfo(infos[0], SIDE_LENGTH * 25.0 / 25, SIDE_LENGTH * 18.0 / 25, 0);
		// this.setSvgTextInfo(infos[1], SIDE_LENGTH * 21.0 / 25, SIDE_LENGTH * 9.5 / 25, -120);
		// this.setSvgTextInfo(infos[2], SIDE_LENGTH * 31.0 / 25, SIDE_LENGTH * 11.5 / 25, 120);
		// this.setSvgTextInfo(infos[3], SIDE_LENGTH * 37.5 / 25, SIDE_LENGTH * 40.0 / 25, 0);
		// this.setSvgTextInfo(infos[4], SIDE_LENGTH * 19.0 / 25, SIDE_LENGTH * 33.0 / 25, 120);
		// this.setSvgTextInfo(infos[5], SIDE_LENGTH * 30.0 / 25, SIDE_LENGTH * 31.5 / 25, 60);
		// this.setSvgTextInfo(infos[6], SIDE_LENGTH * 12.5 / 25, SIDE_LENGTH * 40.0 / 25, 0);
		// this.setSvgTextInfo(infos[7], SIDE_LENGTH * 32.5 / 25, SIDE_LENGTH * 32.0 / 25, -120);
		// this.setSvgTextInfo(infos[8], SIDE_LENGTH * 20.0 / 25, SIDE_LENGTH * 30.0 / 25, -60);
		// this.setSvgTextInfo(infos[9], SIDE_LENGTH * 27.0 / 25, SIDE_LENGTH * 22.0 / 25, 180);
		// this.setSvgTextInfo(infos[10], SIDE_LENGTH * 9.5 / 25, SIDE_LENGTH * 31.5 / 25, -120);
		// this.setSvgTextInfo(infos[11], SIDE_LENGTH * 42.0 / 25, SIDE_LENGTH * 33.0 / 25, 120);

		if (this.CONTENTS.join(',') === 'ˉ,ˊ,ˇ,ˋ') {
			this.setSvgTextInfo(
				this.infos[0],
				this.SIDE_LENGTH * 24.5 / 25,
				this.SIDE_LENGTH * 22.5 / 25,
				0,
			);
			this.setSvgTextInfo(
				this.infos[1],
				this.SIDE_LENGTH * 20.0 / 25,
				this.SIDE_LENGTH * 13.5 / 25,
				-120,
			);
			this.setSvgTextInfo(
				this.infos[2],
				this.SIDE_LENGTH * 30.0 / 25,
				this.SIDE_LENGTH * 15.0 / 25,
				120,
			);

			this.setSvgTextInfo(
				this.infos[3],
				this.SIDE_LENGTH * 37.5 / 25,
				this.SIDE_LENGTH * 44.0 / 25,
				0,
			);
			this.setSvgTextInfo(
				this.infos[4],
				this.SIDE_LENGTH * 18.5 / 25,
				this.SIDE_LENGTH * 36.0 / 25,
				120,
			);
			this.setSvgTextInfo(
				this.infos[5],
				this.SIDE_LENGTH * 30.0 / 25,
				this.SIDE_LENGTH * 34.0 / 25,
				60,
			);

			this.setSvgTextInfo(
				this.infos[6],
				this.SIDE_LENGTH * 12.5 / 25,
				this.SIDE_LENGTH * 44.0 / 25,
				0,
			);
			this.setSvgTextInfo(
				this.infos[7],
				this.SIDE_LENGTH * 32.0 / 25,
				this.SIDE_LENGTH * 35.5 / 25,
				-120,
			);
			this.setSvgTextInfo(
				this.infos[8],
				this.SIDE_LENGTH * 20.0 / 25,
				this.SIDE_LENGTH * 33.0 / 25,
				-60,
			);

			this.setSvgTextInfo(
				this.infos[9],
				this.SIDE_LENGTH * 27.5 / 25,
				this.SIDE_LENGTH * 25.0 / 25,
				180,
			);
			this.setSvgTextInfo(
				this.infos[10],
				this.SIDE_LENGTH * 8.0 / 25,
				this.SIDE_LENGTH * 35.0 / 25,
				-120,
			);
			this.setSvgTextInfo(
				this.infos[11],
				this.SIDE_LENGTH * 42.0 / 25,
				this.SIDE_LENGTH * 36.0 / 25,
				120,
			);
		} else {
			this.setSvgTextInfo(
				this.infos[0],
				this.SIDE_LENGTH * 24.5 / 25,
				this.SIDE_LENGTH * 19.0 / 25,
				0,
			);
			this.setSvgTextInfo(
				this.infos[1],
				this.SIDE_LENGTH * 21.0 / 25,
				this.SIDE_LENGTH * 10.5 / 25,
				-120,
			);
			this.setSvgTextInfo(
				this.infos[2],
				this.SIDE_LENGTH * 30.0 / 25,
				this.SIDE_LENGTH * 12.5 / 25,
				120,
			);

			this.setSvgTextInfo(
				this.infos[3],
				this.SIDE_LENGTH * 37.5 / 25,
				this.SIDE_LENGTH * 41.0 / 25,
				0,
			);
			this.setSvgTextInfo(
				this.infos[4],
				this.SIDE_LENGTH * 18.5 / 25,
				this.SIDE_LENGTH * 34.0 / 25,
				120,
			);
			this.setSvgTextInfo(
				this.infos[5],
				this.SIDE_LENGTH * 30.0 / 25,
				this.SIDE_LENGTH * 32.5 / 25,
				60,
			);

			this.setSvgTextInfo(
				this.infos[6],
				this.SIDE_LENGTH * 12.5 / 25,
				this.SIDE_LENGTH * 41.0 / 25,
				0,
			);
			this.setSvgTextInfo(
				this.infos[7],
				this.SIDE_LENGTH * 32.5 / 25,
				this.SIDE_LENGTH * 32.5 / 25,
				-120,
			);
			this.setSvgTextInfo(
				this.infos[8],
				this.SIDE_LENGTH * 19.5 / 25,
				this.SIDE_LENGTH * 31.0 / 25,
				-60,
			);

			this.setSvgTextInfo(
				this.infos[9],
				this.SIDE_LENGTH * 26.5 / 25,
				this.SIDE_LENGTH * 23.5 / 25,
				180,
			);
			this.setSvgTextInfo(
				this.infos[10],
				this.SIDE_LENGTH * 8.5 / 25,
				this.SIDE_LENGTH * 32.5 / 25,
				-120,
			);
			this.setSvgTextInfo(
				this.infos[11],
				this.SIDE_LENGTH * 41.0 / 25,
				this.SIDE_LENGTH * 34.0 / 25,
				120,
			);
		}
	}
}
