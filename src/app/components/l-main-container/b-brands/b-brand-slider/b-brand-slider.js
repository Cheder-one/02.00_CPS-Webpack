import Swiper from "swiper";
import { Pagination } from "swiper/modules";

let mobileSlider = null;

const brandSlider = document.querySelector(".b-brand-slider");
const sliderWrapper = document.querySelector(
  ".b-brand-slider__e-wrapper"
);
const brandsTemplate = document.querySelector(
  "#b-brand-slider__hidden-brands"
);

const findHiddenBrands = () => {
  return document.querySelectorAll(
    ".b-brand-slider__e-slide--hidden"
  );
};

const addHiddenBrands = () => {
  const hiddenBrands = findHiddenBrands();

  if (hiddenBrands.length === 0) {
    const clonedTemplate = brandsTemplate.content.cloneNode(true);
    sliderWrapper.appendChild(clonedTemplate);
  }
};

const removeHiddenBrands = () => {
  const hiddenBrands = findHiddenBrands();

  if (hiddenBrands.length > 0) {
    hiddenBrands.forEach((el) => el.remove());
  }
};

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
