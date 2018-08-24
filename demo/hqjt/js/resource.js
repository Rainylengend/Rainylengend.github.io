/**
 * Created by Administrator on 2016/12/2.
 */
/**
 * Created by Administrator on 2016/12/2.
 */
var resource={
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
            case "rczl":resource.active($('.resource-main>.tabs li').eq(0)),resource.active($('.view>div').eq(0));break;
            case "zpxx":resource.active($('.resource-main>.tabs li').eq(1)),resource.active($('.view>div').eq(1));break;
            case "zplc":resource.active($('.resource-main>.tabs li').eq(2)),resource.active($('.view>div').eq(2));break;
        }
    },
    tabs:function(){
        $('.resource-main .tabs li').mouseover(function(){
            var page=$(this).attr('data-page');
            switch(page){
                case 'rczl':window.location.hash='rczl',resource.hash();break;
                case 'zpxx':window.location.hash='zpxx',resource.hash();break;
                case 'zplc':window.location.hash='zplc',resource.hash();break;
            }
        });
        $('.nav li:nth-of-type(7) .nav-tab div').click(function(){
            setTimeout(function(){resource.hash();},0);
        })
    }
};
resource.init();