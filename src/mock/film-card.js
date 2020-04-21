import {GENRES, POSTERS, TITLES, SMILES} from '../consts.js';

const descriptions = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.
  Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.
  Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.
   Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.
   Sed sed nisi sed augue convallis suscipit in sed felis.
   Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`.split(`.`);
const directors = [`Woody Allen`, `Pedro Almodóvar`, `Rick Alverson`, `Robert Altman`];
const writers = [`Jane Austen`, `William Blake`, `Geoffrey Chaucer`, `Charles Dickens `, `John Donne`];
const actors = [`Akshay Kumar`, `Shah Rukh Khan`, `Amitabh Bachchan`];
const countries = [`China`, `USA`, `Germany`, `Russia`, `Poland`];

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
    return Math.floor(Math.random() * 20);
  };
  const getRandomCommentsCount = (() => {
    return Math.floor(Math.random() * 6);
  })();
  const generateComments = (count) => {
    return new Array(count)
    .fill(``)
    .map(() => {
      return {
        smile: getRandomItem(SMILES),
        commentText: getRandomItem(descriptions),
        commentAuthor: getRandomItem(writers),
        commentDate: `1.10.2012`
      };
    });
  };
  const getRandomRaiting = () => {
    return `${Math.floor(Math.random() * 10)}.${Math.floor(Math.random() * 10)}`;
  };
  const getRandomDuration = () => {
    return `${Math.floor(Math.random() * 3)}h ${Math.floor(Math.random() * 60)}m`;
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
  return {
    poster: getRandomItem(POSTERS),
    age: getRandomValue(),
    title: getRandomItem(TITLES),
    originalTitle: getRandomItem(TITLES),
    raiting: getRandomRaiting(),
    year: 1975,
    duration: getRandomDuration(),
    genres: getRandomItems(GENRES),
    description: getRandomDecription(descriptions),
    commentsCount: getRandomCommentsCount,
    director: getRandomItem(directors),
    writers: getRandomItems(writers),
    actors: getRandomItems(actors),
    release: 1975,
    country: getRandomItem(countries),
    isInWatchList: Math.random() > 0.5,
    isWatched: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
    // comments: generateComments(getRandomCommentsCount)
  };
};

const generateFilmCards = (count) => {
  return new Array(count)
  .fill(``)
  .map(generateFilmCard);
};

export {generateFilmCard, generateFilmCards};

