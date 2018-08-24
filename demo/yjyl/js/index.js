/**
 * Created by Administrator on 2016/10/31.
 */
//banner
(function(){
	var num= 1,timer=null,listNum=0;
	var onOff=true;
	var screenWidth=document.documentElement.clientWidth;
	timer=setInterval(lunbo,2000);
	//list点击切换
	$("#banner-list li").click(function(){
		num=$(this).index()+1;
		listNum=$(this).index();
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$(".banner-img").animate({left:-screenWidth*($(this).index()+1)},500);
	});
	//arrow点击切换
	$(".arrow-l").click(function(){
		if(onOff){
			num--;
			listNum--;
			arrow({listNum:-1,listNum1:4,num:0,num1:5});
		}
	});
	$(".arrow-r").click(function(){
		if(onOff){
			num++;
			listNum++;
			arrow({listNum:5,listNum1:0,num:6,num1:1});
		}
	});
	//切换菜单点击取消轮播
	$("#banner-list li,.arrow").hover(function(){
		clearInterval(timer);
		timer=null;
	},function(){
		timer=setInterval(lunbo,2000);
	});
	function arrow(obj){
		obj=obj||{
				listNum:'',
				listNum1:'',
				num:'',
				num1:''
			};
		onOff=false;
		if(listNum==obj.listNum)listNum=obj.listNum1;
		$('#banner-list li').removeClass('active');
		$('#banner-list li').eq(listNum).addClass('active');
		$(".banner-img").animate({left:-screenWidth*num},500,function(){
			onOff=true;
			if(num==obj.num){
				num=obj.num1;
				$(this).css({left:-screenWidth*num});
			}
		});
	}
	function lunbo(){
		num++;
		listNum++;
		if(listNum==5)listNum=0;
		$("#banner-list li").removeClass('active');
		$("#banner-list li").eq(listNum).addClass('active');
		$(".banner-img").animate({left:-screenWidth*num},500,function(){
			if(num==6)num=1,$(".banner-img").css({left:-screenWidth});
		});
	}
})();
