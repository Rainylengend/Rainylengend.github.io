/**
 * Created by Administrator on 2016/12/2.
 */
var storeList={
    init:function(){
        this.tabs();
    },
    tabs:function(){
        $('.store-main .tabs li').click(function(){
            var page=$(this).attr('data-page');
            window.location='store.html#'+page
        })
    }
};
storeList.init();