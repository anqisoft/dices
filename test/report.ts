type Language = 'en' | 'zh_cn' | 'zh_tw';
type I18nable = {
	en: string;
	zh_cn: string;
	zh_tw: string;
};

(() => {
	if (window === window.top) { 
    window.location.href = 'index.htm';
  }

	const styleElement = document.getElementById('style') as HTMLStyleElement;
	const reportWrapperElement = document.getElementById('report_wrapper') as HTMLDivElement;
	const titleElement = document.getElementsByTagName('title')[0] as HTMLTitleElement;
	const htmlElement = document.getElementsByTagName('html')[0] as HTMLHtmlElement;

	function updateReport(title: I18nable, css: string, html: string, lang: Language) {
		styleElement.innerHTML = css;
		reportWrapperElement.innerHTML = html;

		((titleElement as unknown) as { i18n: I18nable }).i18n = title;
		// titleElement.innerHTML = title[getCurrentLang()];
		titleElement.innerHTML = title[lang];
	}

	function changeLang(lang: Language) {
		htmlElement.setAttribute('data-lang', lang);
	}

	// function changePaperSize(
	// paperSize: string,
	// isLandscape: boolean,
	// pageMarginTop: number,
	// pageMarginLeft: number,
	// ) {

	// }

	(window as unknown as {
		addEventListener: (event_name: string, func: (event: Event) => void) => void;
	}).addEventListener('message', function (event: Event) {
		const {
			data: {
				command,
				data: {
					title,
					css,
					html,
					lang,
					paperSize,
					isLandscape,
					pageMarginTop,
					pageMarginLeft,
					// parent
				},
			},
		} = event as unknown as {
			data: {
				command: string;
				data: {
					title: I18nable;
					css: string;
					html: string;
					lang: Language;
					paperSize: string;
					isLandscape: boolean;
					pageMarginTop: number;
					pageMarginLeft: number;
					// parent: Window;
				};
			};
		};

		switch (command) {
			case 'build':
				updateReport(title, css, html, lang);
				break;
			case 'changeLang':
				changeLang(lang);
				break;
			// case "changePaperSize":
			//   changePaperSize(
			//     paperSize,
			//     isLandscape,
			//     pageMarginTop,
			//     pageMarginLeft,
			//   );
			//   break;
			case 'print':
				window.print();
				break;
			default:
				break;
		}
	});

	const url = window.location.href.toLowerCase().replace(/\?/i, '&');
	const lang = url.indexOf('&lang=') === -1 ? 'en' : url.split('&lang=')[1].split('&')[0];
	changeLang(['en', 'zh_cn', 'zh_tw'].indexOf(lang) === -1 ? 'en' : lang as Language);
})();
