/**
 * Created by Administrator on 2016/11/1.
 */
$('.header li').hover(function(){
	$(this).addClass('active');
	$(this).find('div').show()
},function(){
	if($(this).find(">a").prop('href')!="javascript:;"){
		$(this).removeClass('active');
	}
	$(this).find('div').hide();
});