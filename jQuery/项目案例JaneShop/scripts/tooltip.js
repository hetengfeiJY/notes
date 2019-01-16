//超链接文字提示效果
$(function(){
    var x=19;
    var y=10;
    $("#jnNoticeInfo a.tooltip").hover(function (e) {
            // over 鼠标移入事件
            this.myTitle=this.title;//默认鼠标放上去显示title
            this.title="";//鼠标放上去系统自带title消失
            var tooltip="<div id='tooltip'>"+this.myTitle+"</div>";
            $("body").append(tooltip);//创建好vid添加到body中
            $("#tooltip").css({//定位坐标
                "top":(e.pageY+y)+"px",//e.pageY纵坐标位置
                "left":(e.pageX+x)+"px",//e.pageX横坐标位置
            }).fadeIn(1000);//淡出效果显示
        }, function () {
            // out 鼠标移出事件
			this.title=this.myTitle;
            $("#tooltip").remove();//移出
        }
    ).mousemove(function(e){
        //move 鼠标移动事件
        $("#tooltip").css({//随鼠标移动改变定位坐标，即显示文字随鼠标移动
            "top":(e.pageY+y)+"px",
            "left":(e.pageX+x)+"px"
        });
    });

})