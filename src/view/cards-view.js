import { Cards } from '../const.js';
import AbstractView from '../utils/abstract-view.js';

function createCardsTemplate(type, courses) {
  return(
    `<div class="courses">
      ${createSelectTemplate(type)}
      <div class="courses__items">
        ${createCardListTemplate(courses)}
      </div>
    </div>`
  );
}

function createSelectTemplate(type) {
  const optionsList = Cards[type].select.map((title) => (
    createOptionTemplate(title))
  ).join('');
  return (
    `<select name="itc-select__dropdown" id="itc-select__dropdown" class="itc-select__dropdown">
      ${optionsList}
    </select>`
  );
}

function createOptionTemplate(title) {
  return(
    `<option class="itc-select__option" value="${title}"}>${title}</option>`
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
      style="background: linear-gradient(90deg, #d3d7d6 0%, #d3d7d6 25.52%, rgba(211, 215, 214, 0.79) 57.31%, rgba(211, 215, 214, 0) 100%), url('${course.img}');
      <p>
          ${course.name}
      </p>
    </a>`
  );
}

export default class CardsView extends AbstractView {
  #cardType = null;
  #courses = null;

  constructor(cardType, courses) {
    super();
    this.#cardType = cardType;
    this.#courses = courses;
  }

  get template() {
    return createCardsTemplate(this.#cardType, this.#courses);
  }
}
