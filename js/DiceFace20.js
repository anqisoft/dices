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
class DiceFace20 extends DiceBase {
    drawGraphs() {
        const pasteRegion = this.SIDE_LENGTH * 0.2;
        const pasteRegionPx = pasteRegion * this.mmToPxScale;
        const ANGLE60 = Math.PI * 60 / 180;
        const SIN60 = Math.sin(ANGLE60);
        const COS60 = Math.cos(ANGLE60);
        const OneX = this.SIDE_LENGTH * COS60;
        const OneY = this.SIDE_LENGTH * SIN60;
        const pasteRegionShortBiasX = pasteRegion * COS60;
        const pasteRegionShortBiasY = pasteRegion * SIN60;
        const pasteRegionLongBias = this.SIDE_LENGTH * (1 - 0.2);
        const pasteRegionLongBiasX = pasteRegionLongBias * COS60;
        const pasteRegionLongBiasY = pasteRegionLongBias * SIN60;
        const TwoY = OneY * 2;
        const ThreeY = OneY * 3;
        let x1 = 0, x2 = 0, y1 = 0, y2 = 0;
        let FIVE_SIDE = this.SIDE_LENGTH * 5;
        x1 = pasteRegionLongBiasX + pasteRegion, x2 = x1 + FIVE_SIDE;
        y1 = OneY, y2 = y1;
        this.appendLine(this.svg, this.INNER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
        x1 = x1 - OneX, x2 = x1 + FIVE_SIDE;
        y1 += OneY, y2 = y1;
        this.appendLine(this.svg, this.INNER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
        x1 -= OneX, x2 = x1 - OneX;
        y1 = OneY, y2 = TwoY;
        for(let i = 0; i < 5; ++i){
            x1 += this.SIDE_LENGTH, x2 += this.SIDE_LENGTH;
            this.appendLine(this.svg, this.INNER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
        }
        x1 = pasteRegionShortBiasX, x2 = x1 + OneX;
        y1 = TwoY, y2 = ThreeY;
        this.appendLine(this.svg, this.INNER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
        x1 += OneX, x2 += OneX * 2;
        y1 = OneY, y2 = y1 + TwoY;
        this.appendLine(this.svg, this.INNER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
        x1 -= OneX;
        y1 = 0;
        for(let i = 0; i < 3; ++i){
            x1 += this.SIDE_LENGTH, x2 += this.SIDE_LENGTH;
            this.appendLine(this.svg, this.INNER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
        }
        x1 += this.SIDE_LENGTH, x2 += OneX;
        y2 = TwoY;
        this.appendLine(this.svg, this.INNER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
        x1 += this.SIDE_LENGTH, x2 += OneX;
        y2 = OneY;
        this.appendLine(this.svg, this.INNER_LINE_STYLE, x1, x2, y1, y2, this.viewBox);
        const OneXPx = OneX * this.mmToPxScale;
        const OneYPx = OneY * this.mmToPxScale;
        const pasteRegionShortBiasXPx = pasteRegionShortBiasX * this.mmToPxScale;
        const pasteRegionShortBiasYPx = pasteRegionShortBiasY * this.mmToPxScale;
        const pasteRegionLongBiasXPx = pasteRegionLongBiasX * this.mmToPxScale;
        const pasteRegionLongBiasYPx = pasteRegionLongBiasY * this.mmToPxScale;
        const path = document.createElementNS(this.SVG_NS, "path");
        path.setAttribute("fill", "none");
        path.setAttribute("stroke", "#000000");
        path.setAttribute("d", `M 0, ${OneYPx + pasteRegionLongBiasYPx} `.concat(`l ${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `h ${pasteRegionPx}`, `l ${OneXPx}, -${OneYPx}`, `h ${pasteRegionPx}`, `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`, `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`, `l ${OneXPx}, -${OneYPx}`, `h ${pasteRegionPx}`, `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`, `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`, `l ${OneXPx}, -${OneYPx}`, `h ${pasteRegionPx}`, `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`, `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`, `l ${OneXPx}, -${OneYPx}`, `h ${pasteRegionPx}`, `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`, `l -${pasteRegionShortBiasXPx}, ${pasteRegionShortBiasYPx}`, `l ${OneXPx}, -${OneYPx}`, `h ${pasteRegionPx}`, `l ${pasteRegionLongBiasXPx}, ${pasteRegionLongBiasYPx}`, `l -${pasteRegionShortBiasXPx + OneXPx * 2}, ${pasteRegionShortBiasYPx + OneYPx * 2}`, `h -${pasteRegionPx}`, `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`, `l -${OneXPx}, ${OneYPx}`, `h -${pasteRegionPx}`, `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`, `l -${OneXPx}, ${OneYPx}`, `h -${pasteRegionPx}`, `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`, `l -${OneXPx}, ${OneYPx}`, `h -${pasteRegionPx}`, `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`, `l -${OneXPx}, ${OneYPx}`, `h -${pasteRegionPx}`, `l -${pasteRegionLongBiasXPx}, -${pasteRegionLongBiasYPx}`, `l ${pasteRegionShortBiasXPx}, -${pasteRegionShortBiasYPx}`, " z"));
        this.svg.appendChild(path);
        this.viewBox.right = this.SIDE_LENGTH * 5 + OneX + pasteRegion;
        this.viewBox.bottom = OneY * 3;
    }
    setTextsInfo() {
        this.setSvgTextInfo(this.infos[0], this.SIDE_LENGTH * 27.5 / 25, this.SIDE_LENGTH * 15.0 / 25, 0);
        this.setSvgTextInfo(this.infos[1], this.SIDE_LENGTH * 52.5 / 25, this.SIDE_LENGTH * 15.0 / 25, 0);
        this.setSvgTextInfo(this.infos[2], this.SIDE_LENGTH * 77.5 / 25, this.SIDE_LENGTH * 15.0 / 25, 0);
        this.setSvgTextInfo(this.infos[3], this.SIDE_LENGTH * 102.5 / 25, this.SIDE_LENGTH * 15.0 / 25, 0);
        this.setSvgTextInfo(this.infos[4], this.SIDE_LENGTH * 127.5 / 25, this.SIDE_LENGTH * 15.0 / 25, 0);
        this.setSvgTextInfo(this.infos[5], this.SIDE_LENGTH * 15.0 / 25, this.SIDE_LENGTH * 36.65 / 25, 0);
        this.setSvgTextInfo(this.infos[6], this.SIDE_LENGTH * 40.0 / 25, this.SIDE_LENGTH * 36.65 / 25, 0);
        this.setSvgTextInfo(this.infos[7], this.SIDE_LENGTH * 65.0 / 25, this.SIDE_LENGTH * 36.65 / 25, 0);
        this.setSvgTextInfo(this.infos[8], this.SIDE_LENGTH * 90.0 / 25, this.SIDE_LENGTH * 36.65 / 25, 0);
        this.setSvgTextInfo(this.infos[9], this.SIDE_LENGTH * 115.0 / 25, this.SIDE_LENGTH * 36.65 / 25, 0);
        this.setSvgTextInfo(this.infos[10], this.SIDE_LENGTH * 115.0 / 25, this.SIDE_LENGTH * 38.75 / 25, 180);
        this.setSvgTextInfo(this.infos[11], this.SIDE_LENGTH * 90.0 / 25, this.SIDE_LENGTH * 38.75 / 25, 180);
        this.setSvgTextInfo(this.infos[12], this.SIDE_LENGTH * 65.0 / 25, this.SIDE_LENGTH * 38.75 / 25, 180);
        this.setSvgTextInfo(this.infos[13], this.SIDE_LENGTH * 40.0 / 25, this.SIDE_LENGTH * 38.75 / 25, 180);
        this.setSvgTextInfo(this.infos[14], this.SIDE_LENGTH * 15.0 / 25, this.SIDE_LENGTH * 38.75 / 25, 180);
        this.setSvgTextInfo(this.infos[15], this.SIDE_LENGTH * 127.5 / 25, this.SIDE_LENGTH * 16.25 / 25, 180);
        this.setSvgTextInfo(this.infos[16], this.SIDE_LENGTH * 102.5 / 25, this.SIDE_LENGTH * 16.25 / 25, 180);
        this.setSvgTextInfo(this.infos[17], this.SIDE_LENGTH * 77.5 / 25, this.SIDE_LENGTH * 16.25 / 25, 180);
        this.setSvgTextInfo(this.infos[18], this.SIDE_LENGTH * 52.5 / 25, this.SIDE_LENGTH * 16.25 / 25, 180);
        this.setSvgTextInfo(this.infos[19], this.SIDE_LENGTH * 27.5 / 25, this.SIDE_LENGTH * 16.25 / 25, 180);
    }
}
export { DiceFace20 as default };
