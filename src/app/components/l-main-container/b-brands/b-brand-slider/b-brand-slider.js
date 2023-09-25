import Swiper from "swiper";
import { Keyboard, Pagination } from "swiper/modules";

import {
  addHiddenBrands,
  removeHiddenBrands
} from "./utils/toggleHiddenBrands";

let mobileSlider = null;
const brandSlider = document.querySelector(".b-brand-slider");
const mediaQuerySmall = window.matchMedia("(max-width: 767.9px)");

const createBrandSlider = () => {
  return new Swiper(brandSlider, {
    modules: [Pagination, Keyboard],

    loop: true,
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: "16px",

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true
    },

    pagination: {
      el: ".b-brand-slider__e-pagination",
      type: "bullets",
      clickable: true
    }
  });
};

function handleMediaChange(event) {
  const isSmallScreen = event.matches;

  if (isSmallScreen) {
    removeHiddenBrands();
    mobileSlider = createBrandSlider();

    brandSlider.dataset.mobile = "true";
  } else {
    if (brandSlider.classList.contains("swiper-initialized")) {
      mobileSlider.destroy();
    }
    addHiddenBrands();
    brandSlider.dataset.mobile = "false";
  }
}

handleMediaChange(mediaQuerySmall);
mediaQuerySmall.addEventListener("change", handleMediaChange);
