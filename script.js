const progressBlock = document.getElementById("progressBlock");
const valueInput = document.getElementById("progressValue");
const animateToggle = document.getElementById("animateToggle");
const hideToggle = document.getElementById("hideToggle");

const progressCircle = document.querySelector(".progress-ring__circle");

const startDashArray = 314; // Стартовое значение
const fullDashArray = 626; // Итоговое значение

progressCircle.style.strokeDasharray = `${startDashArray}`;
// Обновление прогресса
function setProgress(value) {
  const currentDashArray =
    startDashArray + (value / 100) * (fullDashArray - startDashArray);

  progressCircle.style.strokeDasharray = `${currentDashArray}`;
}
// Считывание значения
valueInput.addEventListener("input", () => {
  if (valueInput.value.length > 3) {
    valueInput.value = valueInput.value.slice(0, 3); // Округление знаачения
    return;
  }

  let value = Math.min(Math.max(Number(valueInput.value), 0), 100); // Максмимум 0-100

  if (value > valueInput.max) value = valueInput.max;

  setProgress(value);

  valueInput.value = value;
});
// Переключение анимации
animateToggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    progressBlock.classList.add("animated");
  } else {
    progressBlock.classList.remove("animated");
  }
});
// Переключение видимости
hideToggle.addEventListener("change", (e) => {
  if (e.target.checked) {
    progressBlock.classList.add("hidden");
  } else {
    progressBlock.classList.remove("hidden");
  }
});
