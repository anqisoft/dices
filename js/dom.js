// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const DOMAIN = "edu.sonya.cc";
DOMAIN.concat("_");
const CURRENT_URL = window.location.href;
const HOME_URL = CURRENT_URL.startsWith("file:///") ? "file:///P:/ecs_person/websites/sonya.cc/edu_git/src/index.htm" : "http://edu.sonya.cc/";
(function() {
    const myWindow = window;
    if (!myWindow.top || CURRENT_URL.startsWith("file:///")) return;
    if (!myWindow.top.location.href.startsWith(HOME_URL)) {
        myWindow.top.location.replace(HOME_URL);
    }
})();
HOME_URL.length;
var ActualPage;
(function(ActualPage) {
    ActualPage[ActualPage["home"] = 0] = "home";
    ActualPage[ActualPage["bricks"] = 1] = "bricks";
    ActualPage[ActualPage["brick"] = 2] = "brick";
    ActualPage[ActualPage["treasures"] = 3] = "treasures";
    ActualPage[ActualPage["stories"] = 4] = "stories";
    ActualPage[ActualPage["story"] = 5] = "story";
    ActualPage[ActualPage["about"] = 6] = "about";
    ActualPage[ActualPage["report"] = 7] = "report";
})(ActualPage || (ActualPage = {}));
const ACTUAL_PAGE_NAME_ARRAY = [
    "home",
    "bricks",
    "brick",
    "treasures",
    "stories",
    "story",
    "about",
    "report"
];
const getActualPageValueByName = (name)=>ACTUAL_PAGE_NAME_ARRAY.indexOf(name);
const PARAMETER_FOR_ACTUAL_PAGE = "go";
const ACTUAL_PAGE_VALUE = CURRENT_URL.indexOf("?".concat(PARAMETER_FOR_ACTUAL_PAGE, "=")) > -1 ? getActualPageValueByName(CURRENT_URL.split("?")[1].split("&")[0].split("=")[1]) : ActualPage.home;
ACTUAL_PAGE_NAME_ARRAY[ACTUAL_PAGE_VALUE];
const SITE_ROOT = HOME_URL.substring(0, HOME_URL.lastIndexOf("/") + 1);
`${SITE_ROOT}images/`;
`${SITE_ROOT}js/`;
`${SITE_ROOT}css/`;
const getPageParameterByName = (name, defaultValue)=>{
    return CURRENT_URL.indexOf(`&${name}=`) === -1 ? defaultValue || "" : CURRENT_URL.split("&").slice(1).filter((keyValue)=>keyValue.startsWith(`${name}=`))[0].split("=")[1];
};
getPageParameterByName("kind", null);
parseInt(getPageParameterByName("page", "1"), 0) - 1;
parseInt(getPageParameterByName("id", "1"), 0);
const MONTH_NAME_ARRAY = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Spt",
    "Oct",
    "Nov",
    "Dec"
];
function isI18nable(object) {
    return typeof object.en === 'string' && typeof object.zh_cn === 'string' && typeof object.zh_tw === 'string';
}
function hide(element) {
    if (element) element.style.display = "none";
}
function showBlock(element) {
    if (element) element.style.display = "block";
}
function showInlineBlock(element) {
    if (element) element.style.display = "inline-block";
}
function showFlex(element) {
    if (element) element.style.display = "flex";
}
function showInlineFlex(element) {
    if (element) element.style.display = "inline-flex";
}
function getElementById(id) {
    return document.getElementById(id);
}
function getElementByIdAndTagName(id, _tagName) {
    return document.getElementById(id);
}
function querySelectorAll(selectors) {
    return document.querySelectorAll(selectors);
}
function querySelectorAllByI18n() {
    return document.querySelectorAll("[i18n]");
}
function querySelectorAllByI18nPlaceholder() {
    return document.querySelectorAll("[i18n-placeholder]");
}
function getElementsByTagName(qualifiedName) {
    return document.getElementsByTagName(qualifiedName);
}
function getHeadElement() {
    return document.getElementsByTagName("head")[0];
}
function getHtmlElement() {
    return document.getElementsByTagName("html")[0];
}
function getBodyElement() {
    return document.getElementsByTagName("body")[0];
}
function getTitleElement() {
    return document.getElementsByTagName("title")[0];
}
function getHeaderElement() {
    return document.getElementsByTagName("header")[0];
}
function getFooterElement() {
    return document.getElementsByTagName("footer")[0];
}
function getMainElement() {
    return document.getElementsByTagName("main")[0];
}
function createElement(tagName, options) {
    return document.createElement(tagName, options);
}
function setAttributesOfA(aElement, link) {
    aElement.setAttribute("href", link);
    if (!link.startsWith("mailto:")) {
        aElement.setAttribute("target", "_blank");
    }
}
function stopEventBubble(event) {
    event.cancelBubble = true;
    event.preventDefault();
    event.stopPropagation();
    return false;
}
function getI18nInnerHTML({ en, zh_cn, zh_tw }) {
    return `<en>${en}</en><zh_cn>${zh_cn}</zh_cn><zh_tw>${zh_tw}</zh_tw>`;
}
function getI18nInnerHTMLFromDate(date) {
    const en = `${MONTH_NAME_ARRAY[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    const zh_cn = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    const zh_tw = zh_cn;
    return `<en>${en}</en><zh_cn>${zh_cn}</zh_cn><zh_tw>${zh_tw}</zh_tw>`;
}
export { isI18nable as isI18nable };
export { hide as hide };
export { showBlock as showBlock };
export { showInlineBlock as showInlineBlock };
export { showFlex as showFlex };
export { showInlineFlex as showInlineFlex };
export { getElementById as getElementById };
export { getElementByIdAndTagName as getElementByIdAndTagName };
export { querySelectorAll as querySelectorAll };
export { querySelectorAllByI18n as querySelectorAllByI18n };
export { querySelectorAllByI18nPlaceholder as querySelectorAllByI18nPlaceholder };
export { getElementsByTagName as getElementsByTagName };
export { getHeadElement as getHeadElement };
export { getHtmlElement as getHtmlElement };
export { getBodyElement as getBodyElement };
export { getTitleElement as getTitleElement };
export { getHeaderElement as getHeaderElement };
export { getFooterElement as getFooterElement };
export { getMainElement as getMainElement };
export { createElement as createElement };
export { setAttributesOfA as setAttributesOfA };
export { stopEventBubble as stopEventBubble };
export { getI18nInnerHTML as getI18nInnerHTML };
export { getI18nInnerHTMLFromDate as getI18nInnerHTMLFromDate };
