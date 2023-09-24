const showMoreBtn = document.querySelector(
  ".b-brand-slider__e-show-more-btn"
);
const showMoreText = showMoreBtn.querySelector("span");

const brandsCollapsed = document.querySelector(
  ".b-brand-slider--collapsed"
);

showMoreBtn.addEventListener("click", () => {
  showMoreText.classList.toggle("b-brand-slider__e-show-more--show");
  showMoreText.classList.toggle("b-brand-slider__e-show-more--hide");

  brandsCollapsed.classList.toggle("b-brand-slider--expanded");
  brandsCollapsed.classList.toggle("b-brand-slider--collapsed");

  const isHide = showMoreText.classList.contains(
    "b-brand-slider__e-show-more--hide"
  );

  if (isHide) {
    showMoreText.textContent = "Скрыть";
  } else {
    showMoreText.textContent = "Показать все";
  }
});

// TODO Поменять стрелочку вверх (при Скрыть)
// TODO Реализовать скрытие без багов
