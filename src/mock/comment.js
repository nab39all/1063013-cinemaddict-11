import {getRandomItem, getRandomDate} from '../utils/common';
import {DUMMY_TEXTS} from '../utils/consts';

const COMMENT_AUTHORS = [`Jonh Doe`, `Bob Dode`, `Eman North`, `Hooly Gun`, `Scan Done`, `Tom Banle`, `Jakob Mitov`];
const EMOJIS = [`angry`, `puke`, `sleeping`, `smile`];
const Comment = {
  YEAR_MIN: 2014,
  YEAR_MAX: 2020
};

const generateComment = () => {
  return {
    emoji: getRandomItem(EMOJIS),
    text: getRandomItem(DUMMY_TEXTS),
    author: getRandomItem(COMMENT_AUTHORS),
    date: getRandomDate(Comment.YEAR_MIN, Comment.YEAR_MAX)
  };
};

const generateComments = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateComment);
};

export {generateComments};
