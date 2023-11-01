import { I18nable } from './dom.ts';
import { RotateType, SvgHelper, SvgTextInfo, ViewBoxType } from './svgHelper.ts';

export default abstract class DiceBase {
	// protected readonly SVG_NS: string = SVG_NS;
	// protected readonly SVG_XLINKNS: string = SVG_XLINKNS;

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
		content: I18nable | string;
		x: number;
		y: number;
		rotate: number | 'auto' | 'auto-reverse';
	}[];

	protected CONTENTS: (I18nable | string)[];
	protected PASTE_WIDTH: number;
	protected TEXT_STYLE: string;

	constructor(
		svg: SVGElement,
		SIDE_LENGTH: number,
		INNER_LINE_STYLE: string,
		OUTER_LINE_STYLE: string,
		viewBox: { left: number; right: number; top: number; bottom: number },
		OPTIONS: object,
		mmToPxScale: number,
		infos: {
			content: I18nable | string;
			x: number;
			y: number;
			rotate: number | 'auto' | 'auto-reverse';
		}[],
		CONTENTS: (I18nable | string)[],
		PASTE_WIDTH: number = 0,
		TEXT_STYLE: string = '',
	) {
		if (OUTER_LINE_STYLE.length === 0) OUTER_LINE_STYLE = 'stroke:#555;stroke-width:0.2mm;';
		if (INNER_LINE_STYLE.length === 0) {
			INNER_LINE_STYLE = 'stroke:#888;stroke-width:0.1mm;stroke-dasharray:3 2;';
		}

		this.svg = svg;
		this.SIDE_LENGTH = SIDE_LENGTH;
		this.INNER_LINE_STYLE = INNER_LINE_STYLE;
		this.OUTER_LINE_STYLE = OUTER_LINE_STYLE;
		this.viewBox = viewBox;
		this.OPTIONS = OPTIONS;
		this.mmToPxScale = mmToPxScale;

		this.infos = infos;

		this.CONTENTS = CONTENTS;
		this.PASTE_WIDTH = PASTE_WIDTH;
		this.TEXT_STYLE = TEXT_STYLE;
	}

	protected fixTextStyle(scale: number) {
		if (this.TEXT_STYLE.length === 0) {
			const { FONT_SIZE } = this.OPTIONS as unknown as { FONT_SIZE: string };
			if (FONT_SIZE.length) {
				this.TEXT_STYLE = `font-family:"Times New Roman", "Kaiti";font-size:${/^[0-9\.]+$/.test(FONT_SIZE) ? FONT_SIZE.concat('mm') : FONT_SIZE};`;
			} else {
				this.TEXT_STYLE = `font-family:"Times New Roman", "Kaiti";font-size:${
					this.SIDE_LENGTH * scale
				}mm;`;
			}
		}
	}

	public draw() {
		this.drawGraphs();
		this.setTextsInfo();

		this.infos.forEach(({ content, x, y, rotate }) => {
			// SvgHelper.appendText(this.svg, this.TEXT_STYLE, content as string, x, y, rotate, null);
			SvgHelper.appendText(
				this.svg,
				this.TEXT_STYLE,
				content as string,
				x,
				y,
				rotate,
				'',
				null,
				// false,
				true,
			);
		});
	}

	protected setSvgTextInfo = SvgHelper.setSvgTextInfo;
	protected appendLine = SvgHelper.appendLine;
	protected appendCircle = SvgHelper.appendCircle;

	protected getSinByAngle(angle: number) {
		return Math.sin(angle * Math.PI / 180);
	}
	protected getCosByAngle(angle: number) {
		return Math.cos(angle * Math.PI / 180);
	}

	// protected fixContent(content)  { return content.toString().replace(/([69])/gi, '<font style="text-decoration:underline;">$1</font>'); }

	protected abstract drawGraphs(): void;
	protected abstract setTextsInfo(): void;

	// protected drawInnerLine(x1: number, x2: number, y1: number, y2: number) {
	// 	console.log('DiceFace10 call drawInnerLine()', this.svg);
	// 	SvgHelper.appendLine(this.svg, this.INNER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
	// }
	// protected drawOuterLine(x1: number, x2: number, y1: number, y2: number) {
	// 	console.log('DiceFace10 call drawOuterLine()', this.svg);
	// 	SvgHelper.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
	// }
}
