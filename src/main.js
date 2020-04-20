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

const CARDS_COUNT = 20; // кол-во отрисованых карточек
const CARDS_COUNT_EXTRA = 2; // кол-во карточек в блоках Top rated и Most commented

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMain = document.querySelector(`.main`);
const siteHeader = document.querySelector(`.header`);
render(siteHeader, createHeaderProfileTemplate());

const filters = generateFilters();
render(siteMain, createMainMenuTemplate(filters));
render(siteMain, createSortTemplate());
render(siteMain, createFilmListTemplate());

const filmsList = siteMain.querySelector(`.films-list`);
render(filmsList, createFilmCardsContainerTemplate());
const mainFilmsListContainer = filmsList.querySelector(`.films-list__container`);

const filmCards = generateFilmCards(CARDS_COUNT);
for (let i = 0; i < CARDS_COUNT; i++) {
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
render(siteFooter, createFooterStatisticTemplate());

render(siteMain, createFilmDetailsPopUpTemplate());
