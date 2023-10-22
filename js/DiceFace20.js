// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

var edu;
(function(edu) {
    let sonya;
    (function(sonya) {
        let cc;
        (function(cc) {
            var DOMAIN = cc.DOMAIN = "edu.sonya.cc";
            cc.FILENAME_POSTFIX = DOMAIN.concat("_");
            var CURRENT_URL = cc.CURRENT_URL = window.location.href;
            var HOME_URL = cc.HOME_URL = CURRENT_URL.startsWith("file:///") ? "file:///P:/ecs_person/websites/sonya.cc/edu_git/src/index.htm" : "http://edu.sonya.cc/";
            (function() {
                const myWindow = window;
                if (!myWindow.top || CURRENT_URL.startsWith("file:///")) return;
                if (!myWindow.top.location.href.startsWith(HOME_URL)) {
                    myWindow.top.location.replace(HOME_URL);
                }
            })();
            cc.HOME_URL_LENGTH = HOME_URL.length;
            let ActualPage;
            (function(ActualPage) {
                ActualPage[ActualPage["home"] = 0] = "home";
                ActualPage[ActualPage["bricks"] = 1] = "bricks";
                ActualPage[ActualPage["brick"] = 2] = "brick";
                ActualPage[ActualPage["treasures"] = 3] = "treasures";
                ActualPage[ActualPage["stories"] = 4] = "stories";
                ActualPage[ActualPage["story"] = 5] = "story";
                ActualPage[ActualPage["about"] = 6] = "about";
                ActualPage[ActualPage["report"] = 7] = "report";
            })(ActualPage = cc.ActualPage || (cc.ActualPage = {}));
            var ACTUAL_PAGE_NAME_ARRAY = cc.ACTUAL_PAGE_NAME_ARRAY = [
                "home",
                "bricks",
                "brick",
                "treasures",
                "stories",
                "story",
                "about",
                "report"
            ];
            cc.getActualPageName = (value)=>ACTUAL_PAGE_NAME_ARRAY[value];
            var getActualPageValueByName = cc.getActualPageValueByName = (name)=>ACTUAL_PAGE_NAME_ARRAY.indexOf(name);
            var PARAMETER_FOR_ACTUAL_PAGE = cc.PARAMETER_FOR_ACTUAL_PAGE = "go";
            var ACTUAL_PAGE_VALUE = cc.ACTUAL_PAGE_VALUE = CURRENT_URL.indexOf("?".concat(PARAMETER_FOR_ACTUAL_PAGE, "=")) > -1 ? getActualPageValueByName(CURRENT_URL.split("?")[1].split("&")[0].split("=")[1]) : ActualPage.home;
            cc.ACTUAL_PAGE_NAME = ACTUAL_PAGE_NAME_ARRAY[ACTUAL_PAGE_VALUE];
            var SITE_ROOT = cc.SITE_ROOT = HOME_URL.substring(0, HOME_URL.lastIndexOf("/") + 1);
            cc.SITE_IMAGE_PATH = `${SITE_ROOT}images/`;
            cc.SITE_JAVASCRIPT_PATH = `${SITE_ROOT}js/`;
            cc.SITE_CSS_PATH = `${SITE_ROOT}css/`;
            var getPageParameterByName = cc.getPageParameterByName = (name, defaultValue)=>{
                return CURRENT_URL.indexOf(`&${name}=`) === -1 ? defaultValue || "" : CURRENT_URL.split("&").slice(1).filter((keyValue)=>keyValue.startsWith(`${name}=`))[0].split("=")[1];
            };
            cc.PAGE_SUB_KIND = getPageParameterByName("kind", null);
            cc.PAGE_IDNEX = parseInt(getPageParameterByName("page", "1"), 0) - 1;
            cc.PAGE_ID = parseInt(getPageParameterByName("id", "1"), 0);
            cc.MORE_BUTTON_HTML = "<en>more...</en><zh_cn>查看更多</zh_cn><zh_tw>查看更多</zh_tw>";
            cc.BRICK_SUB_KINDS = [
                {
                    name: "01_chinese",
                    title: {
                        en: "Chinese",
                        zh_cn: "语文",
                        zh_tw: "語文"
                    }
                },
                {
                    name: "02_math",
                    title: {
                        en: "Mathematics",
                        zh_cn: "数学",
                        zh_tw: "數學"
                    }
                },
                {
                    name: "03_english",
                    title: {
                        en: "English",
                        zh_cn: "英语",
                        zh_tw: "英語"
                    }
                },
                {
                    name: "04_programming",
                    title: {
                        en: "Programming",
                        zh_cn: "编程",
                        zh_tw: "程式設計"
                    }
                }
            ];
            cc.ACTIVATED_PROPERTY = "edu-activated";
            cc.SUB_KIND_NAME_PROPERTY = "edu-sub-kind-name";
            cc.LANG_PROPERTY = "edu-lang";
            cc.PAGE_PROPERTY = "edu-page";
            cc.DEVICE_PROPERTY = "edu-device";
            cc.REPORT_PROPERTY = "edu-report";
            cc.ID_PROPERTY = "edu-id";
            cc.PAPER_SIZE_PROPERTY = "edu-paper-size";
            cc.REPORT_KIND_PROPERTY = "edu-report-kind";
        })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
})(edu || (edu = {}));
const __default = edu.sonya.cc;
const { CURRENT_URL, ACTUAL_PAGE_NAME, LANG_PROPERTY } = __default;
var edu1;
const { getCurrentLang } = __default3;
(function(edu11) {
    let sonya;
    (function(sonya) {
        let cc;
        (function(cc) {
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
                    const path = edu1.sonya.cc.SvgHelper.createSvgPath();
                    path.setAttribute("fill", "none");
                    path.setAttribute("stroke", OUTER_LINE_COLOR);
                    path.setAttribute("d", `M 0, 0 `.concat(`h ${WIDTH_PX} `, `v ${HEIGHT_PX} `, `h -${WIDTH_PX} `, " z"));
                    svg.appendChild(path);
                }
                static appendOuterLine(svg, WIDTH, HEIGHT, OUTER_LINE_STYLE) {
                    svg.setAttribute("width", `${WIDTH}mm`);
                    svg.setAttribute("height", `${HEIGHT}mm`);
                    const { appendLine } = edu1.sonya.cc.SvgHelper;
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
            cc.SvgHelper = SvgHelper;
        })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu11.sonya || (edu11.sonya = {}));
})(edu1 || (edu1 = {}));
const __default1 = edu1.sonya.cc;
const { SvgHelper } = __default1;
var edu2;
(function(edu) {
    let sonya;
    (function(sonya) {
        let cc;
        (function(cc) {
            function hide(element) {
                if (element) element.style.display = "none";
            }
            cc.hide = hide;
            function showBlock(element) {
                if (element) element.style.display = "block";
            }
            cc.showBlock = showBlock;
            function showInlineBlock(element) {
                if (element) element.style.display = "inline-block";
            }
            cc.showInlineBlock = showInlineBlock;
            function showFlex(element) {
                if (element) element.style.display = "flex";
            }
            cc.showFlex = showFlex;
            function showInlineFlex(element) {
                if (element) element.style.display = "inline-flex";
            }
            cc.showInlineFlex = showInlineFlex;
            function getElementById(id) {
                return document.getElementById(id);
            }
            cc.getElementById = getElementById;
            function getElementByIdAndTagName(id, _tagName) {
                return document.getElementById(id);
            }
            cc.getElementByIdAndTagName = getElementByIdAndTagName;
            function querySelectorAll(selectors) {
                return document.querySelectorAll(selectors);
            }
            cc.querySelectorAll = querySelectorAll;
            function querySelectorAllByI18n() {
                return document.querySelectorAll("[i18n]");
            }
            cc.querySelectorAllByI18n = querySelectorAllByI18n;
            function querySelectorAllByI18nPlaceholder() {
                return document.querySelectorAll("[i18n-placeholder]");
            }
            cc.querySelectorAllByI18nPlaceholder = querySelectorAllByI18nPlaceholder;
            function getElementsByTagName(qualifiedName) {
                return document.getElementsByTagName(qualifiedName);
            }
            cc.getElementsByTagName = getElementsByTagName;
            function getHeadElement() {
                return document.getElementsByTagName("head")[0];
            }
            cc.getHeadElement = getHeadElement;
            function getHtmlElement() {
                return document.getElementsByTagName("html")[0];
            }
            cc.getHtmlElement = getHtmlElement;
            function getBodyElement() {
                return document.getElementsByTagName("body")[0];
            }
            cc.getBodyElement = getBodyElement;
            function getTitleElement() {
                return document.getElementsByTagName("title")[0];
            }
            cc.getTitleElement = getTitleElement;
            function getHeaderElement() {
                return document.getElementsByTagName("header")[0];
            }
            cc.getHeaderElement = getHeaderElement;
            function getFooterElement() {
                return document.getElementsByTagName("footer")[0];
            }
            cc.getFooterElement = getFooterElement;
            function getMainElement() {
                return document.getElementsByTagName("main")[0];
            }
            cc.getMainElement = getMainElement;
            function createElement(tagName, options) {
                return document.createElement(tagName, options);
            }
            cc.createElement = createElement;
            function setAttributesOfA(aElement, link) {
                aElement.setAttribute("href", link);
                if (!link.startsWith("mailto:")) {
                    aElement.setAttribute("target", "_blank");
                }
            }
            cc.setAttributesOfA = setAttributesOfA;
            function stopEventBubble(event) {
                event.cancelBubble = true;
                event.preventDefault();
                event.stopPropagation();
                return false;
            }
            cc.stopEventBubble = stopEventBubble;
            function getI18nInnerHTML({ en, zh_cn, zh_tw }) {
                return `<en>${en}</en><zh_cn>${zh_cn}</zh_cn><zh_tw>${zh_tw}</zh_tw>`;
            }
            cc.getI18nInnerHTML = getI18nInnerHTML;
            var MONTH_NAME_ARRAY = cc.MONTH_NAME_ARRAY = [
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
            function getI18nInnerHTMLFromDate(date) {
                const en = `${MONTH_NAME_ARRAY[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
                const zh_cn = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
                const zh_tw = zh_cn;
                return `<en>${en}</en><zh_cn>${zh_cn}</zh_cn><zh_tw>${zh_tw}</zh_tw>`;
            }
            cc.getI18nInnerHTMLFromDate = getI18nInnerHTMLFromDate;
            function appendText(svg, STYLE, CONTENT, x, y, rotate, viewBox) {
                const g = document.createElementNS(SVG_NS, "g");
                if (rotate) {
                    g.setAttribute("style", `transform: rotate(${rotate}deg);transform-origin: 50% 50%;`);
                }
                svg.appendChild(g);
                const text = document.createElementNS(SVG_NS, "text");
                text.setAttribute("x", `${x}mm`);
                text.setAttribute("y", `${y}mm`);
                text.setAttribute("style", "dominant-baseline:middle;text-anchor:middle;");
                if (CONTENT.indexOf("<") > -1) {
                    text.innerHTML = CONTENT;
                } else {
                    CONTENT.split("").forEach((__char, index)=>{
                        SvgHelper.appendTspan(text, "", __char, 0, 0, 0);
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
            cc.appendText = appendText;
            var SVG_NS = cc.SVG_NS = "http://www.w3.org/2000/svg";
            cc.SVG_XLINKNS = "http://www.w3.org/1999/xlink";
        })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
})(edu2 || (edu2 = {}));
const __default2 = edu2.sonya.cc;
const { getHtmlElement } = __default2;
var edu3;
(function(edu) {
    let sonya;
    (function(sonya) {
        let cc;
        (function(cc) {
            var LOCAL_STORAGE_KEY_OF_LANG = cc.LOCAL_STORAGE_KEY_OF_LANG = "lang";
            var LOCAL_STORAGE_KEY_OF_CURRENT_PAGE = cc.LOCAL_STORAGE_KEY_OF_CURRENT_PAGE = CURRENT_URL.includes("?") ? CURRENT_URL.split("?")[1] : ACTUAL_PAGE_NAME;
            const CHANGE_LANG_NOTIFY_ARRAY = [];
            var getCurrentLang = cc.getCurrentLang = ()=>localStorage.getItem(LOCAL_STORAGE_KEY_OF_LANG) || "zh_cn";
            cc.setCurrentLang = (lang)=>{
                getHtmlElement().setAttribute(LANG_PROPERTY, lang);
                localStorage.setItem(LOCAL_STORAGE_KEY_OF_LANG, lang);
                updateUIByCurrentLang();
            };
            var updateUIByCurrentLang = cc.updateUIByCurrentLang = ()=>{
                const lang = getCurrentLang();
                CHANGE_LANG_NOTIFY_ARRAY.forEach((func)=>func(lang));
            };
            cc.getCurrentPageLocalStorage = ()=>localStorage.getItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE) || "";
            cc.setCurrentPageLocalStorage = (newValue)=>localStorage.setItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE, newValue);
            cc.getChangeLangNotifyArrayOfCurrentPage = ()=>CHANGE_LANG_NOTIFY_ARRAY;
            cc.clearChangeLangNotifyArrayOfCurrentPage = ()=>{
                CHANGE_LANG_NOTIFY_ARRAY.length = 0;
            };
        })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
})(edu3 || (edu3 = {}));
const __default3 = edu3.sonya.cc;
const { SVG_NS, SVG_XLINKNS } = __default2;
var edu4;
(function(edu) {
    let sonya;
    (function(sonya) {
        let cc;
        (function(cc) {
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
                    this.drawTexts();
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
            cc.DiceBase = DiceBase;
        })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
})(edu4 || (edu4 = {}));
const __default4 = edu4.sonya.cc.DiceBase;
var edu5;
(function(edu) {
    let sonya;
    (function(sonya) {
        let cc;
        (function(cc) {
            class DiceFace20 extends __default4 {
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
                drawTexts() {
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
            cc.DiceFace20 = DiceFace20;
        })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
})(edu5 || (edu5 = {}));
const __default5 = edu5.sonya.cc.DiceFace20;
export { __default5 as default };
