import { Cards } from '../const.js';
import AbstractView from '../utils/abstract-view.js';

function createCardsTemplate(courses) {
  return(
    `<div class="courses__items">
      ${createCardListTemplate(courses)}
    </div>`
  );
}

function createCardListTemplate(courses) {
  const cardList = courses.map((course) => (
    createCardListItemTemplate(course))
  ).join('');

  return cardList;
}

function createCardListItemTemplate(course) {
  return(
    `<a class="courses__item" href="#"
      <p>
          ${course.name}
      </p>
    </a>`
  );
}

export default class CardsView extends AbstractView {
  #courses = null;

  constructor(courses) {
    super();
    this.#courses = courses;
  }

  get template() {
    return createCardsTemplate(this.#courses);
  }
}
