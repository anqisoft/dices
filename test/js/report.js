// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

(()=>{
    if (window === window.top) {
        window.location.href = 'index.htm';
    }
    parsePageParamsFromUrl(window.location.href);
    const { LANG } = window.anqiData;
    document.getElementsByTagName('title')[0].innerText = LANG === 'en' ? 'Dices' : LANG === 'zh_cn' ? "骰子" : "骰子";
    // const body = document.getElementsByTagName('body')[0];
    // const pageElement = document.createElement('page');
    // body.appendChild(pageElement);
    // setTimeout(()=>{
    //     window.parent.setUpdateReportInfo((html, css)=>{
    //         pageElement.innerHTML = html;
    //     });
    // }, 100);
})();
function updateReport(title, css, html) {
    document.getElementById('style');
    const reportElement = document.getElementById('report_wrap');
    const titleElement = document.getElementById('title');
    reportElement.innerHTML = html;
    titleElement.i18n = title;
    titleElement.innerHTML = title[getCurrentLang()];
}
function changeLang(lang) {}
function changePaperSize(paperSize, isLandscape, pageMarginTop, pageMarginLeft) {}
window.addEventListener("message", function(event) {
    const { data: { command, data: { title, css, html, lang, paperSize, isLandscape, pageMarginTop, pageMarginLeft } } } = event;
    switch(command){
        case "build":
            updateReport(title, css, html);
            break;
        case "changeLang":
            changeLang(lang);
            break;
        case "changePaperSize":
            changePaperSize(paperSize, isLandscape, pageMarginTop, pageMarginLeft);
            break;
        case "print":
            window.print();
            break;
        default:
            break;
    }
});
