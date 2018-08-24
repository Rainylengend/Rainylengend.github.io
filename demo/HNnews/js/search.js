/**
 * Created by Administrator on 2017/1/6.
 */
var search=function(address){
	return avalon.define({
		$id:'search',
		parameter:'搜索标题！',
		focus:function(e){
			this.parameter='';
		},
		skipList:function(e){
			var url='http://60.205.230.86/news/';
			var that=this;
			if(this.parameter){
				ajax({
					url:url,
					data:{
						search:this.parameter
					},
					success:function(e){
						e=JSON.parse(e);
						window.location.href=address+'?allList='+encodeURI(that.parameter);
					},
					error:function(){
						console.log(e)
					}
				})
			}
		}
	})
};
