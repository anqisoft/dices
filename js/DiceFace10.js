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
class DiceFace10 extends DiceBase {
    constructor(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale, infos, CONTENTS, PASTE_WIDTH = 0, TEXT_STYLE = null){
        const { max, min, sin, cos, tan, atan, PI, abs } = Math;
        SIDE_LENGTH = max(1, SIDE_LENGTH || 10);
        PASTE_WIDTH = max(1, PASTE_WIDTH || 5, SIDE_LENGTH);
        if (SIDE_LENGTH <= 5) {
            PASTE_WIDTH = max(min(3, SIDE_LENGTH), PASTE_WIDTH);
        }
        if (!TEXT_STYLE) {
            TEXT_STYLE = `font-size:${5 * SIDE_LENGTH / 10}mm`;
        }
        super(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale, infos, CONTENTS, PASTE_WIDTH);
    }
    drawGraphs() {
        const { max, min, sin, cos, tan, atan, PI, abs } = Math;
        const { SIDE_LENGTH: SIDE, PASTE_WIDTH, drawInnerLine, drawOuterLine } = this;
        const X_O1 = SIDE * 2.55;
        const Y_O1 = SIDE * 2.55;
        const ANGLE_SMALL_DEGREE = 50.22;
        const ANGLE_SMALL = 50.22 * PI / 180;
        const HALF_ANGLE_SMALL = ANGLE_SMALL * 0.5;
        const ANGLE_MIDDLE = 94.7 * PI / 180;
        const ANGLE_BIG = (PI - HALF_ANGLE_SMALL - ANGLE_MIDDLE) * 2;
        const ANGLE_90 = PI * 0.5;
        const ANGLE_EXTEND = 45 * PI / 180;
        const ANGLE_B1 = ANGLE_90 - HALF_ANGLE_SMALL;
        const ANGLE_B2 = ANGLE_MIDDLE - ANGLE_B1;
        const SIDE_V1 = SIDE * sin(ANGLE_B2);
        const SIDE_H1 = SIDE * cos(ANGLE_B2);
        const SIDE_LONG = SIDE_H1 / sin(HALF_ANGLE_SMALL);
        const SIDE_V2 = SIDE_LONG * sin(ANGLE_B1);
        const SIZE_LONG_MIDLINE = SIDE_V1 + SIDE_V2;
        const ANGLE_A1 = HALF_ANGLE_SMALL;
        const X_B1 = X_O1, Y_B1 = Y_O1 + SIZE_LONG_MIDLINE;
        const X_A1_DELTA = SIDE_LONG * sin(ANGLE_A1);
        const Y_A1_DELTA = SIDE_LONG * cos(ANGLE_A1);
        const X_A1 = X_O1 - X_A1_DELTA, X_C1 = X_O1 + X_A1_DELTA;
        const Y_A1 = Y_O1 + Y_A1_DELTA, Y_C1 = Y_O1 + Y_A1_DELTA;
        const ANGLE_D1 = ANGLE_SMALL;
        const X_D1 = X_O1 + SIZE_LONG_MIDLINE * sin(ANGLE_D1);
        const Y_D1 = Y_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_D1);
        const ANGLE_E1 = ANGLE_SMALL * 1.5;
        const X_E1 = X_O1 + SIDE_LONG * sin(ANGLE_E1);
        const Y_E1 = Y_O1 + SIDE_LONG * cos(ANGLE_E1);
        const ANGLE_F1 = ANGLE_SMALL * 2 - ANGLE_90;
        const X_F1 = X_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_F1);
        const Y_F1 = Y_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_F1);
        const ANGLE_G1 = ANGLE_SMALL * 2.5 - ANGLE_90;
        const X_G1 = X_O1 + SIDE_LONG * cos(ANGLE_G1);
        const Y_G1 = Y_O1 - SIDE_LONG * sin(ANGLE_G1);
        const ANGLE_H1 = ANGLE_SMALL * 3 - ANGLE_90;
        const X_H1 = X_O1 + SIZE_LONG_MIDLINE * cos(ANGLE_H1);
        const Y_H1 = Y_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_H1);
        const ANGLE_I1 = PI - ANGLE_SMALL * 3.5;
        const X_I1 = X_O1 + SIDE_LONG * sin(ANGLE_I1);
        const Y_I1 = Y_O1 - SIDE_LONG * cos(ANGLE_I1);
        const ANGLE_J1 = ANGLE_SMALL * 4 - PI;
        const X_J1 = X_O1 - SIZE_LONG_MIDLINE * sin(ANGLE_J1);
        const Y_J1 = Y_O1 - SIZE_LONG_MIDLINE * cos(ANGLE_J1);
        const ANGLE_K1 = ANGLE_SMALL * 4.5 - PI;
        const X_K1 = X_O1 - SIDE_LONG * sin(ANGLE_K1);
        const Y_K1 = Y_O1 - SIDE_LONG * cos(ANGLE_K1);
        const X_O2 = X_A1 + X_B1 - X_O1;
        const Y_O2 = Y_A1 + Y_B1 - Y_O1;
        const X_B2 = X_A1, Y_B2 = Y_A1;
        const X_C2 = X_B1, Y_C2 = Y_B1;
        const X_A2 = X_O2 * 2 - X_C2, Y_A2 = Y_C2;
        const ANGLE_D2 = ANGLE_SMALL;
        const X_D2 = X_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_D2);
        const Y_D2 = Y_O2 - SIZE_LONG_MIDLINE * cos(ANGLE_D2);
        const ANGLE_E2 = ANGLE_SMALL * 1.5;
        const X_E2 = X_O2 + SIDE_LONG * sin(ANGLE_E2);
        const Y_E2 = Y_O2 - SIDE_LONG * cos(ANGLE_E2);
        const ANGLE_F2 = ANGLE_SMALL * 2 - ANGLE_90;
        const X_F2 = X_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_F2);
        const Y_F2 = Y_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_F2);
        const ANGLE_G2 = ANGLE_SMALL * 2.5 - ANGLE_90;
        const X_G2 = X_O2 + SIDE_LONG * cos(ANGLE_G2);
        const Y_G2 = Y_O2 + SIDE_LONG * sin(ANGLE_G2);
        const ANGLE_H2 = ANGLE_SMALL * 3 - ANGLE_90;
        const X_H2 = X_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_H2);
        const Y_H2 = Y_O2 + SIZE_LONG_MIDLINE * sin(ANGLE_H2);
        const ANGLE_I2 = PI - ANGLE_SMALL * 3.5;
        const X_I2 = X_O2 + SIDE_LONG * sin(ANGLE_I2);
        const Y_I2 = Y_O2 + SIDE_LONG * cos(ANGLE_I2);
        const ANGLE_J2 = ANGLE_SMALL * 4 - PI;
        const X_J2 = X_O2 - SIZE_LONG_MIDLINE * sin(ANGLE_J2);
        const Y_J2 = Y_O2 + SIZE_LONG_MIDLINE * cos(ANGLE_J2);
        const ANGLE_K2 = ANGLE_SMALL * 4.5 - PI;
        const X_K2 = X_O2 - SIDE_LONG * sin(ANGLE_K2);
        const Y_K2 = Y_O2 + SIDE_LONG * cos(ANGLE_K2);
        const ANGLE_A2E = ANGLE_EXTEND - HALF_ANGLE_SMALL;
        const X_A2E = X_A2 - PASTE_WIDTH * sin(ANGLE_A2E);
        const Y_A2E = Y_A2 + PASTE_WIDTH * cos(ANGLE_A2E);
        const ANGLE_O2E = ANGLE_EXTEND + HALF_ANGLE_SMALL;
        const X_O2E = X_O2 - PASTE_WIDTH * sin(ANGLE_O2E);
        const Y_O2E = Y_O2 - PASTE_WIDTH * cos(ANGLE_O2E);
        const ANGLE_O1E = ANGLE_EXTEND + HALF_ANGLE_SMALL;
        const X_O1E = X_O1 - PASTE_WIDTH * sin(ANGLE_O1E);
        const Y_O1E = Y_O1 + PASTE_WIDTH * cos(ANGLE_O1E);
        const ANGLE_K1E = PI - (ANGLE_EXTEND + ANGLE_MIDDLE + ANGLE_SMALL * 4.5 - PI);
        const X_K1E = X_K1 + PASTE_WIDTH * sin(ANGLE_K1E);
        const Y_K1E = Y_K1 - PASTE_WIDTH * cos(ANGLE_K1E);
        const ANGLE_A1E = ANGLE_EXTEND - HALF_ANGLE_SMALL;
        const X_A1E = X_A1 - PASTE_WIDTH * sin(ANGLE_A1E);
        const Y_A1E = Y_A1 - PASTE_WIDTH * cos(ANGLE_A1E);
        const ANGLE_B1E = ANGLE_BIG * 0.5 + ANGLE_EXTEND - ANGLE_90;
        const X_B1E = X_B1 + PASTE_WIDTH * cos(ANGLE_B1E);
        const Y_B1E = Y_B1 + PASTE_WIDTH * sin(ANGLE_B1E);
        const ANGLE_C1E1 = PI - (ANGLE_EXTEND + ANGLE_MIDDLE + HALF_ANGLE_SMALL);
        const X_C1E1 = X_C1 - PASTE_WIDTH * sin(ANGLE_C1E1);
        const Y_C1E1 = Y_C1 + PASTE_WIDTH * cos(ANGLE_C1E1);
        const ANGLE_C1E2 = PI - (ANGLE_EXTEND + ANGLE_MIDDLE - HALF_ANGLE_SMALL);
        const X_C1E2 = X_C1 + PASTE_WIDTH * sin(ANGLE_C1E2);
        const Y_C1E2 = Y_C1 + PASTE_WIDTH * cos(ANGLE_C1E2);
        const ANGLE_D1E1 = atan((X_D1 - X_C1) / (Y_C1 - Y_D1)) - ANGLE_EXTEND;
        const X_D1E1 = X_D1 - PASTE_WIDTH * sin(ANGLE_D1E1);
        const Y_D1E1 = Y_D1 + PASTE_WIDTH * cos(ANGLE_D1E1);
        const ANGLE_DE = atan((X_E1 - X_D1) / (Y_D1 - Y_E1));
        const ANGLE_D1E2 = ANGLE_DE - ANGLE_EXTEND;
        const X_D1E2 = X_D1 + PASTE_WIDTH * cos(ANGLE_D1E2);
        const Y_D1E2 = Y_D1 + PASTE_WIDTH * sin(ANGLE_D1E2);
        const ANGLE_E1E1 = ANGLE_EXTEND - ANGLE_DE;
        const X_E1E1 = X_E1 + PASTE_WIDTH * sin(ANGLE_E1E1);
        const Y_E1E1 = Y_E1 + PASTE_WIDTH * cos(ANGLE_E1E1);
        const ANGLE_EF = atan((X_F1 - X_E1) / (Y_E1 - Y_F1));
        const ANGLE_E1E2 = ANGLE_EXTEND - ANGLE_EF;
        const X_E1E2 = X_E1 + PASTE_WIDTH * cos(ANGLE_E1E2);
        const Y_E1E2 = Y_E1 - PASTE_WIDTH * sin(ANGLE_E1E2);
        const ANGLE_F1E1 = ANGLE_90 - (ANGLE_EF + ANGLE_EXTEND);
        const X_F1E1 = X_F1 + PASTE_WIDTH * sin(ANGLE_F1E1);
        const Y_F1E1 = Y_F1 + PASTE_WIDTH * cos(ANGLE_F1E1);
        const ANGLE_FG = atan((X_F1 - X_G1) / (Y_F1 - Y_G1));
        const ANGLE_F1E2 = ANGLE_90 - (ANGLE_FG + ANGLE_EXTEND);
        const X_F1E2 = X_F1 + PASTE_WIDTH * sin(ANGLE_F1E2);
        const Y_F1E2 = Y_F1 - PASTE_WIDTH * cos(ANGLE_F1E2);
        const ANGLE_G1E1 = ANGLE_FG - ANGLE_EXTEND;
        const X_G1E1 = X_G1 + PASTE_WIDTH * cos(ANGLE_G1E1);
        const Y_G1E1 = Y_G1 - PASTE_WIDTH * sin(ANGLE_G1E1);
        const ANGLE_GH = atan((X_G1 - X_H1) / (Y_G1 - Y_H1));
        const ANGLE_G1E2 = ANGLE_90 - (ANGLE_GH + ANGLE_EXTEND);
        const X_G1E2 = X_G1 + PASTE_WIDTH * sin(ANGLE_G1E2);
        const Y_G1E2 = Y_G1 - PASTE_WIDTH * cos(ANGLE_G1E2);
        const ANGLE_H1E1 = ANGLE_EXTEND - ANGLE_GH;
        const X_H1E1 = X_H1 + PASTE_WIDTH * cos(ANGLE_H1E1);
        const Y_H1E1 = Y_H1 + PASTE_WIDTH * sin(ANGLE_H1E1);
        const ANGLE_HI = atan((X_H1 - X_I1) / (Y_H1 - Y_I1));
        const ANGLE_H1E2 = ANGLE_EXTEND + ANGLE_HI;
        const X_H1E2 = X_H1 - PASTE_WIDTH * cos(ANGLE_H1E2);
        const Y_H1E2 = Y_H1 + PASTE_WIDTH * sin(ANGLE_H1E2);
        const ANGLE_I1E1 = ANGLE_EXTEND + ANGLE_HI;
        const X_I1E1 = X_I1 + PASTE_WIDTH * cos(ANGLE_I1E1);
        const Y_I1E1 = Y_I1 + PASTE_WIDTH * sin(ANGLE_I1E1);
        const ANGLE_IJ = atan((X_I1 - X_J1) / (Y_I1 - Y_J1));
        const ANGLE_I1E2 = ANGLE_EXTEND + ANGLE_IJ;
        const X_I1E2 = X_I1 + PASTE_WIDTH * cos(ANGLE_I1E2);
        const Y_I1E2 = Y_I1 - PASTE_WIDTH * sin(ANGLE_I1E2);
        const ANGLE_J1E1 = ANGLE_IJ - ANGLE_EXTEND;
        const X_J1E1 = X_J1 + PASTE_WIDTH * cos(ANGLE_J1E1);
        const Y_J1E1 = Y_J1 - PASTE_WIDTH * sin(ANGLE_J1E1);
        const ANGLE_JK = atan((X_J1 - X_K1) / (Y_K1 - Y_J1));
        const ANGLE_J1E2 = ANGLE_JK - ANGLE_EXTEND;
        const X_J1E2 = X_J1 - PASTE_WIDTH * cos(ANGLE_J1E2);
        const Y_J1E2 = Y_J1 - PASTE_WIDTH * sin(ANGLE_J1E2);
        drawOuterLine(X_B1E, X_B1, Y_B1E, Y_B1);
        drawOuterLine(X_B1E, X_C1E1, Y_B1E, Y_C1E1);
        drawOuterLine(X_C1E1, X_C1, Y_C1E1, Y_C1);
        drawOuterLine(X_C1, X_C1E2, Y_C1, Y_C1E2);
        drawOuterLine(X_C1E2, X_D1E1, Y_C1E2, Y_D1E1);
        drawOuterLine(X_D1E1, X_D1, Y_D1E1, Y_D1);
        drawOuterLine(X_D1, X_D1E2, Y_D1, Y_D1E2);
        drawOuterLine(X_D1E2, X_E1E1, Y_D1E2, Y_E1E1);
        drawOuterLine(X_E1E1, X_E1, Y_E1E1, Y_E1);
        drawOuterLine(X_E1, X_E1E2, Y_E1, Y_E1E2);
        drawOuterLine(X_E1E2, X_F1E1, Y_E1E2, Y_F1E1);
        drawOuterLine(X_F1E1, X_F1, Y_F1E1, Y_F1);
        drawOuterLine(X_F1, X_F1E2, Y_F1, Y_F1E2);
        drawOuterLine(X_F1E2, X_G1E1, Y_F1E2, Y_G1E1);
        drawOuterLine(X_G1E1, X_G1, Y_G1E1, Y_G1);
        drawOuterLine(X_G1, X_G1E2, Y_G1, Y_G1E2);
        drawOuterLine(X_G1E2, X_H1E1, Y_G1E2, Y_H1E1);
        drawOuterLine(X_H1E1, X_H1, Y_H1E1, Y_H1);
        drawOuterLine(X_H1, X_H1E2, Y_H1, Y_H1E2);
        drawOuterLine(X_H1E2, X_I1E1, Y_H1E2, Y_I1E1);
        drawOuterLine(X_I1E1, X_I1, Y_I1E1, Y_I1);
        drawOuterLine(X_I1, X_I1E2, Y_I1, Y_I1E2);
        drawOuterLine(X_I1E2, X_J1E1, Y_I1E2, Y_J1E1);
        drawOuterLine(X_J1E1, X_J1, Y_J1E1, Y_J1);
        drawOuterLine(X_J1, X_J1E2, Y_J1, Y_J1E2);
        drawOuterLine(X_J1E2, X_K1E, Y_J1E2, Y_K1E);
        drawOuterLine(X_K1E, X_K1, Y_K1E, Y_K1);
        drawOuterLine(X_O1, X_K1, Y_O1, Y_K1);
        drawInnerLine(X_K1, X_J1, Y_K1, Y_J1);
        drawInnerLine(X_J1, X_I1, Y_J1, Y_I1);
        drawInnerLine(X_I1, X_H1, Y_I1, Y_H1);
        drawInnerLine(X_H1, X_G1, Y_H1, Y_G1);
        drawInnerLine(X_G1, X_F1, Y_G1, Y_F1);
        drawInnerLine(X_F1, X_E1, Y_F1, Y_E1);
        drawInnerLine(X_E1, X_D1, Y_E1, Y_D1);
        drawInnerLine(X_D1, X_C1, Y_D1, Y_C1);
        drawInnerLine(X_C1, X_B1, Y_C1, Y_B1);
        drawInnerLine(X_B1, X_A1, Y_B1, Y_A1);
        drawInnerLine(X_O1, X_I1, Y_O1, Y_I1);
        drawInnerLine(X_O1, X_G1, Y_O1, Y_G1);
        drawInnerLine(X_O1, X_E1, Y_O1, Y_E1);
        drawInnerLine(X_O1, X_C1, Y_O1, Y_C1);
        drawInnerLine(X_O1, X_A1, Y_O1, Y_A1);
        drawOuterLine(X_O2, X_K2, Y_O2, Y_K2);
        drawOuterLine(X_K2, X_J2, Y_K2, Y_J2);
        drawOuterLine(X_J2, X_I2, Y_J2, Y_I2);
        drawOuterLine(X_I2, X_H2, Y_I2, Y_H2);
        drawOuterLine(X_H2, X_G2, Y_H2, Y_G2);
        drawOuterLine(X_G2, X_F2, Y_G2, Y_F2);
        drawOuterLine(X_F2, X_E2, Y_F2, Y_E2);
        drawOuterLine(X_E2, X_D2, Y_E2, Y_D2);
        drawOuterLine(X_D2, X_C2, Y_D2, Y_C2);
        drawInnerLine(X_C2, X_B2, Y_C2, Y_B2);
        drawOuterLine(X_B2, X_A2, Y_B2, Y_A2);
        drawInnerLine(X_O2, X_I2, Y_O2, Y_I2);
        drawInnerLine(X_O2, X_G2, Y_O2, Y_G2);
        drawInnerLine(X_O2, X_E2, Y_O2, Y_E2);
        drawInnerLine(X_O2, X_C2, Y_O2, Y_C2);
        drawInnerLine(X_O2, X_A2, Y_O2, Y_A2);
        drawOuterLine(X_O1, X_O1E, Y_O1, Y_O1E);
        drawOuterLine(X_O1E, X_A1E, Y_O1E, Y_A1E);
        drawOuterLine(X_A1E, X_A1, Y_A1E, Y_A1);
        drawOuterLine(X_K1E, X_K1, Y_K1E, Y_K1);
        drawOuterLine(X_O2, X_O2E, Y_O2, Y_O2E);
        drawOuterLine(X_O2E, X_A2E, Y_O2E, Y_A2E);
        drawOuterLine(X_A2E, X_A2, Y_A2E, Y_A2);
        this.textData = {
            X_A1,
            X_A2,
            X_C1,
            X_C2,
            X_E1,
            X_E2,
            X_G1,
            X_G2,
            X_I1,
            X_I2,
            X_K1,
            X_K2,
            Y_A1,
            Y_A2,
            Y_C1,
            Y_C2,
            Y_E1,
            Y_E2,
            Y_G1,
            Y_G2,
            Y_I1,
            Y_I2,
            Y_K1,
            Y_K2,
            ANGLE_SMALL_DEGREE
        };
    }
    textData;
    setTextsInfo() {
        const { CONTENTS } = this;
        const { X_A1, X_A2, X_C1, X_C2, X_E1, X_E2, X_G1, X_G2, X_I1, X_I2, X_K1, X_K2, Y_A1, Y_A2, Y_C1, Y_C2, Y_E1, Y_E2, Y_G1, Y_G2, Y_I1, Y_I2, Y_K1, Y_K2, ANGLE_SMALL_DEGREE } = this.textData;
        [
            {
                x: (X_A2 + X_C2) * 0.5,
                y: (Y_A2 + Y_C2) * 0.5,
                rotate: 0
            },
            {
                x: (X_G1 + X_I1) * 0.5,
                y: (Y_G1 + Y_I1) * 0.5,
                rotate: 360 - ANGLE_SMALL_DEGREE * 3
            },
            {
                x: (X_E2 + X_G2) * 0.5,
                y: (Y_E2 + Y_G2) * 0.5,
                rotate: ANGLE_SMALL_DEGREE * 2
            },
            {
                x: (X_A1 + X_C1) * 0.5,
                y: (Y_A1 + Y_C1) * 0.5,
                rotate: 0
            },
            {
                x: (X_I2 + X_K2) * 0.5,
                y: (Y_I2 + Y_K2) * 0.5,
                rotate: ANGLE_SMALL_DEGREE * 4
            },
            {
                x: (X_C1 + X_E1) * 0.5,
                y: (Y_C1 + Y_E1) * 0.5,
                rotate: -ANGLE_SMALL_DEGREE
            },
            {
                x: (X_G2 + X_I2) * 0.5,
                y: (Y_G2 + Y_I2) * 0.5,
                rotate: ANGLE_SMALL_DEGREE * 3
            },
            {
                x: (X_I1 + X_K1) * 0.5,
                y: (Y_I1 + Y_K1) * 0.5,
                rotate: 360 - ANGLE_SMALL_DEGREE * 4
            },
            {
                x: (X_C2 + X_E2) * 0.5,
                y: (Y_C2 + Y_E2) * 0.5,
                rotate: ANGLE_SMALL_DEGREE
            },
            {
                x: (X_E1 + X_G1) * 0.5,
                y: (Y_E1 + Y_G1) * 0.5,
                rotate: 360 - ANGLE_SMALL_DEGREE * 2
            }
        ].map(({ x, y, rotate }, i)=>{
            this.infos.push({
                content: CONTENTS[i],
                x,
                y,
                rotate
            });
        });
    }
}
export { DiceFace10 as default };
