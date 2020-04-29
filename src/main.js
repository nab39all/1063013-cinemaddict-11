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

import {render, RenderPosition} from './utils';

const CARDS_COUNT = 23;
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

const renderStatistic = (films) => {
  const mainMenu = siteMain.querySelector(`.main-navigation`);

  render(mainMenu, new StatisticComponent(films).getElement(), RenderPosition.AFTEREND);
};
renderStatistic(filmCards);

render(siteMain, new SortComponent().getElement(), RenderPosition.BEFOREEND);
render(siteMain, new FilmListComponent().getElement(), RenderPosition.BEFOREEND);
const siteFooter = document.querySelector(`.footer`);
render(siteFooter, new FooterStatisticComponent(filmCards.length).getElement(), RenderPosition.BEFOREEND);


const renderFilmCard = (filmListElement, film) => {

  const onFilmCardClick = () => {
    render(siteFooter, filmDetailsPopupComponent.getElement(), RenderPosition.AFTEREND);
  };

  const onCloseButtonClick = () => {
    document.querySelector(`body`).removeChild(filmDetailsPopupComponent.getElement());
  };

  const filmComponent = new FilmCardComponent(film);
  const filmCardPosterElement = filmComponent.getElement().querySelector(`.film-card__poster`);
  const filmTitleElement = filmComponent.getElement().querySelector(`.film-card__title`);
  const filmCommentsElement = filmComponent.getElement().querySelector(`.film-card__comments`);

  filmCardPosterElement.addEventListener(`click`, onFilmCardClick);
  filmTitleElement.addEventListener(`click`, onFilmCardClick);
  filmCommentsElement.addEventListener(`click`, onFilmCardClick);

  const filmDetailsPopupComponent = new FilmDetailsPopupComponent(film);
  const closePopupButton = filmDetailsPopupComponent.getElement().querySelector(`.film-details .film-details__close-btn`);

  closePopupButton.addEventListener(`click`, onCloseButtonClick);

  render(filmListElement, filmComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderFilmsLists = (filmsComponent, films) => {
  render(filmsComponent.getElement(), new FilmListComponent().getElement(), RenderPosition.BEFOREEND);

  const filmListElement = siteMain.querySelector(`.films-list`);
  render(filmListElement, new FilmCardContainerComponent().getElement(), RenderPosition.BEFOREEND);
  const mainFilmsListContainer = filmListElement.querySelector(`.films-list__container`);

  let showingFilmsCount = SHOWING_CARDS_COUNT_ON_START;

  films
    .slice(0, showingFilmsCount)
    .forEach((film) => {
      renderFilmCard(mainFilmsListContainer, film);
    });


  render(filmListElement, new ShowMoreBtnComponent().getElement(), `beforeend`);

  const showMoreButton = filmListElement.querySelector(`.films-list__show-more`);

  showMoreButton.addEventListener(`click`, () => {
    const prevFilmCount = showingFilmsCount;
    showingFilmsCount = showingFilmsCount + SHOWING_CARDS_COUNT_BY_BUTTON;

    films.slice(prevFilmCount, showingFilmsCount)
      .forEach((film) => renderFilmCard(mainFilmsListContainer, film));
    if (showingFilmsCount >= films.length) {
      showMoreButton.remove();
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

