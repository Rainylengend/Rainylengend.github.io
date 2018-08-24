function navigation(a) {
    for (var t = $(".menu-list ul"), n = a.length, e = "", o = 0; o < n; o++) e += "<li><a href='javascript:;'>" + a[o].className + "</a></li>";
    t.append(e), $(".menu-list").delegate("li", "tap", function() {
        $(this).css({
            background: "#ff0033",
            opacity: "0.8",
            filter: "alpha(opacity:80)"
        });
        var t = $(this).index();
        window.location.href = "html/list_infor.html?className=" + a[t].className + "&classID=" + a[t].classID
    })
}
// window.onload=function(){
//     setTimeout(function() {
//         new iScroll("wrapper", {
//             // onBeforeScrollStart: function(a) {
//             //     for (var t = a.target; 1 != t.nodeType;) t = t.parentNode;
//             //     "SELECT" != t.tagName && "INPUT" != t.tagName && "TEXTAREA" != t.tagName && a.preventDefault()
//             // }
//         })
//     }, 0)
// }

 $.ajax({
    url: "http://datainfo.duapp.com/shopdata/getclass.php",
    dataType: "json",
    success: function(a) {
        navigation(a)
    },
    error: function(a) {
        console.log("失败")
    }
}), touch.on("#menubtn", "tap", function(a) {
    a.cancelBubble = !0, $(".main").hasClass("active") ? $(".main").removeClass("active") : $(".main").addClass("active")
}), touch.on(document, "tap", function() {
    $(".main").removeClass("active")
});
var mySwiper = new Swiper(".swiper-container", {
    autoplay: 2e3,
    loop: !0,
    paginationClickable: !0,
    pagination: ".swiper-pagination",
    autoplayDisableOnInteraction: !1
});
$.get("json/recommend.json", function(data) {
    var str = "";
    data = eval(data), $(data).each(function(a) {
        str += '<li><a href="html/detail.html?page=index&goodsID=' + data[a].goodsID + '"><img src="' + data[a].img[0] + '" alt=""></a><p><span>特惠价</span><span>' + data[a].price + "</span></p></li>"
    }), $(".recommend ul").html(str)
});