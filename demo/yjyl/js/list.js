/**
 * Created by Administrator on 2016/11/2.
 */
//banner
(function(){
	var num=0;
	$(".banner-list-top").click(function(){
		if(num<0){
			num++;
			$(".banner-list-content ul").animate({top:130*num},300);
		}
	});
	$(".banner-list-footer").click(function(){
		if(num>-$(".banner-list-content li").length+3){
			num--;
			$(".banner-list-content ul").animate({top:130*num},300);
		}
	});
	$(".banner-list-content li").each(function(index){
		$(this).css({background:'url(../img/list/banner'+(index+1)+'.jpg)',backgroundSize:"100% 100%"});
		$(this).click(function(){
			$(this).addClass('active').siblings().removeClass('active');
			$(".banner .show").css({background:'url(../img/list/banner'+(index+1)+'.jpg)'})
		})
	});
})();