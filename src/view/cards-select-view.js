import { Cards } from '../const.js';
import AbstractView from '../utils/abstract-view.js';

function createCardsSelectTemplate(type, options) {
  const optionsList = 
    options === null ? Cards[type].select : 
    options.map((elem) => elem.name || elem);
  const placeholder = Cards[type].placeholder;
  const optionsListTemplate = optionsList.map((title) => (
      createOptionTemplate(title))
  ).join('');
    
  return (
      `<select name="itc-select__dropdown" id="itc-select__dropdown" class="itc-select__dropdown">
        ${placeholder ? `<option class="itc-select__option" value="${placeholder}"}>${placeholder}</option>` : ''}
        ${optionsListTemplate}
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
  #options = null;

  constructor(cardType, selectChangeHandler, options = null) {
    super();
    this.#cardType = cardType;
    this.#selectChangeHandler = selectChangeHandler;
    this.#options= options;

    this.element.addEventListener('change', this.#handlerSelectChange);
  }

  get template() {
    return createCardsSelectTemplate(this.#cardType, this.#options);
  }

  #handlerSelectChange = (evt) => {
    evt.preventDefault();
    this.#selectChangeHandler(this.#cardType, evt.target.value);
  };
}
