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
const LANG_PROPERTY = "edu-lang";
function getHtmlElement() {
    return document.getElementsByTagName("html")[0];
}
const LOCAL_STORAGE_KEY_OF_LANG = "lang";
const LOCAL_STORAGE_KEY_OF_CURRENT_PAGE = CURRENT_URL.includes("?") ? CURRENT_URL.split("?")[1] : ACTUAL_PAGE_NAME;
const CHANGE_LANG_NOTIFY_ARRAY = [];
const getCurrentLang = ()=>localStorage.getItem(LOCAL_STORAGE_KEY_OF_LANG) || "zh_cn";
const setCurrentLang = (lang)=>{
    getHtmlElement().setAttribute(LANG_PROPERTY, lang);
    localStorage.setItem(LOCAL_STORAGE_KEY_OF_LANG, lang);
    updateUIByCurrentLang();
};
const updateUIByCurrentLang = ()=>{
    const lang = getCurrentLang();
    CHANGE_LANG_NOTIFY_ARRAY.forEach((func)=>func(lang));
};
const getCurrentPageLocalStorage = ()=>localStorage.getItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE) || "";
const setCurrentPageLocalStorage = (newValue)=>localStorage.setItem(LOCAL_STORAGE_KEY_OF_CURRENT_PAGE, newValue);
const getChangeLangNotifyArrayOfCurrentPage = ()=>CHANGE_LANG_NOTIFY_ARRAY;
const clearChangeLangNotifyArrayOfCurrentPage = ()=>{
    CHANGE_LANG_NOTIFY_ARRAY.length = 0;
};
export { LOCAL_STORAGE_KEY_OF_LANG as LOCAL_STORAGE_KEY_OF_LANG };
export { LOCAL_STORAGE_KEY_OF_CURRENT_PAGE as LOCAL_STORAGE_KEY_OF_CURRENT_PAGE };
export { getCurrentLang as getCurrentLang };
export { setCurrentLang as setCurrentLang };
export { updateUIByCurrentLang as updateUIByCurrentLang };
export { getCurrentPageLocalStorage as getCurrentPageLocalStorage };
export { setCurrentPageLocalStorage as setCurrentPageLocalStorage };
export { getChangeLangNotifyArrayOfCurrentPage as getChangeLangNotifyArrayOfCurrentPage };
export { clearChangeLangNotifyArrayOfCurrentPage as clearChangeLangNotifyArrayOfCurrentPage };
