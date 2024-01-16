import { DiceGenerator, DiceKind } from '../types/dice.d.ts';
import { I18nable, AnQiData, getPageCss, parsePageParamsFromUrl, getPageParameterByName, setF1Content, createPageElement } from '../node_modules/@dishanqian/h5_base/types/index.d.ts';

(() => {
	parsePageParamsFromUrl(window.location.href);
	const { LANG } = (window as unknown as { anqiData: AnQiData }).anqiData;

	document.getElementsByTagName('title')[0].innerText = LANG === 'en' ? 'Dices' : (LANG === 'zh_cn' ? "骰子" : "骰子");

	const diceGenerator = new DiceGenerator();
  const diceKind = DiceKind.four;
  const SIDE_LENGTH = 10;
  const CONTENTS: (string | I18nable)[] = '1,2,3,4'.split(',');
  const FONT_SIZE = '2mm';
	const OPTIONS = { FONT_SIZE };

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
  const pageHtml = `${svg.outerHTML}`;

  const previewIframe = document.getElementById('iframe_report') as unknown as {onload: Function, onreadystatechange: () => void};
  const iframe_report_window = (previewIframe as unknown as { contentWindow: Window }).contentWindow  as Window;
  // previewIframe.onload = () => {
  //   alert('iframe_report.onload');
  //   iframe_report_window.postMessage({
  //     command: "build",
  //     data: {
  //       title: {
  //         en: 'report',
  //         zh_cn: '报表',
  //         zh_tw: '報表',
  //       },
  //       css: '',
  //       html: pageHtml,
  //     },
  //   }, "*");
  // };
  function buildFirst() {
    iframe_report_window.postMessage({
      command: "build",
      data: {
        title: {
          en: 'report',
          zh_cn: '报表',
          zh_tw: '報表',
        },
        css: '',
        html: pageHtml,
      },
    }, "*");
  }

  
  previewIframe.onload =
    previewIframe.onreadystatechange = function () {
      const { readyState } = this as unknown as { readyState?: string };
      console.log("iframe onreadystatechange", readyState);

      if (!readyState) {
        buildFirst();
        return;
      }
      switch (readyState) {
        case "loaded":
        case "complete":
          buildFirst();
          break;
        default:
          break;
      }
    };
  })();
