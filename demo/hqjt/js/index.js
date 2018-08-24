/**
 * Created by Administrator on 2016/11/30.
 */
var index={
    //初始化index页面
    init:function(){
        this.news.left();
        this.news.right();
        this.banner();
        this.href();
        this.scroll();
    },
    //让元素处于激活状态
    active:function(el){
        el.addClass('active');
        el.siblings().removeClass('active');
    },
    //banner轮播
    banner:function(){
        /*var w=window.screen.width,
            num= 0,
            length=$('.banner li').length-1,
            timer=null;
        timer=setInterval(function() {
            num++;
            if (num === length) {
                index.active($('.banner-paging div').eq(0));
            }else if(num>length){
                $('.banner ul').css({left: 0});
                num = 1;
            }
            $('.banner ul').animate({left: -w * num}, 500);
            index.active($('.banner-paging div').eq(num));
        },2000)*/
        var arr=[
            'img/banner1.jpg',
            'img/banner2.jpg',
            'img/banner3.jpg',
            'img/banner4.jpg'
        ];
        var length=arr.length,num= 0,on=true;
        function demo(el){
            on=false;
            el.animate({width:"200%",height:"200%",left:"-50%",top:'-50%'},5000,function(){
                $(this).animate({width:"100%",height:"100%",left:"0",top:'0',opacity:'0'},5000,function(){
                    num++;
                    if(num===length)num=0;
                    $('.banner img').attr('src',arr[num]).animate({opacity:'1'},2000,function(){
                        $('.banner').css({background:'url('+arr[num]+') center center'});
                        on=true;
                    })
                })
            })
        }
        setInterval(function(){
            if(on){
                demo($('.banner img'));
            }
        },10);
       /* $('.banner img').animate({width:"250%",height:"250%",left:"-75%",top:'-75%'},5000,function(){
            $(this).animate({width:"100%",height:"100%",left:"0",top:'0',opacity:'0.1'},5000,function(){
                $('.banner img').attr('src',arr[1]).animate({opacity:'1'},2000)
            })
        })*/
    },
    //news tabs切换
    news:{
        left:function(){
            $('.news-left .tab div').mouseover(function(){
                index.active($(this));
                index.active( $('.news-left .main > div').eq( $(this).index() ) );
            })
        },
        right:function(){
            $('.news-r-title div').mouseover(function(){
                index.active($(this));
                index.active($('.news-r-main > ul').eq($( this ).index() ));
            })
        }
    },
    //海泉风采跳转
    href:function(){
        $('.introduce div').click(function(){
            var url='html/hqfc.html?page='+$(this).index();
            if($(this).index()!==4){
                window.open(url,'_blank');
            }
        })
    },
    scroll:function(){
        var scrollTop=0;
        $(window).scroll(function(){
            scrollTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
            if(scrollTop>0){
                $('.header-bg').addClass('active');
            }else{
                $('.header-bg').removeClass('active');
            }
        })
    }
};
index.init();