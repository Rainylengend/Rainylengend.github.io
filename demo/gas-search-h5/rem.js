(function () {
    function rem () {
        var html = document.getElementsByTagName('html')[0]
        var size = 750
        var deviceSize = window.screen.width || window.pageXOffset
        var ratio = deviceSize / size

        html.style.fontSize = ratio > 1
            ? 100 + 'px'
            : ratio < 0.3
                ? 30 + 'px'
                : ratio * 100 + 'px'
    }
    rem()
    window.addEventListener('resize', rem)
}())

