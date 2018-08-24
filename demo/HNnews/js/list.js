/**
 * Created by Administrator on 2017/1/5.
 */
search('./list.html');
avalon.filters.Allpage=function(str){
	str=Math.ceil(Number(str)/10);
	return str;
};
var list={
	init:function(){
		this.load();
	},
	url:{
		news:'http://60.205.230.86/news/',
		pic:'http://60.205.230.86/advert/pic'
	},
	ajax:function(obj){
		ajax({
			url:obj.url,
			data:{
				type:obj.type||'',
				pageSize:10,
				pageNumber:obj.currentPage
			},
			success:function(data){
				data=JSON.parse(data);
				var total=data.total;
				list.avalon.list.list=data.data;
				list.avalon.list.totalPages=total;
				obj.fn&&obj.fn();
			},
			error:function(e){
				console.log(e)
			}
		})
	},
	ajaxAllList:function(obj){
		if(obj.search==='undefined')obj.search=undefined;
		ajax({
			url:obj.url,
			data:{
				search: obj.search || '',
				pageSize:10,
				pageNumber:obj.currentPage||1
			},
			success:function(e){
				e=JSON.parse(e);
				var total=e.total;
				list.avalon.list.list=e.data;
				list.avalon.list.totalPages=total;
				obj.fn&&obj.fn();
			},
			error:function(e){
				console.log(e)
			}
		})
	},
	type:'',
	search:window.location.search.slice(1).split('='),
	//进入页面检测页面参数加载内容
	load:function(){
		var url=this.url.news,
			picUrl=this.url.pic,
			search=this.search[0],
			searchContent=this.search[1];
			type='';
		var obj=[{active:false},{active:false},{active:false},{active:false},{active:false}];
			if(search!=='allList'&&search!==''){
				switch(search){
					case 'xdxt':this.type='78134348802359299';
						obj[0].active=true;
						list.avalon.banner.title='现代学徒制';break;
					case 'cylm':this.type='78134348802359300';
						obj[0].active=true;
						list.avalon.banner.title='产业职教联盟';break;
					case 'xtcx':this.type='78134348802359301';
						obj[0].active=true;
						list.avalon.banner.title='协同创新平台';break;
					case 'zgz':this.type='78134348802359302';
						obj[0].active=true;
						list.avalon.banner.title='中高职一体化';break;
					case 'cyxq-rc':this.type='78134348802359303';
						obj[1].active=true;
						list.avalon.banner.title='产业需求--人才';break;
					case 'cyxq-js':this.type='78134795885215745';
						obj[1].active=true;
						list.avalon.banner.title='产业需求--技术';break;
					case 'yxfw':this.type='78134348802359304';
						obj[2].active=true;
						list.avalon.banner.title='院校服务';break;
					case 'yjdt':this.type='78134348802359305';
						obj[3].active=true;
						list.avalon.banner.title='研究动态';break;
					case 'jrfw':this.type='78134348802359306';
						obj[4].active=true;
						list.avalon.banner.title='金融服务';break;
				}
				this.avalon.nav.msClass=obj;
				this.ajax({
					url:url,
					currentPage:1,
					type:this.type
				})
			}else{
				this.avalon.banner.render=false;
				this.ajaxAllList({
					url:url,
					search:decodeURI(searchContent)
				});
				//修改banner图片
				ajax({
					url:picUrl,
					success:function(e){
						var IP=list.url.news.replace(/\/news\//g,'');
						list.avalon.banner.bg='url('+IP+JSON.parse(e)+') center center';
					}
				});
			}
	},
	avalon:{
		//banner区域处理标题和内容
		banner:function(){
			return avalon.define({
				$id:'banner',
				title:'现代学徒制',
				bg:'url(../img/list/banner1.png) center center',
				render:true
			})
		}(),
		//新闻列表处理内容
		list:function(){
			return avalon.define({
				$id:'list',
				list:[],
				totalPages:0,
				currentPage:1,
				willPage:1,
				state:1,
				skipToDetails:function(e){
					window.location.href='./details.html?detailNews='+e;
				},
				//上一页页面
				loadPrev:function(){
					var url=list.url.news;
					var that=this;
					if(this.state>1){
						this.state--;
						if(list.search[0]!=='allList'){
							list.ajax({
								url:url,
								currentPage:this.state,
								type:list.type,
								fn:function(){
									if(that.currentPage!==1)that.currentPage--;
								}
							});
						}else{
							list.ajaxAllList({
								url:url,
								search:decodeURI(list.search[1]),
								currentPage:this.state,
								fn:function(){
									if(that.currentPage!==1)that.currentPage--;
								}
							})
						}
					}
				},
				//下一页事件
				loadNext:function(){
					var url=list.url.news;
					var that=this;
					if(this.state<Math.ceil(Number(that.totalPages)/10)){
						this.state++;
						if(list.search[0]!=='allList'){
							list.ajax({
								url:url,
								currentPage:this.state,
								type:list.type,
								fn:function () {
									if(that.currentPage!==Math.ceil(Number(that.totalPages)/10))that.currentPage++;

								}
							});
						}else{
							list.ajaxAllList({
								url:url,
								search:decodeURI(list.search[1]),
								currentPage:this.state,
								fn:function () {
									if(that.currentPage!==Math.ceil(Number(that.totalPages)/10))that.currentPage++;
								}
							})
						}
					}
				},
				//输入框
				banString:function(e){
					var value=e.target.value;
					var reg=value.replace(/\W*/g,'').replace(/[a-z|A-Z]*/g,'');
						reg= reg>Math.ceil(Number(this.totalPages)/10) ? Math.ceil(Number(this.totalPages)/10) :reg;
					e.target.value=reg;
				},
				//加载跳转
				load:function(e){
					var url=list.url.news;
					list.ajax(url,e.target.value);
					list.ajax({
						url:url,
						currentPage:e.target.value
					});
					this.currentPage=this.state=e.target.value;
				}
			})
		}(),
		//nav导航栏激活状态处理
		nav:function(){
			return avalon.define({
				$id:'nav',
				msClass:[{active:true},{active:false},{active:false},{active:false},{active:false}],
				skip:function(el){
					el ? window.location.href='./list.html?'+el :window.location.href='../index.html'
				}
			})
		}()
	}
};
list.init();