import {createElement, formatDuration} from '../utils';

const createFilmDetailsMarkup = (film) => {
  const {poster, age, title, originalTitle, rating, director, writers, actors
    , release, duration, country, genres, description} = film;
  const getNumberOfGenresMarkup = () => {
    let genresMarkup = ``;
    for (let i = 0; i < genres.length; i++) {
      genresMarkup = genresMarkup + `<span class="film-details__genre">${genres[i]}</span> \n`;
    }
    return genresMarkup;
  };
  return (
    `<div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="./images/posters/${poster}" alt="">

        <p class="film-details__age">${age}+</p>
      </div>

      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${title}</h3>
            <p class="film-details__title-original">Original: ${originalTitle}</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating">${rating}</p>
          </div>
        </div>

        <table class="film-details__table">
          <tbody><tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">${director}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">${writers.join(`, `)}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">${actors.join(`, `)}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">${release.getFullYear()}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Runtime</td>
            <td class="film-details__cell">${formatDuration(duration)}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">${country}</td>
          </tr>
          <tr class="film-details__row">
          <td class="film-details__term">${genres.length === 1 ? `Genre` : `Genres`}</td>
            <td class="film-details__cell">${getNumberOfGenresMarkup()}</td>
          </tr>
        </tbody></table>

        <p class="film-details__film-description">
          ${description}
        </p>
      </div>
    </div>`
  );
};

const createFilmControlsMarkup = (film) => {
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

const createCommentsMarkup = (comments) => {
  return comments.map((comment) => {
    const {emoji, text, author, date} = comment;
    return (`
      <li class="film-details__comment">
        <span class="film-details__comment-emoji">
          <img src="./images/emoji/${emoji}.png" width="55" height="55" alt="emoji-${emoji}">
        </span>
        <div>
          <p class="film-details__comment-text">${text}</p>
          <p class="film-details__comment-info">
            <span class="film-details__comment-author">${author}</span>
            <span class="film-details__comment-day">${date.getMinutes()}</span>
            <button class="film-details__comment-delete">Delete</button>
          </p>
        </div>
      </li>
    `);
  }).join(`\n`);
};

const createNewCommentMarkup = () => {
  return (
    `<div class="film-details__new-comment">
    <div for="add-emoji" class="film-details__add-emoji-label">
      <img src="images/emoji/smile.png" width="55" height="55" alt="emoji-smile">
    </div>

    <label class="film-details__comment-label">
      <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment">Great movie!</textarea>
    </label>

    <div class="film-details__emoji-list">
      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile" checked="">
      <label class="film-details__emoji-label" for="emoji-smile">
        <img src="./images/emoji/smile.png" width="30" height="30" alt="emoji">
      </label>

      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
      <label class="film-details__emoji-label" for="emoji-sleeping">
        <img src="./images/emoji/sleeping.png" width="30" height="30" alt="emoji">
      </label>

      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-puke" value="puke">
      <label class="film-details__emoji-label" for="emoji-puke">
        <img src="./images/emoji/puke.png" width="30" height="30" alt="emoji">
      </label>

      <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-angry" value="angry">
      <label class="film-details__emoji-label" for="emoji-angry">
        <img src="./images/emoji/angry.png" width="30" height="30" alt="emoji">
      </label>
    </div>
  </div>`
  );
};

const createFilmDetailsPopupTemplate = (film) => {
  const {comments} = film;
  const filmDetailsMarkup = createFilmDetailsMarkup(film);
  const filmConrolsMarkup = createFilmControlsMarkup(film);
  const commentsMarkup = createCommentsMarkup(comments);
  const newCommentMarkup = createNewCommentMarkup();
  return (
    `<section class="film-details">
       <form class="film-details__inner" action="" method="get">
         <div class="form-details__top-container">
           <div class="film-details__close">
             <button class="film-details__close-btn" type="button">close</button>
           </div>
           ${filmDetailsMarkup}
           ${filmConrolsMarkup}
         </div>
         <div class="form-details__bottom-container">
           <section class="film-details__comments-wrap">
             <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${comments.length}</span></h3>
             <ul class="film-details__comments-list">
                ${commentsMarkup}
             </ul>
            ${newCommentMarkup}
           </section>
         </div>
       </form>
    </section>`
  );
};

export default class FilmDetailsPopup {
  constructor(film) {
    this._film = film;

    this._element = null;
  }

  getTemplate() {
    return createFilmDetailsPopupTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
