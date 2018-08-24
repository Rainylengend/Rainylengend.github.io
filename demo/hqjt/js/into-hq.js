/**
 * Created by Administrator on 2016/12/1.
 */
var intoHq={
    init:function(){
        this.tabs();
        this.hash();
        this.nav();
    },
    //检测hash值并切换tabs的函数
    hash:function(){
        var hash=window.location.hash.substr(1);
        switch(hash){
            case "profile":intoHq.active($('.into-hq-main>.tabs li').eq(0)),intoHq.active($('.view .profile').eq($(this).index()));break;
            case "speech":intoHq.active($('.into-hq-main>.tabs li').eq(1)),intoHq.active($('.view .speech').eq($(this).index()));break;
            case "culture":intoHq.active($('.into-hq-main>.tabs li').eq(2)),intoHq.active($('.view .culture').eq($(this).index()));break;
            case "contact-us":intoHq.active($('.into-hq-main>.tabs li').eq(4)),intoHq.active($('.view .contact-us').eq($(this).index()));break;
            case "development":intoHq.active($('.into-hq-main>.tabs li').eq(3)),intoHq.active($('.view .development').eq($(this).index()));break;
        }
    },
    active:function(el){
        el.addClass('active');
        el.siblings().removeClass('active');
    },
    //tab
    tabs:function(){
        $('.into-hq-main>.tabs li').hover(function(){
            switch($(this).index()){
                case 0:window.location.hash='profile';break;
                case 1:window.location.hash='speech';break;
                case 2:window.location.hash='culture';break;
                case 3:window.location.hash='development';break;
                case 4:window.location.hash='contact-us';break;
            }
            intoHq.hash();
        })
    },
    //导航栏切换Tabs
    nav:function(){
        $('.nav li:nth-of-type(2) .nav-tab div').click(function(){
            setTimeout(function(){intoHq.hash();},0)
        })
    }
};
intoHq.init();