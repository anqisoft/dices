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
function isI18nable(object) {
    return typeof object.en === 'string' && typeof object.zh_cn === 'string' && typeof object.zh_tw === 'string';
}
const LOCAL_STORAGE_KEY_OF_LANG = "lang";
CURRENT_URL.includes("?") ? CURRENT_URL.split("?")[1] : ACTUAL_PAGE_NAME;
const getCurrentLang = ()=>localStorage.getItem(LOCAL_STORAGE_KEY_OF_LANG) || "zh_cn";
const SVG_NS = "http://www.w3.org/2000/svg";
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
        if (typeof dx === 'number') {
            dx = `${dx}mm`;
        }
        if (typeof dy === 'number') {
            dy = `${dy}mm`;
        }
        const tspan = document.createElementNS(SVG_NS, "tspan");
        tspan.setAttribute("dx", `${dx}`);
        tspan.setAttribute("dy", `${dy}`);
        tspan.setAttribute("style", STYLE.concat("dominant-baseline:middle;text-anchor:middle;", CHAR === "6" || CHAR === "9" ? "text-decoration:underline;" : "", CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : ""));
        tspan.innerHTML = CHAR;
        text.appendChild(tspan);
    }
    static appendText(svg, STYLE, content, x, y, rotate, transformOrigin, viewBox, maybeNumber = false) {
        const g = document.createElementNS(SVG_NS, "g");
        if (rotate) {
            g.setAttribute("style", `transform: rotate(${rotate}deg);transform-origin:${transformOrigin};`);
        }
        svg.appendChild(g);
        const text = document.createElementNS(SVG_NS, "text");
        text.setAttribute("x", `${x}mm`);
        text.setAttribute("y", `${y}mm`);
        text.setAttribute("style", "dominant-baseline:middle;text-anchor:middle;");
        if (isI18nable(content)) {
            content = content;
            content = `<en>${content.en}</en><zh_cn>${content.zh_cn}</zh_cn><zh_tw>${content.zh_tw}</zh_tw>`;
        }
        content = content;
        if (content.indexOf("<en>") > -1) {
            const lang = getCurrentLang();
            const startTag = `<${lang}>`;
            const endTag = `</${lang}>`;
            if (content.indexOf(startTag) > -1) {
                content = content.split(startTag)[1].split(endTag)[0];
            }
        }
        content = content.replace(/<br \/>/gi, "<br/>").replace(/<br\/>/gi, "<br>").replace(/\\n/gi, "<br>");
        if (content.indexOf("<br>") > -1) {
            const fontSize = STYLE.indexOf("font-size:") > -1 ? STYLE.split("font-size:")[1].split(";")[0] : "2mm";
            const unit = fontSize.replace(/[0-9.]/gi, "");
            const dyNumber = parseFloat(fontSize.replace(unit, ""));
            const segs = content.split("<br>");
            let lastLength = 0;
            const dyOffset = `${dyNumber}${unit}`;
            segs.forEach((seg, index)=>{
                SvgHelper.appendTspan(text, "", seg, index ? `-${lastLength}em` : "0", index ? dyOffset : "0");
                lastLength = seg.length;
            });
        } else {
            if (maybeNumber) {
                content.split("").forEach((__char, index)=>{
                    SvgHelper.appendTspan(text, "", __char, "0", "0");
                });
            } else {
                SvgHelper.appendTspan(text, "", content, "0", "0");
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
class DiceBase {
    svg;
    SIDE_LENGTH;
    INNER_LINE_STYLE;
    OUTER_LINE_STYLE;
    viewBox;
    OPTIONS;
    mmToPxScale;
    infos;
    CONTENTS;
    PASTE_WIDTH;
    TEXT_STYLE;
    constructor(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale, infos, CONTENTS, PASTE_WIDTH = 0, TEXT_STYLE = ''){
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
    draw() {
        this.drawGraphs();
        this.setTextsInfo();
        this.infos.forEach(({ content, x, y, rotate })=>{
            SvgHelper.appendText(this.svg, this.TEXT_STYLE, content, x, y, rotate, 'center', null, false);
        });
    }
    setSvgTextInfo = SvgHelper.setSvgTextInfo;
    appendLine = SvgHelper.appendLine;
    appendCircle = SvgHelper.appendCircle;
    getSinByAngle(angle) {
        return Math.sin(angle * Math.PI / 180);
    }
    getCosByAngle(angle) {
        return Math.cos(angle * Math.PI / 180);
    }
    drawInnerLine(x1, x2, y1, y2) {
        SvgHelper.appendLine(this.svg, this.INNER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
    }
    drawOuterLine(x1, x2, y1, y2) {
        SvgHelper.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
    }
}
class DiceFace14 extends DiceBase {
    drawGraphs() {}
    setTextsInfo() {}
}
export { DiceFace14 as default };
