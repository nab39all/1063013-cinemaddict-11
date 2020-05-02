/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/film-card-container.js":
/*!***********************************************!*\
  !*** ./src/components/film-card-container.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCardContainer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createFilmCardsContainerTemplate = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

class FilmCardContainer {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmCardsContainerTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/film-card.js":
/*!*************************************!*\
  !*** ./src/components/film-card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmCard; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");



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
        <span class="film-card__duration">${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatDuration"])(duration)}</span>
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

class FilmCard {
  constructor(film) {
    this._film = film;

    this._element = null;
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/film-details-popup.js":
/*!**********************************************!*\
  !*** ./src/components/film-details-popup.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmDetailsPopup; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


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
            <td class="film-details__cell">${Object(_utils__WEBPACK_IMPORTED_MODULE_0__["formatDuration"])(duration)}</td>
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

class FilmDetailsPopup {
  constructor(film) {
    this._film = film;

    this._element = null;
  }

  getTemplate() {
    return createFilmDetailsPopupTemplate(this._film);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/film-list.js":
/*!*************************************!*\
  !*** ./src/components/film-list.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FilmList; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createFilmListTemplate = () => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      </section>
    </section>`
  );
};

class FilmList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/footer-statistic.js":
/*!********************************************!*\
  !*** ./src/components/footer-statistic.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterStatistic; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createFooterStatisticTemplate = (moviesCount) => {
  return (
    `<section class="footer__statistics">
      <p>${moviesCount} movies inside</p>
    </section>`
  );
};

class FooterStatistic {
  constructor(moviesCount) {
    this._moviesCount = moviesCount;

    this._element = null;
  }

  getTemplate() {
    return createFooterStatisticTemplate(this._moviesCount);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/header-profile.js":
/*!******************************************!*\
  !*** ./src/components/header-profile.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderProfile; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createHeaderProfileTemplate = (profileRating) => {
  let userRank = ``;
  if (profileRating <= 0) {
    userRank = ``;
  } else if (profileRating > 1 && profileRating <= 10) {
    userRank = `novice`;
  } else if (profileRating > 10 && profileRating <= 20) {
    userRank = `fan`;
  } else {
    userRank = `movie buff`;
  }
  return (
    `<section class="header__profile profile">
      <p class="profile__rating">${userRank}</p>
      <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
    </section>`
  );
};

class HeaderProfile {
  constructor(profileRating) {
    this._profileRating = profileRating;

    this._element = null;
  }

  getTemplate() {
    return createHeaderProfileTemplate(this._profileRating);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/main-menu.js":
/*!*************************************!*\
  !*** ./src/components/main-menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainMenu; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createMainMenuTemplate = (watchStats) => {
  const {watchlist, history, favorites} = watchStats;
  return (
    `<nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
        <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${watchlist}</span></a>
        <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${history}</span></a>
        <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${favorites}</span></a>
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`
  );
};

class MainMenu {
  constructor(watchStats) {
    this._watchStats = watchStats;

    this._element = null;
  }

  getTemplate() {
    return createMainMenuTemplate(this._watchStats);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/show-more-btn.js":
/*!*****************************************!*\
  !*** ./src/components/show-more-btn.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShowMoreBtn; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createShowMoreBtnTemplate = () => {
  return (
    `<button class="films-list__show-more">Show more</button>`
  );
};

class ShowMoreBtn {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createShowMoreBtnTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/sort.js":
/*!********************************!*\
  !*** ./src/components/sort.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sort; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


const createSortTemplate = () => {
  return (
    `<ul class="sort">
      <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
      <li><a href="#" class="sort__button">Sort by date</a></li>
      <li><a href="#" class="sort__button">Sort by rating</a></li>
    </ul>`
  );
};

class Sort {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/statistic.js":
/*!*************************************!*\
  !*** ./src/components/statistic.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Statistic; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts */ "./src/consts.js");



const createRankMarkup = (profileRating) => {
  let userRank = ``;
  if (profileRating <= 0) {
    return ``;
  } else if (profileRating > 1 && profileRating <= 10) {
    userRank = `novice`;
  } else if (profileRating > 10 && profileRating <= 20) {
    userRank = `fan`;
  } else {
    userRank = `movie buff`;
  }
  return (
    `<p class="statistic__rank">
      Your rank
      <img class="statistic__img" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
      <span class="statistic__rank-label">${userRank}</span>
    </p>`
  );
};

const createStatisticTemplate = (films) => {
  const watchedFilmsCount = films.reduce((count, film) => film.isWatched ? count + 1 : count, 0);
  const rankMarkup = createRankMarkup(watchedFilmsCount);
  const getTotalDuration = () => {
    let result = {};
    let duration = 0;
    films.forEach((film) => {
      duration = duration + film.duration;
    });
    const hours = parseInt(duration / _consts__WEBPACK_IMPORTED_MODULE_1__["MINUTES_IN_HOUR"], 10);
    const minutes = duration % _consts__WEBPACK_IMPORTED_MODULE_1__["MINUTES_IN_HOUR"];
    result = {
      hours,
      minutes
    };
    return result;
  };
  const totalDuration = getTotalDuration();
  // const getTopGanre = () => {
  //   const watchedFilms = [];
  //   for (const film of films) {
  //     if (film.isWatched) {
  //       watchedFilms.push(film);
  //     }
  //   }
  //   console.log(watchedFilms);
  // };
  // getTopGanre()

  return (
    `<section class="statistic">
      ${rankMarkup}
    <form action="https://echo.htmlacademy.ru/" method="get" class="statistic__filters">
      <p class="statistic__filters-description">Show stats:</p>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-all-time" value="all-time" checked>
      <label for="statistic-all-time" class="statistic__filters-label">All time</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-today" value="today">
      <label for="statistic-today" class="statistic__filters-label">Today</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-week" value="week">
      <label for="statistic-week" class="statistic__filters-label">Week</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-month" value="month">
      <label for="statistic-month" class="statistic__filters-label">Month</label>

      <input type="radio" class="statistic__filters-input visually-hidden" name="statistic-filter" id="statistic-year" value="year">
      <label for="statistic-year" class="statistic__filters-label">Year</label>
    </form>

    <ul class="statistic__text-list">
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">You watched</h4>
        <p class="statistic__item-text">${watchedFilmsCount} <span class="statistic__item-description">movies</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Total duration</h4>
        <p class="statistic__item-text">${totalDuration.hours}<span class="statistic__item-description">h</span> ${totalDuration.minutes} <span class="statistic__item-description">m</span></p>
      </li>
      <li class="statistic__text-item">
        <h4 class="statistic__item-title">Top genre</h4>
        <p class="statistic__item-text">Sci-Fi</p>
      </li>
    </ul>

    <div class="statistic__chart-wrap">
      <canvas class="statistic__chart" width="1000"></canvas>
    </div>

  </section>`
  );
};

class Statistic {
  constructor(films) {
    this._films = films;

    this._element = null;
  }

  getTemplate() {
    return createStatisticTemplate(this._films);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/*! exports provided: GENRES, DUMMY_TEXTS, POSTERS, TITLES, SMILES, MONTH_NAMES, MINUTES_IN_HOUR, HOURS_IN_DAY, DAYS_IN_MONTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENRES", function() { return GENRES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DUMMY_TEXTS", function() { return DUMMY_TEXTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSTERS", function() { return POSTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TITLES", function() { return TITLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMILES", function() { return SMILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH_NAMES", function() { return MONTH_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MINUTES_IN_HOUR", function() { return MINUTES_IN_HOUR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOURS_IN_DAY", function() { return HOURS_IN_DAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS_IN_MONTH", function() { return DAYS_IN_MONTH; });
const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

const DUMMY_TEXTS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`,
];

const MINUTES_IN_HOUR = 60;

const HOURS_IN_DAY = 24;

const DAYS_IN_MONTH = 30;

const GENRES = [`Action`, `Adventure`, `Animation`, `Biography`, `Comedy`, `Crime`, `Drama`, `Family`, `Fantasy`];
const POSTERS = [`made-for-each-other.png`, `popeye-meets-sinbad.png`,
  `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`,
  `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];
const TITLES = [`Made for each other`, `Popeye meets Sinbad`, `Sagenbrush trail`,
  `Santa Claus conquers the Martians`, `The dance of life`,
  `The great Flamarion`, `The man with the golden arm`];

const SMILES = [`angry.png`, `puke.png`, `sleeping.png`, `smile.png`];




/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_header_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header-profile */ "./src/components/header-profile.js");
/* harmony import */ var _components_main_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main-menu */ "./src/components/main-menu.js");
/* harmony import */ var _components_statistic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/statistic */ "./src/components/statistic.js");
/* harmony import */ var _components_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sort */ "./src/components/sort.js");
/* harmony import */ var _components_film_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/film-card */ "./src/components/film-card.js");
/* harmony import */ var _components_show_more_btn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/show-more-btn */ "./src/components/show-more-btn.js");
/* harmony import */ var _components_film_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/film-list */ "./src/components/film-list.js");
/* harmony import */ var _components_film_card_container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/film-card-container */ "./src/components/film-card-container.js");
/* harmony import */ var _components_footer_statistic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer-statistic */ "./src/components/footer-statistic.js");
/* harmony import */ var _components_film_details_popup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/film-details-popup */ "./src/components/film-details-popup.js");
/* harmony import */ var _mock_film_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mock/film-card */ "./src/mock/film-card.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
















const CARDS_COUNT = 23;
const SHOWING_CARDS_COUNT_ON_START = 5;
const SHOWING_CARDS_COUNT_BY_BUTTON = 5;

const filmCards = Object(_mock_film_card__WEBPACK_IMPORTED_MODULE_10__["generateFilmCards"])(CARDS_COUNT);

const siteMain = document.querySelector(`.main`);

const renderHeader = () => {
  const siteHeader = document.querySelector(`.header`);

  const profileRating = filmCards.reduce((count, film) => film.isWatched ? count + 1 : count, 0);
  Object(_utils__WEBPACK_IMPORTED_MODULE_11__["render"])(siteHeader, new _components_header_profile__WEBPACK_IMPORTED_MODULE_0__["default"](profileRating).getElement(), _utils__WEBPACK_IMPORTED_MODULE_11__["RenderPosition"].BEFOREEND);
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
  Object(_utils__WEBPACK_IMPORTED_MODULE_11__["render"])(siteMain, new _components_main_menu__WEBPACK_IMPORTED_MODULE_1__["default"](watchStats).getElement(), _utils__WEBPACK_IMPORTED_MODULE_11__["RenderPosition"].BEFOREEND);
};
renderMainMenu();

const renderStatistic = (films) => {
  const mainMenu = siteMain.querySelector(`.main-navigation`);

  Object(_utils__WEBPACK_IMPORTED_MODULE_11__["render"])(mainMenu, new _components_statistic__WEBPACK_IMPORTED_MODULE_2__["default"](films).getElement(), _utils__WEBPACK_IMPORTED_MODULE_11__["RenderPosition"].AFTEREND);
};
renderStatistic(filmCards);

Object(_utils__WEBPACK_IMPORTED_MODULE_11__["render"])(siteMain, new _components_sort__WEBPACK_IMPORTED_MODULE_3__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_11__["RenderPosition"].BEFOREEND);
Object(_utils__WEBPACK_IMPORTED_MODULE_11__["render"])(siteMain, new _components_film_list__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_11__["RenderPosition"].BEFOREEND);
const siteFooter = document.querySelector(`.footer`);
Object(_utils__WEBPACK_IMPORTED_MODULE_11__["render"])(siteFooter, new _components_footer_statistic__WEBPACK_IMPORTED_MODULE_8__["default"](filmCards.length).getElement(), _utils__WEBPACK_IMPORTED_MODULE_11__["RenderPosition"].BEFOREEND);


const renderFilmCard = (filmListElement, film) => {

  const onFilmCardClick = () => {
    Object(_utils__WEBPACK_IMPORTED_MODULE_11__["render"])(siteFooter, filmDetailsPopupComponent.getElement(), _utils__WEBPACK_IMPORTED_MODULE_11__["RenderPosition"].AFTEREND);
  };

  const onCloseButtonClick = () => {
    document.querySelector(`body`).removeChild(filmDetailsPopupComponent.getElement());
  };

  const filmComponent = new _components_film_card__WEBPACK_IMPORTED_MODULE_4__["default"](film);
  const filmCardPosterElement = filmComponent.getElement().querySelector(`.film-card__poster`);
  const filmTitleElement = filmComponent.getElement().querySelector(`.film-card__title`);
  const filmCommentsElement = filmComponent.getElement().querySelector(`.film-card__comments`);

  filmCardPosterElement.addEventListener(`click`, onFilmCardClick);
  filmTitleElement.addEventListener(`click`, onFilmCardClick);
  filmCommentsElement.addEventListener(`click`, onFilmCardClick);

  const filmDetailsPopupComponent = new _components_film_details_popup__WEBPACK_IMPORTED_MODULE_9__["default"](film);
  const closePopupButton = filmDetailsPopupComponent.getElement().querySelector(`.film-details .film-details__close-btn`);

  closePopupButton.addEventListener(`click`, onCloseButtonClick);

  Object(_utils__WEBPACK_IMPORTED_MODULE_11__["render"])(filmListElement, filmComponent.getElement(), _utils__WEBPACK_IMPORTED_MODULE_11__["RenderPosition"].BEFOREEND);
};

const renderFilmsLists = (filmsComponent, films) => {
  Object(_utils__WEBPACK_IMPORTED_MODULE_11__["render"])(filmsComponent.getElement(), new _components_film_list__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_11__["RenderPosition"].BEFOREEND);

  const filmListElement = siteMain.querySelector(`.films-list`);
  Object(_utils__WEBPACK_IMPORTED_MODULE_11__["render"])(filmListElement, new _components_film_card_container__WEBPACK_IMPORTED_MODULE_7__["default"]().getElement(), _utils__WEBPACK_IMPORTED_MODULE_11__["RenderPosition"].BEFOREEND);
  const mainFilmsListContainer = filmListElement.querySelector(`.films-list__container`);

  let showingFilmsCount = SHOWING_CARDS_COUNT_ON_START;

  films
    .slice(0, showingFilmsCount)
    .forEach((film) => {
      renderFilmCard(mainFilmsListContainer, film);
    });


  Object(_utils__WEBPACK_IMPORTED_MODULE_11__["render"])(filmListElement, new _components_show_more_btn__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement(), `beforeend`);

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

const filmsComponent = new _components_film_card_container__WEBPACK_IMPORTED_MODULE_7__["default"]();

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



/***/ }),

/***/ "./src/mock/comment.js":
/*!*****************************!*\
  !*** ./src/mock/comment.js ***!
  \*****************************/
/*! exports provided: generateComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateComments", function() { return generateComments; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../consts */ "./src/consts.js");



const COMMENT_AUTHORS = [`Jonh Doe`, `Bob Dode`, `Eman North`, `Hooly Gun`, `Scan Done`, `Tom Banle`, `Jakob Mitov`];
const EMOJIS = [`angry`, `puke`, `sleeping`, `smile`];
const Comment = {
  YEAR_MIN: 2014,
  YEAR_MAX: 2020
};

const generateComment = () => {
  return {
    emoji: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomItem"])(EMOJIS),
    text: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomItem"])(_consts__WEBPACK_IMPORTED_MODULE_1__["DUMMY_TEXTS"]),
    author: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomItem"])(COMMENT_AUTHORS),
    date: Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getRandomDate"])(Comment.YEAR_MIN, Comment.YEAR_MAX)
  };
};

const generateComments = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateComment);
};




/***/ }),

/***/ "./src/mock/film-card.js":
/*!*******************************!*\
  !*** ./src/mock/film-card.js ***!
  \*******************************/
/*! exports provided: generateFilmCard, generateFilmCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmCard", function() { return generateFilmCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilmCards", function() { return generateFilmCards; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ "./src/consts.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comment */ "./src/mock/comment.js");





const Film = {
  RELEASE_YEAR_MIN: 1960,
  RELEASE_YEAR_MAX: 2020,
  COMMENTS_MIN: 0,
  COMMENTS_MAX: 5,
  DESCRIPTION_SENTENCES_MIN: 1,
  DESCRIPTION_SENTENCES_MAX: 5,
  GENRES_MIN: 1,
  GENRES_MAX: 4,
  ACTORS_MIN: 2,
  ACTORS_MAX: 5,
  DURATION_MIN: 30,
  DURATION_MAX: 180,
  RATING_MIN: 1,
  RATING_MAX: 10,
  WRITERS_MIN: 1,
  WRITERS_MAX: 3,
  AGE_MIN: 0,
  AGE_MAX: 21
};

const getRandomDescription = (description) => {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomArray"])(description, Film.DESCRIPTION_SENTENCES_MIN, Film.DESCRIPTION_SENTENCES_MAX).join(` `);
};

const getRandomRating = () => {
  const randomNumber = (Film.RATING_MIN + Math.random() * (Film.RATING_MAX - Film.RATING_MIN)) * 10;
  const rating = Math.round(randomNumber) / 10;
  return rating;
};

const getCommentsCount = () => {
  return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomIntegerNumber"])(Film.COMMENTS_MIN, Film.COMMENTS_MAX);
};
const directors = [`Woody Allen`, `Pedro Almodóvar`, `Rick Alverson`, `Robert Altman`];
const writers = [`Jane Austen`, `William Blake`, `Geoffrey Chaucer`, `Charles Dickens `, `John Donne`];
const actors = [`Akshay Kumar`, `Shah Rukh Khan`, `Amitabh Bachchan`];
const countries = [`China`, `USA`, `Germany`, `Russia`, `Poland`];

const generateFilmCard = () => {

  return {
    poster: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(_consts__WEBPACK_IMPORTED_MODULE_0__["POSTERS"]),
    age: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomIntegerNumber"])(Film.AGE_MIN, Film.AGE_MAX),
    title: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(_consts__WEBPACK_IMPORTED_MODULE_0__["TITLES"]),
    originalTitle: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(_consts__WEBPACK_IMPORTED_MODULE_0__["TITLES"]),
    rating: getRandomRating(),
    duration: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomIntegerNumber"])(Film.DURATION_MIN, Film.DURATION_MAX),
    genres: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomItems"])(_consts__WEBPACK_IMPORTED_MODULE_0__["GENRES"]),
    description: getRandomDescription(_consts__WEBPACK_IMPORTED_MODULE_0__["DUMMY_TEXTS"]),
    director: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(directors),
    writers: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomItems"])(writers),
    actors: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomItems"])(actors),
    comments: Object(_comment__WEBPACK_IMPORTED_MODULE_2__["generateComments"])(getCommentsCount()),
    release: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomDate"])(Film.RELEASE_YEAR_MIN, Film.RELEASE_YEAR_MAX),
    country: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomItem"])(countries),
    isInWatchList: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBoolean"])(),
    isWatched: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBoolean"])(),
    isFavorite: Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getRandomBoolean"])(),
  };
};

const generateFilmCards = (count) => {
  return new Array(count)
  .fill(``)
  .map(generateFilmCard);
};





/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: createElement, formatDuration, getRandomIntegerNumber, getRandomBoolean, getRandomItem, getRandomItems, getRandomDate, getShuffledArray, getRandomArray, RenderPosition, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDuration", function() { return formatDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntegerNumber", function() { return getRandomIntegerNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBoolean", function() { return getRandomBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomItem", function() { return getRandomItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomItems", function() { return getRandomItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomDate", function() { return getRandomDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getShuffledArray", function() { return getShuffledArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArray", function() { return getRandomArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ "./src/consts.js");


const formatDuration = (duration) => {
  const hours = parseInt(duration / _consts__WEBPACK_IMPORTED_MODULE_0__["MINUTES_IN_HOUR"], 10);
  const minutes = duration % _consts__WEBPACK_IMPORTED_MODULE_0__["MINUTES_IN_HOUR"];
  return `${hours}h ${minutes}m`;
};

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomItems = (arr) => {
  let result = [];
  const randomValue = (() => {
    return Math.ceil(Math.random() * arr.length);
  })();
  for (let k = 0; k < arr.length; k++) {
    if (!Math.round(Math.random())) {
      result.push(arr[k]);
    }
    if (result.length >= randomValue) {
      break;
    }
  }
  return result;
};

const getRandomBoolean = () => {
  return Math.random() > 0.5;
};

const getRandomDate = (minYear, maxYear) => {
  const date = new Date(
      getRandomIntegerNumber(minYear, maxYear),
      getRandomIntegerNumber(0, _consts__WEBPACK_IMPORTED_MODULE_0__["MONTH_NAMES"].length),
      getRandomIntegerNumber(0, _consts__WEBPACK_IMPORTED_MODULE_0__["DAYS_IN_MONTH"]),
      getRandomIntegerNumber(0, _consts__WEBPACK_IMPORTED_MODULE_0__["HOURS_IN_DAY"]),
      getRandomIntegerNumber(0, _consts__WEBPACK_IMPORTED_MODULE_0__["MINUTES_IN_HOUR"])
  );
  return date;
};

const getShuffledArray = (array) => {
  let j;
  let temp;
  for (let i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
};

const getRandomArray = (array, minLength, maxLength) => {
  return getShuffledArray(array)
  .slice(0, getRandomIntegerNumber(minLength, maxLength));
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`,
  AFTEREND: `after`
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
  }
};




/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map