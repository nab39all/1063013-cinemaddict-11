import {createHeaderProfileTemplate} from './components/header-profile';
import {createMainMenuTemplate} from './components/main-menu';
import {createSortTemplate} from './components/sort';
import {createFilmCardTemplate} from './components/film-card';
import {createShowMoreBtnTemplate} from './components/show-more-btn';
import {createFilmDetailsPopUpTemplate} from './components/film-details-popup';
import {createFilmListTemplate} from './components/film-list';
import {createFilmCardsContainerTemplate} from './components/film-card-container';
import {createFooterStatisticTemplate} from './components/footer-statistic';

import {generateFilters} from './mock/main-menu';
import {generateFilmCards} from './mock/film-card';
import {generateProfileRaiting} from './mock/header-profile';
import {generateMoviesCount} from './mock/footer-statistic';

const CARDS_COUNT = 17;
const CARDS_COUNT_EXTRA = 2;
const SHOWING_CARDS_COUNT_ON_START = 5;
const SHOWING_CARDS_COUNT_BY_BUTTON = 5;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMain = document.querySelector(`.main`);
const siteHeader = document.querySelector(`.header`);
const profileRaiting = generateProfileRaiting();
render(siteHeader, createHeaderProfileTemplate(profileRaiting));

const filters = generateFilters();
render(siteMain, createMainMenuTemplate(filters));
render(siteMain, createSortTemplate());
render(siteMain, createFilmListTemplate());

const filmsList = siteMain.querySelector(`.films-list`);
render(filmsList, createFilmCardsContainerTemplate());
const mainFilmsListContainer = filmsList.querySelector(`.films-list__container`);

const filmCards = generateFilmCards(CARDS_COUNT);
let showingCardsCount = SHOWING_CARDS_COUNT_ON_START;
for (let i = 0; i < showingCardsCount; i++) {
  render(mainFilmsListContainer, createFilmCardTemplate(filmCards[i]));
}

render(filmsList, createShowMoreBtnTemplate());

const extraFilmsList = siteMain.querySelectorAll(`.films-list--extra`);
const [topRatedFilmsList, mostCommentedFilmsList] = extraFilmsList;
render(topRatedFilmsList, createFilmCardsContainerTemplate());
render(mostCommentedFilmsList, createFilmCardsContainerTemplate());
const topRatedFilmsListContainer = topRatedFilmsList.querySelector(`.films-list__container`);
const mostCommentedFilmsListContainer = mostCommentedFilmsList.querySelector(`.films-list__container`);
for (let i = 0; i < CARDS_COUNT_EXTRA; i++) {
  render(topRatedFilmsListContainer, createFilmCardTemplate(filmCards[i]));
  render(mostCommentedFilmsListContainer, createFilmCardTemplate(filmCards[i]));
}

const siteFooter = document.querySelector(`.footer`);
const moviesCount = generateMoviesCount();
render(siteFooter, createFooterStatisticTemplate(moviesCount));

render(siteMain, createFilmDetailsPopUpTemplate(filmCards[0]));

const loadMoreButton = filmsList.querySelector(`.films-list__show-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingCardsCount;
  showingCardsCount = showingCardsCount + SHOWING_CARDS_COUNT_BY_BUTTON;

  filmCards.slice(prevTasksCount, showingCardsCount)
    .forEach((filmCard) => render(mainFilmsListContainer, createFilmCardTemplate(filmCard), `beforeend`));
  if (showingCardsCount >= filmCards.length) {
    loadMoreButton.remove();
  }
});
