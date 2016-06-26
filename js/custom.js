// JavaScript Document
$(function(){
	"use strict";
	$("#toggle").click(function(){
		$("#menu").slideToggle();
		return false;
	});
	$(window).resize(function(){
	  var win = $(window).width();
	  var p = 900;
	  if(win > p){
		$("#menu").show();
	  } else {
		$("#menu").hide();
	  }
	});
});

$(function(){
	$('a.menu-list').click(function(){
		var speed = 700;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});


$(function() {
  $("#scroll-top").click(function() {
    $('body, html').animate({scrollTop: 0}, 1100, 'linear');
  });

  var changeButtonState = function() {
    var $toTopButton = $('#scroll-top');
    // 縦にどれだけスクロールしたかを取得
    var scrollTop = $(window).scrollTop();
    // ウィンドウの縦幅を取得
    var windowHeight = $(window).height();

    if (scrollTop >= windowHeight
        || ($(document).height() - windowHeight) <= scrollTop) {
      // ウィンドウの縦幅以上にスクロールしていた、またはページの下端に達していた場合、ボタンを表示する
      $toTopButton.show();
    } else {
      $toTopButton.hide();
    }
  }
  // ウィンドウをスクロール・ロード・リサイズしたときを契機に、ボタンの表示・非表示を変更する
  $(window).scroll(changeButtonState)
           .load(changeButtonState)
           .resize(changeButtonState);
});