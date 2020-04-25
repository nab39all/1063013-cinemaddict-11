import {createHeaderProfileTemplate} from './components/header-profile';
import {createMainMenuTemplate} from './components/main-menu';
import {createSortTemplate} from './components/sort';
import {createFilmCardTemplate} from './components/film-card';
import {createShowMoreBtnTemplate} from './components/show-more-btn';
import {createFilmListTemplate} from './components/film-list';
import {createFilmCardsContainerTemplate} from './components/film-card-container';
import {createFooterStatisticTemplate} from './components/footer-statistic';

import {createFilmDetailsPopUpTemplate} from './components/film-details-popup';
import {createFilmDetailsTemplate} from './components/film-details';
import {createFilmControlsTemplate} from './components/film-controls';
import {createCommentTemplate} from "./components/comments.js";
import {createNewCommentTemplate} from './components/new-comment';

import {generateFilmCards} from './mock/film-card';

const CARDS_COUNT = 23;
const CARDS_COUNT_EXTRA = 2;
const SHOWING_CARDS_COUNT_ON_START = 5;
const SHOWING_CARDS_COUNT_BY_BUTTON = 5;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const filmCards = generateFilmCards(CARDS_COUNT);

const siteMain = document.querySelector(`.main`);
const siteHeader = document.querySelector(`.header`);

const profileRating = filmCards.reduce((count, film) => film.isWatched ? count + 1 : count, 0);
render(siteHeader, createHeaderProfileTemplate(profileRating));

const getWatchStats = () => {
  return {
    watchlist: filmCards.reduce((count, film) => film.isInWatchList ? count + 1 : count, 0),
    history: filmCards.reduce((count, film) => film.isWatched ? count + 1 : count, 0),
    favorites: filmCards.reduce((count, film) => film.isFavorite ? count + 1 : count, 0)
  };
};
const watchStats = getWatchStats();
render(siteMain, createMainMenuTemplate(watchStats));
render(siteMain, createSortTemplate());
render(siteMain, createFilmListTemplate());

const filmsList = siteMain.querySelector(`.films-list`);
render(filmsList, createFilmCardsContainerTemplate());
const mainFilmsListContainer = filmsList.querySelector(`.films-list__container`);

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
const getTopRaitedFilmCadrs = () => {
  const result = filmCards.slice().sort((a, b) => {
    return b.rating - a.rating;
  }
  );
  return result;
};
const topRatedFilmCards = getTopRaitedFilmCadrs();
const getMostCommentedFilmCards = () => {
  const result = filmCards.slice().sort((a, b) => {
    return b.comments.length - a.comments.length;
  }
  );
  return result;
};
const mostCommentedFilmCards = getMostCommentedFilmCards();
for (let i = 0; i < CARDS_COUNT_EXTRA; i++) {
  render(topRatedFilmsListContainer, createFilmCardTemplate(topRatedFilmCards[i]));
  render(mostCommentedFilmsListContainer, createFilmCardTemplate(mostCommentedFilmCards[i]));

}
const siteFooter = document.querySelector(`.footer`);
render(siteFooter, createFooterStatisticTemplate(filmCards.length));

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

const renderFilmDetails = (film) => {

  render(siteFooter, createFilmDetailsPopUpTemplate(film), `afterend`);

  const filmDetailsElement = document.querySelector(`.film-details`);
  const filmDetailsTopContainerElement = filmDetailsElement.querySelector(`.form-details__top-container`);
  const filmDetailsCommentsElement = filmDetailsElement.querySelector(`.film-details__comments-wrap`);
  const filmDetailsCommentsListElement = filmDetailsCommentsElement.querySelector(`.film-details__comments-list`);

  render(filmDetailsTopContainerElement, createFilmDetailsTemplate(film));
  render(filmDetailsTopContainerElement, createFilmControlsTemplate(film));
  render(filmDetailsCommentsElement, createNewCommentTemplate());

  film.comments.forEach((comment) => render(filmDetailsCommentsListElement, createCommentTemplate(comment)));
};

renderFilmDetails(filmCards[0]);


