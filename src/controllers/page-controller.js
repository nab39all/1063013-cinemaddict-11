import FilmCardComponent from '../components/film-card';
import ShowMoreBtnComponent from '../components/show-more-btn';
import FilmListComponent from '../components/film-list';
import FilmCardContainerComponent from '../components/film-card-container';
import FilmDetailsPopupComponent from '../components/film-details-popup';
import NoFilmsComponent from '../components/no-films';
import SortComponent, {SortType} from '../components/sort';
import {render, RenderPosition, remove} from '../utils/render';


const SHOWING_CARDS_COUNT_ON_START = 5;
const SHOWING_CARDS_COUNT_BY_BUTTON = 5;

const siteMain = document.querySelector(`.main`);
const siteBody = document.querySelector(`body`);

const renderFilmCard = (filmListElement, film) => {

  const onFilmCardClick = () => {
    render(siteBody, filmDetailsPopupComponent, RenderPosition.BEFOREEND);
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

const renderFilmCards = (filmListElement, films) => {
  films.forEach((film) => {
    renderFilmCard(filmListElement, film);
  });
};

const getSortedFilms = (films, sortType, from, to) => {
  let sortedFilms = [];
  const showingFilms = films.slice();

  switch (sortType) {
    case SortType.DATE:
      sortedFilms = showingFilms.sort((a, b) => b.release - a.release);
      break;
    case SortType.RATING:
      sortedFilms = showingFilms.sort((a, b) => b.rating - a.rating);
      break;
    case SortType.DEFAULT:
      sortedFilms = showingFilms;
      break;
  }

  return sortedFilms.slice(from, to);
};

export default class PageController {
  constructor(container) {
    this._container = container;

    this._sortComponent = new SortComponent();
    this._noFilmsComponent = new NoFilmsComponent();
    this._filmListComponent = new FilmListComponent();
    this._filmCardContainerComponent = new FilmCardContainerComponent();
    this._showMoreBtnComponent = new ShowMoreBtnComponent();
  }

  render(films) {
    const renderShowMoreBtn = () => {
      if (showingFilmCount >= films.length) {
        return;
      }

      render(filmListElement, this._showMoreBtnComponent, `beforeend`);

      this._showMoreBtnComponent.setClickHandler(() => {
        const prevFilmCount = showingFilmsCount;
        showingFilmsCount = showingFilmsCount + SHOWING_CARDS_COUNT_BY_BUTTON;

        const sortedFilms = getSortedFilms(films, this._sortComponent.getSortType(), prevFilmCount, showingFilmsCount);
        renderFilmCards(mainFilmsListContainer, sortedFilms);

        if (showingFilmsCount >= films.length) {
          remove(this._showMoreBtnComponent);
        }
      });
    };
    const container = this._container;

    const filmsContainer = siteMain.querySelector(`.films`);

    let showingFilmCount = SHOWING_CARDS_COUNT_ON_START;

    if (films.length === 0) {
      filmsContainer.removeChild(filmsContainer.querySelector(`.films-list`));
      render(filmsContainer, this._noFilmsComponent, RenderPosition.BEFOREEND);
      return;
    }

    render(container.getElement(), this._sortComponent, RenderPosition.BEFOREEND);
    render(container.getElement(), this._filmListComponent, RenderPosition.BEFOREEND);

    const filmListElement = siteMain.querySelector(`.films-list`);
    render(filmListElement, this._filmCardContainerComponent, RenderPosition.BEFOREEND);
    const mainFilmsListContainer = filmListElement.querySelector(`.films-list__container`);

    let showingFilmsCount = SHOWING_CARDS_COUNT_ON_START;
    renderFilmCards(mainFilmsListContainer, films.slice(0, showingFilmsCount));

    renderShowMoreBtn();

    render(filmsContainer, this._sortComponent, RenderPosition.BEFOREBEGIN);

    this._sortComponent.setSortTypeChangeHandler((sortType) => {
      showingFilmsCount = SHOWING_CARDS_COUNT_ON_START;
      const sortedFilms = getSortedFilms(films, sortType, 0, showingFilmsCount);

      mainFilmsListContainer.innerHTML = ``;

      renderFilmCards(mainFilmsListContainer, sortedFilms);
      renderShowMoreBtn();
    });
  }
}
