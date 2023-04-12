const SCALE_FACTOR = 100;
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const SCALE_DEFAULT = 100;

const reducerScaleElement = document.querySelector('.scale__control--smaller');
const increaserScaleElement = document.querySelector('.scale__control--bigger');
const inputScaleElement = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-upload__preview img');

const changeImageScale = (value) => {
  imageElement.style.transform = `scale(${value / SCALE_FACTOR})`;
  inputScaleElement.value = `${value}%`;
};

const onReduceScaleElementClick = () => {
  let currentInputScaleValue = parseInt(inputScaleElement.value, 10);
  if (currentInputScaleValue > MIN_SCALE) {
    currentInputScaleValue -= SCALE_STEP;
  }
  changeImageScale(currentInputScaleValue);
};

const onIncreaseScaleElementClick = () => {
  let currentInputScaleValue = parseInt(inputScaleElement.value, 10);
  if (currentInputScaleValue < MAX_SCALE) {
    currentInputScaleValue += SCALE_STEP;
  }
  changeImageScale(currentInputScaleValue);
};

const resetScale = () => changeImageScale(SCALE_DEFAULT);

reducerScaleElement.addEventListener('click', onReduceScaleElementClick);
increaserScaleElement.addEventListener('click', onIncreaseScaleElementClick);

export { resetScale };
