$(".register_infor ul li input").focus(function(){
	$(this).addClass("focus");
});
$(".register_infor ul li input").blur(function(){
	$(this).removeClass("focus");
});

function getCode(){
	for(var i=0; i<4; i++){
		var nRandom01 = Math.floor(Math.random()*10)+48;
		var nRandom02 = Math.floor(Math.random()*26)+97;
		var nRandom03 = Math.floor(Math.random()*26)+65;
		var aRandom = [nRandom01,nRandom02,nRandom03];
		var nRandom04 = Math.floor(Math.random()*3);
		var str = String.fromCharCode(aRandom[nRandom04]);
		var rColor="rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
		$(".code span").eq(i).html(str);
		$(".code span").eq(i).css({color:rColor});
	}
}
getCode();
$(".change").click(function(){
	getCode();
})
$("#agree").change(function(){
	if($(this).is(":checked")){
		$("#reg_now").css({background:"#e83917"});
		$('#reg_now').removeAttr("disabled"); 
		
	}else{
		$("#reg_now").css({background:"#ccc"});
		$("#reg_now").attr("disabled","");
	}
})
$(function(){
	var judge=false;
	$("#user").blur(function(){
		var exp=/^[\w]{5,20}$/;
		if($(this).val()==""){
			$(this).siblings("p").html("请输入用户名");
			judge=false;
		}else{
			if(!exp.test($(this).val())){	
				$(this).siblings("p").html("用户名长度为5-20位，只能包含数字、字母和下划线");
				judge=false;
			}else{
				$(this).siblings("p").html("");
				judge=true;
			}	
		}
	});
	
	$("#password").blur(function(){
		var exp=/^[a-zA-Z][\w]{8,16}$/;
		if($(this).val()==""){
			$(this).siblings("p").html("请输入密码");
			judge=false;
		}else{
			if(!exp.test($(this).val())){	
				$(this).siblings("p").html("密码长度为8-16位，以字母开头，只能包含数字字母下划线");
				judge=false;
			}else{
				if($("#password").val()!=$("#pass_again").val()){
					$(".pass_again").html("两次输入的密码不一致，请重新输入");
					judge=false;
				}else{
					$(".pass_again").html("");
					judge=true;
				}
			}	
		}
	});
	$("#pass_again").blur(function(){
		var exp=/^[a-zA-Z][\w]{8,16}$/;
		if($(this).val()==""){
			$(this).siblings("p").html("请再次输入密码");
			judge=false;
		}else{
			if(!exp.test($(this).val())){	
				$(this).siblings("p").html("密码长度为8-16位，以字母开头，只能包含数字字母下划线");
				judge=false;
			}else{
				if($("#password").val()!=$("#pass_again").val()){
					$(".pass_again").html("两次输入的密码不一致，请重新输入");
					judge=false;
				}else{
					$(".pass_again").html("");
					judge=true;
				}
			}	
		}
	});
	$("#identify").blur(function(){
		var exp=/^[a-zA-Z0-9]{4}$/;
		if($(this).val()==""){
			$(this).siblings("p").html("请输入验证码");
			judge=false;
		}else{
			if(!exp.test($(this).val())){	
				$(this).siblings("p").html("验证码错误");
				judge=false;
			}else{
				var str="";
				$(".code span").each(function(){
					str+=$(this).html();
				});
				var exp=eval("/"+str+"/i");
				if (!exp.test($(this).val())) {
					$(".identity").html("验证码错误");
					judge=false;
				}else{
					$(".identity").html("");
					judge=true;
				}
			}	
		}
	});
	$("#reg_now").click(function(){
		console.log($(".register_infor ul li").length);
		for (var i=0; i<$(".register_infor ul li").length; i++) {
			$(".register_infor ul li").eq(i).find("input").blur();
			if(!judge){
				getCode();
				return;
			}
		}
		zhuce();
	});
});

function zhuce(){
	$.get(
		"http://datainfo.duapp.com/shopdata/userinfo.php",
		{
			"status" :"register",
           "userID":$("#user").val(),
           "password":$("#password").val()
		},
		function(data){
			if(data==0){
				$(".user_cue").html("用户名重复");
			}else if(data==1){
				$("#success").show();
				$(".user_name span").html($("#user").val());
			}else if(data==2){
				alert("数据库错误");	
			}	
		}
	)
}
























