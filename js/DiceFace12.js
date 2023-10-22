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
            class DiceFace12 extends __default4 {
                drawGraphs() {
                    const QUARTER_SIDE_LENGTH = this.SIDE_LENGTH * 0.25;
                    const RADIUS = this.SIDE_LENGTH * 0.2;
                    const ANGLE18 = Math.PI * 18 / 180;
                    const ANGLE36 = Math.PI * 36 / 180;
                    const ANGLE54 = Math.PI * 54 / 180;
                    const ANGLE72 = Math.PI * 72 / 180;
                    const SIN18 = Math.sin(ANGLE18);
                    const SIN36 = Math.sin(ANGLE36);
                    const SIN54 = Math.sin(ANGLE54);
                    const SIN72 = Math.sin(ANGLE72);
                    const HALF_SIDE_LENGTH = this.SIDE_LENGTH * 0.5;
                    const LONG_SIDE_LENGTH = this.SIDE_LENGTH * 0.5 / SIN18;
                    const HALF_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * 0.5;
                    const SIN18_MULTIPLY_SIDE_LENGTH = this.SIDE_LENGTH * SIN18;
                    const SIN36_MULTIPLY_SIDE_LENGTH = this.SIDE_LENGTH * SIN36;
                    const SIN54_MULTIPLY_SIDE_LENGTH = this.SIDE_LENGTH * SIN54;
                    const SIN72_MULTIPLY_SIDE_LENGTH = this.SIDE_LENGTH * SIN72;
                    const SIN18_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN18;
                    const SIN36_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN36;
                    const SIN54_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN54;
                    const SIN72_MULTIPLY_QUARTER_SIDE_LENGTH = QUARTER_SIDE_LENGTH * SIN72;
                    const SIN72_MULTIPLY_LONG_SIDE_LENGTH = LONG_SIDE_LENGTH * SIN72;
                    const SECOND_GROUP_OFFSET = this.SIDE_LENGTH * 2 + LONG_SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH;
                    const TOP = SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                    for(let groupIndex = 0; groupIndex < 2; ++groupIndex){
                        const LEFT = (groupIndex === 0 ? 0 : SECOND_GROUP_OFFSET) + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                        let A1x = 0, A1y = 0;
                        let A2x = 0, A2y = 0;
                        let A3x = 0, A3y = 0;
                        let A4x = 0, A4y = 0;
                        let A5x = 0, A5y = 0;
                        let B1x = 0, B1y = 0;
                        let B2x = 0, B2y = 0;
                        let B5x = 0, B5y = 0;
                        let C1x = 0, C1y = 0;
                        let C2x = 0, C2y = 0;
                        let C5x = 0, C5y = 0;
                        let D1x = 0, D1y = 0;
                        let D2x = 0, D2y = 0;
                        let D5x = 0, D5y = 0;
                        let E1x = 0, E1y = 0;
                        let E2x = 0, E2y = 0;
                        let E5x = 0, E5y = 0;
                        let F1x = 0, F1y = 0;
                        let F2x = 0, F2y = 0;
                        let F5x = 0, F5y = 0;
                        if (groupIndex === 0) {
                            A1x = LEFT + SIN18 * (this.SIDE_LENGTH + SIN18_MULTIPLY_SIDE_LENGTH * 2) + LONG_SIDE_LENGTH;
                            A2x = A1x + SIN54_MULTIPLY_SIDE_LENGTH;
                            A5x = A1x - SIN54_MULTIPLY_SIDE_LENGTH;
                            A3x = A2x - SIN18_MULTIPLY_SIDE_LENGTH;
                            A4x = A5x + SIN18_MULTIPLY_SIDE_LENGTH;
                            B1x = A5x - HALF_SIDE_LENGTH;
                            B2x = A5x + HALF_SIDE_LENGTH;
                            B5x = A1x - LONG_SIDE_LENGTH;
                            C1x = A2x + HALF_SIDE_LENGTH;
                            C5x = A2x - HALF_SIDE_LENGTH;
                            C2x = A1x + LONG_SIDE_LENGTH;
                            D1x = A3x + LONG_SIDE_LENGTH;
                            D2x = A3x + HALF_LONG_SIDE_LENGTH;
                            D5x = A2x + this.SIDE_LENGTH;
                            E1x = A4x + HALF_SIDE_LENGTH;
                            E2x = A4x - SIN18_MULTIPLY_SIDE_LENGTH;
                            E5x = A3x + SIN18_MULTIPLY_SIDE_LENGTH;
                            F1x = A4x - LONG_SIDE_LENGTH;
                            F5x = A4x - HALF_LONG_SIDE_LENGTH;
                            F2x = A5x - this.SIDE_LENGTH;
                            A1y = TOP + SIN72_MULTIPLY_SIDE_LENGTH;
                            A2y = A1y + SIN36_MULTIPLY_SIDE_LENGTH;
                            A5y = A2y;
                            A3y = A2y + SIN72_MULTIPLY_SIDE_LENGTH;
                            A4y = A3y;
                            B1y = TOP;
                            B2y = B1y;
                            B5y = A1y;
                            C1y = B1y;
                            C5y = B1y;
                            C2y = B5y;
                            D1y = A3y;
                            D2y = A3y + SIN36_MULTIPLY_SIDE_LENGTH;
                            D5y = A2y;
                            E2y = A4y + SIN72_MULTIPLY_SIDE_LENGTH;
                            E5y = E2y;
                            E1y = E2y + SIN36_MULTIPLY_SIDE_LENGTH;
                            F1y = A4y;
                            F2y = A2y;
                            F5y = D2y;
                        } else {
                            A1x = LEFT + LONG_SIDE_LENGTH + this.SIDE_LENGTH;
                            A2x = A1x + SIN18_MULTIPLY_SIDE_LENGTH;
                            A3x = A1x - HALF_SIDE_LENGTH;
                            A5x = A1x - this.SIDE_LENGTH;
                            A4x = A5x - SIN18_MULTIPLY_SIDE_LENGTH;
                            B1x = A5x + HALF_SIDE_LENGTH;
                            B2x = A1x + SIN18_MULTIPLY_SIDE_LENGTH;
                            B5x = A5x - SIN18_MULTIPLY_SIDE_LENGTH;
                            C2x = A2x + this.SIDE_LENGTH;
                            C1x = A1x + LONG_SIDE_LENGTH;
                            C5x = A1x + HALF_LONG_SIDE_LENGTH;
                            D2x = A3x + SIN18_MULTIPLY_SIDE_LENGTH;
                            D1x = D2x + this.SIDE_LENGTH;
                            D5x = D1x + SIN18_MULTIPLY_SIDE_LENGTH;
                            E2x = A3x - LONG_SIDE_LENGTH;
                            E1x = E2x + SIN18_MULTIPLY_SIDE_LENGTH;
                            E5x = E1x + this.SIDE_LENGTH;
                            F1x = A5x - LONG_SIDE_LENGTH;
                            F2x = A5x - HALF_LONG_SIDE_LENGTH;
                            F5x = A4x - this.SIDE_LENGTH;
                            A1y = TOP + SIN72_MULTIPLY_LONG_SIDE_LENGTH;
                            A2y = A1y + SIN72_MULTIPLY_SIDE_LENGTH;
                            A3y = A1y + SIN72_MULTIPLY_LONG_SIDE_LENGTH;
                            A4y = A2y;
                            A5y = A1y;
                            B1y = TOP;
                            B2y = A5y - SIN72_MULTIPLY_SIDE_LENGTH;
                            B5y = B2y;
                            C1y = A1y;
                            C2y = A2y;
                            C5y = A1y - SIN36_MULTIPLY_SIDE_LENGTH;
                            D5y = A3y;
                            D1y = D5y + SIN72_MULTIPLY_SIDE_LENGTH;
                            D2y = D1y;
                            E1y = D1y;
                            E2y = D5y;
                            E5y = D1y;
                            F1y = C1y;
                            F2y = C5y;
                            F5y = A4y;
                        }
                        const LINE_STYLE = groupIndex === 0 ? this.INNER_LINE_STYLE : this.OUTER_LINE_STYLE;
                        this.appendLine(this.svg, LINE_STYLE, A1x, A2x, A1y, A2y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A2x, A3x, A2y, A3y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A3x, A4x, A3y, A4y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A4x, A5x, A4y, A5y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A5x, A1x, A5y, A1y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A1x, B2x, A1y, B2y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A1x, C5x, A1y, C5y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A2x, C2x, A2y, C2y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A2x, D5x, A2y, D5y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A3x, D2x, A3y, D2y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A3x, E5x, A3y, E5y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A4x, E2x, A4y, E2y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A4x, F5x, A4y, F5y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A5x, F2x, A5y, F2y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, A5x, B5x, A5y, B5y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, B1x, B2x, B1y, B2y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, B1x, B5x, B1y, B5y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, C1x, C2x, C1y, C2y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, C1x, C5x, C1y, C5y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, D1x, D2x, D1y, D2y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, D1x, D5x, D1y, D5y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, E1x, E2x, E1y, E2y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, E1x, E5x, E1y, E5y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, F1x, F2x, F1y, F2y, this.viewBox);
                        this.appendLine(this.svg, LINE_STYLE, F1x, F5x, F1y, F5y, this.viewBox);
                        let B6x = 0, B6y = 0;
                        let B7x = 0, B7y = 0;
                        let B8x = 0, B8y = 0;
                        let B9x = 0, B9y = 0;
                        let C6x = 0, C6y = 0;
                        let C7x = 0, C7y = 0;
                        let C8x = 0, C8y = 0;
                        let C9x = 0, C9y = 0;
                        let D6x = 0, D6y = 0;
                        let D7x = 0, D7y = 0;
                        let D8x = 0, D8y = 0;
                        let D9x = 0, D9y = 0;
                        let E6x = 0, E6y = 0;
                        let E7x = 0, E7y = 0;
                        let E8x = 0, E8y = 0;
                        let E9x = 0, E9y = 0;
                        let F6x = 0, F6y = 0;
                        let F7x = 0, F7y = 0;
                        let F8x = 0, F8y = 0;
                        let F9x = 0, F9y = 0;
                        if (groupIndex === 0) {
                            B6x = B5x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            B6y = B5y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            B7x = B1x - QUARTER_SIDE_LENGTH;
                            C8x = C1x + QUARTER_SIDE_LENGTH;
                            B7y = B1y;
                            C8y = B1y;
                            B8x = B1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            B9x = B2x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            C6x = C5x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            C7x = C1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            B8y = B1y - SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                            B9y = B8y;
                            C6y = B8y;
                            C7y = B8y;
                            C9x = C2x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            C9y = C2y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            D8x = D1x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            D8y = D1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                            D9x = D2x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            D9y = D2y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E6x = E5x + SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E6y = E5y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E7x = E1x + SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E8x = E1x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E7y = E1y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E8y = E7y;
                            E9x = E2x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            E9y = E2y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F6x = F5x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F6y = F5y + SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F7x = F1x - SIN18_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F7y = F1y + SIN72_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F8x = F1x - SIN54_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F8y = F1y - SIN36_MULTIPLY_QUARTER_SIDE_LENGTH;
                            F9x = F2x - QUARTER_SIDE_LENGTH;
                            F9y = F2y;
                        }
                        if (groupIndex === 0) {
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, B5x, B6x, B5y, B6y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, B1x, B7x, B1y, B7y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, B1x, B8x, B1y, B8y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, B2x, B9x, B2y, B9y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, C5x, C6x, C5y, C6y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, C1x, C7x, C1y, C7y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, C1x, C8x, C1y, C8y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, C2x, C9x, C2y, C9y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, D1x, D8x, D1y, D8y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, D2x, D9x, D2y, D9y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, E5x, E6x, E5y, E6y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, E1x, E7x, E1y, E7y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, E1x, E8x, E1y, E8y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, E2x, E9x, E2y, E9y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, F5x, F6x, F5y, F6y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, F1x, F7x, F1y, F7y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, F1x, F8x, F1y, F8y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, F2x, F9x, F2y, F9y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, B6x, B7x, B6y, B7y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, B8x, B9x, B8y, B9y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, C6x, C7x, C6y, C7y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, C8x, C9x, C8y, C9y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, D6x, D7x, D6y, D7y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, D8x, D9x, D8y, D9y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, E6x, E7x, E6y, E7y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, E8x, E9x, E8y, E9y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, F6x, F7x, F6y, F7y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, F8x, F9x, F8y, F9y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, B2x, C5x, B2y, C5y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, C2x, D5x, C2y, D5y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, D2x, E5x, D2y, E5y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, E2x, F5x, E2y, F5y, this.viewBox);
                            this.appendLine(this.svg, this.OUTER_LINE_STYLE, F2x, B5x, F2y, B5y, this.viewBox);
                        }
                        if (this.OPTIONS.withHole) {
                            let CC1x = (A1x + A2x + A3x + A4x + A5x) * 0.2, CC1y = (A1y + A2y + A3y + A4y + A5y) * 0.2;
                            let CC2x = (A1x + A5x + B1x + B2x + B5x) * 0.2, CC2y = (A1y + A5y + B1y + B2y + B5y) * 0.2;
                            let CC3x = (A1x + A2x + C1x + C2x + C5x) * 0.2, CC3y = (A1y + A2y + C1y + C2y + C5y) * 0.2;
                            let CC4x = (A2x + A3x + D1x + D2x + D5x) * 0.2, CC4y = (A2y + A3y + D1y + D2y + D5y) * 0.2;
                            let CC5x = (A3x + A4x + E1x + E2x + E5x) * 0.2, CC5y = (A3y + A4y + E1y + E2y + E5y) * 0.2;
                            let CC6x = (A4x + A5x + F1x + F2x + F5x) * 0.2, CC6y = (A4y + A5y + F1y + F2y + F5y) * 0.2;
                            this.appendCircle(this.svg, this.INNER_LINE_STYLE, CC1x, CC1y, RADIUS, null);
                            this.appendCircle(this.svg, this.INNER_LINE_STYLE, CC2x, CC2y, RADIUS, null);
                            this.appendCircle(this.svg, this.INNER_LINE_STYLE, CC3x, CC3y, RADIUS, null);
                            this.appendCircle(this.svg, this.INNER_LINE_STYLE, CC4x, CC4y, RADIUS, null);
                            this.appendCircle(this.svg, this.INNER_LINE_STYLE, CC5x, CC5y, RADIUS, null);
                            this.appendCircle(this.svg, this.INNER_LINE_STYLE, CC6x, CC6y, RADIUS, null);
                        }
                    }
                }
                drawTexts() {
                    this.setSvgTextInfo(this.infos[0], this.SIDE_LENGTH * 58.5 / 25, this.SIDE_LENGTH * 52.0 / 25, 0);
                    this.setSvgTextInfo(this.infos[1], this.SIDE_LENGTH * 130.0 / 25, this.SIDE_LENGTH * 90.0 / 25, 180);
                    this.setSvgTextInfo(this.infos[2], this.SIDE_LENGTH * 170.0 / 25, this.SIDE_LENGTH * 90.0 / 25, 180);
                    this.setSvgTextInfo(this.infos[3], this.SIDE_LENGTH * 118.0 / 25, this.SIDE_LENGTH * 50.0 / 25, 180);
                    this.setSvgTextInfo(this.infos[4], this.SIDE_LENGTH * 185.0 / 25, this.SIDE_LENGTH * 50.0 / 25, 180);
                    this.setSvgTextInfo(this.infos[5], this.SIDE_LENGTH * 150.5 / 25, this.SIDE_LENGTH * 25.0 / 25, 180);
                    this.setSvgTextInfo(this.infos[6], this.SIDE_LENGTH * 157.5 / 25, this.SIDE_LENGTH * 30.0 / 25, 0);
                    this.setSvgTextInfo(this.infos[7], this.SIDE_LENGTH * 125.0 / 25, this.SIDE_LENGTH * 52.0 / 25, 0);
                    this.setSvgTextInfo(this.infos[8], this.SIDE_LENGTH * 190.0 / 25, this.SIDE_LENGTH * 52.0 / 25, 0);
                    this.setSvgTextInfo(this.infos[9], this.SIDE_LENGTH * 136.5 / 25, this.SIDE_LENGTH * 90.0 / 25, 0);
                    this.setSvgTextInfo(this.infos[10], this.SIDE_LENGTH * 177.0 / 25, this.SIDE_LENGTH * 90.0 / 25, 0);
                    this.setSvgTextInfo(this.infos[11], this.SIDE_LENGTH * 52.0 / 25, this.SIDE_LENGTH * 50.0 / 25, 180);
                }
            }
            cc.DiceFace12 = DiceFace12;
        })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
})(edu5 || (edu5 = {}));
const __default5 = edu5.sonya.cc.DiceFace12;
export { __default5 as default };
