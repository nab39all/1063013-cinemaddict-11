import AbstractComponent from './abstract-component';

const createFilmCardsContainerTemplate = () => {
  return (
    `<div class="films-list__container"></div>`
  );
};

export default class FilmCardContainer extends AbstractComponent {

  getTemplate() {
    return createFilmCardsContainerTemplate();
  }
}
