//放大镜
function fnBigPic(adata){
	$(".small_pic ul li").mouseover(function(){
		$(".small_pic ul li").removeClass("hover");
		$(this).addClass("hover");
		$(".big_pic img").attr({src:$(this).find("img").attr("src")});
		$(".bigger_pic img").attr({src:$(this).find("img").attr("src")});
	})
	$(".big_pic").hover(function(){
		$(".enlarge_area").show();
		$(".bigger_pic").show();
	},function(){
		$(".enlarge_area").hide();
		$(".bigger_pic").hide();
	});
}

fnBig(".big_pic",".bigger_pic",".bigger_pic img",".enlarge_area");
function fnBig(small,big,bigPic,mouse){
	var a=$(small).width();
	var b=$(small).height();
	var x=$(bigPic).width();
	var y=$(bigPic).height();
	$(small).mouseover(function(){	
		$(small).mousemove(function(event){
			var evt = window.event || event;
			var nLeft = $(small).offset().left;
			var nTop = $(small).offset().top;
			var nOffsetX =  evt.pageX-nLeft;
			var nOffsetY = evt.pageY-nTop;
			var nBigLeft = -(nOffsetX)/a*x+$(big).width()/2;
			var nBigTop = -(nOffsetY)/b*y+$(big).height()/2;
			if(nOffsetX<$(mouse).outerWidth()/2){
				$(mouse).css({left:0});
				$(bigPic).css({left:0});
			}else{
				if(nOffsetX>a-$(mouse).outerWidth()/2){							
					$(mouse).css({left:a-$(mouse).outerWidth()+"px"});
					$(bigPic).css({left:$(big).outerWidth()-x+"px"});
				}else{
					$(mouse).css({left:nOffsetX-$(mouse).outerWidth()/2+"px"});
					$(bigPic).css({left:nBigLeft+"px"});
				}
			}
			if(nOffsetY<$(mouse).outerHeight()/2){
				$(mouse).css({top:0});
				$(bigPic).css({top:0});
			}else{
				if(nOffsetY>b-$(mouse).outerHeight()/2){
					$(mouse).css({top:b-$(mouse).outerHeight()+"px"});
					$(bigPic).css({top:$(big).outerHeight()-y+"px"});
				}else{
					$(mouse).css({top:nOffsetY-$(mouse).outerHeight()/2+"px"});
					$(bigPic).css({top:nBigTop+"px"});
				}
			}
		});
	});
}



$.ajax({
	type:"get",
	url:"json/list_goods.json",
	async:false,
	success:function(data){
		if($.cookie("history-id")!=undefined){
			var $carArr=$.cookie("history-id").split("|");
			$.each($carArr, function(i){
				$.each(data, function(j){
					$.each(this["data"], function(k) {
						$.each(this["infor"], function() {
							if($carArr[i].split("*")[0]==this["id"]){
								$(".left_history").append('<div class="left_goods"><a href="'+this["href"]+'"><img src="'+this["url"]+'"/></a><p><a href="'+this["href"]+'" title="'+this["name"]+'">'+this["name"]+'</a></p><span>￥'+this["price"][0]+'.00</span></div>')
							}
						});
					});
				});
			});
			$(".left_goods:last").css({border:"none"});
		}
	}
});

$.ajax({
	type:"get",
	url:"json/nathome.json",
	async:true,
	success:function(data){
		var adata=data[0];
		for (var i=0; i<adata["enlarge"].length; i++) {
			$(".small_pic ul").append('<li><img src="'+adata["enlarge"][i]+'"/></li>');
		}
		fnBigPic(adata);
		$(".buy_name").html(adata["name"]);
		$(".buy_intro").html(adata["intro"]);
		$(".buy_price").html('<p class="price_gou">麦乐购价: <span>￥'+adata["price"][0]+'.00</span></p><p class="price_market">市场价: $'+adata["price"][1]+'(￥'+adata["price"][2]+'.00)</p>');
		$(".add_car_btn").attr({"itemId":adata["id"]});
		for (var i = 0; i < adata["details"].length; i++) {
			$(".goods_pic").append('<img src="'+adata["details"][i]+'"/>');
		}
		var eva=adata["evaluate"]
		for (var i=0; i<eva.length; i++) {
			$(".evaluate").append('<div class="evaluate_cont"><div class="evaluate_pic"><a href="javascript:;"><img src="'+adata["enlarge"][0]+'"/></a></div><div class="evaluate_msg"><div class="evaluate_name"><span>'+adata["name"]+'</span><ul><li class="icon-star"></li><li class="icon-star"></li><li class="icon-star"></li><li class="icon-star"></li><li class="icon-star"></li></ul></div><p class="user_infor"><span>'+eva[i]["lavel"][0]+'</span>'+eva[i]["lavel"][1]+'<em>'+eva[i]["user"]+'</em><i>'+eva[i]["time"][0]+'</i></p><p class="evaluate_txt">'+eva[i]["txt"]+'</p><p class="evaluate_answer">麦乐购回复 <span>'+eva[i]["time"][1]+'</span></p><p class="answer_cont">'+eva[i]["answer"]+'</p></div></div>');
			for (var j=0; j<eva[i]["star"]; j++) {
				$(".evaluate_name ul").eq(i).find("li").eq(j).addClass("light");
			}
		}	
		$(".eva_num").html(adata["evaluate"].length);
		$(".details_price span").html('￥'+adata["price"][0]+'.00');
		$(".collect_click").attr({"itemId":adata["id"]});
	}
});
//加入购物车；
$("#buy_num").focus(function(){
	$(this).attr({"value":""});
});
if($("#buy_num").val()==1){
	$(".num_left").css({background:"#f1f1f1"});
}
var $num=parseInt($("#buy_num").val());
$(".num_left").click(function(){
	$num=parseInt($("#buy_num").val());
	if($("#buy_num").val()>1){
		$num--;
		$("#buy_num").val($num);
	}
	if($("#buy_num").val()==1){
		$(this).css({background:"#f1f1f1"});
	}
});
$(".num_right").click(function(){
	$num=parseInt($("#buy_num").val());
	$num++;
	$("#buy_num").val($num);
	if ($("#buy_num").val()>1) {
		$(".num_left").css({background:"#fff"})
	}
});
addCar();
function addCar(){
	$(".add_car_btn").click(function(){
		if($("#buy_num").val()==""){
			alert("请输入购买数量")
		}else{
			$num=parseInt($("#buy_num").val());
			$carNum+=$num;
			$(".shop_car_num").html($carNum);
			var $addCookie=$(this).attr("itemId");
			if($.cookie("car-id")==undefined||$.cookie("car-id")==""){
				$.cookie("car-id",$addCookie+"*"+$num);
			}else{
				var getCookie=$.cookie("car-id");
				var search=getCookie.indexOf($addCookie);
				if(search==-1){
					$.cookie("car-id",$.cookie("car-id")+"|"+$addCookie+"*"+$num);
				}else{
					var aGetCookie=getCookie.split("|");
					for (var i=0; i<aGetCookie.length; i++) {
						if(aGetCookie[i].split("*")[0]==$addCookie){
							var newNum=parseInt(aGetCookie[i].split("*")[1])+$num;
							var newArrCookie=aGetCookie[i].split("*")[0]+"*"+newNum;
							aGetCookie.splice(i,1,newArrCookie);
							var newCookie=aGetCookie.join("|");
							$.cookie("car-id",newCookie);
						}
					}
				}
			}
		}
	});
}
//加入收藏
$(".collect_click").click(function(){
	var $addCookie=$(this).attr("itemId");
	var $getCookie=$.cookie("collect-id");
	function fnAlert(){
		alert("您已经收藏过此商品，快去看看吧！");
	}
	fnCH($addCookie,$getCookie,"collect-id",fnAlert);
})


//商品详情楼梯跳转
$(window).scroll(function(){
	if($(this).scrollTop()>=$("#details").offset().top){
		$(".details_title").addClass("title_fixed");
		$(".details_main").addClass("active")
	}else{
		$(".details_title").removeClass("title_fixed");
	}
	if ($(this).scrollTop()>=$(".evaluate").offset().top-500) {
		$(".details_main").removeClass("active");
		$(".details_evaluate").addClass("active");
	}else{
		$(".details_evaluate").removeClass("active");
	}
})
$(".details_main").click(function(){
	$(this).addClass("active");
	$("html,body").animate({scrollTop:$("#details").offset().top-10});
})
$(".details_evaluate").click(function(){
	$(this).addClass("active");
	$("html,body").animate({scrollTop:$(".evaluate").offset().top-50});
})




















































































































































