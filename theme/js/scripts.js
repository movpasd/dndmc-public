/**
 * A script to set scroll position correctly on window resize
 */

let relativeScroll = 0;

function recordScroll() {
    relativeScroll = window.scrollY / getWindowHeight();
}

function fixScroll() {
    let scrollWidth = window.scrollX;
    let scrollHeight = relativeScroll * getWindowHeight();
    window.scrollTo(scrollWidth, scrollHeight)
}

function getWindowHeight() {

    let body = document.body,
        html = document.documentElement;

    let windowHeight = Math.max(
        body.scrollHeight,
        body.offsetHeight, 
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
    );  // From https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
    
    return windowHeight

}

window.onresize = fixScroll;
window.onscroll = recordScroll;
