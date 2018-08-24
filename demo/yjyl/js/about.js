$('.about-title-main a').click(function(){
	var el=$(this).prop("href").substring($(this).prop("href").indexOf("#"));
	$(this).addClass('active').siblings().removeClass('active')
	$(el).show().siblings().hide();
	return false;
});