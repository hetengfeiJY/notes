//网页换肤效果
$(document).ready(function(){
    $("#skin li").click(function(){
        switchSkin(this.id);
        
    });
    var cookie_skin=$.cookie("MyCssSkin");//读取保存在cookie当中名字为MyCssSkin的值
    if(cookie_skin){
        switchSkin(cookie_skin);
    }
})
function switchSkin(skinName){
    $("#"+skinName).addClass("selected")//当前的li元素选中
    .siblings().removeClass("selected");//去掉其他同辈li元素的选中
    $("#cssfile").attr("href", "styles/skin/"+skinName+".css");//设置不同皮肤

    $.cookie("MyCssSkin",skinName,{path:'/',expires:10})
}