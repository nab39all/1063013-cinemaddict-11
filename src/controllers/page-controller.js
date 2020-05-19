import FilmCardComponent from '../components/film-card';
import ShowMoreBtnComponent from '../components/show-more-btn';
import FilmListComponent from '../components/film-list';
import FilmCardContainerComponent from '../components/film-card-container';
import FilmDetailsPopupComponent from '../components/film-details-popup';
import NoFilmsComponent from '../components/no-films';
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

export default class PageController {
  constructor(container) {
    this._container = container;
  }

  render(films) {
    renderFilmsLists(this._container, films);
  }
}