/**
 * create By Songbw on 2018/2/28
 * */

define(['jquery', 'mySwiper', 'createImg', 'wxshare'], function ($, mySwiper, createImg, wxshare) {
	var speed = 100

	return {
		city:'郑州',
		init: function () {
			this.textAnimate('五 地 网 友 联 动 一 起 携 手, 点 亮 城 市 之 光')
			this.bindOpenBtn()
			this.chooseCity()
			// this.initInfo()
			this.getData()
			return this
		},
		getData: function () {
			//  https://wdh.dahe.cn/native/index.php/user/get_baseinfo?redirect_url=http://10.10.10.151:8080/
			//  https://wdh.dahe.cn/native/index.php/user/get_baseinfo?redirect_url=https://uploads.dahe.cn/sbw/dongao/index.html
			createImg()
			var self = this
			$.ajax({
				url: 'https://wdh.dahe.cn/native/index.php/user/get_userinfo',
				type: 'post',
				data: {
					uu: location.search.substr(1).split('=')[1]
				},
				success: function (res) {
					var data,
						headimgurl,
						nickname,
						ranking

					try {
						data = JSON.parse(res).data
						headimgurl = data.headimgurl
						nickname = data.nickname
						ranking = data.ranking
					} catch (e) {
						console.log(e)
						createImg()
					}
					self.initInfo(headimgurl, nickname, ranking)
				}
			})
		},
		share: function (name, city) {
			var tit = '点亮城市之光，我是' + name + '，' + city + '最美丽。',
				des = '五地网友联动，一起携手奔幸福！',
				icon = 'http://uploads.dahe.cn/sbw/icon/share_icon.png'

			console.log(tit, des, icon);
			wxshare(tit, des, icon)
		},
		initInfo: function (src, name, ranking) {
			/*window.sessionStorage.myPhoto = './resourcloges/img/other.png'
			$('.photo img').attr('src','./resources/img/other.png')
			$('.name').html('xxx')
			$('.ranking').html(333)*/
			var photoImg = $('.photo img'),
				isCreate = false

			window.sessionStorage.myPhoto = src || './resources/img/other.png'
			photoImg.attr('src', src || './resources/img/other.png')
			$('.name').html(name || '')
			$('.ranking').html(ranking || 1)
			this.nickname = name
			this.share(name, '郑州')

			photoImg[0].addEventListener('load', function () {
				isCreate = true
				createImg()
			})

			setTimeout(function () {
				if (!isCreate)
					createImg()
			}, 3000)
		},
		textAnimate: function (str) {
			var strArr = str.split(''),
				showText,
				timer = null,
				num = 0

			strArr = strArr.map(function (item) {
				return (
					item === '动' ? '<span>' + item + '</span><br/>' :
						'<span>' + item + '</span>'
				)
			})

			timer = setInterval(function () {
				num++

				if (num > strArr.length) {
					clearInterval(timer)
					timer = null
					$('iframe').addClass('active')
					$('.first-bottom').addClass('active')
				}

				showText = strArr.slice(0, num)
				$('.text-show').html(showText)
			}, speed)
		},
		chooseCity: function () {
			var self = this

			$('.city-list li').tap(function () {
				var city = $(this).html()

				if(self.city !== city){
					self.city = city
					self.share(self.nickname || '', city)
					createImg()
					$('.city').html(city)
					$(this).addClass('active')
					$(this).siblings().removeClass('active')
				}
			})
		},
		bindOpenBtn: function () {
			$('.btn-fire').tap(function () {
				mySwiper.allowSlideNext = true
				mySwiper.slideNext(300)
			})
		}
	}.init()

})