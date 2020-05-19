import {
  GENRES,
  POSTERS,
  TITLES,
  DUMMY_TEXTS
} from '../utils/consts';
import {
  getRandomItem,
  getRandomItems,
  getRandomIntegerNumber,
  getRandomBoolean,
  getRandomDate,
  getRandomArray
} from '../utils/common';

import {generateComments} from './comment';

const Film = {
  RELEASE_YEAR_MIN: 1960,
  RELEASE_YEAR_MAX: 2020,
  COMMENTS_MIN: 0,
  COMMENTS_MAX: 5,
  DESCRIPTION_SENTENCES_MIN: 1,
  DESCRIPTION_SENTENCES_MAX: 5,
  GENRES_MIN: 1,
  GENRES_MAX: 4,
  ACTORS_MIN: 2,
  ACTORS_MAX: 5,
  DURATION_MIN: 30,
  DURATION_MAX: 180,
  RATING_MIN: 1,
  RATING_MAX: 10,
  WRITERS_MIN: 1,
  WRITERS_MAX: 3,
  AGE_MIN: 0,
  AGE_MAX: 21
};

const getRandomDescription = (description) => {
  return getRandomArray(description, Film.DESCRIPTION_SENTENCES_MIN, Film.DESCRIPTION_SENTENCES_MAX).join(` `);
};

const getRandomRating = () => {
  const randomNumber = (Film.RATING_MIN + Math.random() * (Film.RATING_MAX - Film.RATING_MIN)) * 10;
  const rating = Math.round(randomNumber) / 10;
  return rating;
};

const getCommentsCount = () => {
  return getRandomIntegerNumber(Film.COMMENTS_MIN, Film.COMMENTS_MAX);
};
const directors = [`Woody Allen`, `Pedro Almodóvar`, `Rick Alverson`, `Robert Altman`];
const writers = [`Jane Austen`, `William Blake`, `Geoffrey Chaucer`, `Charles Dickens `, `John Donne`];
const actors = [`Akshay Kumar`, `Shah Rukh Khan`, `Amitabh Bachchan`];
const countries = [`China`, `USA`, `Germany`, `Russia`, `Poland`];

const generateFilmCard = () => {

  return {
    poster: getRandomItem(POSTERS),
    age: getRandomIntegerNumber(Film.AGE_MIN, Film.AGE_MAX),
    title: getRandomItem(TITLES),
    originalTitle: getRandomItem(TITLES),
    rating: getRandomRating(),
    duration: getRandomIntegerNumber(Film.DURATION_MIN, Film.DURATION_MAX),
    genres: getRandomItems(GENRES),
    description: getRandomDescription(DUMMY_TEXTS),
    director: getRandomItem(directors),
    writers: getRandomItems(writers),
    actors: getRandomItems(actors),
    comments: generateComments(getCommentsCount()),
    release: getRandomDate(Film.RELEASE_YEAR_MIN, Film.RELEASE_YEAR_MAX),
    country: getRandomItem(countries),
    isInWatchList: getRandomBoolean(),
    isWatched: getRandomBoolean(),
    isFavorite: getRandomBoolean(),
  };
};

const generateFilmCards = (count) => {
  return new Array(count)
  .fill(``)
  .map(generateFilmCard);
};

export {generateFilmCard, generateFilmCards};

