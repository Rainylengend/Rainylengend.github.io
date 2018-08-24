/**
 * Created by Administrator on 2016/12/1.
 */
var hqfc = {
    init: function () {
        this.search();
    },
    http:function(page){
        $.ajax({
            url:'../mock/hqfc.json',
            success:function(data){
                data=data[page];
                $('.hqfc-main h3').text(data.h3);
                var str='';
                for(var i=0;i<data.content.length;i++){
                    str+='<div>' +(data.h4 ? data.h4[i] ? '<h4 class="title-color white-bg">'+data.h4[i]+'</h4>':'' :'')+
                        (data.content[i].text ? '<div class="white-bg">'+data.content[i].text+'</div>':'') +
                        ( data.content[i].img ? '<div class="white-bg margin0"><img src="'+data.content[i].img+'" alt=""></div>':'')+
                        '</div>'
                }
                $('.hqfc-main .content')[0].innerHTML+=str;
                if(page!=='page3'){
                    setTimeout(function(){
                        ($('.hqfc-main .content img').parent()).addClass('marginTop')
                    },0)
                }
            }
        })
    },
    search: function () {
        var parameter = window.location.search.substr(1).split('=')[1];
        if(parameter==='0'){
            this.http('page0')
        }else if(parameter==='1'){
            this.http('page1')
        }else if(parameter==='2'){
            this.http('page2')
        }else if(parameter==='3'){
            this.http('page3')
        }
    }
};
hqfc.init();