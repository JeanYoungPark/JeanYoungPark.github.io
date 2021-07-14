$(document).ready(function () {
  $("#menu li").on("click", function () {
    var cl = $(this).attr("class");

    $("#menu li").removeClass("on");
    $(this).addClass("on");

    $(".division").hide();
    $("#" + cl).show();
  });

  $(".show_slide").on("click",function(){
    var slider = $(this).parents(".container").find(".slider");
    slider.toggle();
    
    if($(this).attr("data") == 0) {
      $(this).attr("data",1);
      $($(slider).find(".slider_wrapper")).bxSlider({
        captions:true,
        pager:false
      });
    }
  });

});
