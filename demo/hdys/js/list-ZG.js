function navigation(s){var a=$("<ul class='lef'></ul>").appendTo($(".bigbox")),n=$("<div class='rigbox'></div>").appendTo($(".bigbox"));for(var i in s){for(var o=s[i].L,t=o.length,e=0;e<t;e++){var l=s[i].L[e].catalog2;$("<li><img src=../img/"+l+"/></li>").appendTo(a)}for(var c=$("<div class='rig'></div>").appendTo(n),p=0;p<s[i].sub2.length;p++)for(var r=s[i].sub2[p].subject,d=s[i].sub2[p].detail,u=($("<h2>"+r+"</h2>").appendTo(c),$("<ul></ul>").appendTo(c)),f=d.split(" "),h=0;h<f.length;h++){var g=$("<li></li>").appendTo(u),v=$("<a href='../html/list_infor.html?className=A&classID='+s[i].sub2[p].classID>"+f[h]+"</a>");if(h%2==0){v.appendTo(g);$("<span></span>").appendTo(g)}else v.appendTo(g)}}}function hover(){$(".lef>li").each(function(s){this.addEventListener("touchstart",function(){var s=$(this).index();$(this).css({background:"#fff"}).siblings().css({background:"#F5F5F5"}),$(".rig").eq(s).css({display:"block"}).siblings().css({display:"none"})})}),$(".rig>h2").each(function(s){var a=this;this.addEventListener("touchstart",function(){setTimeout(function(){"none"==$(a).next("ul").css("display")?$(a).next("ul").css("display","block").siblings("ul").css("display","none"):$(a).next("ul").css("display","none")},200)})})}$.ajax({url:"http://datainfo.duapp.com/shopdata/getclass.php",dataType:"json",jsonp:"callback",data:{},success:function(s){},error:function(s){}}),$.get("../json/list-ZG.json",function(s){var s=JSON.parse(s);navigation(s),hover()},JSON);