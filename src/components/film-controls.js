export const createFilmControlsTemplate = (film) => {
  const {isInWatchList, isWatched, isFavorite} = film;
  const watchListButtonChecked = isInWatchList ? `checked` : ``;
  const watchedButtonChecked = isWatched ? `checked` : ``;
  const favoriteButtonChecked = isFavorite ? `checked` : ``;
  return (
    `<section class="film-details__controls">
    <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${watchListButtonChecked}>
    <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

    <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${watchedButtonChecked}>
    <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

    <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${favoriteButtonChecked}>
    <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
  </section>`
  );
};


