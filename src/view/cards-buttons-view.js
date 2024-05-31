import AbstractView from '../utils/abstract-view.js';

function createButtonsTemplate() {
  return(
    `<div>
        <button class="previous-card">Назад</button>
        <a href="choice.html"><button class="to-choise">Создать расписание</button></a>
    </div>`
    );
}

export default class CardButtonsView extends AbstractView {
    #onPrevButtonClick = null;

    // constructor(onPrevButtonClick) {
    //     super();
    //     this.#onPrevButtonClick = onPrevButtonClick;

    //     this.element.querySelector('.previous-card')
    //         .addEventListener('click', this.#prevButtonClickHandler);
    // }

    get template() {
        return createButtonsTemplate();
    }

    // #prevButtonClickHandler = (evt) => {
    //     evt.preventDefault();
    //     this.#onPrevButtonClick();
    // };
}
