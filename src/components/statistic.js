import AbstractComponent from './abstract-component';
import {MINUTES_IN_HOUR} from '../utils/consts';

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
    const hours = parseInt(duration / MINUTES_IN_HOUR, 10);
    const minutes = duration % MINUTES_IN_HOUR;
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

export default class Statistic extends AbstractComponent {
  constructor(films) {
    super();

    this._films = films;
  }

  getTemplate() {
    return createStatisticTemplate(this._films);
  }
}
