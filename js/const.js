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
export { __default as default };
