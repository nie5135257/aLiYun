$(function () {
	list();
})

function list(){
	var h=$(window).height();
	$("#list").css({height:h-50});
	$(window).resize(function(){
	 	h=$(window).height();
		$("#list").css({height:h-50});
	});

	$("#list").css({width:"0px","margin-left":"-200px"});
	$("#list .itemTwo").css({"margin-left":"-790px"});

	//-----------------------#listImg-----------------
	$(".listImg").hover(function () {	
		$("#list").css({width:"200px"});
		$("#list").animate({"margin-left":"0px"},200);
				
	},function(){
		$("#list").animate({width:"0px","margin-left":"-200px"},200);
	})

	//----------------------------.ulOne-----------------
	$(".ulOne").hover(function(){
		$("#list").css({width:"990px"});
		$("#list .itemTwo").css({"display":"block"});
		$("#list .itemTwo").animate({"margin-left":"0px"},200);
	},function(){
		$("#list").animate({width:"200px"},200);
		$("#list .itemTwo").animate({"margin-left":"-790px"},200,function(){
			$("#list .itemTwo").css({"display":"none"});
		});
	})

	//----------------------------.ulOne li-----------------
	$(".ulOne li").hover(function(){
		var index=$(this).index();
		$("#list .itemTwo table").eq(index).addClass(" active").siblings().removeClass("active");
		
	},function(){})
}