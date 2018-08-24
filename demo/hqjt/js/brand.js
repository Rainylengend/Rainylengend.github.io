/**
 * Created by Administrator on 2016/12/1.
 */
var brand={
    init:function(){
        this.tabSwitch();
        this.hash();
    },
    data:[
        {
            img:'../img/brand/content1.jpg',
            content:[
                '海福源系列大米',
                '品牌定位：海福源作为海泉集团主力品牌，定位于中高端市场，是开拓市场，吸引消费者的尖刀品牌。',
                '品牌核心价值：放心、可信、高品质',
                '以优质健康的产品关注全家幸福作为理性传播。'
            ]
        },
        {
            img:'../img/brand/content2.jpg',
            content:[
                '长升缘系列大米',
                '品牌定位：长升缘作为海泉集团主力品牌，定位于大众消费市场。',
                '品牌核心价值：放心、可信、高品质',
                '以优质健康的产品关注全家幸福作为理性传播。'
            ]
        },
        {
            img:'../img/brand/content3.jpg',
            content:[
                '面粉麦久香放心保健康',
                '麦久香面粉从精选每一粒优质小麦开始，历经数十道工序精细研磨，只愿为您提供新鲜、健康、',
                '高品质的享受，产品已通过国家HACCP食品安全体系认证，面粉麦久香，放心保健康。',
                '不同的人夸：麦久香面粉就是好'
            ]
        },
        {
            img:'../img/brand/content4.jpg',
            content:[
                '海泉时代广场“香溪苑”项目建筑面积6万平方米，位于阜阳市泉河北黄金地段，规划建设高层楼盘3栋，6万平米。包括',
                '有商住公寓、商务办公楼、大型超市、中心花园、绿化景区及停车场，区域位置优越，风景秀丽，交通便捷，生活方便，是功',
                '能齐全、设施完备的现代化城市中心高档小区。'
            ]
        },
        {
            img:'../img/brand/content5.jpg',
            content:[
                '海泉时代广场六十铺“夷海苑”项目位于颍上县六十铺镇中心地带，建筑面积10万平方米。为专业化经营的大型物流商业',
                '中心，包括商铺店面、货品仓库、集贸市场、接待会所、住宅等。项目紧邻105国道和阜合高速公路，交通发达，商贾云集，',
                '物流通畅，人气旺盛，是专业化、现代化、综合性的商贸物流中心。'
            ]
        }
    ],
    active:function(el,el1){
        if(el1){
            el1.removeClass('active');
        }
        el.addClass('active');
        el.siblings().removeClass('active');
    },
    hash:function(){
        var hash=window.location.hash.substr(1);
        switch(hash){
            case "hfy":brand.active($('.brand-main .tabs li').eq(0).find('a'),$('.brand-main .tabs li').find('a')),this.dom(0);break;
            case "csy":brand.active($('.brand-main .tabs li').eq(1).find('a'),$('.brand-main .tabs li').find('a')),this.dom(1);break;
            case "mjx":brand.active($('.brand-main .tabs li').eq(2).find('a'),$('.brand-main .tabs li').find('a')),this.dom(2);break;
            case "xxy":brand.active($('.brand-main .tabs li').eq(3).find('a'),$('.brand-main .tabs li').find('a')),this.dom(3);break;
            case "yhy":brand.active($('.brand-main .tabs li').eq(4).find('a'),$('.brand-main .tabs li').find('a')),this.dom(4);break;
        }
    },
    dom:function(el){
        var str='';
        $('.brand-main .content img').attr('src',brand.data[el].img);
        for(var i=0;i<brand.data[el].content.length;i++){
            str+='<p>'+brand.data[el].content[i]+'</p>';
        }
        $('.brand-main .content >div')[0].innerHTML=str;
    },
    tabSwitch:function(){
        $('.brand-main .tabs li a').mouseover(function(){
            switch($(this).parent().index()){
                case 0:window.location.hash='hfy';break;
                case 1:window.location.hash='csy';break;
                case 2:window.location.hash='mjx';break;
                case 3:window.location.hash='xxy';break;
                case 4:window.location.hash='yhy';break;
            }
            brand.hash();
        });
        $('.nav li:nth-of-type(3) .nav-tab div').click(function(){
            setTimeout(function(){brand.hash();},0);
        })
    }
};
brand.init();