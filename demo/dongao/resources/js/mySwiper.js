/**
 * create By Songbw on 2018/2/28
 * */


define(['swiper', 'openAnimate'], function (Swiper, openAnimate) {
	var iframe = $('iframe')[0]

	var mySwiper = new Swiper('#mySwiper', {
		allowSlideNext: false,
		initialSlide: 0,
		on: {
			slideChangeTransitionStart: function(){
				if(this.activeIndex === 0){
					$('.first-container').prepend(iframe)
				}else{
					iframe.remove()
				}
			},
			slideChangeTransitionEnd: function () {
				if (this.activeIndex === 1) {
					openAnimate.init()
					mySwiper.allowSlideNext = false
				}

			}
		}
	})

	openAnimate.mySwiper = mySwiper
	return mySwiper
})