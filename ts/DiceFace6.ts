import DiceBase from './DiceBase.ts';
import { SVG_NS } from './svgHelper.ts';

export default class DiceFace6 extends DiceBase {
	protected drawGraphs() {
		this.fixTextStyle(0.45);

		const SIDE_LENGTH_PX = this.SIDE_LENGTH * this.mmToPxScale;

		const duckTongueScale = 0.5;
		const duckTongueHeightPx = SIDE_LENGTH_PX * duckTongueScale;
		const duckTongueHeight = this.SIDE_LENGTH * duckTongueScale;
		(this as unknown as { duckTongueScale: number }).duckTongueScale = duckTongueScale;

		// const pasteRegionScale = 0.75;
		const { SIDE_LENGTH } = this;
		const pasteRegionScale = SIDE_LENGTH < 3 ? 1 : (SIDE_LENGTH <= 10 ? 0.9 : 0.75);

		const pasteRegionHeightPx = SIDE_LENGTH_PX * pasteRegionScale;
		const pasteRegionHeight = this.SIDE_LENGTH * pasteRegionScale;

		const offsetScale = 0.1;
		const offsetX = SIDE_LENGTH_PX * offsetScale;
		const pasteRegionWidth = SIDE_LENGTH_PX - offsetX * 2;
		console.log(this.SIDE_LENGTH, this.mmToPxScale, SIDE_LENGTH_PX);

		const path = document.createElementNS(
			SVG_NS,
			'path',
		) as unknown as SVGPathElement;
		path.setAttribute('fill', 'none');
		path.setAttribute('stroke', '#000000');
		path.setAttribute(
			'd',
			`M 0, ${duckTongueHeightPx + SIDE_LENGTH_PX} `
				.concat(
					`h ${SIDE_LENGTH_PX * 2} `,
					`l ${offsetX}, -${pasteRegionHeightPx} `,
					`h ${pasteRegionWidth} `,
					`l ${offsetX}, ${pasteRegionHeightPx} `,
					`v -${SIDE_LENGTH_PX} `,
					`l ${offsetX}, -${duckTongueHeightPx} `,
					`h ${pasteRegionWidth} `,
					`l ${offsetX}, ${duckTongueHeightPx} `,
					`v ${SIDE_LENGTH_PX} `,
					`l ${offsetX}, -${pasteRegionHeightPx} `,
					`h ${pasteRegionWidth} `,
					`l ${offsetX}, ${pasteRegionHeightPx} `,
					// `h ${SIDE_LENGTH_PX} `,
					`v ${SIDE_LENGTH_PX} `,
					`h -${SIDE_LENGTH_PX * 2} `,
					`l -${offsetX}, ${pasteRegionHeightPx} `,
					`h -${pasteRegionWidth} `,
					`l -${offsetX}, -${pasteRegionHeightPx} `,
					`v ${SIDE_LENGTH_PX} `,
					`l -${offsetX}, ${duckTongueHeightPx} `,
					`h -${pasteRegionWidth} `,
					`l -${offsetX}, -${duckTongueHeightPx} `,
					`v -${SIDE_LENGTH_PX} `,
					`l -${offsetX}, ${pasteRegionHeightPx} `,
					`h -${pasteRegionWidth} `,
					`l -${offsetX}, -${pasteRegionHeightPx} `,
					' z',
				),
		);
		this.svg.appendChild(path);

		const X1 = 0,
			X2 = this.SIDE_LENGTH * 1,
			X3 = this.SIDE_LENGTH * 2,
			X4 = this.SIDE_LENGTH * 3,
			X5 = this.SIDE_LENGTH * 4,
			X6 = this.SIDE_LENGTH * 5;
		const Y1 = 0,
			Y2 = duckTongueHeight,
			Y4 = Y2 + this.SIDE_LENGTH,
			Y5 = Y4 + this.SIDE_LENGTH,
			Y7 = Y5 + this.SIDE_LENGTH,
			Y8 = Y7 + duckTongueHeight,
			Y3 = Y4 - pasteRegionHeight,
			Y6 = Y5 + pasteRegionHeight;
		// 内部线
		// this.appendLine(svg, INNER_LINE_STYLE, X3, X4, Y2, Y2, null);
		// this.appendLine(svg, INNER_LINE_STYLE, X2, X5, Y4, Y4, null);
		// this.appendLine(svg, INNER_LINE_STYLE, X1, X4, Y5, Y5, null);
		// this.appendLine(svg, INNER_LINE_STYLE, X2, X3, Y7, Y7, null);

		// this.appendLine(svg, INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
		// this.appendLine(svg, INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
		// this.appendLine(svg, INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
		// this.appendLine(svg, INNER_LINE_STYLE, X5, X5, Y4, Y5, null);

		this.appendLine(this.svg, this.INNER_LINE_STYLE, X4, X5, Y2, Y2, null);
		this.appendLine(this.svg, this.INNER_LINE_STYLE, X3, X6, Y4, Y4, null);
		this.appendLine(this.svg, this.INNER_LINE_STYLE, X1, X4, Y5, Y5, null);
		this.appendLine(this.svg, this.INNER_LINE_STYLE, X2, X3, Y7, Y7, null);

		this.appendLine(this.svg, this.INNER_LINE_STYLE, X2, X2, Y4, Y5, null);
		this.appendLine(this.svg, this.INNER_LINE_STYLE, X3, X3, Y4, Y5, null);
		this.appendLine(this.svg, this.INNER_LINE_STYLE, X4, X4, Y4, Y5, null);
		this.appendLine(this.svg, this.INNER_LINE_STYLE, X5, X5, Y4, Y5, null);

		this.viewBox.left = 0;
		this.viewBox.top = 0;
		this.viewBox.right = this.SIDE_LENGTH * 5;
		this.viewBox.bottom = this.SIDE_LENGTH * 3 +
			this.SIDE_LENGTH * duckTongueScale * 2;
	}

	protected setTextsInfo() {
		// 6 text elements: 1, 2, 3, 4, 5, 6
		// console.log(this.infos);

		const { infos, SIDE_LENGTH, setSvgTextInfo } = this;
		const { duckTongueScale } = this as unknown as { duckTongueScale: number };

		const X1 = SIDE_LENGTH * 0.5;
		const X2 = X1 + SIDE_LENGTH;
		const X3 = X2 + SIDE_LENGTH;
		const X4 = X3 + SIDE_LENGTH;

		const Y1 = SIDE_LENGTH * (duckTongueScale + 0.5);
		const Y2 = Y1 + SIDE_LENGTH;
		const Y3 = Y2 + SIDE_LENGTH;

		[
			{ x: X4, y: Y1, rotate: 180 },

			{ x: X1, y: Y2, rotate: 90 },
			{ x: X2, y: Y2, rotate: 0 },
			{ x: X4, y: Y2, rotate: 180 },
			{ x: X3, y: Y2, rotate: -90 },

			{ x: X2, y: Y3, rotate: 0 },
		].map(({ x, y, rotate }, n) => {
			setSvgTextInfo(infos[n], x, y, rotate);
		});
	}
}
