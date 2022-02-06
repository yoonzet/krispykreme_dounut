$(document).ready(function () {
  // 풀페이지
  $('#fullpage').fullpage({
    fadingEffect: true,
  });

  // 스크롤매직
  var controller = new ScrollMagic.Controller();
  // hotnow
  var ani01 = gsap.from('.hotnow .img-wrap', {
    opacity: 0,
    x: -800,
  });
  var timeLine = gsap.timeline();

  timeLine.add(ani01);

  var scene01 = new ScrollMagic.Scene({
    triggerElement: '.hotnow',
    triggerHook: 1,
    offset: 200,
    duration: "100%",
  });
  scene01.setTween(timeLine);
  scene01.addTo(controller);
  // scene01.addIndicators();


  // dozen
  var ani02 = gsap.from('.dozen .img-wrap', {
    opacity: 0,
    x: 800,
  });
  var timeLine = gsap.timeline();

  timeLine.add(ani02);

  var scene02 = new ScrollMagic.Scene({
    triggerElement: '.dozen',
    triggerHook: 1,
    offset: 200,
    duration: "100%",
  });
  scene02.setTween(timeLine);
  scene02.addTo(controller);
  // scene02.addIndicators();


  // group-order
  var ani03 = gsap.from('.group-order .img-wrap', {
    opacity: 0,
    x: -800,
  });
  var timeLine = gsap.timeline();

  timeLine.add(ani03);

  var scene03 = new ScrollMagic.Scene({
    triggerElement: '.group-order',
    triggerHook: 1,
    offset: 200,
    duration: "100%",
  });
  scene03.setTween(timeLine);
  scene03.addTo(controller);
  // scene03.addIndicators();


});