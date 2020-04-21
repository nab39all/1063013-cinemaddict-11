export const createFilmCardTemplate = (film) => {
  const {poster, title, raiting, year, duration, genres, description, commentsCount, isInWatchList, isWatched, isFavorite} = film;
  const watchListButtonChecked = isInWatchList ? `film-card__controls-item--active` : ``;
  const watchedButtonChecked = isWatched ? `film-card__controls-item--active` : ``;
  const favoriteButtonChecked = isFavorite ? `film-card__controls-item--active` : ``;
  return (
    `<article class="film-card">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${raiting}</p>
      <p class="film-card__info">
        <span class="film-card__year">${year}</span>
        <span class="film-card__duration">${duration}</span>
        <span class="film-card__genre">${genres[0]}</span>
      </p>
      <img src="./images/posters/${poster}" alt="" class="film-card__poster">
      <p class="film-card__description">${description.length <= 140 ? description : description.substring(0, 140).concat(`…`)}</p>
      <a class="film-card__comments">${commentsCount} comments</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchListButtonChecked}">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watchedButtonChecked}">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${favoriteButtonChecked}">Mark as favorite</button>
      </form>
    </article>`
  );
};
