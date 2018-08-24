/**
 * Created by lxx on 2017/12/14.
 */

define(['jquery'],function ($) {
	function wxshare(t,d,i) {
		/* 定义分享内容，title：标题   des：描述   icon：分享logo*/
		var localhref = window.location.href;
		var sharetitle= t;
		var sharelink= 'https://wdh.dahe.cn/native/index.php/user/get_baseinfo?redirect_url=https://uploads.dahe.cn/sbw/dongao/index.html';
		var shareimgUrl= i;
		var sharedesc= d;
		var shareTimeline = t;

		if(shareimgUrl === undefined){
			/* 如果不传图分享图标默认为大河网logo */
			shareimgUrl = 'https://4g.dahe.cn/resources/img/wxlogo.gif';
		}

		var result = fetch("https://4g.dahe.cn/dahe/wx?url="+encodeURIComponent(localhref));
		result.then(function(response) {
			return response.json()
		}).then(function(text) {
			wx.config({
				debug:false,
				appId:text.appId,
				timestamp: text.timestamp,
				nonceStr: text.nonceStr,
				signature: text.signature,
				jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo'
					// 所有要调用的 API 都要加到这个列表中
				]
			});
			//QQ
			setShareInfo({
				title:     sharetitle, // 分享标题
				summary:   sharedesc, // 分享内容
				pic:       shareimgUrl, // 分享图片
				url:       sharelink, // 分享链接
				// 微信权限验证配置信息，若不在微信传播，可忽略
				WXconfig: {
					swapTitleInWX: false, // 是否标题内容互换（仅朋友圈，因朋友圈内只显示标题）
					appId: text.appId, // 公众号的唯一标识
					timestamp: text.timestamp, // 生成签名的时间戳
					nonceStr: text.nonceStr, // 生成签名的随机串
					signature: text.signature // 签名
				}
			});
			wx.ready(function () {
				wx.checkJsApi({
					jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
					success: function (res) {
						// 以键值对的形式返回，可用的api值true，不可用为false
						console.log('success');
						console.log(res);
					}
				});
				wx.error(function (res) {
					console.log(res);
				})
				//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
				wx.onMenuShareTimeline({
					title: sharetitle, // 分享标题
					link: sharelink, // 分享链接
					imgUrl: shareimgUrl, // 分享图标
					success: function () {
						// 用户确认分享后执行的回调函数
						/*getRelatenews();
						 relatenewsShow();*/
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					}
				});
				//获取“分享给朋友”按钮点击状态及自定义分享内容接口
				wx.onMenuShareAppMessage({
					title: sharetitle, // 分享标题
					desc: sharedesc, // 分享描述
					link: sharelink, // 分享链接
					imgUrl: shareimgUrl, // 分享图标
					type: 'link', // 分享类型,music、video或link，不填默认为link
					dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
					success: function (res) {
						// 用户确认分享后执行的回调函数
						/*getRelatenews();
						 relatenewsShow();*/
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					}
				});
				//获取“分享到QQ”按钮点击状态及自定义分享内容接口
				wx.onMenuShareQQ({
					title: sharetitle, // 分享标题
					desc: sharedesc, // 分享描述
					link: sharelink, // 分享链接
					imgUrl: shareimgUrl, // 分享图标
					success: function () {
						// 用户确认分享后执行的回调函数
						//alert(shareimgUrl);
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					}
				});
				//获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
				wx.onMenuShareWeibo({
					title: sharetitle, // 分享标题
					desc: sharedesc, // 分享描述
					link: sharelink, // 分享链接
					imgUrl: shareimgUrl, // 分享图标
					success: function () {
						// 用户确认分享后执行的回调函数
					},
					cancel: function () {
						// 用户取消分享后执行的回调函数
					}
				});
			})
		}).catch(function(ex) {
			console.log('failed', ex)
		});

	}

	return wxshare
})