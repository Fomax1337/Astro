"use strict";
  
  const count = 60;
  const pageMain = document.querySelector(".page-main");
  const pageHeaderStars = document.querySelector(".page-header__stars");
  const pageHeaderLogo = document.querySelector(".page-header__logo");

  const w = document.documentElement.clientWidth;

  const imgPosition = function (img) {
    img.style.width = w / 2.5 + "px";
    img.style.left = w / 2 - pageHeaderLogo.clientWidth / 2 + "px";
    img.style.top = pageHeaderStars.offsetHeight / 2 - pageHeaderLogo.clientHeight / 2 + "px";
  };

  const random = function (min, max) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }
    
    if (min > max) {
      var hold = max;
      max = min;
      min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const createStars = function (count) {

    let star;

    for(let i = 1; i <= count; i++) {
      star = document.createElement("span");
      star.classList.add("stars");

      star.style.left = random(30, w - 30) + "px";
      star.style.top = random(20, pageHeaderStars.offsetHeight - 25) + "px";
      
      star.style.animationDelay = random(1, 10) + "s";  

      pageHeaderStars.append(star);
    }
  };

  imgPosition(pageHeaderLogo);
  createStars(count);