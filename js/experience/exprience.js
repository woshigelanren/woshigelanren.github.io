$(function(){
//初始化样式  隐藏所有的ul 第一个显示出来(下标为0的显示出来)
	$(".box ul").hide().eq(0).show();  //合并写法
	$(".box h5").eq(0).addClass('current');  //调用类名  添加类

//单击h5 对应的ul显示出来 其他的ul隐藏起来
	$(".box h5").click(function(){
		// 二级标题切换
		$(this).next().slideToggle();  //对应的ul切换收缩/展开
		$(this).next().siblings('ul').slideUp();  //点击的展开 其他的自动隐藏

//加减号的切换   判断有没有current   hasClass('className') 这个方法判断
	// console.log($(this).hasClass('current'));  // true / false
	if($(this).hasClass('current')){ //有current 移除

		$(this).removeClass('current'); //removeClass  移除类
	}else{   //无current 添加

		$(this).addClass('current');  //addClass    添加类
	}
	//其他的h5收缩起来了   要去掉current
	$(this).siblings('h5').removeClass('current');

	})
})

