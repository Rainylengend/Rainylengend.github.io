
//购物车结算
var $carNum=0;
if($.cookie("car-id")==undefined||$.cookie("car-id")==""){
	$carNum=0;
}else{
	var aCookie=$.cookie("car-id").split("|");
	for (var i=0; i<aCookie.length; i++) {
		$carNum+=parseInt(aCookie[i].split("*")[1]);
	}
}
function fnNone(){
	$(".car_cont").html('<div class="car_nothing"><i></i><p>亲，您的购物车里没有任何商品哦！</p><a href="index.html">去逛逛</a></div>');
	$(".all_goods_num i").html("0");
	$(".all_goods_price").html("￥0.00");
	$(".all_goods_pay").css({background:"#999"}).attr({disabled:"disabled"}); 
}
if($carNum==0){
	fnNone();
}else{
	$(".all_goods_pay").css({background:"#cf2e13"}).removeAttr("disabled");
	var $carArr=$.cookie("car-id").split("|");
	$.ajax({
		type:"get",
		url:"json/list_goods.json",
		async:false,
		success:function(data){
			$(".car_cont").html('<div class="car_head"><span class="name">商品信息</span><span class="price">单价</span><span class="amount">数量</span><span class="total">合计</span><span class="operate">操作</span></div>');
			$(".all_goods_num i").html($carNum);
			$.each($carArr, function(i){
				$.each(data, function(j){
					$.each(this["data"], function(k) {
						$.each(this["infor"], function() {
							if($carArr[i].split("*")[0]==this["id"]){
								var $thisnum=parseInt($carArr[i].split("*")[1])
								$(".car_cont").append('<div class="car_infor"><div class="car_infor_name"><a href="'+this["href"]+'" class="car_pic"><img src="'+this["url"]+'"/></a><a href="'+this["href"]+'" class="car_name">'+this["name"]+'</a></div><p class="car_price">￥<i>'+this["price"][0]+'</i>.00</p><div class="car_amount"><a href="javascript:;" class="car_cut">-</a><input type="text" name="car_amount" class="car_num" value="'+$thisnum+'" /><a href="javascript:;" class="car_add">+</a></div><p class="car_total">￥<i>'+this["price"][0]*$thisnum+'</i>.00</p><p class="car_do"><a href="javascript:;">删除</a></p></div>');
							}
						});
					});
				});
			});
			fnTotal();
			$(".car_clear").click(function(){
				fnNone();
				$.cookie("car-id","");
			});
			$(".car_do a").click(function(){
				var $carArrCookie=$.cookie("car-id").split("|");
				var index=$(this).parents(".car_infor").index()-1;
				$(this).parents(".car_infor").remove();
				$carArrCookie.splice(index,1);
				var $newCookie=$carArrCookie.join("|");
				$.cookie("car-id",$newCookie);
				fnTotal();
				if($.cookie("car-id")==undefined||$.cookie("car-id")==""){
					fnNone();
				}
			});
			$(".car_cut").click(function(){
				var index=$(this).parents(".car_infor").index()-1;
				var _this=this;
				if($.cookie("car-id").split("|")[index].split("*")[1]>1){
					cutAdd(-1,index,_this);
				}
			});
			$(".car_add").click(function(){
				var index=$(this).parents(".car_infor").index()-1;
				var _this=this;
				cutAdd(1,index,_this);
			});
			$(".car_num").blur(function(){
				var $inpNum=0;
				if($(this).val()==""){
					$inpNum=1;
					$(this).val("1");
				}else{
					$inpNum=parseInt($(this).val());
				}
				var index=$(this).parents(".car_infor").index()-1;
				var $inpCookie=$.cookie("car-id").split("|");
				var $newInp=$inpCookie[index].split("*")[0]+"*"+$inpNum;
				$inpCookie.splice(index,1,$newInp);
				var $newCookie=$inpCookie.join("|");
				$.cookie("car-id",$newCookie);
				var $newPrice=parseInt($(this).parent().siblings(".car_price").find("i").html())*$inpNum;
				$(this).parent().siblings(".car_total").find("i").html($newPrice);
				fnTotal();
			})
		}
	});
}

function cutAdd($change,index,_this){
	var $carArrCookie=$.cookie("car-id").split("|");
	var newNum=parseInt($carArrCookie[index].split("*")[1])+$change;
	var newArrCookie=$carArrCookie[index].split("*")[0]+"*"+newNum;
	$carArrCookie.splice(index,1,newArrCookie);
	var newCookie=$carArrCookie.join("|");
	$.cookie("car-id",newCookie);
	var newPrice=parseInt($(_this).parent().siblings(".car_price").find("i").html())*newNum;
	$(_this).parent().siblings(".car_total").find("i").html(newPrice);
	$(_this).siblings("input").val(newNum);
	fnTotal();
}

function fnTotal(){
	var $price=0;
	var $allNum=0;
	$(".car_infor").each(function(i){
		$price+=parseInt($(this).find(".car_total i").html());
		$allNum+=parseInt($(this).find(".car_num").val());
	});
	$(".all_goods_price").html("￥"+$price+".00");
	$(".all_goods_num i").html($allNum);
}
























