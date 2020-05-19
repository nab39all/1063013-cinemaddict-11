import AbstractComponent from './abstract-component';

const createMainMenuTemplate = (watchStats) => {
  const {watchlist, history, favorites} = watchStats;
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorites}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

export default class MainMenu extends AbstractComponent {
  constructor(watchStats) {
    super();

    this._watchStats = watchStats;
  }

  getTemplate() {
    return createMainMenuTemplate(this._watchStats);
  }
}
