import { Cards, CardType } from '../const.js';
import AbstractView from '../utils/abstract-view.js';

function createCardsTemplate(courses, type) {
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
    `<a class="courses__item" href="#" data-value="${course.name}"
      <p>
          ${course.name}
      </p>
    </a>`
  );
}

export default class CardsView extends AbstractView {
  #cardType = null;
  #courses = null;
  #onCardClick = null;

  constructor(cardType, courses, onCardClick = null) {
    super();
    this.#cardType = cardType;
    this.#courses = courses;
    this.#onCardClick = onCardClick;

    this.element.querySelectorAll('.courses__item')
      .forEach((elem) => elem.addEventListener('click', this.#cardClickHandler));
  }

  get template() {
    return createCardsTemplate(this.#courses, this.#cardType);
  }

  #cardClickHandler = (evt) => {
    evt.preventDefault();
    this.#onCardClick(this.#cardType, evt.target.dataset.value);
  };
}
