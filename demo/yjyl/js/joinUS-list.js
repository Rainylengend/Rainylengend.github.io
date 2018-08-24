/**
 * Created by Administrator on 2016/11/3.
 */
(function(){
	$('.joinUs-view').load('joinUs-talent-concept.html');
	$('.common-title-main a').click(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		switch($(this).prop('id')){
			case "talent-concept":window.location.href="joinUs.html?page=talent-concept";break;
			case "society-employ":window.location.href="joinUs.html?page=society-employ";break;
			case "college-employ":window.location.href="joinUs.html?page=college-employ";break;
			case "employ-step":window.location.href="joinUs.html?page=employ-step";break;
		}
	})

})();