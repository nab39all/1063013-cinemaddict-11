'use strict';
const CARDS_COUNT = 5; // кол-во отрисованых карточек
// const CARDS_COUNT_EXTRA = 2; // кол-во карточек в блоках «Top rated» и «Most commented»
// const CONTAINERS_COUNT_EXTRA = 2; // кол-во контейнеров с карточками

const createHeaderProfileTemplate = () => {
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">#PROFILE RAITING</p>
      <img class="profile__avatar" src="#" alt="Avatar" width="35" height="35">
    </section>`
  );
};

const createMainMenuTemplate = () => {
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">13</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">4</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">8</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

const createFilmCardTemplate = () => {
  return (
    `<article class="film-card">
      <h3 class="film-card__title">#FILM TITLE</h3>
      <p class="film-card__rating">#FILM RATING</p>
      <p class="film-card__info">
        <span class="film-card__year">#YEAR</span>
        <span class="film-card__duration">#DURATION</span>
        <span class="film-card__genre">#GENRE</span>
      </p>
      <img src="#" alt="#" class="film-card__poster">
      <p class="film-card__description">#DESCRIPTION</p>
      <a class="film-card__comments">#COMMENTS</a>
      <form class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
      </form>
    </article>`
  );
};

const createShowMoreBtnTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

const createFilmDetailsPopUpTemplate = () => {
  return (
    `<section class="film-details">
      <form class="film-details__inner" action="" method="get">
        <div class="form-details__top-container">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="#" alt="">

              <p class="film-details__age">#AGE</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">#TITLE</h3>
                  <p class="film-details__title-original">#ORIGINAL TITLE</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">#RATING</p>
                </div>
              </div>

              <table class="film-details__table">
                <tr class="film-details__row">
                  <td class="film-details__term">#AUTHORS</td>
                  <td class="film-details__cell">#AUTHORS</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">#WRITERS</td>
                  <td class="film-details__cell">#WRITERS</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">#ACTORS</td>
                  <td class="film-details__cell">#ACTORS</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">#RELISE</td>
                  <td class="film-details__cell">#RELISE</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">#RUNTIME</td>
                  <td class="film-details__cell">#RUNTIME</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">#COUNTRY</td>
                  <td class="film-details__cell">#COUNTRY</td>
                </tr>
                <tr class="film-details__row">
                  <td class="film-details__term">#GENRES</td>
                  <td class="film-details__cell">
                    <span class="film-details__genre">#GENRE</span>
                    <span class="film-details__genre">#GENRE</span>
                    <span class="film-details__genre">#GENRE</span></td>
                </tr>
              </table>

              <p class="film-details__film-description">
                #FILM DESCRIPTION
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched">
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>
        </div>

        <div class="form-details__bottom-container">
          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">#COMMENTS COUNT</span></h3>

            <ul class="film-details__comments-list">
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">
                  <img src="#" width="55" height="55" alt="emoji-smile">
                </span>
                <div>
                  <p class="film-details__comment-text">#COMMENT TEXT</p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author">#COMMENT AUTHOR</span>
                    <span class="film-details__comment-day">#COMMENT DAY</span>
                    <button class="film-details__comment-delete">Delete</button>
                  </p>
                </div>
              </li>
            </ul>

            <div class="film-details__new-comment">
              <div for="add-emoji" class="film-details__add-emoji-label"></div>

              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="Select reaction below and write comment here" name="comment"></textarea>
              </label>

              <div class="film-details__emoji-list">
                <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-smile" value="smile">
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
            </div>
          </section>
        </div>
      </form>
    </section>`
  );
};

const createFilmListTemplate = () => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      </section>
    </section>`
  );
};

// const createExtraFilmListTemplate = () => {
//   return (
//     `<section class="films-list--extra">
//       <h2 class="films-list__title">#TITLE</h2>
//     </section>`
//   );
// };

const createFilmCardsContainerTemplate = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMain = document.querySelector(`.main`);
const siteHeader = document.querySelector(`.header`);

render(siteHeader, createHeaderProfileTemplate(), `beforeend`);
render(siteMain, createMainMenuTemplate(), `beforeend`);

render(siteMain, createFilmListTemplate(), `beforeend`);
const filmsList = siteMain.querySelector(`.films-list`);
render(filmsList, createFilmCardsContainerTemplate(), `beforeend`);
const mainFilmsListContainer = filmsList.querySelector(`.films-list__container`);
for (let i = 0; i < CARDS_COUNT; i++) {
  render(mainFilmsListContainer, createFilmCardTemplate(), `beforeend`);
}
render(filmsList, createShowMoreBtnTemplate(), `beforeend`);
// const filmsContainer = siteMain.querySelector(`.films`);
// for (let i = 0; i < CONTAINERS_COUNT_EXTRA; i++) {
//   render(filmsContainer, createExtraFilmListTemplate(), `beforeend`);
// }
// const filmsListExtra = filmsContainer.querySelectorAll(`.films-list--extra`);
// render(filmsListExtra, createFilmCardsContainerTemplate(), `beforeend`);
// const filmsListExtraContainer = filmsListExtra.querySelector(`.films-list__container`);
// for (let i = 0; i < CARDS_COUNT_EXTRA; i++) {
//   render(filmsListExtraContainer, createFilmCardTemplate(), `beforeend`);
// }

render(siteMain, createFilmDetailsPopUpTemplate(), `beforeend`);
