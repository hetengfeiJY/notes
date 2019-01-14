//首页大屏广告效果
$(function(){
    var $imgrolls=$("#jnImageroll div a");
    var len=$imgrolls.length;
    var index=0;
    var adTimer=null;
    $imgrolls.mouseover(function() { 
        index=$imgrolls.index(this);
        showimg(index);
    }).eq(0).mouseover();

    //滑入导航停止动画，滑出开始动画
    $("#jnImageroll").hover(function(){
        if(adTimer){
            clearInterval(adTimer);
        }
    },function(){
        adTimer=setInterval(function(){
            showimg(index);
            index++;
            if(index==len){
                index=0;
            }
        },1000);
    }).trigger("mouseleave");
})
//显示不同幻灯片
function showimg(index) {
    var $rollobj=$("#jnImageroll");
    var $rollist=$rollobj.find("div a");
    var newhref=$rollist.eq(index).attr("href");//获取当前滑过的href值
    // alert(newhref);
    $("#JS_imgWrap").attr("href",newhref)//将值设置给大图外面的链接
    .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
    //获取所有大图值，然后根据传入的参数index来显示相应的图片，把相邻图片隐藏起来
    $rollist.removeClass("chos").css("opacity","0.7").eq(index).addClass("chos")
    .css("opacity","1");
    //清除导航chos样式，并设置透明度设为0.7、添加选中导航chos样式，并设置透明度为1
}