/**
 * Created by Administrator on 2016/12/2.
 */
var store={
    init:function(){
        this.tabs();
        this.hash();
    },
    active:function(el,el1){
        if(el1){
            el1.removeClass('active');
        }
        el.addClass('active');
        el.siblings().removeClass('active');
    },
    hash:function(){
        var hash=window.location.hash.substr(1);
        switch(hash){
            case "rice":store.active($('.store-main>.tabs li').eq(0)),store.active($('.view>div').eq(0));break;
            case "flour":store.active($('.store-main>.tabs li').eq(1)),store.active($('.view>div').eq(1));break;
            case "chicken":store.active($('.store-main>.tabs li').eq(2)),store.active($('.view>div').eq(2));break;
        }
    },
    tabs:function(){
        $('.store-main .tabs li').mouseover(function(){
            var page=$(this).attr('data-page');
            switch(page){
                case 'rice':window.location.hash='rice',store.hash();break;
                case 'flour':window.location.hash='flour',store.hash();break;
                case 'chicken':window.location.hash='chicken',store.hash();break;
            }
        });
        $('.nav li:nth-of-type(6) .nav-tab div').click(function(){
            setTimeout(function(){store.hash();},0);
        })
    }
};
store.init();