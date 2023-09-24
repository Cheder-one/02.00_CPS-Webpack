import Swiper from "swiper";
import { Pagination } from "swiper/modules";

import {
  addHiddenBrands,
  removeHiddenBrands
} from "./utils/toggleHiddenBrands";

let mobileSlider = null;
const brandSlider = document.querySelector(".b-brand-slider");

const toggleMobileSlider = () => {
  if (
    window.innerWidth <= 767.9 &&
    brandSlider.dataset.mobile === "false"
  ) {
    removeHiddenBrands();

    mobileSlider = new Swiper(brandSlider, {
      modules: [Pagination],

      loop: true,
      direction: "horizontal",
      slidesPerView: 1.3,
      spaceBetween: "16px",

      pagination: {
        el: ".b-brand-slider__e-pagination",
        type: "bullets",
        clickable: true
      }
    });

    brandSlider.dataset.mobile = "true";
  }

  if (window.innerWidth >= 768) {
    brandSlider.dataset.mobile = "false";

    if (brandSlider.classList.contains("swiper-initialized")) {
      mobileSlider.destroy();
    }
    addHiddenBrands();
  }
};

toggleMobileSlider();

window.addEventListener("resize", () => {
  toggleMobileSlider();
});
