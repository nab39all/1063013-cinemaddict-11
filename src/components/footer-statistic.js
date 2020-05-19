import AbstractComponent from './abstract-component';

const createFooterStatisticTemplate = (moviesCount) => {
  return (
    `<section class="footer__statistics">
      <p>${moviesCount} movies inside</p>
    </section>`
  );
};

export default class FooterStatistic extends AbstractComponent {
  constructor(moviesCount) {
    super();

    this._moviesCount = moviesCount;
  }

  getTemplate() {
    return createFooterStatisticTemplate(this._moviesCount);
  }
}
