import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const brandSlider = new Swiper(".b-brand-slider", {
  modules: [Pagination],

  direction: "horizontal",
  loop: true,

  slidesPerView: 1.3,
  spaceBetween: "16px",

  // If we need pagination
  pagination: {
    el: ".b-brand-slider__e-pagination",
    type: "bullets",
    clickable: true
  }
});
