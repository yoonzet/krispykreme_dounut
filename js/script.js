$(document).ready(function () {
  // 풀페이지
  $('#fullpage').fullpage({
    fadingEffect: true,
  });

  // 스크롤매직
  var controller = new ScrollMagic.Controller();
  
  var ani01 = gsap.from('.hotnow', {
    opacity: 0,
    x:-300,
  });
  var ani02 = gsap.from('.group-order', {
    opacity: 0,
    x:300,
  });

  var timeLine = gsap.timeline();

  timeLine.add(ani01);
  timeLine.add(ani02);

  var scene01 = new ScrollMagic.Scene({
    triggerElement: '.cont',
    triggerHook: 1,
    offset: 100,
    duration: "0",
  });
  
  scene01.setTween(timeLine);
  scene01.addTo(controller);
  // scene01.addIndicators();


// <  product slider  >
  $(".product-slider").slick({
  });
  // 네비버튼-페이지연결
  $(".nav-btn > ul > li").click(function(){
    var indexNum = $(this).index();
    $(".slider").slick("slickGoTo" , indexNum )
  });
  // 네비버튼-스위치배경전환
  $(".nav-btn > ul > li").click(function(){
    $(this).addClass("bg");
    $(".nav-btn > ul > li").not(this).removeClass("bg");
  });

  // <  event slider  >
  $(".event-slider").slick({
    autoplay:true,
    arrows:true,
    dots:true,
  });



//  // 메인비쥬얼 하단 슬라이드버튼 
//   $(".btn").click(function(){
//     $(this).addClass("active");
//     $(".btn").not(this).removeClass("active");
//   });

//   $(".btn").click(function(){
//     $(".fp-slide").addClass('active');
//   });


  // 태블릿,모바일 버젼 메뉴아이콘 클릭
  $(".bar-icon").click(function(){
    $(".menu-mobile-wrap").addClass("active");
  });

  $(".exit-icon").click(function(){
    $(".menu-mobile-wrap").toggleClass("active");
  });

  
 

});