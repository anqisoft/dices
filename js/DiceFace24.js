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
            class DiceFaceSubClass extends __default4 {
                drawGraphs() {
                    const { getSinByAngle, getCosByAngle } = this;
                    const BIGER_ANGLE = 180 - 48.275 * 2;
                    const SMALL_ANGLE_COS = Math.cos(48.275 * Math.PI / 180);
                    const HALF_LONG_SIDE_LENGTH = 50 * 0.5;
                    const SHORT_SIDE_LENGTH = HALF_LONG_SIDE_LENGTH / SMALL_ANGLE_COS;
                    let ax = 0, ay = 0, bx = 0, by = 0, cx = 0, cy = 0, dx = 0, dy = 0, ex = 0, ey = 0, fx = 0, fy = 0;
                    let aax = 0, aay = 0, bbx = 0, bby = 0, ddx = 0, ddy = 0, eex = 0, eey = 0, ffx = 0, ffy = 0, fffx = 0, fffy = 0;
                    let content_offset_top = -3, content_offset_left = -2;
                    content_offset_top *= 1.5, content_offset_left *= 1.5;
                    const OFFSET_X = -23.0805019730301175;
                    const ax1 = 150 + OFFSET_X, ay1 = 0;
                    const bx1 = ax1 + 50, by1 = 0;
                    const cx1 = ax1 + HALF_LONG_SIDE_LENGTH, cy1 = SHORT_SIDE_LENGTH * getSinByAngle(48.275);
                    const angle_cd1 = BIGER_ANGLE - 48.275;
                    const dx1 = cx1 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd1), dy1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd1);
                    const angle_ce1 = 180 - BIGER_ANGLE - angle_cd1;
                    const ex1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ce1), ey1 = cy1 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce1);
                    const angle_cf1 = BIGER_ANGLE - angle_ce1;
                    const fx1 = cx1 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf1), fy1 = cy1 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cf1);
                    const c_mirror_ad_x1 = 150 + dx1 - cx1;
                    const c_mirror_ad_y1 = 0 + dy1 - cy1;
                    const aax1 = 150 + (c_mirror_ad_x1 - 150) * 0.3 + OFFSET_X, aay1 = 0 + (c_mirror_ad_y1 - 0) * 0.3;
                    const bbx1 = 0, bby1 = 0;
                    const ddx1 = dx1 + (c_mirror_ad_x1 - dx1) * 0.3, ddy1 = dy1 + (c_mirror_ad_y1 - dy1) * 0.3;
                    const ffx1 = bx1 + (cx1 - bx1) * 0.3, ffy1 = 0 + (cy1 - 0) * 0.3;
                    const c_mirror_ef_x1 = ex1 + fx1 - cx1;
                    const c_mirror_ef_y1 = ey1 + fy1 - cy1;
                    const eex1 = ex1 + (c_mirror_ef_x1 - ex1) * 0.3, eey1 = ey1 + (c_mirror_ef_y1 - ey1) * 0.3;
                    const fffx1 = fx1 + (c_mirror_ef_x1 - fx1) * 0.3, fffy1 = fy1 + (c_mirror_ef_y1 - fy1) * 0.3;
                    ax = ax1, ay = ay1, bx = bx1, by = by1, cx = cx1, cy = cy1, dx = dx1, dy = dy1, ex = ex1, ey = ey1, fx = fx1, fy = fy1;
                    aax = aax1, aay = aay1, bbx = bbx1, bby = bby1, ddx = ddx1, ddy = ddy1, eex = eex1, eey = eey1, ffx = ffx1, ffy = ffy1, fffx = fffx1, fffy = fffy1;
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ax, bx, ay, by, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, dx, ay, dy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, cx, ay, cy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, bx, cx, by, cy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, dx, cy, dy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, ex, cy, ey, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, fx, cy, fy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, dx, ex, dy, ey, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ex, fx, ey, fy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, fx, ffx, fy, ffy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ax, aax, ay, aay, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, dx, ddx, dy, ddy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, aax, ddx, aay, ddy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, eex, fffx, eey, fffy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ex, eex, ey, eey, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, fx, fffx, fy, fffy, this.viewBox);
                    const cx4 = dx1 + ex1 - cx1, cy4 = dy1 + ey1 - cy1;
                    const ax4 = ex1, ay4 = ey1;
                    const dx4 = dx1, dy4 = dy1;
                    const angle_cd4 = Math.atan((cy4 - dy4) / (cx4 - dx4)) * 180 / Math.PI;
                    const angle_ce4 = BIGER_ANGLE - angle_cd4;
                    const angle_cf4 = BIGER_ANGLE - (90 - angle_ce4);
                    const angle_ca4 = BIGER_ANGLE - (90 - angle_cd4);
                    const angle_cb4 = BIGER_ANGLE - (90 - angle_ca4);
                    const ex4 = cx4 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ce4);
                    const ey4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ce4);
                    const fx4 = cx4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf4);
                    const fy4 = cy4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf4);
                    const bx4 = cx4 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb4);
                    const by4 = cy4 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb4);
                    const ffx4 = bx4 + (cx4 - bx4) * 0.3, ffy4 = by4 + (cy4 - by4) * 0.3;
                    ax = ax4, ay = ay4, bx = bx4, by = by4, cx = cx4, cy = cy4, dx = dx4, dy = dy4, ex = ex4, ey = ey4, fx = fx4, fy = fy4;
                    ffx = ffx4, ffy = ffy4;
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, bx, ay, by, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, cx, ay, cy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, bx, cx, by, cy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, dx, cy, dy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, ex, cy, ey, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, fx, cy, fy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, dx, ex, dy, ey, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ex, fx, ey, fy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, fx, ffx, fy, ffy, this.viewBox);
                    const cx5 = ax4 + bx4 - cx4, cy5 = ay4 + by4 - cy4;
                    const dx5 = ax4, dy5 = ay4;
                    const ex5 = bx4, ey5 = by4;
                    const angle_cd5 = Math.atan((cy5 - dy5) / (cx5 - dx5)) * 180 / Math.PI;
                    const angle_ce5 = BIGER_ANGLE - angle_cd5;
                    const angle_cf5 = BIGER_ANGLE - (90 - angle_ce5);
                    const angle_ca5 = BIGER_ANGLE - (90 - angle_cd5);
                    const angle_cb5 = BIGER_ANGLE - (90 - angle_ca5);
                    const ax5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca5);
                    const ay5 = cy5 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca5);
                    const bx5 = cx5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb5);
                    const by5 = cy5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb5);
                    const fx5 = cx5 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf5);
                    const fy5 = cy5 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cf5);
                    const ffx5 = bx5 + (cx5 - bx5) * 0.3, ffy5 = by5 + (cy5 - by5) * 0.3;
                    const c_mirror_ab_x5 = ax5 + bx5 - cx5, c_mirror_ab_y5 = ay5 + by5 - cy5;
                    const aax5 = ax5 + (c_mirror_ab_x5 - ax5) * 0.3, aay5 = ay5 + (c_mirror_ab_y5 - ay5) * 0.3;
                    const bbx5 = bx5 + (c_mirror_ab_x5 - bx5) * 0.3, bby5 = by5 + (c_mirror_ab_y5 - by5) * 0.3;
                    ax = ax5, ay = ay5, bx = bx5, by = by5, cx = cx5, cy = cy5, dx = dx5, dy = dy5, ex = ex5, ey = ey5, fx = fx5, fy = fy5;
                    aax = aax5, aay = aay5, bbx = bbx5, bby = bby5, ffx = ffx5, ffy = ffy5;
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, bx, ay, by, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, cx, ay, cy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ax, dx, ay, dy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, bx, cx, by, cy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, dx, cy, dy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, ex, cy, ey, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, fx, cy, fy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, dx, ex, dy, ey, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ex, fx, ey, fy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, fx, ffx, fy, ffy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ax, aax, ay, aay, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, bx, bbx, by, bby, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, aax, bbx, aay, bby, this.viewBox);
                    const cx6 = ex4 + fx4 - cx4, cy6 = ey4 + fy4 - cy4;
                    const dx6 = fx4, dy6 = fy4;
                    const ex6 = ex4, ey6 = ey4;
                    const angle_cd6 = Math.atan((cy6 - dy6) / (dx6 - cx6)) * 180 / Math.PI;
                    const angle_ce6 = Math.atan((cy6 - ey6) / (cx6 - ex6)) * 180 / Math.PI;
                    const angle_ca6 = BIGER_ANGLE - angle_cd6;
                    const angle_cf6 = BIGER_ANGLE - angle_ce6;
                    const angle_cb6 = BIGER_ANGLE - (90 - angle_ca6);
                    const ax6 = cx6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_ca6);
                    const ay6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_ca6);
                    const bx6 = cx6 - SHORT_SIDE_LENGTH * getSinByAngle(angle_cb6);
                    const by6 = cy6 + SHORT_SIDE_LENGTH * getCosByAngle(angle_cb6);
                    const fx6 = cx6 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cf6);
                    const fy6 = cy6 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cf6);
                    const ffx6 = bx6 + (cx6 - bx6) * 0.3, ffy6 = by6 + (cy6 - by6) * 0.3;
                    const c_mirror_ad_x6 = ax6 + dx6 - cx6, c_mirror_ad_y6 = ay6 + dy6 - cy6;
                    const aax6 = ax6 + (c_mirror_ad_x6 - ax6) * 0.3, aay6 = ay6 + (c_mirror_ad_y6 - ay6) * 0.3;
                    const ddx6 = dx6 + (c_mirror_ad_x6 - dx6) * 0.3, ddy6 = dy6 + (c_mirror_ad_y6 - dy6) * 0.3;
                    const c_mirror_ef_x6 = ex6 + fx6 - cx6, c_mirror_ef_y6 = ey6 + fy6 - cy6;
                    const eex6 = ex6 + (c_mirror_ef_x6 - ex6) * 0.3, eey6 = ey6 + (c_mirror_ef_y6 - ey6) * 0.3;
                    const fffx6 = fx6 + (c_mirror_ef_x6 - fx6) * 0.3, fffy6 = fy6 + (c_mirror_ef_y6 - fy6) * 0.3;
                    ax = ax6, ay = ay6, bx = bx6, by = by6, cx = cx6, cy = cy6, dx = dx6, dy = dy6, ex = ex6, ey = ey6, fx = fx6, fy = fy6;
                    aax = aax6, aay = aay6, ddx = ddx6, ddy = ddy6, eex = eex6, eey = eey6, ffx = ffx6, ffy = ffy6, fffx = fffx6, fffy = fffy6;
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ax, bx, ay, by, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, cx, ay, cy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, dx, ay, dy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, bx, cx, by, cy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, dx, cy, dy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, ex, cy, ey, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, fx, cy, fy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ex, fx, ey, fy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, fx, ffx, fy, ffy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ax, aax, ay, aay, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, dx, ddx, dy, ddy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, aax, ddx, aay, ddy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, eex, fffx, eey, fffy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ex, eex, ey, eey, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, fx, fffx, fy, fffy, this.viewBox);
                    const cx3 = dx4 + ex4 - cx4, cy3 = dy4 + ey4 - cy4;
                    const fx3 = dx4, fy3 = dy4;
                    const ex3 = ex4, ey3 = ey4;
                    const angle_cf3 = Math.atan((cy3 - fy3) / (fx3 - cx3)) * 180 / Math.PI;
                    const angle_ce3 = BIGER_ANGLE - angle_cf3;
                    const angle_cd3 = 180 - BIGER_ANGLE - angle_ce3;
                    const angle_ca3 = BIGER_ANGLE - angle_cd3;
                    const angle_cb3 = BIGER_ANGLE - (90 - angle_ca3);
                    const ax3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca3);
                    const ay3 = cy3 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca3);
                    const bx3 = cx3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb3);
                    const by3 = cy3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb3);
                    const dx3 = cx3 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd3);
                    const dy3 = cy3 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd3);
                    const ffx3 = bx3 + (cx3 - bx3) * 0.3, ffy3 = by3 + (cy3 - by3) * 0.3;
                    ax = ax3, ay = ay3, bx = bx3, by = by3, cx = cx3, cy = cy3, dx = dx3, dy = dy3, ex = ex3, ey = ey3, fx = fx3, fy = fy3;
                    ffx = ffx3, ffy = ffy3;
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ax, bx, ay, by, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, dx, ay, dy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, cx, ay, cy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, bx, cx, by, cy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, dx, cy, dy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, ex, cy, ey, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, fx, cy, fy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, dx, ex, dy, ey, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ex, fx, ey, fy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, fx, ffx, fy, ffy, this.viewBox);
                    const cx2 = ax3 + dx3 - cx3, cy2 = ay3 + dy3 - cy3;
                    const fx2 = ax3, fy2 = ay3;
                    const ex2 = dx3, ey2 = dy3;
                    const angle_cf2 = Math.atan((cy2 - fy2) / (fx2 - cx2)) * 180 / Math.PI;
                    const angle_ce2 = BIGER_ANGLE - angle_cf2;
                    const angle_cd2 = 180 - BIGER_ANGLE - angle_ce2;
                    const angle_ca2 = BIGER_ANGLE - angle_cd2;
                    const angle_cb2 = BIGER_ANGLE - (90 - angle_ca2);
                    const ax2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_ca2);
                    const ay2 = cy2 - SHORT_SIDE_LENGTH * getSinByAngle(angle_ca2);
                    const bx2 = cx2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cb2);
                    const by2 = cy2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cb2);
                    const dx2 = cx2 - SHORT_SIDE_LENGTH * getCosByAngle(angle_cd2);
                    const dy2 = cy2 + SHORT_SIDE_LENGTH * getSinByAngle(angle_cd2);
                    const ffx2 = bx2 + (cx2 - bx2) * 0.3, ffy2 = by2 + (cy2 - by2) * 0.3;
                    const c_mirror_ab_x2 = ax2 + bx2 - cx2, c_mirror_ab_y2 = ay2 + by2 - cy2;
                    const aax2 = ax2 + (c_mirror_ab_x2 - ax2) * 0.3, aay2 = ay2 + (c_mirror_ab_y2 - ay2) * 0.3;
                    const bbx2 = bx2 + (c_mirror_ab_x2 - bx2) * 0.3, bby2 = by2 + (c_mirror_ab_y2 - by2) * 0.3;
                    const c_mirror_de_x2 = dx2 + ex2 - cx2, c_mirror_de_y2 = dy2 + ey2 - cy2;
                    const ddx2 = dx2 + (c_mirror_de_x2 - dx2) * 0.3, ddy2 = dy2 + (c_mirror_de_y2 - dy2) * 0.3;
                    const eex2 = ex2 + (c_mirror_de_x2 - ex2) * 0.3, eey2 = ey2 + (c_mirror_de_y2 - ey2) * 0.3;
                    ax = ax2, ay = ay2, bx = bx2, by = by2, cx = cx2, cy = cy2, dx = dx2, dy = dy2, ex = ex2, ey = ey2, fx = fx2, fy = fy2;
                    aax = aax2, aay = aay2, bbx = bbx2, bby = bby2, ddx = ddx2, ddy = ddy2, eex = eex2, eey = eey2, ffx = ffx2, ffy = ffy2;
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, bx, ay, by, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ax, dx, ay, dy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ax, cx, ay, cy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, bx, cx, by, cy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, dx, cy, dy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, ex, cy, ey, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, cx, fx, cy, fy, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, dx, ex, dy, ey, this.viewBox);
                    this.appendLine(this.svg, this.INNER_LINE_STYLE, ex, fx, ey, fy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, fx, ffx, fy, ffy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ax, aax, ay, aay, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, bx, bbx, by, bby, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, aax, bbx, aay, bby, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, dx, ddx, dy, ddy, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ex, eex, ey, eey, this.viewBox);
                    this.appendLine(this.svg, this.OUTER_LINE_STYLE, ddx, eex, ddy, eey, this.viewBox);
                }
                drawTexts() {
                    this.setSvgTextInfo(this.infos[0], this.SIDE_LENGTH * 36.5 / 25, this.SIDE_LENGTH * 100.0 / 25, 180);
                    this.setSvgTextInfo(this.infos[1], this.SIDE_LENGTH * 147.5 / 25, this.SIDE_LENGTH * 125.0 / 25, 180);
                    this.setSvgTextInfo(this.infos[2], this.SIDE_LENGTH * 70.0 / 25, this.SIDE_LENGTH * 120.0 / 25, -70.35);
                    this.setSvgTextInfo(this.infos[3], this.SIDE_LENGTH * 180.0 / 25, this.SIDE_LENGTH * 120.0 / 25, -70.35);
                    this.setSvgTextInfo(this.infos[4], this.SIDE_LENGTH * 120.0 / 25, this.SIDE_LENGTH * 128.0 / 25, -83.45);
                    this.setSvgTextInfo(this.infos[5], this.SIDE_LENGTH * 82.5 / 25, this.SIDE_LENGTH * 188.0 / 25, 83.45);
                    this.setSvgTextInfo(this.infos[6], this.SIDE_LENGTH * 195.0 / 25, this.SIDE_LENGTH * 147.5 / 25, 166.9);
                    this.setSvgTextInfo(this.infos[7], this.SIDE_LENGTH * 95.0 / 25, this.SIDE_LENGTH * 110.0 / 25, 193.1);
                    this.setSvgTextInfo(this.infos[8], this.SIDE_LENGTH * 139.0 / 25, this.SIDE_LENGTH * 44.0 / 25, 13.1);
                    this.setSvgTextInfo(this.infos[9], this.SIDE_LENGTH * 97.5 / 25, this.SIDE_LENGTH * 58.0 / 25, 206.2);
                    this.setSvgTextInfo(this.infos[10], this.SIDE_LENGTH * 125.0 / 25, this.SIDE_LENGTH * 70.0 / 25, -70.35);
                    this.setSvgTextInfo(this.infos[11], this.SIDE_LENGTH * 114.0 / 25, this.SIDE_LENGTH * 27.0 / 25, 96.55);
                    this.setSvgTextInfo(this.infos[12], this.SIDE_LENGTH * 102.0 / 25, this.SIDE_LENGTH * 138.0 / 25, 96.55);
                    this.setSvgTextInfo(this.infos[13], this.SIDE_LENGTH * 102.0 / 25, this.SIDE_LENGTH * 183.0 / 25, 263.45);
                    this.setSvgTextInfo(this.infos[14], this.SIDE_LENGTH * 80.0 / 25, this.SIDE_LENGTH * 160.0 / 25, 180);
                    this.setSvgTextInfo(this.infos[15], this.SIDE_LENGTH * 126.0 / 25, this.SIDE_LENGTH * 154.0 / 25, 13.1);
                    this.setSvgTextInfo(this.infos[16], this.SIDE_LENGTH * 30.0 / 25, this.SIDE_LENGTH * 78.0 / 25, 0);
                    this.setSvgTextInfo(this.infos[17], this.SIDE_LENGTH * 137.0 / 25, this.SIDE_LENGTH * 95.0 / 25, 26.2);
                    this.setSvgTextInfo(this.infos[18], this.SIDE_LENGTH * 110.0 / 25, this.SIDE_LENGTH * 84.0 / 25, 109.65);
                    this.setSvgTextInfo(this.infos[19], this.SIDE_LENGTH * 130.0 / 25, this.SIDE_LENGTH * 16.0 / 25, -83.45);
                    this.setSvgTextInfo(this.infos[20], this.SIDE_LENGTH * 160.0 / 25, this.SIDE_LENGTH * 80.0 / 25, 122.75);
                    this.setSvgTextInfo(this.infos[21], this.SIDE_LENGTH * 60.0 / 25, this.SIDE_LENGTH * 77.0 / 25, 96.55);
                    this.setSvgTextInfo(this.infos[22], this.SIDE_LENGTH * 195.0 / 25, this.SIDE_LENGTH * 93.0 / 25, 13.1);
                    this.setSvgTextInfo(this.infos[23], this.SIDE_LENGTH * 83.0 / 25, this.SIDE_LENGTH * 93.0 / 25, 13.1);
                }
            }
            cc.DiceFaceSubClass = DiceFaceSubClass;
        })(cc = sonya.cc || (sonya.cc = {}));
    })(sonya = edu.sonya || (edu.sonya = {}));
})(edu5 || (edu5 = {}));
const __default5 = edu5.sonya.cc.DiceFaceSubClass;
export { __default5 as default };
