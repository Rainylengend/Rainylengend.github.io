/**
 * Created by Administrator on 2016/11/2.
 */
(function(){
	var page=window.location.search.substring(6);
	if(page){
		switch(page){
			case "talent-concept":$('.joinUs-view').load('joinUs-talent-concept.html'),demo("人才理念");break;
			case "society-employ":$('.joinUs-view').load('joinUs-society-employ.html'),demo("社会招聘");break;
			case "college-employ":$('.joinUs-view').load('joinUs-college-employ.html'),demo("校园招聘");break;
			case "employ-step":$('.joinUs-view').load('joinUs-employ-step.html'),demo("招聘流程");break;
		}
		$('#'+page).addClass('active');
		$('#'+page).siblings().removeClass('active');
	}else{
		$('.joinUs-view').load('joinUs-talent-concept.html');
	}
	$('.common-title-main a').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		switch($(this).prop('id')){
			case "talent-concept":$('.joinUs-view').load('joinUs-talent-concept.html'),demo("人才理念");break;
			case "society-employ":$('.joinUs-view').load('joinUs-society-employ.html'),demo("社会招聘");break;
			case "college-employ":$('.joinUs-view').load('joinUs-college-employ.html'),demo("校园招聘");break;
			case "employ-step":$('.joinUs-view').load('joinUs-employ-step.html'),demo("招聘流程");break;
		}
	});
	function demo(val){
		$(".common-title-main h3").html(val)
	}
})();