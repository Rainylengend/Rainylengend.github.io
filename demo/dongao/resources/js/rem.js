;(function () {
  var rem = function () {
    var html = document.getElementsByTagName('html')[0],
        size = 750,
        deviceSize = window.screen.width || window.pageXOffset,
        ratio = deviceSize / size;

	  html.style.fontSize = ratio > 1 ? 100 + 'px' : ratio < 0.3 ? 30 + 'px' : ratio * 100 + 'px';
  };
  rem();
  window.onresize = rem;
}());