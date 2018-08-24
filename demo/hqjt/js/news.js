/**
 * Created by Administrator on 2016/12/2.
 */
var news={
    init:function(){
        this.paging();
    },
    paging:function(){
        $('.paging a').hover(function(){
            if(!$(this).hasClass('active')){
                $(this).css({background:'url(../img/news-list/bg.png) -38px 0'});
            }
        },function(){
            $(this).css({background:''});
        });
        $('.paging a').mousedown(function(){
            $(this).css({background:'url(../img/news-list/bg.png) -114px 0',color:'#fff'});
        });
        $('.paging a').mouseup(function(){
            $(this).css({background:'',color:''});
        })
    }
};
news.init();