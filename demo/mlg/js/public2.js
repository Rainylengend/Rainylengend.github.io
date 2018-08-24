/*顶部广告*/
$(".top_banner span").click(function(){
	$("#top_banner").slideUp();
});

/*我的麦乐购*/
$(".mine").hover(function(){
	$(this).addClass("hover");
	$(".mygou").stop().slideDown("fast");
},function(){
	$(".mygou").stop().slideUp("fast",function(){
		$(".mine").removeClass("hover");
	});
});

$(function(){
	if($.cookie("user")){
		$(".left_part1 p").html("欢迎回来:<span>"+$.cookie("user-infor")+"</span>");
	}else{
		$(".left_part1 p").html('<a href="login.html">请登录</a><a href="register.html" class="color_red">免费注册</a>');
	}
});
/*手机麦乐购*/
$(".phone").hover(function(){
	$(this).addClass("hover");
	$(".app").stop().slideDown("fast");
},function(){
	$(".app").stop().slideUp("fast",function(){
		$(".phone").removeClass("hover");
	});
});
/*搜索框*/
$(".search_input").focus(function(){
	$(this).attr({value:""});
});
$(".search_input").blur(function(){
	$(this).attr({value:"Top榜选购宝典 最高可省200"});
});
$(".search_fixed").focus(function(){
	$(this).attr({value:""});
});
$(".search_fixed").blur(function(){
	$(this).attr({value:"请输入商品名称，支持拼音搜索"});
});

//加载菜单
$.ajax({
	type:"get",
	url:"json/menu.json",
	async:true,
	success:function(data){
		fnMenu(data);
	}
});
function fnMenu(data){
	$(".menu_cont_box .menu_cont").each(function(index){
		var adata=data[index];
		for (var i=0; i<adata["infor"].length; i++) {
			$(this).append("<div><h1>"+adata["infor"][i]["title"]+"</h1></div>");
			for (var j=0; j<adata["infor"][i]["cont"].length; j++) {
				var aCont=adata["infor"][i];
				$(this).find("div").eq(i).append('<a href="'+aCont["url"][j]+'">'+aCont["cont"][j]+'</a>');
			}
		}		
	});
}