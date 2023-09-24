const showMoreBtn = document.querySelector(
  ".b-brand-slider__e-more-btn"
);
const showMoreText = showMoreBtn.querySelector("span");
const showMoreIcon = showMoreBtn.querySelector(
  ".b-brand-slider__e-icon"
);
const brandsCollapse = document.querySelector(
  ".b-brand-slider--collapse"
);

showMoreBtn.addEventListener("click", () => {
  showMoreBtn.classList.toggle("b-brand-slider__e-more-btn--show");
  showMoreBtn.classList.toggle("b-brand-slider__e-more-btn--hide");

  brandsCollapse.classList.toggle("b-brand-slider--expand");
  brandsCollapse.classList.toggle("b-brand-slider--collapse");

  const isCollapsed = showMoreBtn.classList.contains(
    "b-brand-slider__e-more-btn--hide"
  );

  if (isCollapsed) {
    showMoreText.textContent = "Скрыть";
  } else {
    showMoreText.textContent = "Показать все";
  }
});
