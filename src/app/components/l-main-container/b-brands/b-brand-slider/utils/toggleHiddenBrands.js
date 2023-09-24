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

export { addHiddenBrands, removeHiddenBrands };
