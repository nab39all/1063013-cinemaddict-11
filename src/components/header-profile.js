import {createElement} from '../utils';

const createHeaderProfileTemplate = (profileRating) => {
  let userRank = ``;
  if (profileRating <= 0) {
    userRank = ``;
  } else if (profileRating > 1 && profileRating <= 10) {
    userRank = `novice`;
  } else if (profileRating > 10 && profileRating <= 20) {
    userRank = `fan`;
  } else {
    userRank = `movie buff`;
  }
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${userRank}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

export default class HeaderProfile {
  constructor(profileRating) {
    this._profileRating = profileRating;

    this._element = null;
  }

  getTemplate() {
    return createHeaderProfileTemplate(this._profileRating);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
