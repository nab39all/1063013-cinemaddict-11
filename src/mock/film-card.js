import {GENRES, POSTERS, TITLES} from '../consts.js';

const descriptions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
   Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
   Sed sed nisi sed augue convallis suscipit in sed felis.
   Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.split(`.`);

const generateFilmCard = () => {
  const getRandomItem = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };
  const getRandomDecription = (arr) => {
    const result = [];
    const getRandomValue = Math.ceil(Math.random() * 5);
    for (let i = 0; i < getRandomValue; i++) {
      result[i] = arr[Math.floor(Math.random() * arr.length)];
    }
    return result.join(`.`);
  };
  const getRandomValue = () => {
    return Math.floor(Math.random() * 6);
  };
  const getRandomRaiting = () => {
    return `${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`;
  };
  const getRandomDuration = () => {
    return `${Math.floor(Math.random() * 3)}h ${Math.floor(Math.random() * 60)}m`;
  };
  return {
    poster: getRandomItem(POSTERS),
    title: getRandomItem(TITLES),
    raiting: getRandomRaiting(),
    year: 1975,
    duration: getRandomDuration(),
    genre: getRandomItem(GENRES),
    description: getRandomDecription(descriptions),
    comments: getRandomValue()
  };
};

const generateFilmCards = (count) => {
  return new Array(count)
  .fill(``)
  .map(generateFilmCard);
};

export {generateFilmCard, generateFilmCards};
