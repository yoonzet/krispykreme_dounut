$(document).ready(function () {
  // 풀페이지
  $('#fullpage').fullpage({
    fadingEffect: true,
  });

  // 스크롤매직
  var controller = new ScrollMagic.Controller();
  
  var ani01 = gsap.from('.hotnow', {
    opacity: 0,
  });
  var ani02 = gsap.from('.group-order', {
    opacity: 0,
  });

  var timeLine = gsap.timeline();

  timeLine.add(ani01);
  timeLine.add(ani02);

  var scene01 = new ScrollMagic.Scene({
    triggerElement: '.cont',
    triggerHook: 1,
    offset: 100,
    duration: "100%",
  });
  
  scene01.setTween(timeLine);
  scene01.addTo(controller);
  // scene01.addIndicators();


});