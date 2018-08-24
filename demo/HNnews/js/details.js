/**
 * Created by Administrator on 2017/1/6.
 */
search('./list.html');
var details={
	init:function(){
		this.load();
	},
	url:{
		info:'http://60.205.230.86/info'
	},
	load:function(){
		var detailNews=window.location.search.slice(1).split('=')[1],
			url=this.url.info;
		ajax({
			url:url,
			data:{id:detailNews},
			success:function(data){
				data=JSON.parse(data);
				details.avalon.main.info=data;
				details.avalon.main.minHeight=document.documentElement.clientHeight-280;
			}
		})
	},
	avalon:{
		main:function(){
			return avalon.define({
				$id:'main',
				info:{},
				minHeight:0
			})
		}(),
		nav:function(){
			return avalon.define({
				$id:'nav',
				skip:function(el){
					window.location.href='./list.html?'+el;
				}
			})
		}()
	}
};
details.init();