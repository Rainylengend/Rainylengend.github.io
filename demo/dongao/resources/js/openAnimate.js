/**
 * create By Songbw on 2018/2/28
 * */

define(['jquery', 'fontPosition'], function ($, fontPosition) {
	var myElInfo,
		speed = 200


	var openAnimate = {
		isInit: false,
		dataImg: [],
		init: function () {
			if (!this.isInit) {
				this.reDataImg()
				this.renderEl($('#begin'))
				this.showMyPosition()
				this.productShareImg()
			}
			this.isInit = true
			return this
		},
		beginTop: 0,
		beginLeft: 0,
		productShareImg: function () {
			var shareBtn = $('#view-share'),
				self = this

			shareBtn.tap(function () {
				self.mySwiper.allowSlideNext = true
				self.mySwiper.slideNext(300)
			})
		},
		reDataImg: function () {
			var positionRandom = Math.floor(Math.random() * 281),
				myPhoto = window.sessionStorage.myPhoto,
				data = []

			for (var i = 0; i < 151; i++) {
				data.push('./resources/img/' + i + '.jpg')
			}


			data.sort(function () {
				return Math.random() - 0.5
			})
			data = data.slice(0, 15)

			for (i = 0; i < 20; i++) {
				for (var j = 0; j < data.length; j++) {
					this.dataImg.push(data[j])
				}
			}

			data.sort(function () {
				return Math.random() - 0.5
			})

			this.dataImg.pop()
			this.dataImg.splice(positionRandom, 0, '$$' + myPhoto)

		},
		liBindAnimate: function (liArr) {
			var self = this,
				delay = [1500, 8500, 9500] //第一个动画，第二个动画 ，第三个动画

			liArr.forEach(function (item, index) {
				$(item).addClass('move' + index)
			})

			setTimeout(function () {
				liArr.forEach(function (item, index) {
					$(item).addClass('active0')
					$(item).addClass('forMe' + index)
				})
			}, delay[0])

			setTimeout(function () {
				// $('#begin').addClass('active')
				var myEl = $('*[isMy]')

				self.endPosition = self.calcInfo()[2]
				myEl.addClass('my')
				$('.bottom-operation').addClass('active')
				$('#view-share').show()
				liArr.forEach(function (item, index) {
					$(item).addClass('active_last' + index)
				})
			}, delay[1])

		},
		showMyPosition: function () {
			var viewBtn = $('.view-my-position'),
				container = $('#begin'),
				myEl = $('*[isMy]'),
				tips = $('#tips'),
				state = $('#state'),
				cityLight = $('.city_light2'),
				self = this,
				containerHalfW = container.width() / 2 + container.offset().left,
				containerHalfH = container.height() / 2 + container.offset().top,
				isDone = true

			viewBtn.tap(function () {
				if (viewBtn.hasClass('active') && isDone) {
					// viewBtn.hide()
					isDone = false
					container.removeAttr('style')
					setTimeout(function () {
						$('#view-share').show()
						viewBtn.html('查看我的位置')
						viewBtn.removeClass('active')
						tips.css({visibility: 'visible'})
						state.css({visibility: 'visible'})
						// viewBtn.show()
						cityLight.css({visibility: 'visible'})
						myEl.addClass('my').removeClass('activeMy')
						isDone = true
					}, 1000)


				} else if (isDone && !viewBtn.hasClass('active')) {
					// viewBtn.hide()
					isDone = false
					myElInfo.mw = containerHalfW - myEl.offset().left
					myElInfo.mh = containerHalfH - myEl.offset().top
					$('#view-share').hide()
					$('#begin').css({
						'-webkit-transform': 'translate3d(' + (self.endPosition.mw) + 'px,' + (self.endPosition.mh) + 'px,1200px)'
					})
					tips.css({visibility: 'hidden'})
					state.css({visibility: 'hidden'})
					cityLight.css({visibility: 'hidden'})
					setTimeout(function () {
						viewBtn.html('回看全景')
						viewBtn.addClass('active')
						// viewBtn.show()
						myEl.removeClass('my').addClass('activeMy')
						isDone = true
					}, 1000)
				}

			})

		},
		textAnimate: function (str, doSome) {
			var strArr = str.split(''),
				showText,
				timer = null,
				num = 0

			timer = setInterval(function () {
				var secondTextEl = $('.second-show-text')
				num++

				if (num > strArr.length) {
					clearInterval(timer)
					timer = null
					doSome && doSome()
				}

				showText = strArr.slice(0, num)
				secondTextEl.html(showText)
			}, speed)
		},
		checkImgAllLoad: function (imgArr, doSome) {
			var num = 0,
				isDo = false,
				secondTextEl = $('.second-show-text')

			imgArr.forEach(function (item) {
				item.addEventListener('load', function () {

					num++
					if (num === imgArr.length - 1) {

						secondTextEl.hide()
						isDo = true
						doSome && doSome()
					}

				})
			})

			setTimeout(function () {
				if (!isDo){
					secondTextEl.hide()
					doSome && doSome()
				}
			}, 6000)

			this.textAnimate('城市之光点亮中...')
		},
		renderEl: function (el) {
			var doc = document.createDocumentFragment(),
				imgArr = [],
				liArr = [],
				self = this

			this.dataImg.forEach(function (item, index) {
				var li = $('<li/>'),
					img = $('<img/>')

				if (item.indexOf('$$') >= 0) {
					img.attr('src', item.slice(2))
					li.attr('isMy', 'true')
					self.myIndex = index
				}
				else {
					img.attr('src', item)
				}

				li.append(img)
				imgArr.push(img[0])
				liArr.push(li)
				doc.appendChild(li[0])
			})


			this.checkImgAllLoad(imgArr,function () {
				self.liBindAnimate(liArr)
			})

			el.append(doc)

			var calcInfo = this.calcInfo()

			this.createStyle(calcInfo[0], calcInfo[1], calcInfo[2])
		},
		createMoveClass: function (opt) {
			return (
				'#begin li.move' + opt.index + '{animation: move0 ' + opt.allTime + 's  ' + opt.delay + 's forwards ease-in;}'
			)
		},
		createKeyframes: function (opt) {
			return (
				'@keyframes forMe' + opt.index + '{\n' +
				'0% {\n' +
				'\t\t\t\t\t\ttransform: scale(.5) translate3d(' + opt.endX + 'px, ' + opt.endY + 'px, 0);\n' +
				'\t\t\t\t\t\t-webkit-transform: scale(.5) translate3d(' + opt.endX + 'px, ' + opt.endY + 'px, 0);\n' +
				'\t\t\t\t\t}\n' +
				'\t\t\t\t\t50% {\n' +
				'\t\t\t\t\t\ttransform: scale(2) translate3d(' + opt.endX + 'px, ' + opt.endY + 'px, ' + opt.endZ + 'px);\n' +
				'\t\t\t\t\t\t-webkit-transform: scale(2) translate3d(' + opt.endX + 'px, ' + opt.endY + 'px, ' + opt.endZ + 'px);\n' +
				'\t\t\t\t\t}\n' +
				'\t\t\t\t\t100%{\n' +
				'\t\t\t\t\t\ttransform: scale(' + (opt.endScale || 1) + ') translate3d(' + opt.pX + 'px, ' + opt.pY + 'px, ' + (opt.lastEndZ || 0) + 'px);\n' +
				'\t\t\t\t\t\t-webkit-transform: scale(' + (opt.endScale || 1) + ') translate3d(' + opt.pX + 'px, ' + opt.pY + 'px, ' + (opt.lastEndZ || 0) + 'px);\n' +
				'\t\t\t\t\t}\n' +
				'\n' +
				'}\n' +
				'@-webkit-keyframes forMe' + opt.index + '{\n' +
				'0% {\n' +
				'\t\t\t\t\t\ttransform: scale(.5) translate3d(' + opt.endX + 'px, ' + opt.endY + 'px, 0);\n' +
				'\t\t\t\t\t\t-webkit-transform: scale(.5) translate3d(' + opt.endX + 'px, ' + opt.endY + 'px, 0);\n' +
				'\t\t\t\t\t}\n' +
				'\t\t\t\t\t50% {\n' +
				'\t\t\t\t\t\ttransform: scale(2) translate3d(' + opt.endX + 'px, ' + opt.endY + 'px, ' + opt.endZ + 'px);\n' +
				'\t\t\t\t\t\t-webkit-transform: scale(2) translate3d(' + opt.endX + 'px, ' + opt.endY + 'px, ' + opt.endZ + 'px);\n' +
				'\t\t\t\t\t}\n' +
				'\t\t\t\t\t100%{\n' +
				'\t\t\t\t\t\ttransform: scale(' + (opt.endScale || 1) + ') translate3d(' + opt.pX + 'px, ' + opt.pY + 'px, ' + (opt.lastEndZ || 0) + 'px);\n' +
				'\t\t\t\t\t\t-webkit-transform: scale(' + (opt.endScale || 1) + ') translate3d(' + opt.pX + 'px, ' + opt.pY + 'px, ' + (opt.lastEndZ || 0) + 'px);\n' +
				'\t\t\t\t\t}\n' +
				'\n' +
				'}\n' +
				'#begin li.active_last' + opt.index + '{transform: scale(' + (opt.endScale || 1 ) + ') translate3d(' + opt.pX + 'px,' + opt.pY + 'px,' + (opt.lastEndZ || 0) + 'px);' +
				'-webkit-transform: scale(' + (opt.endScale || 1 ) + ') translate3d(' + opt.pX + 'px,' + opt.pY + 'px,' + (opt.lastEndZ || 0) + 'px);' +
				'}' +
				'#begin li.forMe' + opt.index + '{animation: forMe' + opt.index + ' ' + opt.allTime + 's  ' + opt.delay + 's ease-in-out forwards; ' +
				'-webkit-animation: forMe' + opt.index + ' ' + opt.allTime + 's  ' + opt.delay + 's ease-in-out forwards;' +
				'}'
			)
		},
		calcInfo: function () {
			var container = $('#begin'),
				containerHalfW = container.width() / 2 + container.offset().left,
				containerHalfH = container.height() / 2 + container.offset().top,
				myEl = $('*[isMy]')

			myElInfo = {
				cx: myEl.offset().left,
				cy: myEl.offset().top
			}

			myElInfo.mw = containerHalfW - myElInfo.cx
			myElInfo.mh = containerHalfH - myElInfo.cy
			return [containerHalfW, containerHalfH, myElInfo]
		},
		createStyle: function (width, height, myElInfo) {
			var temp = '',
				self = this,
				beginEl = $('#begin'),
				style = $('<style/>')

			this.dataImg.forEach(function (item, index) {
				var endZ = (Math.random() * 2000) + 500,
					endX = Math.random() * width * ((Math.random() - 0.5) > 0 ? 1 : -1),
					endY = Math.random() * height * ((Math.random() - 0.5) > 0 ? 1 : -1),
					delay = Math.random() * 2,
					delayMove = Math.random(),
					allTime = 7 - delay

				/*zhangyang*/
				self.beginLeft = beginEl.offset().left
				self.beginTop = beginEl.offset().top
				/*zhangyang*/

				/*zhangyang*/
				var pX = 10000, pY = 10000, x, y, thisLi;
				if (index < fontPosition.length) {
					thisLi = beginEl.find('li').eq(index);
					x = thisLi.offset().left - self.beginLeft;
					y = thisLi.offset().top - self.beginTop;
					pX = fontPosition[index].left - x;
					pY = fontPosition[index].top - y;
				}
				/*zhangyang*/

				temp += self.createMoveClass({index: index, allTime: 1.5 - delayMove, delay: delayMove})

				if (index !== self.myIndex) {
					temp += self.createKeyframes({endZ: endZ, endX: endX, endY: endY, index: index, allTime: allTime, delay: delay, pX: pX, pY: pY, lastEndZ: -500})
				} else {
					temp += self.createKeyframes({endZ: 1800, endX: myElInfo.mw, endY: myElInfo.mh, index: index, allTime: 7, delay: 0, lastEndZ: -499, pX: pX, pY: pY})
				}

			})

			style.html(temp)
			$('head').append(style)
		}
	}

	return openAnimate

})
