import {createElement} from '../utils';

const createFilmCardsContainerTemplate = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

export default class FilmCardContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmCardsContainerTemplate();
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
