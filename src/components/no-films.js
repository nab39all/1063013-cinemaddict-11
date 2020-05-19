import AbstractComponent from './abstract-component';

const noFilmsTemplate = () => {
  return (
    `<section class="films-list">
      <h2 class="films-list__title">There are no movies in our database</h2>
    </section>`
  );
};

export default class NoFilms extends AbstractComponent {

  getTemplate() {
    return noFilmsTemplate();
  }
}
