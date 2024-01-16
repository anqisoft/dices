// deno-fmt-ignore-file
// deno-lint-ignore-file
// This code was bundled using `deno bundle` and it's not recommended to edit it manually

(()=>{
    parsePageParamsFromUrl(window.location.href);
    const { LANG } = window.anqiData;
    document.getElementsByTagName('title')[0].innerText = LANG === 'en' ? 'Dices' : LANG === 'zh_cn' ? "骰子" : "骰子";

    const diceGenerator = new DiceGenerator();
    const diceKind = DiceKind.four;
    const CONTENTS = '1,2,3,4'.split(',');
    const FONT_SIZE = '2mm';
    const OPTIONS = {
        FONT_SIZE
    };
    const DICE_INFO = diceGenerator.create({
        id: 'svg_1',
        diceKind,
        sideLength: 10,
        contents: CONTENTS,
        outerLineStyle: getPageParameterByName('outer_line_style', ''),
        innerLineStyle: getPageParameterByName('inner_line_style', ''),
        textStyle: getPageParameterByName('text_style', ''),
        options: OPTIONS
    });
    const { id, svg, css } = DICE_INFO;
    const pageHtml = `${svg.outerHTML}`;
    const previewIframe = document.getElementById('iframe_report');
    const iframe_report_window = previewIframe.contentWindow;
    function buildFirst() {
        iframe_report_window.postMessage({
            command: "build",
            data: {
                title: {
                    en: 'report',
                    zh_cn: '报表',
                    zh_tw: '報表'
                },
                css: '',
                html: pageHtml
            }
        }, "*");
    }
    previewIframe.onload = previewIframe.onreadystatechange = function() {
        const { readyState } = this;
        console.log("iframe onreadystatechange", readyState);
        if (!readyState) {
            buildFirst();
            return;
        }
        switch(readyState){
            case "loaded":
            case "complete":
                buildFirst();
                break;
            default:
                break;
        }
    };
})();
