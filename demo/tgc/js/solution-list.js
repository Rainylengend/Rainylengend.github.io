/**
 * Created by Administrator on 2016/11/24.
 */
var list=window.location.search.substr(1).split('=')[1];
var obj={
	bg:['url(../img/solution/main1.jpg)center center','url(../img/solution/main2.jpg)center center','url(../img/solution/main3.jpg)center center','url(../img/solution/main4.jpg)center center','url(../img/solution/main5.jpg)center center','url(../img/solution/main6.jpg)center center','url(../img/solution/main7.jpg)center center','url(../img/solution/main8.jpg)center center','url(../img/solution/main9.jpg)center center','url(../img/solution/main10.jpg)center center','url(../img/solution/main11.jpg)center center','url(../img/solution/main12.jpg)center center'],
	dd:['品牌创意','内容营销','电子商务','公关','数据','社会化营销','消费者互动','活动','绩效媒体营销','消费者及零售推广','创新','数字营销'],
	p:[
		'我们致力于帮助客户布局有别于其他竞品的品牌定位策略，将能够联系消费者，并最终促进销售的有影响力的创意付诸实现。',
		'在当今信息高度碎片化的时代，我们为消费者旅程的每一个阶段，都构筑了整合的内容营销方案。品牌的内容构思缜密精巧，可以是充满魅力，有强大感染力的视频， 也可以是生动而目标明确，以服务为导向而创制的内容。',
		'我们帮助品牌从传统的零售渠道转型，在发展势头强劲的中国电商蓝海中成功立足。我们制定电子商务战略；搭建电子商务所需的基础设施，并通过数据驱动的程序和优化设计，帮助品牌实现效益最大化。',
		'我们帮助品牌构筑影响力，并长久维护声望。通过内容与故事的传播，感动并说服目标顾客，从而打造有机的企业品牌形象。此外，通过传播手段防微杜渐，缓解可能出现的危机，也是我们的业务专长。',
		'我们通过领先的数据分析技术，从第三方数据和客户自有数据等大数据提炼出有用的数据和洞察，以此驱动精准而有影响力的市场营销。',
		'我们能接触到最具有影响力的舆论领袖，并通过与他们建立密切联系，生产具有时效性的内容。我们帮助品牌建立基于社交媒体的消费者中心，以便能直接与消费者互动，并根据消费者的反馈调整自身 。我们是社会化客户关系管理和社会化商务战略领域的专家，社会化媒体营销与我们如影随形。',
		'凭借深刻的消费者洞察，我们精确识别对品牌最具意义的消费者群体，并通过消费者画像使之具体化、视觉化。据此，我们可以展开消费者旅程，在每一个品牌与消费者接触的节点，帮助品牌把握机遇、克服阻碍。这一切都是通过我们的专利工具Fusion和DAVE来实现。',
		'我们能运筹世界一流的品牌活动，不论是涉及上千人的大规模活动还是高档奢侈品体验。我们通过整合传播计划和现场管理对这些活动进行构思、创建与管理。在活动中增强消费者体验是我们擅长的领域，因此，我们能够通过活动为品牌带来营收。',
		'我们深知数字世界的瞬息万变。简而言之，我们要确保客户在数字领域的投入能得到最大的产出。我们所掌握的媒体购买量以及对数据的判断， 能够帮助客户找到最佳的媒体投放契机，提升传播的影响力。无论是联盟营销、创新媒体购买，还是基于需求的平台管理，我们都具有丰富的经验。',
		'我们凭借经纬行动而拥有中国规模最大的零售推广团队。我们在多个渠道开展购物者营销，依靠30多个区域办事处，提供覆盖450多座城市的全面促销管理服务，以及具有成本效益的辅助销售材料（POSM）解决方案。',
		'K1ND（读作One Kind）是我们的创新部门，关注着品牌技术与产品创新。背靠尖端科技，我们构建令人振奋的品牌经验， 我们将传统产品升级换代，融入未来。',
		'我们能够帮助客户制定数字媒体广告的最优组合，从而让客户的互联网在线影响实现最大化，让品牌覆盖正确的消费者群体，让客户获得实实在在的收益。'
	]
};
function  data(index){
	$('.list-main dt').css({background:obj.bg[index]});
	$('.list-main dd').text(obj.dd[index]);
	$('.list-main p').text(obj.p[index])
}
switch(list){
	case '1':data(0);break;
	case '2':data(1);break;
	case '3':data(2);break;
	case '4':data(3);break;
	case '5':data(4);break;
	case '6':data(5);break;
	case '7':data(6);break;
	case '8':data(7);break;
	case '9':data(8);break;
	case '10':data(9);break;
	case '11':data(10);break;
	case '12':data(11);break;
}