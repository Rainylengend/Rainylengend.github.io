
//右侧侧边栏
$(".backTop").click(function(){
	$("html,body").stop().animate({scrollTop:0});
});
function fnHover(obj,distance){             //鼠标划上
	var later;
	$(obj).hover(function(){
		var _this=this;
		later=setTimeout(function(){
			$(_this).find("div").stop().animate({left:-distance});
		},300)
	},function(){
		clearTimeout(later);
		$(this).find("div").stop().animate({left:0});
	});
}
fnHover(".customer",130);
fnHover(".run_left",80);
fnHover(".ewm",240);

$(".shop_car_r,.collect,.history").attr({bSwitch:"close"})
function fnClick(obj,box){                 //鼠标点击
	$(obj).click(function(evt){
		var _this=this;
		if($(this).attr("bSwitch")=="close"){
			$(".shop_car_r,.collect,.history").removeClass("active").attr({bSwitch:"close"});
			$(this).addClass("active").attr({bSwitch:"open"});	
			$(".r_menu_box").stop().animate({left:-280});
			$(".car_box,.collect_box,.history_box").fadeOut();
			$(box).fadeIn();
		}else{
			$(this).removeClass("active").attr({bSwitch:"close"});
			$(".r_menu_box").stop().animate({left:0});
		}
		e=evt||event;
		e.cancelBubble?e.cancelBubble=ture:e.stopPropagation();
	});
}
fnClick(".shop_car_r",".car_box");
fnClick(".collect",".collect_box");
fnClick(".history",".history_box");
$(".r_menu_box").click(function(evt){
	e=evt||event;
	e.cancelBubble?e.cancelBubble=ture:e.stopPropagation();
});
$(document).click(function(){
	$(".shop_car_r,.collect,.history").removeClass("active").attr({bSwitch:"close"});
	$(".r_menu_box").stop().animate({left:0});
})
//右侧购物车
var $carNum=0;
if($.cookie("car-id")==undefined||$.cookie("car-id")==""){
	$carNum=0;
}else{
	var aCookie=$.cookie("car-id").split("|");
	for (var i=0; i<aCookie.length; i++) {
		$carNum+=parseInt(aCookie[i].split("*")[1]);
	}
}
$(".shop_car_num").html($carNum);
function cutAdd($change,index,_this){
	var $carArrCookie=$.cookie("car-id").split("|");
	var newNum=parseInt($carArrCookie[index].split("*")[1])+$change;
	var newArrCookie=$carArrCookie[index].split("*")[0]+"*"+newNum;
	$carArrCookie.splice(index,1,newArrCookie);
	var newCookie=$carArrCookie.join("|");
	$.cookie("car-id",newCookie);
	var newPrice=parseInt($(_this).parent().siblings("i").html())/parseInt($(_this).siblings("span").html())*newNum;
	$(_this).parent().siblings("i").html(newPrice);
	$(_this).siblings("span").html(newNum);
}
/*
$(".shop_car_r").click(function(){
	if($(this).attr("bSwitch")=="open"){
		if($.cookie("car-id")==null||$.cookie("car-id")==""){
			$(".car_box").html('<div class="nothing car_nothing"><div></div><p>亲，您还没添加过任何商品哦！</p><a href="javascript:;">去逛逛</a></div>');
		}else{
			var $carArr=$.cookie("car-id").split("|");
			$.ajax({
				type:"get",
				url:"json/list_goods.json",
				async:false,
				success:function(data){
					$(".car_box").html('<div class="clear_all car_clear"><a href="javascript:;">清空购物车</a></div><div class="clear_box"></div><div class="pay"><p>共<span class="shop_car_num red"></span>件商品</p><a href="shopcar.html">去购物车结算</a></div>');
					$(".shop_car_num").html($carNum);
					$.each($carArr, function(i){
						$.each(data, function(j){
							$.each(this["data"], function(k) {
								$.each(this["infor"], function() {
									if($carArr[i].split("*")[0]==this["id"]){
										var $num=parseInt($carArr[i].split("*")[1])
										$(".clear_box").append('<div class="car_goods"><div class="car_goods_img"><img src="'+this["url"]+'"/></div><div class="car_goods_name">'+this["name"]+'</div><div class="car_goods_price">￥<i>'+this["price"][0]*$num+'</i><p><a class="cut">-</a><span>'+$num+'</span><a class="add">+</a></p></div><div class="car_del">×</div></div>');
									}
								});
							});
						});
					});
					$(".car_clear").click(function(){
						$(".clear_box").html("");
						$(".shop_car_num").html(0);
						$.cookie("car-id","");
					})
					$(".car_del").click(function(){
						var $carArrCookie=$.cookie("car-id").split("|");
						var index=$(this).parent().index();
						$(this).parent().remove();
						$carNum=$carNum-$carArrCookie[index].split("*")[1];
						$(".shop_car_num").html($carNum);
						$carArrCookie.splice(index,1);
						var $newCookie=$carArrCookie.join("|");
						$.cookie("car-id",$newCookie);
					});
					$(".cut").click(function(){
						var index=$(this).parents(".car_goods").index();
						var _this=this;
						if($.cookie("car-id").split("|")[index].split("*")[1]>1){
							cutAdd(-1,index,_this);
							$carNum--;
							$(".shop_car_num").html($carNum);
						}
					});
					$(".add").click(function(){
						var index=$(this).parents(".car_goods").index();
						var _this=this;
						cutAdd(1,index,_this);
						$carNum++;
						$(".shop_car_num").html($carNum);
					})
				}
			});
		}
	}
});
*/
function fnRbox(obj,box01,arr,fn01,fn02,fn03,obj1,box,cookieName,fn04){
	$(obj).click(function(){
		if($(this).attr("bSwitch")=="open"){
			if($.cookie(cookieName)==undefined||$.cookie(cookieName)==""){
				$(box01).html('<div class="nothing car_nothing"><div></div><p>亲，您还没'+arr+'过任何商品哦！</p><a href="air.html">去逛逛</a></div>');
			}else{
				var $carArr=$.cookie(cookieName).split("|");
				$.ajax({
					type:"get",
					url:"json/list_goods.json",
					async:false,
					success:function(data){
						fn01(box01);
						$(".shop_car_num").html($carNum);
						$.each($carArr, function(i){
							$.each(data, function(j){
								$.each(this["data"], function(k) {
									$.each(this["infor"], function() {
										if($carArr[i].split("*")[0]==this["id"]){
											var $num=parseInt($carArr[i].split("*")[1])
											var _this=this;
											fn02(_this,$num,box);
										}
									});
								});
							});
						});
						fn03(obj1,box,cookieName);
						fn04();
					}
				});
			}
		}
	});
}
function fnCarStart(box01){
	$(box01).html('<div class="clear_all car_clear"><a href="javascript:;">清空购物车</a></div><div class="clear_box"></div><div class="pay"><p>共<span class="shop_car_num red"></span>件商品</p><a href="shopcar.html">去购物车结算</a></div>');
}
function fnCollectStart(box01){
	$(box01).html('<div class="clear_all collect_clear"><a href="javascript:;">清空收藏</a></div><div class="clear_box collect_clear_box"></div>');
}
function fnHisStar(box01){
	$(box01).html('<div class="clear_all history_clear"><a href="javascript:;">清空浏览记录</a></div><div class="clear_box history_clear_box"></div>');
}
function fnCarAdd(_this,$num,box){
	$(box).append('<div class="car_goods"><div class="car_goods_img"><img src="'+_this["url"]+'"/></div><div class="car_goods_name"><a href="'+_this["href"]+'" title="'+_this["name"]+'">'+_this["name"]+'</a></div><div class="car_goods_price">￥<i>'+_this["price"][0]*$num+'</i><p><a class="cut">-</a><span>'+$num+'</span><a class="add">+</a></p></div><div class="car_del">×</div></div>');
}
function fnCHAdd(_this,$num,box){
	$(box).append('<div class="car_goods"><div class="car_goods_img"><img src="'+_this["url"]+'"/></div><div class="car_goods_name"><a href="'+_this["href"]+'" title="'+_this["name"]+'">'+_this["name"]+'</a></div><div class="car_goods_price ch_price">￥<i>'+_this["price"][0]+'</i>');
}
function fnCarClear(obj1,box,cookieName){
	$(obj1).find("a").click(function(){
		$(box).html("");
		$(".shop_car_num").html(0);
		$.cookie(cookieName,"");
	});
}
function fnCHClear(obj1,box,cookieName){
	$(obj1).find("a").click(function(){
		$(box).html("");
		$.cookie(cookieName,"");
	});
}
function fnAC(){
	$(".car_del").click(function(){
		var $carArrCookie=$.cookie("car-id").split("|");
		var index=$(this).parent().index();
		$(this).parent().remove();
		$carNum=$carNum-$carArrCookie[index].split("*")[1];
		$(".shop_car_num").html($carNum);
		$carArrCookie.splice(index,1);
		var $newCookie=$carArrCookie.join("|");
		$.cookie("car-id",$newCookie);
	});
	$(".cut").click(function(){
		var index=$(this).parents(".car_goods").index();
		var _this=this;
		if($.cookie("car-id").split("|")[index].split("*")[1]>1){
			cutAdd(-1,index,_this);
			$carNum--;
			$(".shop_car_num").html($carNum);
		}
	});
	$(".add").click(function(){
		var index=$(this).parents(".car_goods").index();
		var _this=this;
		cutAdd(1,index,_this);
		$carNum++;
		$(".shop_car_num").html($carNum);
	});
}
function fnNull(){null}
fnRbox(".shop_car_r",".car_box","添加",fnCarStart,fnCarAdd,fnCarClear,".clear_all",".clear_box","car-id",fnAC);
fnRbox(".collect",".collect_box","收藏",fnCollectStart,fnCHAdd,fnCHClear,".collect_clear",".collect_clear_box","collect-id",fnNull);
fnRbox(".history",".history_box","浏览",fnHisStar,fnCHAdd,fnCHClear,".history_clear",".history_clear_box","history-id",fnNull);
//收藏和浏览历史
function fnCH($addCookie,$getCookie,cookie_name,fn1){
	if($.cookie(cookie_name)==undefined||$.cookie(cookie_name)==""){
		$.cookie(cookie_name,$addCookie);
	}else{
		var search=$getCookie.indexOf($addCookie);
		if(search==-1){
			$.cookie(cookie_name,$.cookie(cookie_name)+"|"+$addCookie);
		}else{
			fn1();
		}
	}
}













































































