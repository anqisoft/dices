// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

const DOMAIN = "edu.sonya.cc";
const FILENAME_POSTFIX = DOMAIN.concat("_");
const CURRENT_URL = window.location.href;
const HOME_URL = CURRENT_URL.startsWith("file:///") ? "file:///P:/ecs_person/websites/sonya.cc/edu_git/src/index.htm" : "http://edu.sonya.cc/";
(function() {
    const myWindow = window;
    if (!myWindow.top || CURRENT_URL.startsWith("file:///")) return;
    if (!myWindow.top.location.href.startsWith(HOME_URL)) {
        myWindow.top.location.replace(HOME_URL);
    }
})();
const HOME_URL_LENGTH = HOME_URL.length;
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
const getActualPageName = (value)=>ACTUAL_PAGE_NAME_ARRAY[value];
const getActualPageValueByName = (name)=>ACTUAL_PAGE_NAME_ARRAY.indexOf(name);
const PARAMETER_FOR_ACTUAL_PAGE = "go";
const ACTUAL_PAGE_VALUE = CURRENT_URL.indexOf("?".concat(PARAMETER_FOR_ACTUAL_PAGE, "=")) > -1 ? getActualPageValueByName(CURRENT_URL.split("?")[1].split("&")[0].split("=")[1]) : ActualPage.home;
const ACTUAL_PAGE_NAME = ACTUAL_PAGE_NAME_ARRAY[ACTUAL_PAGE_VALUE];
const SITE_ROOT = HOME_URL.substring(0, HOME_URL.lastIndexOf("/") + 1);
const SITE_IMAGE_PATH = `${SITE_ROOT}images/`;
const SITE_JAVASCRIPT_PATH = `${SITE_ROOT}js/`;
const SITE_CSS_PATH = `${SITE_ROOT}css/`;
const getPageParameterByName = (name, defaultValue)=>{
    return CURRENT_URL.indexOf(`&${name}=`) === -1 ? defaultValue || "" : CURRENT_URL.split("&").slice(1).filter((keyValue)=>keyValue.startsWith(`${name}=`))[0].split("=")[1];
};
const PAGE_SUB_KIND = getPageParameterByName("kind", null);
const PAGE_IDNEX = parseInt(getPageParameterByName("page", "1"), 0) - 1;
const PAGE_ID = parseInt(getPageParameterByName("id", "1"), 0);
const MORE_BUTTON_HTML = "<en>more...</en><zh_cn>查看更多</zh_cn><zh_tw>查看更多</zh_tw>";
const BRICK_SUB_KINDS = [
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
const ACTIVATED_PROPERTY = "edu-activated";
const SUB_KIND_NAME_PROPERTY = "edu-sub-kind-name";
const LANG_PROPERTY = "edu-lang";
const PAGE_PROPERTY = "edu-page";
const DEVICE_PROPERTY = "edu-device";
const REPORT_PROPERTY = "edu-report";
const ID_PROPERTY = "edu-id";
const PAPER_SIZE_PROPERTY = "edu-paper-size";
const REPORT_KIND_PROPERTY = "edu-report-kind";
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
export { DOMAIN as DOMAIN };
export { FILENAME_POSTFIX as FILENAME_POSTFIX };
export { CURRENT_URL as CURRENT_URL };
export { HOME_URL as HOME_URL };
export { HOME_URL_LENGTH as HOME_URL_LENGTH };
export { ActualPage as ActualPage };
export { ACTUAL_PAGE_NAME_ARRAY as ACTUAL_PAGE_NAME_ARRAY };
export { getActualPageName as getActualPageName };
export { getActualPageValueByName as getActualPageValueByName };
export { PARAMETER_FOR_ACTUAL_PAGE as PARAMETER_FOR_ACTUAL_PAGE };
export { ACTUAL_PAGE_VALUE as ACTUAL_PAGE_VALUE };
export { ACTUAL_PAGE_NAME as ACTUAL_PAGE_NAME };
export { SITE_ROOT as SITE_ROOT };
export { SITE_IMAGE_PATH as SITE_IMAGE_PATH };
export { SITE_JAVASCRIPT_PATH as SITE_JAVASCRIPT_PATH };
export { SITE_CSS_PATH as SITE_CSS_PATH };
export { getPageParameterByName as getPageParameterByName };
export { PAGE_SUB_KIND as PAGE_SUB_KIND };
export { PAGE_IDNEX as PAGE_IDNEX };
export { PAGE_ID as PAGE_ID };
export { MORE_BUTTON_HTML as MORE_BUTTON_HTML };
export { BRICK_SUB_KINDS as BRICK_SUB_KINDS };
export { ACTIVATED_PROPERTY as ACTIVATED_PROPERTY };
export { SUB_KIND_NAME_PROPERTY as SUB_KIND_NAME_PROPERTY };
export { LANG_PROPERTY as LANG_PROPERTY };
export { PAGE_PROPERTY as PAGE_PROPERTY };
export { DEVICE_PROPERTY as DEVICE_PROPERTY };
export { REPORT_PROPERTY as REPORT_PROPERTY };
export { ID_PROPERTY as ID_PROPERTY };
export { PAPER_SIZE_PROPERTY as PAPER_SIZE_PROPERTY };
export { REPORT_KIND_PROPERTY as REPORT_KIND_PROPERTY };
export { MONTH_NAME_ARRAY as MONTH_NAME_ARRAY };
