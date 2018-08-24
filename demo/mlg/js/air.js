//菜单
$(".web_menu li").hover(function(){
	var $left=$(this).position().left;
	var $width=$(this).find("a").width();
	$(".botton_line").stop().animate({left:$left,width:$width});
},function(){
	$(".botton_line").stop().animate({left:0,width:0});
})
$(".classcify").hover(function(){
	$(".goods_menu_box").stop().slideDown();
},function(){
	$(".goods_menu_box").stop().slideUp();
})
$(".goods_menu li").mouseover(function(){
	$(this).addClass("hover").find("i").stop().animate({"margin-left":10},200);
	$(".menu_cont").eq($(this).index()).addClass("active").stop().animate({left:180,opacity:0.96},200)
})
$(".goods_menu li").mouseout(function(){
	$(".goods_menu li").removeClass("hover").find("i").stop().animate({"margin-left":0},200);
	$(".menu_cont").removeClass("active").stop().animate({left:170,opacity:0.5});
})
$(".menu_cont").hover(function(){
	$(this).addClass("active").stop().animate({left:180,opacity:0.96},200);
	$(".goods_menu li").eq($(this).index()).addClass("hover").find("i").stop().animate({"margin-left":10},200);
},function(){
	$(".menu_cont").removeClass("active").stop().animate({left:170,opacity:0.5});
	$(".goods_menu li").removeClass("hover").find("i").stop().animate({"margin-left":0},200);
});
//左侧菜单栏点击展开
$(".main_classcify dd").find("span").attr({judge:"close"});
$(".main_classcify dd").find("span").click(function(){
	if($(this).attr("judge")=="close"){
		$(this).attr({judge:"open"});
		$(this).html("-")
		$(this).parent().siblings("div").stop().slideDown();
	}else{
		$(this).attr({judge:"close"});
		$(this).html("+")
		$(this).parent().siblings("div").stop().slideUp();
	}
});
//加载菜单
function addMenu(){
	$.ajax({
		type:"get",
		url:"json/left_menu.json",
		async:true,
		success:function(data){
			$.each(data,function(i){	
				$.each(this, function(j) {
					$(".main_classcify dd").eq(i).find(".classcify_box").append('<h1><a href="'+this["href"]+'">'+this["classify"]+'</a></h1><ul></ul>');
					$.each(this["infor"], function(k) {
						$(".main_classcify dd").eq(i).find(".classcify_box ul").eq(j).append('<li><a href="'+data[i][j]["url"][k]+'">'+this+'</a></li>');
					});
				});
			});
		}
	});
}
addMenu()


var $num=0
$.ajax({
	type:"get",
	url:"json/list_goods.json",
	async:false,
	success:function(data){
		for (var i=0; i<data.length; i++) {
			$(".country ul").append('<li><a href="javascript:;">'+data[i]["country"]+'</a></li>');
			for(var j=0; j<data[i]["data"].length; j++){
				$(".brand ul").append('<li><a href="javascript:;">'+data[i]["data"][j]["brand"]+'</a></li>');
				brandClick($num);
				for (var k=0; k<data[i]["data"][j]["infor"].length; k++) {
					var $infor=data[i]["data"][j]["infor"][k];
					addGoods($infor);
				}
			}
		}
		$(".list_goods_num span").html($(".goods_list ul li").length);
		addCar();
		addCollect();
	}
});
$(".country ul li").click(function(){
	$(".country ul li").removeClass("red");
	$(this).addClass("red");
	$(".brand ul").html('<li class="red"><a href="javascript:;">全部</a></li>');
	$(".goods_list ul").html("");
	$num=$(this).index();
	$.ajax({
		type:"get",
		url:"json/list_goods.json",
		async:true,
		success:function(data){
			if($num==0){
				for (var i=0; i<data.length; i++) {
					for(var j=0; j<data[i]["data"].length; j++){
						$(".brand ul").append('<li><a href="javascript:;">'+data[i]["data"][j]["brand"]+'</a></li>');
						brandClick($num);
						for (var k=0; k<data[i]["data"][j]["infor"].length;k++) {
							var $infor=data[i]["data"][j]["infor"][k];
							addGoods($infor);
						}	
					}
				}
			}else{
				for (var i=0; i<data[$num-1]['data'].length; i++) {
					$(".brand ul").append('<li><a href="javascript:;">'+data[$num-1]["data"][i]["brand"]+'</a></li>');
					brandClick($num);
					for (var k=0; k<data[$num-1]["data"][i]["infor"].length;k++) {
						var $infor=data[$num-1]["data"][i]["infor"][k];
						addGoods($infor);
					}
				}
			}
			$(".list_goods_num span").html($(".goods_list ul li").length);
			addCollect();
			addCar();
		}
	});
})


function brandClick($num){
	$(".brand ul li").click(function(){
		$(".brand ul li").removeClass("red");
		$(this).addClass("red");
		$(".goods_list ul").html("");
		var _this=this;
		var $index=$(this).index();
		$.ajax({
			type:"get",
			url:"json/list_goods.json",
			async:false,
			success:function(data){
				if($index==0){
					if($num!=0){
						for (var i=0; i<data[$num-1]["data"].length; i++) {
							for (var k=0; k<data[$num-1]["data"][i]["infor"].length;k++) {
								var $infor=data[$num-1]["data"][i]["infor"][k];
								addGoods($infor);
							}
						}
		
					}else{
						for (var i=0; i<data.length; i++) {
							for(var j=0; j<data[i]["data"].length; j++){
								for (var k=0; k<data[i]["data"][j]["infor"].length;k++) {
									var $infor=data[i]["data"][j]["infor"][k];
									addGoods($infor);
								}	
							}
						}
					}
					
				}else{
					for (var i=0; i<data.length; i++) {
						for (var j=0; j<data[i]["data"].length; j++) {
							if($(_this).find('a').html()==data[i]["data"][j]["brand"]){
								for (var k=0; k<data[i]["data"][j]["infor"].length; k++) {
									var $infor=data[i]["data"][j]["infor"][k];
									addGoods($infor);
								}
							}
						}
					}
				}
				
				$(".list_goods_num span").html($(".goods_list ul li").length);
				addCollect();
				addCar();
			}
		});
	});
}


function addCar(){
	$(".car").click(function(){
		$carNum++;
		$(".shop_car_num").html($carNum);
		var $addCookie=$(this).attr("itemId");
		if($.cookie("car-id")==undefined||$.cookie("car-id")==""){
			$.cookie("car-id",$addCookie+"*1");
		}else{
			var getCookie=$.cookie("car-id");
			var search=getCookie.indexOf($addCookie);
			if(search==-1){
				$.cookie("car-id",$.cookie("car-id")+"|"+$addCookie+"*1");
			}else{
				var aGetCookie=getCookie.split("|");
				for (var i=0; i<aGetCookie.length; i++) {
					if(aGetCookie[i].split("*")[0]==$addCookie){
						var newNum=parseInt(aGetCookie[i].split("*")[1])+1;
						var newArrCookie=aGetCookie[i].split("*")[0]+"*"+newNum;
						aGetCookie.splice(i,1,newArrCookie);
						var newCookie=aGetCookie.join("|");
						$.cookie("car-id",newCookie);
					}
				}
			}
		}
	})
}


function addCollect(){
	$(".add_collect").click(function(){
		var $addCookie=$(this).css({color:"#f00"}).siblings(".car").attr("itemId");
		var $getCookie=$.cookie("collect-id");
		function fnAlert(){
			alert("您已经收藏过此商品，快去看看吧！");
		}
		fnCH($addCookie,$getCookie,"collect-id",fnAlert);
	});
	$(".goods_list li a").click(function(){
		var $addHistory=$(this).parents("li").find(".car").attr("itemId");
		var $getCookie=$.cookie("history-id");
		fnCH($addHistory,$getCookie,"history-id",fnNull);
	});
}

function addGoods($infor){
	$(".goods_list ul").append('<li><div class="goods_pic"><a href="'+$infor["href"]+' " target="_blank"><img src="'+$infor["url"]+'"/></a></div><p class="goods_name" title="'+$infor["name"]+'"><a href="'+$infor["href"]+'" target="_blank">'+$infor["name"]+'</a></p><p class="goods_price"><span>￥'+$infor["price"][0]+'.00</span><del>￥'+$infor["price"][1]+'</del></p><p class="goods_sale"><span class="noborder_right">销量'+$infor["sale"]+'</span><span>评价'+$infor["evaluate"]+'</span></p><div class="add_car"><input type="button" value="加入购物车" itemId="'+$infor["id"]+'" class="car"/><span href="javascript:;" class="icon-heart add_collect">收藏</span></div></li>');
	$(".add_collect").each(function(){
		var $getCookie=$.cookie("collect-id");
		if($getCookie!=undefined&&$getCookie!=""){
			if($getCookie.indexOf($(this).siblings(".car").attr("itemId"))!=-1){
				$(this).css({color:"#f00"});
			}
		}
	});
}





























































































































