import { DiceGenerator, DiceKind } from './dice.ts';
import { AnQiData, getPageCss, parsePageParamsFromUrl } from './const.ts';
import { getPageParameterByName } from './const.ts';
import { createPageElement } from './dom.ts';

export function drawDice() {
	parsePageParamsFromUrl(window.location.href);
	// const url = window.location.href.replace('?', '&')
	//   .replace(/&face=/gi, '&face=')
	//   .replace(/&side=/gi, '&side=')

	//   .replace(/&contents=/gi, '&contents=')

	//   .replace(/&outer_line_style=/gi, '&outer_line_style=')
	//   .replace(/&inner_line_style=/gi, '&inner_line_style=')
	//   .replace(/&text_style=/gi, '&text_style=')
	// ;

	const FACE_IN_URL = parseInt(getPageParameterByName('face', '0'));
	const FACE = FACE_IN_URL || 4;
	const DEFAULT_CONTENTS = [];
	for (let i = 0; i < FACE; ++i) {
		// DEFAULT_CONTENTS.push('');
		DEFAULT_CONTENTS.push((i + 1).toString());
	}
	let diceKind = DiceKind.four;
	switch (FACE) {
		// case 1:
		//   diceKind = DiceKind.one;
		//   break;
		// case 2:
		//   diceKind = DiceKind.two;
		//   break;
		// case 3:
		//   diceKind = DiceKind.three;
		//   break;
		case 4:
			diceKind = DiceKind.four;
			break;
		// case 5:
		//   diceKind = DiceKind.five;
		//   break;
		case 6:
			diceKind = DiceKind.six;
			break;
		// case 7:
		//   diceKind = DiceKind.seven;
		//   break;
		case 8:
			diceKind = DiceKind.eight;
			break;
		// case 9:
		//   diceKind = DiceKind.nine;
		//   break;
		case 10:
			diceKind = DiceKind.ten;
			break;
		// case 11:
		//   diceKind = DiceKind.eleven;
		//   break;
		case 12:
			diceKind = DiceKind.twelve;
			break;
		// case 13:
		//   diceKind = DiceKind.thirteen;
		//   break;
		case 14:
			diceKind = DiceKind.fourteen;
			break;
		// case 15:
		//   diceKind = DiceKind.fifteen;
		//   break;
		case 16:
			diceKind = DiceKind.sixteen;
			break;
		// case 17:
		//   diceKind = DiceKind.seventeen;
		//   break;
		// case 18:
		//   diceKind = DiceKind.eighteen;
		//   break;
		// case 19:
		//   diceKind = DiceKind.nineteen;
		//   break;
		case 20:
			diceKind = DiceKind.twenty;
			break;
		case 24:
			diceKind = DiceKind.twentyFour;
			break;
		case 26:
			diceKind = DiceKind.twentySix;
			break;
		case 60:
			diceKind = DiceKind.sixty;
			break;
		default:
			diceKind = DiceKind.none;
			break;
	}

	const SIDE_IN_URL = parseFloat(getPageParameterByName('side', '0'));
	const SIDE_LENGTH = SIDE_IN_URL || 10;

	const CONTENTS_IN_URL = getPageParameterByName('contents', '');
	const CONTENTS = CONTENTS_IN_URL.length === 0 ? DEFAULT_CONTENTS : CONTENTS_IN_URL.split(',');

	const diceGenerator = new DiceGenerator();

	const OPTIONS = {};
	const DICE_INFO = diceGenerator.create({
		id: 'svg_1',
		diceKind, // DiceKind.four,
		sideLength: SIDE_LENGTH,
		contents: CONTENTS,
		outerLineStyle: getPageParameterByName('outer_line_style', ''),
		innerLineStyle: getPageParameterByName('inner_line_style', ''),
		textStyle: getPageParameterByName('text_style', ''),
		options: OPTIONS,
	});
	const { id, svg, css } = DICE_INFO;

	// A3, LANDSCAPE, PAGE_PADDING_TOP, PAGE_PADDING_LEFT, MM_TO_PX_SCALE, PX_TO_MM_SCALE, PAGE_WIDTH, PAGE_HEIGHT
	const { A3, LANG, NO, LANDSCAPE } = (window as unknown as { anqiData: AnQiData }).anqiData;

	document.getElementsByTagName('title')[0].innerText = `${A3 ? 'A3' : 'A4'}_D${FACE}_${
		[
			{
				en: 'Landscape ',
				zh_cn: '横排',
				zh_tw: '橫排',
			},
			{
				en: 'Portrait ',
				zh_cn: '竖排',
				zh_tw: '豎排',
			},
		][LANDSCAPE ? 0 : 1][LANG]
	}_${NO}`;

	(document.getElementById('style') as HTMLElement).innerHTML = getPageCss();

	const body = document.getElementsByTagName('body')[0];

	const pageElement = createPageElement();
	body.appendChild(pageElement);

	pageElement.appendChild(svg);
}
