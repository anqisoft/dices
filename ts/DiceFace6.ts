import DiceBase from './DiceBase.ts';

export default class DiceFace6 extends DiceBase {
	protected drawGraphs() {
		const SIDE_LENGTH_PX = this.SIDE_LENGTH * this.mmToPxScale;

		const duckTongueScale = 0.5;
		const duckTongueHeightPx = SIDE_LENGTH_PX * duckTongueScale;
		const duckTongueHeight = this.SIDE_LENGTH * duckTongueScale;

		const pasteRegionScale = 0.75;
		const pasteRegionHeightPx = SIDE_LENGTH_PX * pasteRegionScale;
		const pasteRegionHeight = this.SIDE_LENGTH * pasteRegionScale;

		const offsetScale = 0.1;
		const offsetX = SIDE_LENGTH_PX * offsetScale;
		const pasteRegionWidth = SIDE_LENGTH_PX - offsetX * 2;
		console.log(this.SIDE_LENGTH, this.mmToPxScale, SIDE_LENGTH_PX);

		const path = document.createElementNS(
			this.SVG_NS,
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

		let X1 = 0,
			X2 = this.SIDE_LENGTH * 1,
			X3 = this.SIDE_LENGTH * 2,
			X4 = this.SIDE_LENGTH * 3,
			X5 = this.SIDE_LENGTH * 4,
			X6 = this.SIDE_LENGTH * 5;
		let Y1 = 0,
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
		// // font-size: 5mm;
		// this.setSvgTextInfo(infos[0], SIDE_LENGTH * 61.0 / 25, SIDE_LENGTH * 75.0 / 25, 180);
		// this.setSvgTextInfo(infos[1], SIDE_LENGTH * 75.0 / 25, SIDE_LENGTH * 113.5 / 25, 90);
		// this.setSvgTextInfo(infos[2], SIDE_LENGTH * 36.0 / 25, SIDE_LENGTH * 52.5 / 25, 0);

		// this.setSvgTextInfo(infos[3], SIDE_LENGTH * 61.0 / 25, SIDE_LENGTH * 52.0 / 25, 180);
		// this.setSvgTextInfo(infos[4], SIDE_LENGTH * 72.5 / 25, SIDE_LENGTH * 40.0 / 25, -90);
		// this.setSvgTextInfo(infos[5], SIDE_LENGTH * 36.0 / 25, SIDE_LENGTH * 77.5 / 25, 0);

		this.setSvgTextInfo(
			this.infos[0],
			this.SIDE_LENGTH * 37.5 / 25,
			this.SIDE_LENGTH * 77.0 / 25,
			180,
		);
		this.setSvgTextInfo(
			this.infos[1],
			this.SIDE_LENGTH * 62.5 / 25,
			this.SIDE_LENGTH * 100.0 / 25,
			90,
		);
		this.setSvgTextInfo(
			this.infos[2],
			this.SIDE_LENGTH * 37.5 / 25,
			this.SIDE_LENGTH * 52.0 / 25,
			0,
		);
		this.setSvgTextInfo(
			this.infos[3],
			this.SIDE_LENGTH * 37.5 / 25,
			this.SIDE_LENGTH * 52.0 / 25,
			180,
		);
		this.setSvgTextInfo(
			this.infos[4],
			this.SIDE_LENGTH * 62.5 / 25,
			this.SIDE_LENGTH * 52.5 / 25,
			-90,
		);
		this.setSvgTextInfo(
			this.infos[5],
			this.SIDE_LENGTH * 37.5 / 25,
			this.SIDE_LENGTH * 77.5 / 25,
			0,
		);
	}
}
