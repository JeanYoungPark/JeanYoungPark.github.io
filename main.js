$(document).ready(function () {
  $("#menu li").on("click", function () {
    var cl = $(this).attr('class');

    $('#menu li').removeClass('on');
    $(this).addClass('on');

    $('.division').hide();
    $('#'+cl).show();
  });
});
