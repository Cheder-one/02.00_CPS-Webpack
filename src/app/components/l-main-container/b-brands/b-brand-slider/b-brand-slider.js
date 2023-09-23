import Swiper from "swiper";
import { Pagination } from "swiper/modules";

let brandSlider = null;
const bBrandSlider = document.querySelector(".b-brand-slider");

const toggleMobileSlider = () => {
  if (
    window.innerWidth <= 767.9 &&
    bBrandSlider.dataset.mobile === "false"
  ) {
    brandSlider = new Swiper(bBrandSlider, {
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
    bBrandSlider.dataset.mobile = "true";
  }

  if (window.innerWidth >= 768) {
    bBrandSlider.dataset.mobile = "false";
    if (bBrandSlider.classList.contains("swiper-initialized")) {
      brandSlider.destroy();
    }
  }
};

toggleMobileSlider();

window.addEventListener("resize", () => {
  toggleMobileSlider();
});
