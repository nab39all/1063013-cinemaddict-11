import HeaderProfileComponent from './components/header-profile';
import MainMenuComponent from './components/main-menu';
import SortComponent from './components/sort';
import FilmCardComponent from './components/film-card';
import ShowMoreBtnComponent from './components/show-more-btn';
import FilmListComponent from './components/film-list';
import FilmCardContainerComponent from './components/film-card-container';
import FooterStatisticComponent from './components/footer-statistic';

import FilmDetailsPopupComponent from './components/film-details-popup';
import CommentComponent from './components/comment';
import NewCommentComponent from './components/new-comment';

import {generateFilmCards} from './mock/film-card';

import {render, RenderPosition} from './utils';

const CARDS_COUNT = 23;
const CARDS_COUNT_EXTRA = 2;
const SHOWING_CARDS_COUNT_ON_START = 5;
const SHOWING_CARDS_COUNT_BY_BUTTON = 5;

const filmCards = generateFilmCards(CARDS_COUNT);

const siteMain = document.querySelector(`.main`);

const renderHeader = () => {
  const siteHeader = document.querySelector(`.header`);

  const profileRating = filmCards.reduce((count, film) => film.isWatched ? count + 1 : count, 0);
  render(siteHeader, new HeaderProfileComponent(profileRating).getElement(), RenderPosition.BEFOREEND);
};
renderHeader();

const renderMainMenu = () => {
  const getWatchStats = () => {
    return {
      watchlist: filmCards.reduce((count, film) => film.isInWatchList ? count + 1 : count, 0),
      history: filmCards.reduce((count, film) => film.isWatched ? count + 1 : count, 0),
      favorites: filmCards.reduce((count, film) => film.isFavorite ? count + 1 : count, 0)
    };
  };
  const watchStats = getWatchStats();
  render(siteMain, new MainMenuComponent(watchStats).getElement(), RenderPosition.BEFOREEND);
};
renderMainMenu();

render(siteMain, new SortComponent().getElement(), RenderPosition.BEFOREEND);
render(siteMain, new FilmListComponent().getElement(), RenderPosition.BEFOREEND);

const renderFilmsList = () => {
  const filmsList = siteMain.querySelector(`.films-list`);
  render(filmsList, new FilmCardContainerComponent().getElement(), RenderPosition.BEFOREEND);
  const mainFilmsListContainer = filmsList.querySelector(`.films-list__container`);

  let showingCardsCount = SHOWING_CARDS_COUNT_ON_START;
  for (let i = 0; i < showingCardsCount; i++) {
    render(mainFilmsListContainer, new FilmCardComponent(filmCards[i]).getElement(), RenderPosition.BEFOREEND);
  }

  render(filmsList, new ShowMoreBtnComponent().getElement(), RenderPosition.BEFOREEND);

  const loadMoreButton = filmsList.querySelector(`.films-list__show-more`);

  loadMoreButton.addEventListener(`click`, () => {
    const prevTasksCount = showingCardsCount;
    showingCardsCount = showingCardsCount + SHOWING_CARDS_COUNT_BY_BUTTON;

    filmCards.slice(prevTasksCount, showingCardsCount)
      .forEach((filmCard) => render(mainFilmsListContainer, new FilmCardComponent(filmCard).getElement(), RenderPosition.BEFOREEND));
    if (showingCardsCount >= filmCards.length) {
      loadMoreButton.remove();
    }
  });
};
renderFilmsList();

const renderExtraFilms = () => {
  const extraFilmsList = siteMain.querySelectorAll(`.films-list--extra`);
  const [topRatedFilmsList, mostCommentedFilmsList] = extraFilmsList;
  render(topRatedFilmsList, new FilmCardContainerComponent().getElement(), RenderPosition.BEFOREEND);
  render(mostCommentedFilmsList, new FilmCardContainerComponent().getElement(), RenderPosition.BEFOREEND);
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
    render(topRatedFilmsListContainer, new FilmCardComponent(topRatedFilmCards[i]).getElement(), RenderPosition.BEFOREEND);
    render(mostCommentedFilmsListContainer, new FilmCardComponent(mostCommentedFilmCards[i]).getElement(), RenderPosition.BEFOREEND);

  }
};
renderExtraFilms();

const siteFooter = document.querySelector(`.footer`);
render(siteFooter, new FooterStatisticComponent(filmCards.length).getElement(), RenderPosition.BEFOREEND);

// const renderFilmDetails = (film) => {

//   render(siteFooter, createFilmDetailsPopUpTemplate(film), `afterend`);

//   const filmDetailsElement = document.querySelector(`.film-details`);
//   const filmDetailsTopContainerElement = filmDetailsElement.querySelector(`.form-details__top-container`);
//   const filmDetailsCommentsElement = filmDetailsElement.querySelector(`.film-details__comments-wrap`);
//   const filmDetailsCommentsListElement = filmDetailsCommentsElement.querySelector(`.film-details__comments-list`);

//   render(filmDetailsTopContainerElement, createFilmDetailsTemplate(film));
//   render(filmDetailsTopContainerElement, createFilmControlsTemplate(film));
//   render(filmDetailsCommentsElement, createNewCommentTemplate());

//   film.comments.forEach((comment) => render(filmDetailsCommentsListElement, createCommentTemplate(comment)));
// };

// renderFilmDetails(filmCards[0]);


// Пока что рендерит не все
render(siteFooter, new FilmDetailsPopupComponent(filmCards[0]).getElement(), RenderPosition.BEFOREEND);
