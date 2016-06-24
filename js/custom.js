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