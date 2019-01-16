//品牌活动模块横向滚动效果
$(function(){
    $("#jnBrandTab li a").click(function(){ //给标签添加事件
		$(this).parent().addClass("chos").siblings().removeClass("chos");
		var index=$("#jnBrandTab li a").index(this);//得到选中a标签，盒子中的下标
		showBrandList(index);
	})
    .eq(0).click();//执行第一个选中标签的效果
})
//显示不同的模块
function showBrandList(index){
    var $rollboj=$("#jnBrandList");//得到滚动列表品牌的盒子
    var rollWidth=$rollboj.find("li").outerWidth();//得到某一元素外围宽度,包括内边界(padding)和边框(border）
    rollWidth=rollWidth*4;//得到一个版面的长度（即四个li中图片长度）
    $rollboj.stop(true,false).animate({left:-rollWidth*index},1000);
    //清空当前动画之后向指定方向偏移一定距离，在一秒之后
    //stop—>参数1:控制是否清楚动画序列；参数2:控制是否将动画效果执行到最后
}
