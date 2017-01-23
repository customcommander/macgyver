var IFRAME_ID = 'macgyver-pristine-environment';

function init() {
    var ifrm = document.createElement('iframe');
    ifrm.id = IFRAME_ID;
    ifrm.style.cssText = 'position:absolute;top:-1000px;left:1000px';
    document.body.appendChild(ifrm);
}

init();

module.exports = function () {
    return document.querySelector('#' + IFRAME_ID).contentWindow;
};
