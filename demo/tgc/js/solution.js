$('.solution-main > div').click(function(){
	var page=$(this).index();
	window.location='./solution-list.html?list='+(page+1);
});
$('.solution-main > div').hover(function(){
	$(this).css('background-size','130% 130%');
},function(){
	$(this).css('background-size','');
});