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
CURRENT_URL.includes("?") ? CURRENT_URL.split("?")[1] : ACTUAL_PAGE_NAME;
const SVG_NS = "http://www.w3.org/2000/svg";
const SVG_XLINKNS = "http://www.w3.org/1999/xlink";
class DiceBase {
    SVG_NS = SVG_NS;
    SVG_XLINKNS = SVG_XLINKNS;
    svg;
    SIDE_LENGTH;
    INNER_LINE_STYLE;
    OUTER_LINE_STYLE;
    viewBox;
    OPTIONS;
    mmToPxScale;
    infos;
    CONTENTS;
    constructor(svg, SIDE_LENGTH, INNER_LINE_STYLE, OUTER_LINE_STYLE, viewBox, OPTIONS, mmToPxScale, infos, CONTENTS){
        this.svg = svg;
        this.SIDE_LENGTH = SIDE_LENGTH;
        this.INNER_LINE_STYLE = INNER_LINE_STYLE;
        this.OUTER_LINE_STYLE = OUTER_LINE_STYLE;
        this.viewBox = viewBox;
        this.OPTIONS = OPTIONS;
        this.mmToPxScale = mmToPxScale;
        this.infos = infos;
        this.CONTENTS = CONTENTS;
    }
    draw() {
        this.drawGraphs();
        this.setTextsInfo();
    }
    setSvgTextInfo(info, x, y, rotate) {
        info.x = x;
        info.y = y;
        info.rotate = rotate;
    }
    appendLine(svg, STYLE, x1, x2, y1, y2, viewBox) {
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
    appendCircle(svg, STYLE, cx, cy, radius, viewBox) {
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
    appendTspan(text, STYLE, CHAR, dx, dy, rotate) {
        const tspan = document.createElementNS(SVG_NS, "tspan");
        tspan.setAttribute("dx", `${dx}mm`);
        tspan.setAttribute("dy", `${dy}mm`);
        tspan.setAttribute("rotate", rotate.toString());
        tspan.setAttribute("style", STYLE.concat("dominant-baseline:middle;text-anchor:middle;", CHAR === "6" || CHAR === "9" ? "text-decoration:underline;" : "", CHAR === "ü" ? "opacity:0.85;font-size:0.9em;" : ""));
        tspan.innerHTML = CHAR;
        text.appendChild(tspan);
    }
    getSinByAngle(angle) {
        return Math.sin(angle * Math.PI / 180);
    }
    getCosByAngle(angle) {
        return Math.cos(angle * Math.PI / 180);
    }
}
class DiceFace8 extends DiceBase {
    drawGraphs() {
        const HEIGHT_OF_ONE = this.SIDE_LENGTH * 1.732 * 0.5;
        const HEIGHT_OF_TWO = HEIGHT_OF_ONE * 2;
        const BOTTOM = HEIGHT_OF_ONE * 3;
        this.appendLine(this.svg, this.INNER_LINE_STYLE, 0, this.SIDE_LENGTH * 2, HEIGHT_OF_ONE, HEIGHT_OF_ONE, null);
        this.appendLine(this.svg, this.INNER_LINE_STYLE, this.SIDE_LENGTH * 0.5, this.SIDE_LENGTH * 2.5, HEIGHT_OF_TWO, HEIGHT_OF_TWO, null);
        this.appendLine(this.svg, this.INNER_LINE_STYLE, this.SIDE_LENGTH * 1, this.SIDE_LENGTH * 0.5, HEIGHT_OF_ONE, HEIGHT_OF_TWO, null);
        this.appendLine(this.svg, this.INNER_LINE_STYLE, this.SIDE_LENGTH * 2, this.SIDE_LENGTH * 1.5, HEIGHT_OF_ONE, HEIGHT_OF_TWO, null);
        this.appendLine(this.svg, this.INNER_LINE_STYLE, this.SIDE_LENGTH * 3, this.SIDE_LENGTH * 2, HEIGHT_OF_ONE, BOTTOM, null);
        this.appendLine(this.svg, this.INNER_LINE_STYLE, this.SIDE_LENGTH * 1, this.SIDE_LENGTH * 1.5, HEIGHT_OF_ONE, HEIGHT_OF_TWO, null);
        this.appendLine(this.svg, this.INNER_LINE_STYLE, this.SIDE_LENGTH * 1.5, this.SIDE_LENGTH * 2.5, 0, HEIGHT_OF_TWO, null);
        this.appendLine(this.svg, this.INNER_LINE_STYLE, this.SIDE_LENGTH * 3, this.SIDE_LENGTH * 3.5, HEIGHT_OF_ONE, HEIGHT_OF_TWO, null);
        const EXTNED_LENGTH = 0.15 * this.SIDE_LENGTH;
        const OFFSET_X = EXTNED_LENGTH * 0.5;
        const OFFSET_Y = EXTNED_LENGTH * Math.cos(30 / 180 * Math.PI);
        let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
        x1 = 0, x2 = OFFSET_X, y1 = HEIGHT_OF_ONE, y2 = HEIGHT_OF_ONE - OFFSET_Y;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 = this.SIDE_LENGTH - OFFSET_X, y1 = y2;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 = this.SIDE_LENGTH, y1 = y2, y2 = HEIGHT_OF_ONE;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 += this.SIDE_LENGTH * 0.5, y1 = y2, y2 = 0;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 += EXTNED_LENGTH, y1 = y2, y2 = 0;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 += this.SIDE_LENGTH * 0.5 - OFFSET_X, y1 = y2, y2 = HEIGHT_OF_ONE - OFFSET_Y;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 += this.SIDE_LENGTH + EXTNED_LENGTH, y1 = y2, y2 += 0;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 += this.SIDE_LENGTH * 0.5 - EXTNED_LENGTH + OFFSET_X, y1 = y2, y2 += HEIGHT_OF_ONE - OFFSET_Y;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 -= this.SIDE_LENGTH, y1 = y2, y2 += 0;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 += OFFSET_X, y1 = y2, y2 += OFFSET_Y;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 += EXTNED_LENGTH - this.SIDE_LENGTH * 0.5 - OFFSET_X, y1 = y2, y2 += HEIGHT_OF_ONE - OFFSET_Y;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 -= EXTNED_LENGTH, y1 = y2, y2 += 0;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 -= this.SIDE_LENGTH * 0.5, y1 = y2, y2 -= HEIGHT_OF_ONE;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 -= OFFSET_X, y1 = y2, y2 += OFFSET_Y;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 -= this.SIDE_LENGTH - OFFSET_X * 2, y1 = y2, y2 += 0;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        x1 = x2, x2 -= OFFSET_X + this.SIDE_LENGTH * 0.5, y1 = y2, y2 -= OFFSET_Y + HEIGHT_OF_ONE;
        this.appendLine(this.svg, this.OUTER_LINE_STYLE, x1, x2, y1, y2, null);
        this.viewBox.right = this.SIDE_LENGTH * 3.5 + EXTNED_LENGTH;
        this.viewBox.bottom = BOTTOM;
    }
    setTextsInfo() {
        this.setSvgTextInfo(this.infos[0], this.SIDE_LENGTH * 37.5 / 25, this.SIDE_LENGTH * 15.0 / 25, 0);
        this.setSvgTextInfo(this.infos[5], this.SIDE_LENGTH * 78.0 / 25, this.SIDE_LENGTH * 38.0 / 25, 180);
        this.setSvgTextInfo(this.infos[3], this.SIDE_LENGTH * 25.5 / 25, this.SIDE_LENGTH * 38.0 / 25, 0);
        this.setSvgTextInfo(this.infos[6], this.SIDE_LENGTH * 53.0 / 25, this.SIDE_LENGTH * 38.0 / 25, 180);
        this.setSvgTextInfo(this.infos[2], this.SIDE_LENGTH * 50.0 / 25, this.SIDE_LENGTH * 38.0 / 25, 0);
        this.setSvgTextInfo(this.infos[4], this.SIDE_LENGTH * 28.5 / 25, this.SIDE_LENGTH * 38.0 / 25, 180);
        this.setSvgTextInfo(this.infos[1], this.SIDE_LENGTH * 75.0 / 25, this.SIDE_LENGTH * 39.0 / 25, 0);
        this.setSvgTextInfo(this.infos[7], this.SIDE_LENGTH * 41.5 / 25, this.SIDE_LENGTH * 17.5 / 25, 180);
    }
}
export { DiceFace8 as default };
