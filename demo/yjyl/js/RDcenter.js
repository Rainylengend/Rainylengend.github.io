/**
 * Created by Administrator on 2016/11/2.
 */
(function(){
	$(".RDCenter-view").load('RDCenter-profile.html');
	$(".RDTitle li").click(function(){
		$(this).find('div').show();
		$(this).siblings().find('div').hide();
		switch($(this).prop('id')){
			case "profile":$(".RDCenter-view").load('RDCenter-profile.html');break;
			case "construction":$(".RDCenter-view").load('RDCenter-construction.html');break;
			case "awards":$(".RDCenter-view").load('RDCenter-awards.html');break;
		}
	})
})();