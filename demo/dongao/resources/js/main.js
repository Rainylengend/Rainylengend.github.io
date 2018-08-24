/**
 * create By Songbw on 2018/2/28
 * */
require.config({
	baseUrl: './resources/js',
	shim: {
		touch: ['jquery']
	},
	map: {
		'*': {
			jquery: 'zepto',
			swiper: '../swiper/js/swiper.min',
			mySwiper: 'mySwiper',
			openAnimate: 'openAnimate',
			html2canvas: 'html2canvas.min',
			wxshare: 'wxshare',
			createImg: 'createImg',
			fontPosition: 'position'
		}
	}
})
require(['jquery', 'first', 'touch'], function ($) {

})