//菜单栏
$(".web_menu li").hover(function(){
	var $left=$(this).position().left;
	var $width=$(this).find("a").width();
	$(".botton_line").stop().animate({left:$left,width:$width});
},function(){
	$(".botton_line").stop().animate({left:0,width:32});
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
/*banner轮播图*/

$(".banner_box").not(".banner_box:first").fadeOut();
$(".dot li:first").animate({"margin-top":-10});
$.ajax({
	type:"get",
	url:"json/banner.json",
	async:true,
	success:function(data){
		$(".banner_box").each(function(index){
			$(this).find("a").html('<img src="img/'+data[index]["url"]+'"/>');
			$(this).css({"background":data[index]["bgColor"]});
			$(".dot li").eq(index).find("a").html('<img src="img/'+data[index]["url_s"]+'"/>')
		})
		var $num=0;
		var $timer=setInterval(function(){
			fnBanner();
		},4000)
		$(".banner").hover(function(){
			clearInterval($timer);
		},function(){
			$timer=setInterval(function(){
				fnBanner();
			},4000);
		});
		$(".dot li").mouseover(function(){
			if($(this).attr("state")!="active"){
				$num=$(this).index()-1;
				fnBanner();
			}	
		});
		function fnBanner(){            //封装轮播函数
			$num++;
			if($num==5){
				$num=0;
			}
			$(".banner_box").fadeOut(function(){
				$(this).find("img").css({width:890,height:540,left:-40,top:-20});
			});
			$(".banner_box").eq($num).stop().fadeIn().find("img").stop().animate({width:810,height:480,left:0,top:0},2000);
			$(".dot li").stop().animate({"margin-top":0}).attr({state:""});
			$(".dot li").eq($num).stop().animate({"margin-top":-10}).attr({state:"active"});
		}
	}
});
/*获取商品信息*/
$.ajax({
	type:"get",
	url:"json/infor.json",
	async:true,
	success:function(data){
		//每日半价
		var $half=data[0]["half"];
		$(".half_price_goods ul li").each(function(index){
			$(this).html('<a href="javascript:;"><img src="'+$half[index]["url"]+'" class="half_pic"/><p class="half_name">'+$half[index]["name"]+'</p><p class="half_price"><span>￥'+$half[index]["price1"]+'</span><del>￥'+$half[index]["price2"]+'</del></p><p class="half_sell">已售'+$half[index]["sale"]+'件</p><span class="half_rob">马上抢<i></i></span></a>');
		});
		//天天特卖
		var $sale=data[0]["sale"];
		$(".sale_goods ul li").each(function(index){
			var _this=this;
			$(this).html('<a href="javascript:;" class="sale_pic"><img src="'+$sale[index]["url"]+'"/></a><div class="sale_goods_bottom"><p class="sale_name">'+$sale[index]["name"]+'</p><p class="sale_time"><i></i>剩余<span></span></p><p class="sale_price"><span>'+$sale[index]["price"]+'</span>折起</p></div>');
			//设置倒计时
			setInterval(function(){
				var adate = new Date();
				var today=adate.getDate();
				var toMon=adate.getMonth();
				var $dayNum=today+parseInt($sale[index]["day"]);
				if($dayNum>31){
					$dayNum=$dayNum-1-31;
					toMon++;
				}
				var endDay = new Date(2018,toMon,$dayNum);
				var haom1 = adate.getTime();
				var haom2 = endDay.getTime();
				var day = (haom2 - haom1)/1000/60/60/24;	//剩余天数
				var hour = ((haom2 - haom1)/1000/60/60)%24; //剩余小时
				var minutes = ((haom2 - haom1)/1000/60)%60;  //剩余分钟
				var seconds = ((haom2 -haom1)/1000)%60;   	//剩余秒数
				if(day<1){
					$(_this).find(".sale_time span").html(parseInt(hour) +"小时" + parseInt(minutes) +"分钟" + parseInt(seconds) +"秒");
				}else{
					$(_this).find(".sale_time span").html(parseInt(day) + "天" +parseInt(hour) +"小时" + parseInt(minutes) +"分钟" + parseInt(seconds) +"秒");
				}	
			},1000);
		});	
		//猜你喜欢
		var $love=data[0]["love"];
		$(".love_list1 li").each(function(i){
				$(this).html('<a href="javascript:;"><img src="'+$love[0][i]["url"]+'" class="love_pic"/><p class="love_name" title="'+$love[0][i]["name"]+'">'+$love[0][i]["name"]+'</p><p class="love_price"><span>￥'+$love[0][i]["price1"]+'</span><del>￥'+$love[0][i]["price2"]+'</del></p></a>');
		});
	}
});


/*天天特卖*/
//图片移入变大
$(".sale_goods ul li").hover(function(){
	$(this).find("img").stop().animate({width:310,height:246,left:-10,top:-8},500)
},function(){
	$(this).find("img").stop().animate({width:290,height:230,left:0,top:0},500)
})
//猜你喜欢
$(".love_goods ul").hide();
$(".love_goods .love_list1").show();
var $lNum=0;
$(".l_click_right").click(function(){
	$lNum++;
	if($lNum==5){
		$lNum=0;
	}
	fnLove($lNum);
})
$(".l_click_left").click(function(){
	$lNum++;
	if($lNum==5){
		$lNum=0;
	}
	fnLove($lNum);
})
function fnLove($lNum){
	$.ajax({
		type:"get",
		url:"json/infor.json",
		async:true,
		success:function(data){
			var $love=data[0]["love"];
			$(".love_goods ul").eq($lNum).find("li").each(function(i){
				$(this).html('<a href="javascript:;"><img src="'+$love[$lNum][i]["url"]+'" class="love_pic"/><p class="love_name">'+$love[$lNum][i]["name"]+'</p><p class="love_price"><span>￥'+$love[$lNum][i]["price1"]+'</span><del>￥'+$love[$lNum][i]["price2"]+'</del></p></a>');
			});
		}
	});
	$(".love_goods ul").hide();
	$(".love_goods ul").eq($lNum).show();
	$(".love_title em").html($lNum+1);
}

//商标轮播
$(".click_right").click(function(){
	var _this=$(this).siblings(".brand_list").find("ul");
	_this.stop(true,true).animate({left:-90},function(){
		_this.find("li:first").appendTo(_this);
		_this.css({left:0});
	});
});
$(".click_left").click(function(){
	var _this=$(this).siblings(".brand_list").find("ul");
	_this.find("li:last").prependTo(_this);
	_this.css({left:-90});
	_this.animate({left:0});
});	

function fnPlay(name,obj,box,distance){
	name=setInterval(function(){
		fnNext()
	},3000)
	$(box).hover(function(){
		clearInterval(name);
	},function(){
		name=setInterval(function(){
			fnNext();
		},3000)
	})
	function fnNext(){
		$(obj).stop(true,true).animate({left:-distance},function(){
			$(obj).children(":first").appendTo(obj);
			$(obj).css({left:0});
		});
	}
}

fnPlay(floor1,".f1_brand_list",".brand1",90);
fnPlay(floor2,".f2_brand_list",".brand2",90);
fnPlay(floor3,".f3_brand_list",".brand3",90);
fnPlay(floor4,".f4_brand_list",".brand4",90);
fnPlay(floor5,".f5_brand_list",".brand5",90);
fnPlay(floor6,".f6_brand_list",".brand6",90);
fnPlay(floor7,".f7_brand_list",".brand7",90);
fnPlay(floor8,".f8_brand_list",".brand8",90);
fnPlay(floor9,".f9_brand_list",".brand9",90);

//晒单区轮播
$(".s_click_right").click(function(){
	$(".recommend_move").stop(true,true).animate({left:-230},function(){
		$(".recommend_move").find("ul:first").appendTo(".recommend_move");
		$(".recommend_move").css({left:0});
	});
});
$(".s_click_left").click(function(){
	$(".recommend_move").find("ul:last").prependTo(".recommend_move");
	$(".recommend_move").css({left:-230});
	$(".recommend_move").animate({left:0});
});	

fnPlay(recommend,".recommend_move",".recommend_r_box",230);

//楼梯，顶部浮动搜索栏
$(".floor_box").attr({load:""});
$("#recommend").attr({load:""});
$(window).scroll(function(){
	var $nHeight=$(this).scrollTop();
	var $maxY=$("#footer_nav").offset().top
	if($nHeight>1000){
		$("#search_fixed").show();
	}else{
		$("#search_fixed").hide();
	}
	if($nHeight>2400&&$nHeight<$maxY){
		$("#stair").stop(true,true).slideDown("slow");
	}else{
		$("#stair").stop(true,true).slideUp("slow");
		$("#stair li span").removeClass("click_active");
	}
	$("#all_floor .floor_box").each(function(index){
		var $index=$(this).index();
		var $nY=$(this).offset().top-$(this).height()/2;
		var $nTop=$(this).offset().top-$(window).height();
		if($nHeight>$nY){
			$("#stair li span").removeClass("click_active");
			$("#stair li span").eq($index).addClass("click_active");
		}
		if($nHeight>$nTop){
			if($(this).attr("load")==""){
				$.ajax({
					type:"get",
					url:"json/infor.json",
					async:true,
					beforeSend:function(){
						$(".floor_box").eq($index).find(".floor_right").css({"background":"#fcfefc url(img/loading.gif) no-repeat center center"});
					},
					success:function(data){
						$(".floor_box").eq($index).find(".floor_right").css({"background":""});
						var $floor=data[0]["floor"];
						$(".floor_box").eq($index).find(".floor_right a").each(function(i){
							$(this).html('<img src="'+$floor[$index][i]["url"]+'"/>');
						})
					},
					error:function(){
						alert("服务器异常")
					}
				});
			}
			$(this).attr({load:"ready"});
		}
	});
	if($nHeight>$("#recommend").offset().top-$(window).height()){
		if($("#recommend").attr("load")==""){
			$.ajax({
				type:"get",
				url:"json/infor.json",
				async:true,
				beforeSend:function(){
					$(".recommend_l_box ul li").css({"background":"#fcfefc url(img/loading.gif) no-repeat center center"});
				},
				success:function(data){
					$(".recommend_l_box ul li").css({"background":""})
					var $rec=data[0]["recommend"];
					$(".recommend_l_box ul li").each(function(i){
						$(this).html('<a href="javascript:;" class="recommend_pic"><img src="'+$rec[i]["url"]+'"/></a><h2>'+$rec[i]["name"]+'</h2><p><a href="javascript:;">'+$rec[i]["infor"]+'</a></p>');
					});
					var $show=data[0]["show"];
					$(".recommend_move li").each(function(i){
						$(this).html('<a href="javascript:;" class="recommend_r_pic"><img src="'+$show[i]["url"]+'"/><p>'+$show[i]["name"]+'</p></a><h2><i>'+$show[i]["vip"]+'</i><span>'+$show[i]["leval"]+'</span></h2><p class="evaluate"><a href="javascript:;">'+$show[i]["infor"]+'</a></p>');
					});
				},
				error:function(){
					alert("服务器异常");
				}
			});
		}
		$("#recommend").attr({load:"ready"});
	}
});	
$("#stair li").click(function(){
	$("#stair li").removeClass("click_active");
	$(this).addClass("click_active");
	var $nTop=$(".floor_box").eq($(this).index()).offset().top-80;
	$("html,body").stop().animate({scrollTop:$nTop});
})



		
	
















