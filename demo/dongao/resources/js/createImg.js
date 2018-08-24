/**
 * create By Songbw on 2018/3/9
 * */

define(['html2canvas'], function (html2canvas) {

	return function () {
		var save = $('img[saveImg]')

		save.remove()
		save = null
		html2canvas($('#share_container')[0], {
			backgroundColor: '#1F2A3F',
			useCORS: true
		})
			.then(function (canvas) {
				var url = canvas.toDataURL('image/png')

				var formData = new FormData()

				formData.append('img_info', url.split(',')[1])
				$.ajax({
					url: 'https://wdh.dahe.cn/native/index.php/user/upload_img',
					data: formData,
					processData: false,
					contentType: false,
					type: 'post',
					success: function (res) {
						var data = JSON.parse(res).data,
							img = $('<img/>').attr('saveImg', '1')

						img.attr('src', data.img_url)
						img.css({width: '100vw', height: '100vh', position: 'absolute', top: 0, left: 0})
						$('.save').attr('href', data.img_url)
						$('#share_container').append(img)
					}
				})


			})
	}

})