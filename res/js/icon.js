

(function() {
    var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = '/res/icons/nut.ico';
    document.getElementsByTagName('head')[0].appendChild(link);
})();