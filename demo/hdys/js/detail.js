function goTop(o,i){o=o||.1,i=i||16;var e=0,t=0,n=0,r=0,s=0,a=0;document.documentElement&&(e=document.documentElement.scrollLeft||0,t=document.documentElement.scrollTop||0),document.body&&(n=document.body.scrollLeft||0,r=document.body.scrollTop||0);var s=window.scrollX||0,a=window.scrollY||0,l=Math.max(e,Math.max(n,s)),c=Math.max(t,Math.max(r,a)),p=1+o;if(window.scrollTo(Math.floor(l/p),Math.floor(c/p)),l>0||c>0){var d="goTop("+o+", "+i+")";window.setTimeout(d,i)}}var messageArr=localStorage.message?JSON.parse(localStorage.message):[],cStr=decodeURI(window.location.search.substr(1)),arr=cStr.split("&"),json={};$(arr).each(function(o){var i=$(arr)[o].split("=");return json[i[0]]=i[1],json});var id=json.goodsID,imgSrc="",name="",price="",color="",size="";"index"==json.page?$.ajax({url:"../json/recommend.json",success:function(shuju){shuju=eval(shuju),imgSrc=shuju[id-1].img[0],name=shuju[id-1].name,price=shuju[id-1].price,color=shuju[id-1].color[0],size=shuju[id-1].size[0],$("#banner ul li:nth-of-type(1) img").prop("src",shuju[id-1].img[0]),$("#banner ul li:nth-of-type(2) img").prop("src",shuju[id-1].img[1]),$("#banner ul li:nth-of-type(3) img").prop("src",shuju[id-1].img[2]),$("#banner ul li:nth-of-type(4) img").prop("src",shuju[id-1].img[0]),$("#banner ul li:nth-of-type(5) img").prop("src",shuju[id-1].img[1]),$(".detail:nth-child(1) h4").html(shuju[id-1].name),$(".price").html(shuju[id-1].price),$(".color i:nth-of-type(1)").html(shuju[id-1].color[0]),$(".color i:nth-of-type(2)").html(shuju[id-1].color[1]),$(".color i:nth-of-type(3)").html(shuju[id-1].color[2]),$(".size i:nth-of-type(1)").html(shuju[id-1].size[0]),$(".size i:nth-of-type(2)").html(shuju[id-1].size[1]),$(".size i:nth-of-type(3)").html(shuju[id-1].size[2]),$(".detail div:nth-of-type(2) img").prop("src",shuju[id-1].img[0]),$(".detail div:nth-of-type(3) img").prop("src",shuju[id-1].img[1]),$(".detail div:nth-of-type(4) img").prop("src",shuju[id-1].img[2])}}):$.ajax({url:"http://datainfo.duapp.com/shopdata/getGoods.php",dataType:"jsonp",data:{goodsID:id,linnnumber:1e4},success:function(o){var i=JSON.parse(o[0].imgsUrl);imgSrc=i[0],name=o[0].goodsName,price=(o[0].price*(o[0].discount/10)).toFixed(2),color="黑色",size="S",$("#banner ul li:nth-of-type(1) img").prop("src",i[0]),$("#banner ul li:nth-of-type(2) img").prop("src",i[1]),$("#banner ul li:nth-of-type(3) img").prop("src",i[2]),$("#banner ul li:nth-of-type(4) img").prop("src",i[0]),$("#banner ul li:nth-of-type(5) img").prop("src",i[1]),$(".detail:nth-child(1) h4").html(o[0].goodsName),$(".price").html((o[0].price*(o[0].discount/10)).toFixed(2)),$(".detail div:nth-of-type(2) img").prop("src",i[0]),$(".detail div:nth-of-type(3) img").prop("src",i[1]),$(".detail div:nth-of-type(4) img").prop("src",i[2])},error:function(o){console.log("失败")}}),$(function(){var o=(new Swiper(".swiper-container",{autoplay:3e3,loop:!0,pagination:".swiper-pagination"}),!0);touch.on(".glyphicon-list","tap",function(){o?$(".map").css("transform","translateX(50vw)"):$(".map").css("transform","translateX(0vw)"),o=!o}),touch.on(".glyphicon-shopping-cart","tap",function(){window.location.href="shopcar.html"});var i=!0;$(".detail p:nth-of-type(2) i:nth-of-type(1)").addClass("bg"),$(".detail p:nth-of-type(3) i:nth-of-type(1)").addClass("bg"),touch.on(".color i","tap",function(){i=!0,color=$(this).html(),$(".detail p:nth-of-type(2) i").removeClass("bg"),$(this).addClass("bg")}),touch.on(".size i","tap",function(){i=!0,size=$(this).html(),$(".detail p:nth-of-type(3) i").removeClass("bg"),$(this).addClass("bg")}),$(".col-xs-4").eq(0).addClass("border_none"),touch.on(".col-xs-4","tap",function(){var o=$(this).index();$(".col-xs-4").removeClass("border_none"),$(this).addClass("border_none"),$(".detail").addClass("hidden"),$(".detail").eq(o).removeClass("hidden")}),touch.on(".sub button:nth-of-type(1)","tap",function(){if(i){var o=$("#number").val(),e={id:id,color:color,size:size,num:o,imgSrc:imgSrc,name:name,price:price};messageArr.push(e);var t=JSON.stringify(messageArr);localStorage.message=t}window.location.href="shopcar.html?id="+encodeURI(id),i=!0}),touch.on(".sub button:nth-of-type(2)","tap",function(){i=!1;var o=$("#number").val(),e={id:id,color:color,size:size,num:o,imgSrc:imgSrc,name:name,price:price};messageArr.push(e);var t=JSON.stringify(messageArr);localStorage.message=t,alert("商品已成功加入购物车~_~")}),touch.on(".back","tap",function(){goTop()})});