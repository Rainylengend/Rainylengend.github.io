/**
 * Created by Administrator on 2016/12/2.
 */
var subCom={
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
            case "hqgs":subCom.active($('.sub-main>.tabs li').eq(0)),subCom.active($('.view>div').eq(0));break;
            case "xqmy":subCom.active($('.sub-main>.tabs li').eq(1)),subCom.active($('.view>div').eq(1));break;
            case "ydly":subCom.active($('.sub-main>.tabs li').eq(2)),subCom.active($('.view>div').eq(2));break;
            case "rhxq":subCom.active($('.sub-main>.tabs li').eq(3)),subCom.active($('.view>div').eq(3));break;
            case "xqny":subCom.active($('.sub-main>.tabs li').eq(4)),subCom.active($('.view>div').eq(4));break;
            case "jsfdc":subCom.active($('.sub-main>.tabs li').eq(5)),subCom.active($('.view>div').eq(5));break;
            case "xqysy":subCom.active($('.sub-main>.tabs li').eq(6)),subCom.active($('.view>div').eq(6));break;
        }
    },
    tabs:function(){
        $('.sub-main .tabs li').mouseover(function(){
            var page=$(this).attr('data-page');
            switch(page){
                case 'hqgs':window.location.hash='hqgs',subCom.hash();break;
                case 'xqmy':window.location.hash='xqmy',subCom.hash();break;
                case 'ydly':window.location.hash='ydly',subCom.hash();break;
                case 'rhxq':window.location.hash='rhxq',subCom.hash();break;
                case 'xqny':window.location.hash='xqny',subCom.hash();break;
                case 'jsfdc':window.location.hash='jsfdc',subCom.hash();break;
                case 'xqysy':window.location.hash='xqysy',subCom.hash();break;
            }
        });
        $('.nav li:nth-of-type(4) .nav-tab div').click(function(){
            setTimeout(function(){subCom.hash();},0);
        })
    }
};
subCom.init();