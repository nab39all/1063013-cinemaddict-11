import AbstractComponent from './abstract-component';

const createFilmListTemplate = () => {
  return (
    `<section class="films">
      <section class="films-list">
        <h2 class="films-list__title visually-hidden">All movies. Upcoming</h2>
      </section>
    </section>`
  );
};

export default class FilmList extends AbstractComponent {

  getTemplate() {
    return createFilmListTemplate();
  }
}
