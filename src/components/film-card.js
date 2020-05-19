import AbstractComponent from './abstract-component';
import {formatDuration} from '../utils/common';

const GENRE_MAIN = 0;
const MAX_DESCRIPTION_LENGTH = 140;

const createFilmCardTemplate = (film) => {
  const {poster, title, rating, release, duration, genres, description, comments, isInWatchList, isWatched, isFavorite} = film;
  const watchListButtonChecked = isInWatchList ? `film-card__controls-item--active` : ``;
  const watchedButtonChecked = isWatched ? `film-card__controls-item--active` : ``;
  const favoriteButtonChecked = isFavorite ? `film-card__controls-item--active` : ``;

  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${release.getFullYear()}</span>
        <span class="film-card__duration">${formatDuration(duration)}</span>
        <span class="film-card__genre">${genres[GENRE_MAIN]}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description.length <= MAX_DESCRIPTION_LENGTH ?
      description : description.substring(0, MAX_DESCRIPTION_LENGTH).concat(`…`)}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchListButtonChecked}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedButtonChecked}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteButtonChecked}">Mark as favorite</button>
      </form>
    </article>`
  );
};

export default class FilmCard extends AbstractComponent {
  constructor(film) {
    super();

    this._film = film;
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }
}
