$(document).ready(function () {

  var slide;

  //dark mode
  $('#darkmode').on('change',function(){
    if($(this).prop('checked')){
      $('body').addClass('dark-mode');
    }else {
      $('body').removeClass('dark-mode');
    }
  });

  //toggler
  $('.navbar-toggler').on('click',function(){
    $('#navigation').slideToggle();
  });

  //portfolio tabs
  $('.tabs li').on('click',function(){
    var role = $(this).attr('data-filter');
    $('.tabs li').removeClass('active');
    $(this).addClass('active');

    if(role == 'all'){
      $('.project-cards .col').show();  
    }else{
      $('.project-cards .col').hide();
      $('.project-cards .col.'+role).show();
    }
  });

  //프로젝트 번호 클릭
  $('.project-cards .link-mask .btn, .card-body .btn').on('click',function(){

    var $this = $(this);

    $.ajax({
      url:'https://jeanyoungpark.github.io/data.json',
      method:'get',
      datatype:'json',
      beforeSend: function(){
        $('.popup .loading').css('display','flex');
      },complete:function(){
        $('.popup .loading').css('display','none');
      },success:function(datas){
        var project = $this.attr('data');
        var data;
        var slide = "";
        var video = "";
        var info = "";
        
        $.each(datas,(subject, item) => {
          if(subject == project){
            data = item;
            return;
          }
        });

        //title
        if(data.name){
          $('.popup .title').text(data.name);
        }
        
        //period
        if(data.period){
          info += `<span>기간 : ${data.period}</span>`;
        }

        //git
        if(data.git){
          info += `<span>git : <a href="${data.git}" target="_blank">${data.git}</a></span>`;
        }

        //fe
        if(data.fe){
          info += `<span>FE : ${data.fe}</span>`;
        }

        //be
        if(data.be){
          info += `<span>BE : ${data.be}</span>`;
        }

        //description
        if(data.description){
          info += `<p>${data.description}</p>`;
        }

        $('.popup .info').html(info);

        //슬라이드나 영상 둘 중 하나만
        if(data.slide.length > 0) {
          //as image
          if(data.slide.length == 1) {
            $('.popup .img').html(`<img src="images/${data.lang}/${project}/${data.slide[0]}">`);
          }else {
            //as slide
            for(var i = 0; i < data.slide.length; i++){
              slide += `<div><img src="images/${data.lang}/${project}/${data.slide[i]}"></div>`;
            }

            $('.popup .slider_wrapper').html(slide);
            slideSt();
          }
        }else {
          if(data.video.length > 0) {
            $('.popup .video').html(`<video style="width:100%" controls muted> <source src='images/${data.lang}/${project}/${data.video}' type='video/mp4'> </video>`);
          }
        }
      }
    });

    $('.popup').css("display","flex");

  });

  //팝업 종료
  $('.popup .close').on('click',function(){
    $('.popup .slider_wrapper').html('');
    $('.popup .img').html('');
    $('.popup .video').html('');
    $('.popup .info').html('');
    $('.popup').hide();

    if(slide) slide.destroySlider();
  });

  //슬라이드 시작함수
  var slideSt = function(){
    slide = $('.slider_wrapper').bxSlider({
      captions:true,
      pager:false
    });
  };

  

});
