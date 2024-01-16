import DiceBase from './DiceBase.ts';
import { SVG_NS } from '../node_modules/@dishanqian/h5_base/types/index.d.ts';

export default class DiceFace20 extends DiceBase {
	protected drawGraphs() {
		this.fixTextStyle(0.45);

		// const pasteRegionScale = 0.2;
		const { SIDE_LENGTH } = this;
		const pasteRegionScale = SIDE_LENGTH < 3 ? 1 : (SIDE_LENGTH <= 10 ? 0.5 : 0.25);

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

		(this as unknown as { pasteRegionShortBiasX: number }).pasteRegionShortBiasX =
			pasteRegionShortBiasX;

		let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
		const FIVE_SIDE = this.SIDE_LENGTH * 5;
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

		const path = document.createElementNS(SVG_NS, 'path') as unknown as SVGPathElement;
		path.setAttribute('fill', 'none');
		path.setAttribute('stroke', '#000000');
		path.setAttribute(
			'd',
			`M 0, ${OneYPx + pasteRegionLongBiasYPx} `
				.concat(
					` l ${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
					` h ${pasteRegionPx}`,
					` l ${OneXPx}, -${OneYPx}`,
					` h ${pasteRegionPx}`,
					` l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
					` l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
					` l ${OneXPx}, -${OneYPx}`,
					` h ${pasteRegionPx}`,
					` l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
					` l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
					` l ${OneXPx}, -${OneYPx}`,
					` h ${pasteRegionPx}`,
					` l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
					` l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
					` l ${OneXPx}, -${OneYPx}`,
					` h ${pasteRegionPx}`,
					` l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
					` l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`,
					` l ${OneXPx}, -${OneYPx}`,
					` h ${pasteRegionPx}`,
					` l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`,
					` l -${
						pasteRegionShortBiasXPx +
						OneXPx * 2
					}, ${pasteRegionShortBiasYPx + OneYPx * 2}`,
					` h -${pasteRegionPx}`,
					` l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
					` l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
					` l -${OneXPx}, ${OneYPx}`,
					` h -${pasteRegionPx}`,
					` l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
					` l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
					` l -${OneXPx}, ${OneYPx}`,
					` h -${pasteRegionPx}`,
					` l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
					` l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
					` l -${OneXPx}, ${OneYPx}`,
					` h -${pasteRegionPx}`,
					` l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
					` l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
					` l -${OneXPx}, ${OneYPx}`,
					` h -${pasteRegionPx}`,
					` l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`,
					` l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`,
					' z',
				),
		);
		this.svg.appendChild(path);

		this.viewBox.right = this.SIDE_LENGTH * 5 + OneX + pasteRegion;
		this.viewBox.bottom = OneY * 3;
	}

	protected setTextsInfo() {
		// 20 text elements: 1, 2, 3, 4, 5, 6, 7, 8, 9, ..., 20
		// console.log(this.infos);

		const { infos, SIDE_LENGTH, setSvgTextInfo } = this;
		const pasteRegionShortBiasX =
			(this as unknown as { pasteRegionShortBiasX: number }).pasteRegionShortBiasX;

		const HALF_SIDE_LENGTH = SIDE_LENGTH * 0.5;
		const X1 = pasteRegionShortBiasX + HALF_SIDE_LENGTH;
		const X2 = X1 + HALF_SIDE_LENGTH;
		const X3 = X2 + HALF_SIDE_LENGTH;
		const X4 = X3 + HALF_SIDE_LENGTH;
		const X5 = X4 + HALF_SIDE_LENGTH;
		const X6 = X5 + HALF_SIDE_LENGTH;
		const X7 = X6 + HALF_SIDE_LENGTH;
		const X8 = X7 + HALF_SIDE_LENGTH;
		const X9 = X8 + HALF_SIDE_LENGTH;
		const X10 = X9 + HALF_SIDE_LENGTH;

		const SIN60 = Math.sin(Math.PI * 60 / 180);
		const Y1 = SIDE_LENGTH * SIN60 * 0.70;
		const Y2 = SIDE_LENGTH * SIN60 * 1.30;
		const Y3 = SIDE_LENGTH * SIN60 * 1.70;
		const Y4 = SIDE_LENGTH * SIN60 * 2.30;

		[
			// 1-4
			{ x: X2, y: Y1, rotate: 0 },
			{ x: X10, y: Y2, rotate: 180 },
			{ x: X6, y: Y2, rotate: 180 },
			{ x: X5, y: Y4, rotate: 180 },

			// 5-8
			{ x: X4, y: Y1, rotate: 0 },
			{ x: X8, y: Y2, rotate: 180 },
			{ x: X4, y: Y2, rotate: 180 },
			{ x: X3, y: Y4, rotate: 180 },

			// 9-12
			{ x: X6, y: Y1, rotate: 0 },
			{ x: X2, y: Y2, rotate: 180 },
			{ x: X7, y: Y3, rotate: 0 },
			{ x: X1, y: Y4, rotate: 180 },

			// 13-16
			{ x: X8, y: Y1, rotate: 0 },
			{ x: X9, y: Y3, rotate: 0 },
			{ x: X3, y: Y3, rotate: 0 },
			{ x: X9, y: Y4, rotate: 180 },

			// 17-20
			{ x: X10, y: Y1, rotate: 0 },
			{ x: X1, y: Y3, rotate: 0 },
			{ x: X5, y: Y3, rotate: 0 },
			{ x: X7, y: Y4, rotate: 180 },
		].map(({ x, y, rotate }, n) => {
			setSvgTextInfo(infos[n], x, y, rotate);
		});
	}
}
