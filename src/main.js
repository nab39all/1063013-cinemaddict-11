import HeaderProfileComponent from './components/header-profile';
import MainMenuComponent from './components/main-menu';
import StatisticComponent from './components/statistic';
import SortComponent from './components/sort';
import FilmListComponent from './components/film-list';
import FilmCardContainerComponent from './components/film-card-container';
import FooterStatisticComponent from './components/footer-statistic';

import PageController from './controllers/page-controller';

import {generateFilmCards} from './mock/film-card';
import {render, RenderPosition} from './utils/render';


const CARDS_COUNT = 10;

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

const filmsCardContanerComponent = new FilmCardContainerComponent();

const pageController = new PageController(filmsCardContanerComponent);
pageController.render(filmCards);


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

