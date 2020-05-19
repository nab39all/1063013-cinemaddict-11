import HeaderProfileComponent from './components/header-profile';
import MainMenuComponent from './components/main-menu';
import StatisticComponent from './components/statistic';
import SortComponent from './components/sort';
import FilmCardComponent from './components/film-card';
import ShowMoreBtnComponent from './components/show-more-btn';
import FilmListComponent from './components/film-list';
import FilmCardContainerComponent from './components/film-card-container';
import FooterStatisticComponent from './components/footer-statistic';

import FilmDetailsPopupComponent from './components/film-details-popup';

import {generateFilmCards} from './mock/film-card';

import {render, RenderPosition, remove} from './utils/render';
import NoFilmsComponent from './components/no-films';

const CARDS_COUNT = 10;
const SHOWING_CARDS_COUNT_ON_START = 5;
const SHOWING_CARDS_COUNT_BY_BUTTON = 5;

const filmCards = generateFilmCards(CARDS_COUNT);

const siteMain = document.querySelector(`.main`);

const renderHeader = () => {
  const siteHeader = document.querySelector(`.header`);

  const profileRating = filmCards.reduce((count, film) => film.isWatched ? count + 1 : count, 0);
  render(siteHeader, new HeaderProfileComponent(profileRating), RenderPosition.BEFOREEND);
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
  render(siteMain, new MainMenuComponent(watchStats), RenderPosition.BEFOREEND);
};
renderMainMenu();

const renderStatistic = (films) => {
  const mainMenu = siteMain.querySelector(`.main-navigation`);

  render(mainMenu, new StatisticComponent(films), RenderPosition.AFTEREND);
};
renderStatistic(filmCards);

render(siteMain, new SortComponent(), RenderPosition.BEFOREEND);
render(siteMain, new FilmListComponent(), RenderPosition.BEFOREEND);
const siteFooter = document.querySelector(`.footer`);
render(siteFooter, new FooterStatisticComponent(filmCards.length), RenderPosition.BEFOREEND);


const renderFilmCard = (filmListElement, film) => {

  const onFilmCardClick = () => {
    render(siteFooter, filmDetailsPopupComponent, RenderPosition.AFTEREND);
    document.addEventListener(`keydown`, onEscKeydown);
  };

  const onCloseButtonClick = () => {
    document.querySelector(`body`).removeChild(filmDetailsPopupComponent.getElement());
    document.removeEventListener(`keydown`, onEscKeydown);
  };

  const onEscKeydown = (evt) => {
    const isEscape = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscape) {
      document.querySelector(`body`).removeChild(filmDetailsPopupComponent.getElement());

      document.removeEventListener(`keydown`, onEscKeydown);
    }
  };

  const filmComponent = new FilmCardComponent(film);
  filmComponent.setFilmCardClickHandler(onFilmCardClick);

  const filmDetailsPopupComponent = new FilmDetailsPopupComponent(film);
  filmDetailsPopupComponent.setPopupCloseButtonClickHandler(onCloseButtonClick);

  render(filmListElement, filmComponent, RenderPosition.BEFOREEND);
};

const renderFilmsLists = (filmsComponent, films) => {

  const filmsContainer = siteMain.querySelector(`.films`);

  if (films.length === 0) {
    filmsContainer.removeChild(filmsContainer.querySelector(`.films-list`));
    render(filmsContainer, new NoFilmsComponent(), RenderPosition.BEFOREEND);
    return;
  }
  render(filmsComponent.getElement(), new FilmListComponent(), RenderPosition.BEFOREEND);

  const filmListElement = siteMain.querySelector(`.films-list`);
  render(filmListElement, new FilmCardContainerComponent(), RenderPosition.BEFOREEND);
  const mainFilmsListContainer = filmListElement.querySelector(`.films-list__container`);

  let showingFilmsCount = SHOWING_CARDS_COUNT_ON_START;

  films
    .slice(0, showingFilmsCount)
    .forEach((film) => {
      renderFilmCard(mainFilmsListContainer, film);
    });


  const showMoreButtonComponent = new ShowMoreBtnComponent();

  render(filmListElement, showMoreButtonComponent, `beforeend`);

  showMoreButtonComponent.setClickHandler(() => {
    const prevFilmCount = showingFilmsCount;
    showingFilmsCount = showingFilmsCount + SHOWING_CARDS_COUNT_BY_BUTTON;

    films.slice(prevFilmCount, showingFilmsCount)
      .forEach((film) => renderFilmCard(mainFilmsListContainer, film));
    if (showingFilmsCount >= films.length) {
      remove(showMoreButtonComponent);
    }
  });
};

const filmsComponent = new FilmCardContainerComponent();

renderFilmsLists(filmsComponent, filmCards);


// const renderExtraFilms = () => {

//   const extraFilmsList = siteMain.querySelectorAll(`.films-list--extra`);
//   const [topRatedFilmsList, mostCommentedFilmsList] = extraFilmsList;

//   render(topRatedFilmsList, new FilmCardContainerComponent().getElement(), RenderPosition.BEFOREEND);
//   render(mostCommentedFilmsList, new FilmCardContainerComponent().getElement(), RenderPosition.BEFOREEND);

//   const topRatedFilmsListContainer = topRatedFilmsList.querySelector(`.films-list__container`);
//   const mostCommentedFilmsListContainer = mostCommentedFilmsList.querySelector(`.films-list__container`);

//   const getTopRaitedFilmCadrs = () => {
//     const result = filmCards.slice().sort((a, b) => {
//       return b.rating - a.rating;
//     }
//     );
//     return result;
//   };

//   const topRatedFilmCards = getTopRaitedFilmCadrs();

//   const getMostCommentedFilmCards = () => {
//     const result = filmCards.slice().sort((a, b) => {
//       return b.comments.length - a.comments.length;
//     }
//     );
//     return result;
//   };

//   const mostCommentedFilmCards = getMostCommentedFilmCards();
//   for (let i = 0; i < CARDS_COUNT_EXTRA; i++) {
//     render(topRatedFilmsListContainer, new FilmCardComponent(topRatedFilmCards[i]).getElement(), RenderPosition.BEFOREEND);
//     render(mostCommentedFilmsListContainer, new FilmCardComponent(mostCommentedFilmCards[i]).getElement(), RenderPosition.BEFOREEND);
//   }
// };
// renderExtraFilms();

