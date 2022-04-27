function vibrateSos () {
    navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]);
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
    }