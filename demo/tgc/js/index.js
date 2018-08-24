/**
 * Created by Administrator on 2016/11/24.
 */
var index={
	init:function(){
		this.code();
		this.topHead();
		this.service();
		this.solutions();
		this.scrolling.init();
	},
	code:function(){
		$('.code i').mouseover(function(){
			$(this).parent().css({transform:'translate(0)'});
			$('.code i').fadeOut(500);
		});
		$('.code').mouseout(function(e){
			if(e.target!==$('.code i')[0]){
				console.log($(this))
				$(this).css({transform:'translateX(200px)'});
				$('.code i').fadeIn(500);
			}
		});
		$(document).click(function(e){
			if(e.target!==$('.code i')[0]){
				$('.code').css({transform:'translateX(200px)'});
				$('.code i').fadeIn(500);
			}
		});
	},
	topHead:function(){
		var H=$('.top .row:first-child').height();
		$(window).scroll(function(){
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
			if(scrollTop>=H){
				$('.top .row:first-child').hide();
				$('.top .row:nth-of-type(2)').slideDown(500);
			}else{
				$('.top .row:nth-of-type(2)').slideUp(500);
				$('.top .row:first-child').show();
			}
		})
	},
	service:function(){
		$('.service-l dt').hover(function(){
			$('.service-l dt').stop(true,true);
			$(this).animate({left:10},300);
		},function(){
			$('.service-l dt').stop(true,true);
			$(this).animate({left:0},300);
		});
	},
	solutions:function(){
		$('.solution-r img').hover(function(){
			$(this).css({transform:'translateZ(500px)'})
		},function(){
			$(this).css({transform:'translateZ(0)'})
		});
	},
	scrolling:{
		onOff:true,
		init:function(){
			var that=this;
			setTimeout(function(){that.scroll()},0);
			$(window).scroll(function(){
				that.scroll();
			})
		},
		scroll:function scroll(onOff){
			//初始化end值
			var obj={
				endNum:[125,20,100,3],
				beginNum:[0,0,0,0],
				timer:[null,null,null,null]
			};
			//获取scrollTop和可视区域的高度，当高度达到时触发函数
			var scrollTop=document.documentElement.scrollTop||document.body.scrollTop||window.pageYOffset;
			var elI=$('.advantage-l dd p i'), i,wH=scrollTop+$(window).height();
			if(wH>=$('.advantage').offset().top+$('.advantage').height()&&this.onOff){
				for(i=0;i<elI.length;i++){
					this.demo({timer:obj.timer[i],endNum:obj.endNum[i],beginNum:obj.beginNum[i],index:i});
				}
				$('.advantage-rMain').addClass('active');
				this.onOff=false;
			}
			if(wH>=$('.voice').offset().top+$('.voice').height()&&!$('.voice p').hasClass('active')){
				$('.voice p').addClass('active');
			}
			if(wH>=$('.every-r').offset().top+$('.every-r').height()&&!$('.every p').hasClass('active')){
				$('.every-r p').addClass('active');
			}
		},
		//初始化end让其自加函数
		demo:function demo(obj){
			var dc=obj.endNum/80;
			obj.timer=setInterval(function(){
				if(obj.beginNum>=obj.endNum){
					clearInterval(obj.timer);
					obj.beginNum=obj.endNum
				}else{
					obj.beginNum+=dc;
				}
				$('.advantage-l dd p i').eq(obj.index).html(parseInt(obj.beginNum));
			},10)
		}
	}
};
index.init();