import { Cards } from '../const.js';
import AbstractView from '../utils/abstract-view.js';

function createCardsSelectTemplate(type) {
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

export default class CardsSelectView extends AbstractView {
  #cardType = null;
  #selectChangeHandler = null;

  constructor(cardType, selectChangeHandler) {
    super();
    this.#cardType = cardType;
    this.#selectChangeHandler = selectChangeHandler;

    this.element.addEventListener('change', this.#handlerSelectChange);
  }

  get template() {
    return createCardsSelectTemplate(this.#cardType);
  }

  #handlerSelectChange = (evt) => {
    evt.preventDefault();
    this.#selectChangeHandler(this.#cardType, evt.target.value);
  };
}
