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
});
$("#identify").blur(function(){
	var str="";
	$(".code span").each(function(){
		str+=$(this).html();
	});
	var exp=eval("/"+str+"/i");
	if (!exp.test($(this).val())) {
		$(".identity").html("验证码错误");
		getCode();
	}else{
		$(".identity").html("");
		fnLogin();
	}
});
function fnLogin(){
	$.get(
		"http://datainfo.duapp.com/shopdata/userinfo.php",
		{"status":"login",
		"userID":$('#luser').val(),
		"password":$("#lpassword").val(),
		},
		function(data){
			if(data==0){
				$(".user_cue").html("用户名不存在");
				getCode();
			}else if(data==2){
				$(".user_cue").html("用户名密码错误");
				getCode();
			}else{
				$.cookie("user",$.cookie("user-infor",$("#luser").val()));
				location.href = "index.html";	
			}
		}
	);
}

































