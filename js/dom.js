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
const ACTUAL_PAGE_NAME = ACTUAL_PAGE_NAME_ARRAY[ACTUAL_PAGE_VALUE];
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
function hide(element) {
    if (element) element.style.display = "none";
}
const SVG_NS = "http://www.w3.org/2000/svg";
const LOCAL_STORAGE_KEY_OF_LANG = "lang";
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
CURRENT_URL.includes("?") ? CURRENT_URL.split("?")[1] : ACTUAL_PAGE_NAME;
const getCurrentLang = ()=>localStorage.getItem(LOCAL_STORAGE_KEY_OF_LANG) || "zh_cn";
const SVG_XLINKNS = "http://www.w3.org/1999/xlink";
class SvgHelper {
    static createSvg = ()=>{
        const svg = document.createElementNS(SVG_NS, "svg");
        svg.setAttribute("version", "1.1");
        svg.setAttribute("xmlns", SVG_NS);
        svg.setAttribute("xmlns:xlink", SVG_XLINKNS);
        return svg;
    };
    static createSvgPath = ()=>{
        return document.createElementNS(SVG_NS, "path");
    };
    static appendLine(svg, STYLE, x1, x2, y1, y2, viewBox) {
        const line = document.createElementNS(SVG_NS, "line");
        line.setAttribute("x1", `${x1}mm`);
        line.setAttribute("x2", `${x2}mm`);
        line.setAttribute("y1", `${y1}mm`);
        line.setAttribute("y2", `${y2}mm`);
        if (viewBox) {
            viewBox.left = Math.min(viewBox.left, x1, x2);
            viewBox.right = Math.max(viewBox.right, x1, x2);
            viewBox.top = Math.min(viewBox.top, y1, y2);
            viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
        }
        line.setAttribute("style", STYLE);
        svg.appendChild(line);
    }
    static appendCircle(svg, STYLE, cx, cy, radius, viewBox) {
        const circle = document.createElementNS(SVG_NS, "circle");
        circle.setAttribute("cx", `${cx}mm`);
        circle.setAttribute("cy", `${cy}mm`);
        circle.setAttribute("r", `${radius}mm`);
        circle.setAttribute("fill", "#ffffff");
        if (viewBox) {
            viewBox.left = Math.min(viewBox.left, cx - radius);
            viewBox.right = Math.max(viewBox.right, cx + radius);
            viewBox.top = Math.min(viewBox.top, cy - radius);
            viewBox.bottom = Math.max(viewBox.bottom, cy + radius);
        }
        circle.setAttribute("style", STYLE);
        svg.appendChild(circle);
    }
    static appendTspan(text, STYLE, CHAR, dx, dy) {
        const tspan = document.createElementNS(SVG_NS, "tspan");
        tspan.setAttribute("dx", `${dx}`);
        tspan.setAttribute("dy", `${dy}`);
        tspan.setAttribute("style", STYLE.concat("dominant-baseline:middle;text-anchor:middle;", CHAR === "6" || CHAR === "9" ? "text-decoration:underline;" : "", CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : ""));
        tspan.innerHTML = CHAR;
        text.appendChild(tspan);
    }
    static appendText(svg, STYLE, CONTENT, x, y, rotate, transformOrigin, viewBox, maybeNumber = false) {
        const g = document.createElementNS(SVG_NS, "g");
        if (rotate) {
            g.setAttribute("style", `transform: rotate(${rotate}deg);transform-origin:${transformOrigin};`);
        }
        svg.appendChild(g);
        const text = document.createElementNS(SVG_NS, "text");
        text.setAttribute("x", `${x}mm`);
        text.setAttribute("y", `${y}mm`);
        text.setAttribute("style", "dominant-baseline:middle;text-anchor:middle;");
        if (CONTENT.indexOf("<en>") > -1) {
            const lang = getCurrentLang();
            const startTag = `<${lang}>`;
            const endTag = `</${lang}>`;
            if (CONTENT.indexOf(startTag) > -1) {
                CONTENT = CONTENT.split(startTag)[1].split(endTag)[0];
            }
        }
        CONTENT = CONTENT.replace(/<br \/>/gi, "<br/>").replace(/<br\/>/gi, "<br>").replace(/\\n/gi, "<br>");
        if (CONTENT.indexOf("<br>") > -1) {
            const fontSize = STYLE.indexOf("font-size:") > -1 ? STYLE.split("font-size:")[1].split(";")[0] : "2mm";
            const unit = fontSize.replace(/[0-9.]/gi, "");
            const dyNumber = parseFloat(fontSize.replace(unit, ""));
            const segs = CONTENT.split("<br>");
            let lastLength = 0;
            const dyOffset = `${dyNumber}${unit}`;
            segs.forEach((seg, index)=>{
                SvgHelper.appendTspan(text, "", seg, index ? `-${lastLength}em` : "0", index ? dyOffset : "0");
                lastLength = seg.length;
            });
        } else {
            if (maybeNumber) {
                CONTENT.split("").forEach((__char, index)=>{
                    SvgHelper.appendTspan(text, "", __char, "0", "0");
                });
            } else {
                SvgHelper.appendTspan(text, "", CONTENT, "0", "0");
            }
        }
        g.appendChild(text);
        if (viewBox) {
            const clientRects = text.getClientRects();
            const { left: x1, right: x2, top: y1, bottom: y2 } = clientRects.length ? clientRects.item(0) : text.getBoundingClientRect();
            viewBox.left = Math.min(viewBox.left, x1, x2);
            viewBox.right = Math.max(viewBox.right, x1, x2);
            viewBox.top = Math.min(viewBox.top, y1, y2);
            viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
        }
        text.setAttribute("style", STYLE);
    }
    static setSvgTextInfo(info, x, y, rotate) {
        info.x = x;
        info.y = y;
        info.rotate = rotate;
    }
    static appendOuterPath(svg, WIDTH, HEIGHT, mmToPxScale, OUTER_LINE_COLOR) {
        svg.setAttribute("width", `${WIDTH}mm`);
        svg.setAttribute("height", `${HEIGHT}mm`);
        const WIDTH_PX = mmToPxScale * WIDTH;
        const HEIGHT_PX = mmToPxScale * HEIGHT;
        const path = SvgHelper.createSvgPath();
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", OUTER_LINE_COLOR);
        path.setAttribute("d", `M 0, 0 `.concat(`h ${WIDTH_PX} `, `v ${HEIGHT_PX} `, `h -${WIDTH_PX} `, " z"));
        svg.appendChild(path);
    }
    static appendOuterLine(svg, WIDTH, HEIGHT, OUTER_LINE_STYLE) {
        svg.setAttribute("width", `${WIDTH}mm`);
        svg.setAttribute("height", `${HEIGHT}mm`);
        const { appendLine } = SvgHelper;
        appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, 0, 0, null);
        appendLine(svg, OUTER_LINE_STYLE, 0, WIDTH, HEIGHT, HEIGHT, null);
        appendLine(svg, OUTER_LINE_STYLE, 0, 0, 0, HEIGHT, null);
        appendLine(svg, OUTER_LINE_STYLE, WIDTH, WIDTH, 0, HEIGHT, null);
    }
    static getTextStyleFontSizePatchCss(NUMBER, TEXT_STYLE) {
        if (NUMBER > 99 && TEXT_STYLE.indexOf("font-size:") > -1) {
            const fontSizeSeg = TEXT_STYLE.split("font-size:")[1].split(";")[0];
            const fontUnit = fontSizeSeg.replace(/[0-9\.\-]/g, "");
            const fontValue = parseFloat(fontSizeSeg.replace(fontUnit, ""));
            return `font-size:${fontValue * 2 / NUMBER.toString().length}${fontUnit};`;
        }
        return "";
    }
}
function appendText(svg, STYLE, CONTENT, x, y, rotate, viewBox) {
    const g = document.createElementNS(SVG_NS1, "g");
    if (rotate) {
        g.setAttribute("style", `transform: rotate(${rotate}deg);transform-origin: 50% 50%;`);
    }
    svg.appendChild(g);
    const text = document.createElementNS(SVG_NS1, "text");
    text.setAttribute("x", `${x}mm`);
    text.setAttribute("y", `${y}mm`);
    text.setAttribute("style", "dominant-baseline:middle;text-anchor:middle;");
    if (CONTENT.indexOf("<") > -1) {
        text.innerHTML = CONTENT;
    } else {
        CONTENT.split("").forEach((__char, index)=>{
            SvgHelper.appendTspan(text, "", __char, "0", "0");
        });
    }
    g.appendChild(text);
    if (viewBox) {
        const clientRects = text.getClientRects();
        const { left: x1, right: x2, top: y1, bottom: y2 } = clientRects.length ? clientRects.item(0) : text.getBoundingClientRect();
        viewBox.left = Math.min(viewBox.left, x1, x2);
        viewBox.right = Math.max(viewBox.right, x1, x2);
        viewBox.top = Math.min(viewBox.top, y1, y2);
        viewBox.bottom = Math.max(viewBox.bottom, y1, y2);
    }
    text.setAttribute("style", STYLE);
}
const SVG_NS1 = "http://www.w3.org/2000/svg";
const SVG_XLINKNS1 = "http://www.w3.org/1999/xlink";
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
export { appendText as appendText };
export { SVG_NS1 as SVG_NS };
export { SVG_XLINKNS1 as SVG_XLINKNS };
