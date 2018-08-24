/**
 * Created by Administrator on 2017/1/5.
 */
search('./html/list.html');
var index={
	init:function(){
		this.request()
	},
	url:{
		news:'http://60.205.230.86/news'
	},
	request:function(){
		var url=this.url.news;
		ajax({
			url:url,
			data:{
				pageSize:5,
				pageNumber:1
			},
			success:function(data){
				index.avalon.news.list=JSON.parse(data).data;
			},
			error:function(e){
				console.log(e);
			}
		})
	},
	avalon:{
		news:function(){
			return avalon.define({
				$id:'news',
				list:[{
					title:'lll',
					updateTime:12321321321
				}],
				skipToDetails:function(e){
					window.location.href='./html/details.html?detailNews='+e
				},
				skipToAllList:function(){
					window.location.href='./html/list.html';
				}
			})
		}(),
		type:function(){
			return avalon.define({
				$id:'type',
				profileArray:[
					'现代学徒现代学徒现代学徒现代学徒现代学徒现代学徒',
					'产业职教联盟产业职教联盟产业职教联盟产业职教联盟产业职教联盟',
					'协同创新平台协同创新平台协同创新平台协同创新平台协同创新平台',
					'中高职一体化中高职一体化中高职一体化中高职一体化中高职一体化中高职一体化'
				],
				profileContent:'现代学徒现代学徒现代学徒现代学徒现代学徒现代学徒',
				skip:function(el){
					window.location.href='./html/list.html?'+el;
				},
				mouseover:function(e){
					switch (e){
						case 'xdxt':this.profileContent=this.profileArray[0];break;
						case 'cylm':this.profileContent=this.profileArray[1];break;
						case 'xtcx':this.profileContent=this.profileArray[2];break;
						case 'zgz':this.profileContent=this.profileArray[3];break;
					}
				}
			})
		}(),
		nav:function(){
			return avalon.define({
				$id:'nav',
				skip:function(el){
					window.location.href='./html/list.html?'+el
				}
			})
		}()
	}
};
index.init();
