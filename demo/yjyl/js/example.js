/**
 * Created by Administrator on 2016/11/1.
 */
//list
(function(){
	var on=true;
	$(".example-contain").delegate('li','mouseover',function(){
		on=true;
		var H={
			selfH:parseInt($(this).find('div:first-child').css('height')),
			parentH:parseInt($(this).css('height')),
			title:48
		};
		$("#example li").find('div').stop(true);
		$(this).find("div:first-child").animate({top: H.parentH- H.selfH},500);
		$(this).find('.mock').fadeIn(500);
		$(this).siblings().find("div:first-child").animate({top: H.parentH- H.title},500);
		$(this).siblings().find('.mock').fadeOut(500);

	});
	$(".example-contain").mouseout(function(){
		$("#example li").find('div:first-child').animate({top: 280},500);
		$("#example li").find('.mock').fadeOut(500);
	})
	$.ajax({
		url:"../mock/example.json",
		dataType:'json'
	}).done(function(data){
		data=JSON.parse(JSON.stringify(data));
		var str='';
		for(var i=0;i<data.length;i++){
			if(i%4==3){
				str+='<li style="background: url('+data[i].background+')" class="mar-r0"> ' +
						'<a href="list.html">'+
							'<div> ' +
								'<h4>'+data[i].title+'</h4>' +
								' <p>'+data[i].contain+'</p> ' +
							'</div> ' +
							'<div class="mock"></div> ' +
						'</a>'+
					'</li>';
			}else{
				str+='<li style="background: url('+data[i].background+')"> ' +
						'<a href="list.html">'+
							'<div> ' +
								'<h4>'+data[i].title+'</h4>' +
								' <p>'+data[i].contain+'</p> ' +
							'</div> ' +
							'<div class="mock"></div> ' +
						'</a>'+
					'</li>';
			}
		}
		$('.example-contain').html(str);
	})
})();