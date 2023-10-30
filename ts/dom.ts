import { RotateType, SvgHelper, ViewBoxType } from './svgHelper.ts';
// SvgTextInfo
import { AnQiData, MONTH_NAME_ARRAY } from './const.ts';

/**
 * <en>Internationalizable</en>
 * <zh_cn>可国际化</zh_cn>
 * <zh_tw>可國際化</zh_tw>
 */
export interface I18nable {
	en: string;
	zh_cn: string;
	zh_tw: string;
}

export function isI18nable(object: any): boolean {
	return typeof object.en === 'string' && typeof object.zh_cn === 'string' &&
		typeof object.zh_tw === 'string';
}

/**
 * <en>Hide html elements by setting the style sheet display to none.</en>
 * <zh_cn>通过设置样式表display到none，来隐藏html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到none，來隱藏html元素</zh_tw>
 * @param element
 * <en>The element you want to hide.</en>
 * <zh_cn>您想要隐藏的元素。</zh_cn>
 * <zh_tw>您想要隱藏的元素。</zh_tw>
 */
export function hide(element: HTMLElement) {
	if (element) element.style.display = 'none';
}

/**
 * <en>Display html elements at block level by setting the style sheet display to block.</en>
 * <zh_cn>通过设置样式表display到block，来以块级方式显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到block，來以塊級方式顯示html元素</zh_tw>
 * @param element
 * <en>The element you want to show.</en>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
export function showBlock(element: HTMLElement) {
	if (element) element.style.display = 'block';
}

/**
 * <en>Display html elements in a row level manner by setting the style sheet display to inline block.</en>
 * <zh_cn>通过设置样式表display到inline-block，来以行级方式显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到inline-block，來以行級方式顯示html元素</zh_tw>
 * @param element
 * <en>The element you want to show.</en>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
export function showInlineBlock(element: HTMLElement) {
	if (element) element.style.display = 'inline-block';
}

/**
 * <en>Display html elements in flexible layout by setting the style sheet display to flex.</en>
 * <zh_cn>通过设置样式表display到flex，来以弹性布局显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到flex，來以彈性佈局顯示html元素</zh_tw>
 * @param element
 * <en>The element you want to show.</en>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
export function showFlex(element: HTMLElement) {
	if (element) element.style.display = 'flex';
}

/**
 * <en>Set the style sheet display to inline flex to display html elements in inline block level elastic layout.</en>
 * <zh_cn>通过设置样式表display到inline-flex，来以内联块级弹性布局显示html元素</zh_cn>
 * <zh_tw>通過設定樣式表display到inline-flex，來以內聯塊級彈性佈局顯示html元素</zh_tw>
 * @param element
 * <en>The element you want to show.</en>
 * <zh_cn>您想要显示的元素。</zh_cn>
 * <zh_tw>您想要顯示的元素。</zh_tw>
 */
export function showInlineFlex(element: HTMLElement) {
	if (element) element.style.display = 'inline-flex';
}

/**
 * <en>Get the corresponding element according to the element ID (an error will occur if there is no element with the corresponding ID)</en>
 * <zh_cn>根据元素id获取相应的元素（不存在相应id的元素时将出错）</zh_cn>
 * <zh_tw>根據元素id獲取相應的元素（不存在相應id的元素時將出錯）</zh_tw>
 * @param id
 * <en>Element id</en>
 * <zh_cn>元素id</zh_cn>
 * <zh_tw>元素id</zh_tw>
 * @returns
 * <en>Corresponding elements</en>
 * <zh_cn>相应html元素</zh_cn>
 * <zh_tw>相應html元素</zh_tw>
 */
export function getElementById(id: string): HTMLElement {
	return document.getElementById(id) as HTMLElement;
}

/**
 * <en>Get the html element through the ID and transfer it to the corresponding sub element according to the tag name.</en>
 * <zh_cn>通过id获取html元素并根据标签名转相应子元素。</zh_cn>
 * <zh_tw>通过id获取html元素并根据标签名转相应子元素。</zh_tw>
 * @param id
 * <en>Element id</en>
 * <zh_cn>元素id</zh_cn>
 * <zh_tw>元素id</zh_tw>
 * @param _tagName
 * <en>Tag name</en>
 * <zh_cn>标签名</zh_cn>
 * <zh_tw>標籤名</zh_tw>
 * @returns
 * <en>Html sub element</en>
 * <zh_cn>html子元素</zh_cn>
 * <zh_tw>html子元素</zh_tw>
 */
export function getElementByIdAndTagName<
	K extends keyof HTMLElementTagNameMap,
>(
	id: string,
	_tagName: K,
) {
	return document.getElementById(id) as HTMLElementTagNameMap[K];
}

/**
 * <en>Get all qualified elements according to the style sheet selector, and convert them to the HTMLElement node list</en>
 * <zh_cn>根据样式表选择器获取所有符合条件的元素，并转为HTMLElement节点清单</zh_cn>
 * <zh_tw>根據樣式表選擇器獲取所有符合條件的元素，並轉為HTMLElement節點清單</zh_tw>
 * @param selectors
 * <en>style sheet selector</en>
 * <zh_cn>样式表选择器</zh_cn>
 * <zh_tw>樣式表選擇器</zh_tw>
 * @returns
 * <en>List of all eligible element nodes</en>
 * <zh_cn>所有符合条件的元素节点清单</zh_cn>
 * <zh_tw>所有符合條件的元素節點清單</zh_tw>
 */
export function querySelectorAll(selectors: string): NodeListOf<HTMLElement> {
	return document.querySelectorAll(selectors);
}

/**
 * <en>Get the list of all element nodes with i18n attributes, and convert the type to add i18n attributes.</en>
 * <zh_cn>获取所有带i18n属性的元素节点清单，转换类型以便添加i18n属性</zh_cn>
 * <zh_tw>獲取所有帶i18n内容的元素節點清單，轉換類型以便添加i18n内容</zh_tw>
 * @returns
 * <en>List of element nodes with i18n attributes that can be added.</en>
 * <zh_cn>可添加i18n属性的、带i18n属性的元素节点清单</zh_cn>
 * <zh_tw>可添加i18n内容的、帶i18n内容的元素節點清單</zh_tw>
 */
export function querySelectorAllByI18n(): NodeListOf<
	HTMLElement & { i18n: I18nable }
> {
	return document.querySelectorAll('[i18n]');
}

/**
 * <en>Get the list of all element nodes with i18n-placeholder attributes, and convert the type to add i18nPlaceholder attributes.</en>
 * <zh_cn>获取所有带i18n-placeholder属性的元素节点清单，转换类型以便添加i18nPlaceholder属性</zh_cn>
 * <zh_tw>獲取所有帶i18n-placeholder内容的元素節點清單，轉換類型以便添加i18nPlaceholder内容</zh_tw>
 * @returns
 * <en>List of element nodes with i18n-placeholder attributes that can be added.</en>
 * <zh_cn>可添加i18nPlaceholder属性的、带i18n-placeholder属性的元素节点清单</zh_cn>
 * <zh_tw>可添加i18nPlaceholder内容的、帶i18n-placeholder内容的元素節點清單</zh_tw>
 */
export function querySelectorAllByI18nPlaceholder(): NodeListOf<
	HTMLElement & { i18nPlaceholder: I18nable }
> {
	return document.querySelectorAll('[i18n-placeholder]');
}

/**
 * <en>Get the corresponding element collection according to the tag name</en>
 * <zh_cn>根据标签名获取相应元素集合</zh_cn>
 * <zh_tw>根據標籤名獲取相應元素集合</zh_tw>
 * @param qualifiedName
 * <en>tag name</en>
 * <zh_cn>标签名</zh_cn>
 * <zh_tw>標籤名</zh_tw>
 * @returns
 * <en>Collection of elements signed with this tag.</en>
 * <zh_cn>使用此标签名的元素集合</zh_cn>
 * <zh_tw>使用此標簽名的元素集合</zh_tw>
 */
export function getElementsByTagName(
	qualifiedName: string,
): HTMLCollectionOf<HTMLElement> {
	return document.getElementsByTagName(qualifiedName) as HTMLCollectionOf<
		HTMLElement
	>;
}

/**
 * <en>Get head element</en>
 * <zh_cn>获取head元素</zh_cn>
 * <zh_tw>獲取head元素</zh_tw>
 * @returns
 * <en>head element</en>
 * <zh_cn>head元素</zh_cn>
 * <zh_tw>head元素</zh_tw>
 */
export function getHeadElement(): HTMLHeadElement {
	return document.getElementsByTagName('head')[0] as HTMLHeadElement;
}

/**
 * <en>Get html element</en>
 * <zh_cn>获取html元素</zh_cn>
 * <zh_tw>獲取html元素</zh_tw>
 * @returns
 * <en>html element</en>
 * <zh_cn>html元素</zh_cn>
 * <zh_tw>html元素</zh_tw>
 */
export function getHtmlElement(): HTMLHtmlElement {
	return document.getElementsByTagName('html')[0] as HTMLHtmlElement;
}

/**
 * <en>Get body element</en>
 * <zh_cn>获取body元素</zh_cn>
 * <zh_tw>獲取body元素</zh_tw>
 * @returns
 * <en>body element</en>
 * <zh_cn>body元素</zh_cn>
 * <zh_tw>body元素</zh_tw>
 */
export function getBodyElement(): HTMLBodyElement {
	return document.getElementsByTagName('body')[0] as HTMLBodyElement;
}

/**
 * <en>Get title element</en>
 * <zh_cn>获取title元素</zh_cn>
 * <zh_tw>獲取title元素</zh_tw>
 * @returns
 * <en>title element</en>
 * <zh_cn>title元素</zh_cn>
 * <zh_tw>title元素</zh_tw>
 */
export function getTitleElement(): HTMLTitleElement & {
	i18n?: { en: string; zh_cn: string; zh_tw: string };
} {
	return document.getElementsByTagName('title')[0] as HTMLTitleElement;
}

/**
 * <en>Get header element</en>
 * <zh_cn>获取header元素</zh_cn>
 * <zh_tw>獲取header元素</zh_tw>
 * @returns
 * <en>The header element, because there is no HTMLHeaderElement object, has to use a similar HTMLDivElement.</en>
 * <zh_cn>header元素，因没有HTMLHeaderElement对象，而只好用相近的HTMLDivElement。</zh_cn>
 * <zh_tw>header元素，因沒有HTMLHeaderElement對象，而只好用相近的HTMLDivElement。</zh_tw>
 */
export function getHeaderElement(): HTMLDivElement {
	return document.getElementsByTagName('header')[0] as HTMLDivElement;
}

/**
 * <en>Get footer element</en>
 * <zh_cn>获取footer元素</zh_cn>
 * <zh_tw>獲取footer元素</zh_tw>
 * @returns
 * <en>The footer element, because there is no HTMLFooterElement object, has to use a similar HTMLDivElement.</en>
 * <zh_cn>footer元素，因没有HTMLFooterElement对象，而只好用相近的HTMLDivElement。</zh_cn>
 * <zh_tw>footer元素，因沒有HTMLFooterElement對象，而只好用相近的HTMLDivElement。</zh_tw>
 */
export function getFooterElement(): HTMLDivElement {
	return document.getElementsByTagName('footer')[0] as HTMLDivElement;
}

/**
 * <en>Get main element</en>
 * <zh_cn>获取main元素</zh_cn>
 * <zh_tw>獲取main元素</zh_tw>
 * @returns
 * <en>The main element, because there is no HTMLMainElement object, has to use a similar HTMLDivElement.</en>
 * <zh_cn>main元素，因没有HTMLMainElement对象，而只好用相近的HTMLDivElement。</zh_cn>
 * <zh_tw>main元素，因沒有HTMLMainElement對象，而只好用相近的HTMLDivElement。</zh_tw>
 */
export function getMainElement(): HTMLDivElement {
	return document.getElementsByTagName('main')[0] as HTMLDivElement;
	// return document.getElementById("main") as HTMLDivElement;
}

/**
 * <en>Creates an element of the specified tag name.</en>
 * <zh_cn>创建指定标签的元素</zh_cn>
 * <zh_tw>創建指定標籤的元素</zh_tw>
 * @param tagName
 * <en>tag name</en>
 * <zh_cn>标签</zh_cn>
 * <zh_tw>標籤</zh_tw>
 * @param options
 * <en>Optional parameters</en>
 * <zh_cn>可选参数</zh_cn>
 * <zh_tw>可選參數</zh_tw>
 * @returns
 * <en>New Elements</en>
 * <zh_cn>新元素</zh_cn>
 * <zh_tw>新元素</zh_tw>
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
	tagName: K,
	options?: ElementCreationOptions,
) {
	return document.createElement<K>(
		tagName,
		options,
	) as HTMLElementTagNameMap[K];
}

/**
 * <en>Set the attbibutes for a element.</en>
 * <zh_cn>设置a元素的属性</zh_cn>
 * <zh_tw>設置a元素的屬性</zh_tw>
 * @param aElement
 * <en>a element</en>
 * <zh_cn>a元素</zh_cn>
 * <zh_tw>a元素</zh_tw>
 * @param href
 * <en>link</en>
 * <zh_cn>链接</zh_cn>
 * <zh_tw>鏈接</zh_tw>
 */
export function setAttributesOfA(aElement: HTMLAnchorElement, link: string) {
	aElement.setAttribute('href', link);
	if (!link.startsWith('mailto:')) {
		aElement.setAttribute('target', '_blank');
	}
}

/**
 * <en>map: string to onclick function</en>
 * <zh_cn>映射：字符串到onclick方法</zh_cn>
 * <zh_tw>映像：字串到onclick方法</zh_tw>
 */
export interface OnclickFunctionMap {
	[index: string]:
		| ((this: GlobalEventHandlers, ev: MouseEvent) => void | boolean)
		| null;
}

/**
 * <en>Stop the event bubble</en>
 * <zh_cn>停止事件冒泡</zh_cn>
 * <zh_tw>停止事件冒泡</zh_tw>
 * @param event
 * <en>event</en>
 * <zh_cn>事件</zh_cn>
 * <zh_tw>事件</zh_tw>
 */
export function stopEventBubble(event: Event): boolean {
	event.cancelBubble = true;
	event.preventDefault();
	event.stopPropagation();
	return false;
}

/**
 * <en>Get html from i18n data</en>
 * <zh_cn>以i18n数据获取html</zh_cn>
 * <zh_tw>以i18n數據獲取html</zh_tw>
 * @param i18n
 * <en>i18n data</en>
 * <zh_cn>i18n数据</zh_cn>
 * <zh_tw>i18n數據</zh_tw>
 */
export function getI18nInnerHTML(
	{ en, zh_cn, zh_tw }: { en: string; zh_cn: string; zh_tw: string },
): string {
	return `<en>${en}</en><zh_cn>${zh_cn}</zh_cn><zh_tw>${zh_tw}</zh_tw>`;
}

/**
 * <en>Transfer date is i18n html</en>
 * <zh_cn>转日期为i18n html</zh_cn>
 * <zh_tw>轉日期為i18n html</zh_tw>
 * @param date
 * <en>Date</en>
 * <zh_cn>日期</zh_cn>
 * <zh_tw>日期</zh_tw>
 */
export function getI18nInnerHTMLFromDate(date: Date): string {
	const en = `${MONTH_NAME_ARRAY[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
	const zh_cn = `${date.getFullYear()}-${
		date.getMonth() +
		1
	}-${date.getDate()}`;
	const zh_tw = zh_cn;
	return `<en>${en}</en><zh_cn>${zh_cn}</zh_cn><zh_tw>${zh_tw}</zh_tw>`;
}

export interface PlaceholderI18nable {
	[lang: string]: string;
}

export function createPageElement() {
	return document.createElement('page');
}

export function createSvgElement(html: string, width: number, height: number) {
	// console.log('createSvgElement', width, height);
	// https://blog.csdn.net/longtengg1/article/details/116784565
	// Don't use: const svgElement = document.createElement('svg');
	const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

	svgElement.innerHTML = html;
	svgElement.setAttribute('version', '1.1');
	svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	// svgElement.setAttribute('style', `width:${width} mm; height:${height} mm; `);
	svgElement.setAttribute('width', `${width}mm`);
	svgElement.setAttribute('height', `${height}mm`);

	return { svgElement, width, height };
}

export function createSvgGElement(html: string, width: number, height: number) {
	const gElement = document.createElementNS('http://www.w3.org/2000/svg', 'g');

	gElement.innerHTML = html;
	gElement.setAttribute('width', `${width}mm`);
	gElement.setAttribute('height', `${height}mm`);

	return { gElement, width, height };
}

export function createSvgAndGElement(
	{ html, width, height }: { html: string; width: number; height: number },
) {
	const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svgElement.setAttribute('version', '1.1');
	svgElement.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

	svgElement.setAttribute('width', `${width}mm`);
	svgElement.setAttribute('height', `${height}mm`);

	const gElement = createSvgGElement(html, width, height).gElement;
	svgElement.appendChild(gElement);

	return { svgElement, gElement, width, height };
}

export function appendSvgAndG(
	parentElement: HTMLElement,
	info: {
		svgElement: SVGSVGElement;
		gElement: SVGGElement;
		width: number;
		height: number;
	},
	options: {
		left: number;
		right: number;
		top: number;
		bottom: number;
		// transform: string,
		degree: number;
	},
) {
	const { abs, sin, cos, PI } = Math;

	const { svgElement, gElement, width, height } = info;
	// const { left, right, top, bottom, transform, degree } = options;
	const { left, right, top, bottom, degree } = options;

	// A3, LANDSCAPE, PAGE_PADDING_TOP, PAGE_PADDING_LEFT, MM_TO_PX_SCALE, PX_TO_MM_SCALE
	const { PAGE_WIDTH, PAGE_HEIGHT } = (window as unknown as { anqiData: AnQiData }).anqiData;

	const x = 'undefined' !== typeof left ? left : PAGE_WIDTH - width - right;
	const y = 'undefined' !== typeof top ? top : PAGE_HEIGHT - height - bottom;
	parentElement.appendChild(svgElement);
	svgElement.setAttribute('x', `${x}mm`);
	svgElement.setAttribute('y', `${y}mm`);

	if (!degree) return;

	// transform: `rotate(${DEGREE_90})`,
	gElement.setAttribute('transform', `rotate(${degree})`);
	gElement.style.transformOrigin = '50% 50%';

	if (degree === 180 || degree === -180) return;

	let newWidth = 0,
		newHeight = 0,
		gTranslateScaleX = 1,
		gTranslateScaleY = 1,
		xScale = 1,
		yScale = 1;

	if (degree <= -90) {
		// -180 < degree <= -90
		const newDegree = -90 - degree;
		const radian = PI * newDegree / 180;
		newWidth = width * sin(radian) + height * cos(radian);
		newHeight = width * cos(radian) + height * sin(radian);
		xScale = -1;
		yScale = -1;
		gTranslateScaleX = -1;
		gTranslateScaleY = 1;
	} else if (degree < 0) {
		// -90 < degree < 0
		const newDegree = -degree;
		const radian = PI * newDegree / 180;
		newWidth = width * cos(radian) + height * sin(radian);
		newHeight = width * sin(radian) + height * cos(radian);
		xScale = -1;
		yScale = 1;
		gTranslateScaleX = 1;
		gTranslateScaleY = 1;
	} else if (degree <= 90) {
		const radian = PI * degree / 180;

		newWidth = width * cos(radian) + height * sin(radian);
		newHeight = width * sin(radian) + height * cos(radian);
		xScale = -1;
		yScale = -1;
		gTranslateScaleX = 1;
		gTranslateScaleY = -1;
	} else if (degree < 180) {
		// 90 < degree < 180
		const newDegree = degree - 90;
		const radian = PI * newDegree / 180;
		newWidth = width * cos(radian) + height * sin(radian);
		newHeight = width * sin(radian) + height * cos(radian);
		xScale = -1;
		yScale = 1;
		gTranslateScaleX = 1;
		gTranslateScaleY = 1;
	}

	const DELTA_WIDTH = newWidth - width;
	const DELTA_HEIGHT = newHeight - height;

	const HALF_DELTA_WIDTH = DELTA_WIDTH * 0.5;
	const HALF_DELTA_HEIGHT = DELTA_HEIGHT * 0.5;

	const G_DELTA_X = HALF_DELTA_WIDTH * gTranslateScaleX;
	const G_DELTA_Y = HALF_DELTA_HEIGHT * gTranslateScaleY;

	if (newWidth < 0 || newHeight < 0) {
		console.log({
			degree,
			cos: cos(degree),
			sin: sin(degree),

			newWidth,
			newHeight,
			x,
			HALF_DELTA_WIDTH,
			fixValueByRight: ('undefined' !== typeof right ? 2 : 1),
			newX: x + HALF_DELTA_WIDTH * ('undefined' !== typeof right ? 2 : 1),
			y,
			HALF_DELTA_HEIGHT,
			newY: y + HALF_DELTA_HEIGHT,
			G_DELTA_X,
			G_DELTA_Y,
		});
	}

	svgElement.setAttribute('width', `${newWidth}mm`);
	svgElement.setAttribute('height', `${newHeight}mm`);

	svgElement.setAttribute(
		'x',
		`${x + HALF_DELTA_WIDTH * xScale * ('undefined' !== typeof right ? 2 : 1)}mm`,
	);
	svgElement.setAttribute('y', `${y + HALF_DELTA_HEIGHT * yScale}mm`);
	gElement.style.translate = `${G_DELTA_X}mm ${G_DELTA_Y}mm`;
}

export function createTopSvgElement() {
	// A3, LANDSCAPE, PAGE_PADDING_TOP, PAGE_PADDING_LEFT, MM_TO_PX_SCALE, PX_TO_MM_SCALE
	const { PAGE_WIDTH, PAGE_HEIGHT } = (window as unknown as { anqiData: AnQiData }).anqiData;

	const svgElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

	svgElement.setAttribute('version', '1.1');
	// svgElement.setAttribute('style', `width:${PAGE_WIDTH} mm; height:${PAGE_HEIGHT} mm; `);
	svgElement.setAttribute('width', `${PAGE_WIDTH}mm`);
	svgElement.setAttribute('height', `${PAGE_HEIGHT}mm`);

	return svgElement;
}
