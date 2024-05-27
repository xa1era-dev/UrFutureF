import { Cards } from '../constants.js';
import AbstractView from '../framework/view/abstract-view.js';

function createCardsTemplate(type) {
  return(
    `<div class="courses">
      ${createTitleTemplate(Cards[type].title)}
      ${createSelectTemplate(type)}
      ${createCardListTemplate(type)}
    </div>`
  );
}

function createTitleTemplate(title) {
  return (
    `<div class="title">
      ${title}
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

function createCardListTemplate(type) {
  const cardList = Cards[type].names.map((name) => (
    createCardListItemTemplate(name))
  ).join('');

  return (
    `<div class="courses__items">
      ${cardList}
    </div>`
  );
}

function createCardListItemTemplate(title) {
  return(
    `<a class="courses__item" href="#"
      <p>
          ${title}
      </p>
    </a>`
  );
}

export default class CardsView extends AbstractView {
  #cardType = null;

  constructor(cardType) {
    super();
    this.#cardType = cardType;
  }

  get template() {
    return createCardsTemplate(this.#cardType);
  }
}
