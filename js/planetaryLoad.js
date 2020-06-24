"use strict";

document.addEventListener('DOMContentLoaded', () => {

  const sliderList = document.querySelector(".slider__list");

  const createPlanetSlide = (title, description, poster, id) => {
    const slide = document.createElement("li");
    slide.classList.add("slider__item", "slider-item");
    slide.innerHTML = `<div class="slider__wrapper" style="left:${id % 2 == 0 ? 10 + "%" : 50 + "%"}">
                          <h2 class="slider-item__title">${title}</h2>
                          <p class="slider-item__desk">${description}</p>
                        </div>
                        <img src="${poster}" alt=${title}" class="slider-item__img">`;
    
    return slide;
  };

  const renderSlide = (slide) => {
    sliderList.textContent = "";
    slide.forEach(({title, description, poster, id}) => {
      sliderList.append(createPlanetSlide(title, description, poster, id));
    })
  };

  const getPlanets = (handler) => {
    fetch("db/db.json")
      .then((response) => response.json())
      .then(handler);
  };

  getPlanets(renderSlide);
});