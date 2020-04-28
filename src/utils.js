import {MONTH_NAMES, DAYS_IN_MONTH, HOURS_IN_DAY, MINUTES_IN_HOUR} from './consts';

const formatDuration = (duration) => {
  const hours = parseInt(duration / MINUTES_IN_HOUR, 10);
  const minutes = duration % MINUTES_IN_HOUR;
  return `${hours}h ${minutes}m`;
};

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomItems = (arr) => {
  let result = [];
  const randomValue = (() => {
    return Math.ceil(Math.random() * arr.length);
  })();
  for (let k = 0; k < arr.length; k++) {
    if (!Math.round(Math.random())) {
      result.push(arr[k]);
    }
    if (result.length >= randomValue) {
      break;
    }
  }
  return result;
};

const getRandomBoolean = () => {
  return Math.random() > 0.5;
};

const getRandomDate = (minYear, maxYear) => {
  const date = new Date(
      getRandomIntegerNumber(minYear, maxYear),
      getRandomIntegerNumber(0, MONTH_NAMES.length),
      getRandomIntegerNumber(0, DAYS_IN_MONTH),
      getRandomIntegerNumber(0, HOURS_IN_DAY),
      getRandomIntegerNumber(0, MINUTES_IN_HOUR)
  );
  return date;
};

const getShuffledArray = (array) => {
  let j;
  let temp;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

const getRandomArray = (array, minLength, maxLength) => {
  return getShuffledArray(array)
  .slice(0, getRandomIntegerNumber(minLength, maxLength));
};

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
}

export {
  formatDuration,
  getRandomIntegerNumber,
  getRandomBoolean,
  getRandomItem,
  getRandomItems,
  getRandomDate,
  getShuffledArray,
  getRandomArray,
  RenderPosition,
  render
};
