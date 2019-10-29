$(function () {

	imgOpacity();

	myCarousel();

	navSearch();

	product();

	solution();

	server();
})

function imgOpacity() {
	var i=0;
	var ft=true;
	setInterval(function () {
		if(i>1){
			ft=false;
		}
		if(ft){
			i+=0.01;
			$(".imgOpacity").animate({
				"opacity":i
			},24)
		}else{
			if(i<0){
				ft=true;
			}
			i-=0.01;
			$(".imgOpacity").animate({
				"opacity":i
			},24)
		}
		
	},8)
}

function myCarousel() {
	var i=0;
	var timer;

	var w = $("#header .item img").width();
	setWidth();
	
	$(window).resize(function(){
		setWidth();
	});
	function setWidth() {
		var win_w = $(window).width()
		
		$("#header .item .imgs img").css({"marginLeft": -(w - win_w + 150)/2 + "px"});
	}

	$("#header #progress .progress .progress-bar").eq(i).animate({"width":"100%"},8200)

	inTime();

	$("#header #progress .progress").hover(function () {
		var index=$(this).index();
		i=index;
		show();
		clearInterval(timer);
	},function(){
		inTime();
	})

	function inTime() {
		timer = setInterval(function(){
			var length=$("#myCarousel .item").length;
			i++;
			if(i==length){
				i=0;
			}
			show();
		},9000)
	}

	function show() {
		$("#myCarousel .item").eq(i).css({"z-index":"1"});
		$("#myCarousel .item").eq(i).animate({top:"0px",opacity:"1","z-index":"1"},800);
		$("#myCarousel .item").eq(i).siblings().css({"top":"30%","opacity":"0","z-index":"-1"})

		$("#header #progress .progress .progress-bar").eq(i).css({"width":"0%","display": "block"})
		$("#header #progress .progress .progress-bar").eq(i).animate({"width":"100%"},8200)
		$("#header #progress .progress").eq(i).siblings().find(".progress-bar").css({"width":"0%","display": "none"})
	}
}

function navSearch() {
	$(".searchPosition input").hover(
		function(){
			$(this).animate({
				width:"300px"
			},200)
		},function(){
			$(this).animate({
				width:"200px"
			},200)
	})
}

function product() {
	$("#product ul li").click(function(){
		var id = $(this).parents(".myPanel").index();
		var i = $(this).index();

		$(this).addClass(" active").siblings().removeClass("active");
		$(".myPanel").eq(id).siblings().find("ul li").removeClass("active");

		$(this).find(".imgBox img:first-child").addClass(" pdImgOne");
		$(this).siblings().find(".imgBox img:first-child").removeClass("pdImgOne");
		$(".myPanel").eq(id).siblings().find("ul li .imgBox img:first-child").removeClass("pdImgOne");

		$(".myPanel:eq("+id+") .pdToggle .row:eq("+i+")").addClass(" active").siblings().removeClass("active");

		var li_offset = $(this).offset();
		var li_w = $(this).width();
		var con_offset = $(".myPanel .container").offset();
		var icon_index_left = (li_offset.left - con_offset.left) + (li_w / 2)-10;

		$(".myPanel .icon-index").animate({"left" : icon_index_left + "px"});

	})

	$("#product .myPanel ul").click(function () {
		var id = $(this).parents(".myPanel").index();

		$("#product .myPanel").eq(id).find(".pdToggle").slideDown("slow");
		$("#product .myPanel").eq(id).siblings().find(".pdToggle").slideUp("slow");
	})

	$("#product .product-body .bottom").click(function () {
		var txt = $(this).text();
		if(txt === "查看全部"){
			$(".myPanel:gt(2)").slideDown();
			$(this).text("收起");
		}else{
			$(".myPanel:gt(2)").slideUp();
			$(this).text("查看全部");
		}
		
	})
}

function solution() {
	
	var con_w = $("#solution .container").width();
	$("#solution ul li>img").css({"width": con_w/5 +"px" });
	$("#solution ul").css({"width": con_w/5*11 +"px" });

	$(window).resize(function(){
		var con_w = $("#solution .container").width();
		$("#solution ul li>img").css({"width": con_w/5 +"px" });
	});

	$("#solution ul li .txt").hover(
		function () {
			$(this).find(".icon img:first-child").addClass(" myHide").siblings().removeClass("myHide");

			// $(this).stop().animate({"backgroundColor": "rgba(51, 205, 229, 0.8)"},300);
			$(this).find(".icon img").stop().animate({"margin" : "30px auto 0px"},300);
			$(this).find(".line").stop().animate({"opacity":"0"},300);
			$(this).find(".center").stop().animate({"opacity":"1"},300);
		},function () {
			$(this).find(".icon img:last-child").addClass(" myHide").siblings().removeClass("myHide");

			// $(this).stop().animate({"backgroundColor": "rgba(51, 205, 229, 0)"},300);
			$(this).find(".icon img").stop().animate({"margin" : "60px auto 15px"},300);
			$(this).find(".line").stop().animate({"opacity":"1"},300);
			$(this).find(".center").stop().animate({"opacity":"0"},300); 
		}
	)

	$("#solution .container").hover(
	function () {
		$("#solution .btn_icon").css({"display":"block"});
	},function () {
		$("#solution .btn_icon").css({"display":"none"});
	})

	$("#solution .btn_fl").click(function () {

		var ul_fl = $("#solution ul").offset().left;
		var btn_fl = $("#solution .btn_fl").offset().left;

		var ul_w = $("#solution ul").width();
		var li_w = $("#solution ul li").width();

		if (ul_fl === btn_fl) {
			$("#solution ul").css({"left": -ul_w +"px"});
			$("#solution ul").stop().animate({"left": -li_w * 6 + "px"},200);
		}else if (ul_fl === (btn_fl-li_w) ) {
			$("#solution ul").animate({"left": -li_w * 0 + "px"},200);
		}else{
			$("#solution ul").animate({"left": -li_w * 1 + "px"},200);
		}
	})

	$("#solution .btn_fr").click(function () {
		var ul_fl = $("#solution ul").offset().left;
		var btn_fl = $("#solution .btn_fl").offset().left;

		var ul_w = $("#solution ul").width();
		var li_w = $("#solution ul li").width();

		if (ul_fl === (btn_fl-li_w*6) ) {
			$("#solution ul").css({"left": li_w * 5 +"px"});
			$("#solution ul").stop().animate({"left": -li_w * 0 + "px"},200);
		}else if (ul_fl === (btn_fl-li_w*5) ) {
			$("#solution ul").animate({"left": -li_w * 6 + "px"},200);
		}else{
			$("#solution ul").animate({"left": -li_w * 5 + "px"},200);
		}
	})
}

function server() {
	for (var i = 0; i <= 5; i++) {
		ttl(i);
	}
	function ttl(x) {	
		var img_w = $("#server .row .ttl img").eq(0).width();
		var timerOne;
		var timerTwo;
		var count = 0;
		$("#server .row .ttl").eq(x).hover(
			function () {

				server_timeadd();

			},function () {
				clearInterval(timerOne);    
				server_time();
		})

		function server_timeadd() {
			count = 0;

			timerOne = setInterval(function () {
				count++;
				if( count>=60 ){
					return  clearInterval(timerOne);
				}
				$("#server .row .ttl").eq(x).find("img").css({"top":  -img_w * count});
			},20)
		}

		function server_time() {
			timerTwo = setInterval(function () {
				count--;
				if( count <= -1 ){
					return  clearInterval(timerTwo);
				}
				$("#server .row .ttl").eq(x).find("img").css({"top":  -img_w * count});
			},20)
		}
	}		
}