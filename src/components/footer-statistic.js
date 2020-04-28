import {createElement} from '../utils';

const createFooterStatisticTemplate = (moviesCount) => {
  return (
    `<section class="footer__statistics">
      <p>${moviesCount} movies inside</p>
    </section>`
  );
};

export default class FooterStatistic {
  constructor(moviesCount) {
    this._moviesCount = moviesCount;

    this._element = null;
  }

  getTemplate() {
    return createFooterStatisticTemplate(this._moviesCount);
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
