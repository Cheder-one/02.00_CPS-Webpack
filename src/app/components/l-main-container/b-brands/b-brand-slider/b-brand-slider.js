import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const slider = document.querySelector(".b-brand-slider");

export const brandSlider = new Swiper(slider, {
  modules: [Pagination],

  direction: "horizontal",
  loop: true,

  slidesPerView: 2,
  spaceBetween: "16px",

  // If we need pagination
  pagination: {
    el: ".b-brand-slider__e-pagination",
    type: "bullets",
    clickable: true
  }
});
