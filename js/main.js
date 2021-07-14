$(document).ready(function () {

  //메뉴클릭시 같은 컨텐츠 노출
  $("#menu li").on("click", function() {
    var cl = $(this).attr("class");

    $("#menu li").removeClass("on");
    $(this).addClass("on");

    $(".division").hide();
    $("#" + cl).show();
  });

  //클릭버튼 클릭시 슬라이드 노출
  $(".show_slide").on("click", function() {
    var slider = $(this).parents(".container").find(".slider");
    var video = $(this).parents(".container").find("video");

    if($(this).find("i").hasClass("fa-angle-down")){
      $(this).find("i").removeClass("fa-angle-down");
      $(this).find("i").addClass("fa-angle-up");
    }else{
      $(this).find("i").removeClass("fa-angle-up");
      $(this).find("i").addClass("fa-angle-down");
    }

    slider.toggle();
    
    if($(this).attr("data") == 0) {
      $(this).attr("data",1);
      $($(slider).find(".slider_wrapper")).bxSlider({
        captions:true,
        pager:false
      });
    }

    if(video.length){
      document.getElementById(video.attr('id')).pause();
    }
  });

  //top버튼 클릭시 최상단으로 이동
  $("#top_btn").on("click", function() {
    $('html, body').stop().animate({scrollTop: 0}, 1000);
  });

});
