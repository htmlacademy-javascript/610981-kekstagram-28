const ALERT_SHOW_TIME = 5000;

const getRandomArrValues = (arr, valuesQuantity) => {
  const result = arr.slice(); // Создаем копию исходного arr
  result.sort(() => Math.random() - 0.5); // Сортируем массив случайным образом
  return result.slice(0, valuesQuantity); // Возвращаем первые valuesQuantity элементов
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const isEscapeKey = (evt) => evt.key === 'Escape';


const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export { showAlert, isEscapeKey, getRandomArrValues, debounce };
