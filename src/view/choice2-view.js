import AbstractView from "../utils/abstract-view";
import { Choices } from "../const";

function createChoiceTemplate() {
  return (
    `<div class="tests">
        <div class="tests-content">
            <div class="tests-title">Укажите в какие дни недели вам бы хотелось посещать пары</div>
            <form>
                <label>Понедельник<input type="checkbox" name="day" value="Понедельник"></label>
                <label>Вторник<input type="checkbox" name="day" value="Вторник"></label>
                <label>Среда<input type="checkbox" name="day" value="Среда"></label>
                <label>Четверг<input type="checkbox" name="day" value="Четверг"></label>
                <label>Пятница<input type="checkbox" name="day" value="Пятница"></label>
                <label>Суббота<input type="checkbox" name="day" value="Суббота"></label>
            </form>
        </div>
        <button class="previous-choice">Назад</button>
        <button class="next-choice" disabled>Далее</button>
    </div>`
  )
}

export default class Choice2View extends AbstractView {
  #currentChoice = Choices.CHOISE2;

  #onNextButtonClick = null;
  #onPrevButtonClick = null;

  #checkedInputs = [];

  #nextButton = null;

  constructor(onNextButtonClick, onPrevButtonClick) {
    super()
    this.#onNextButtonClick = onNextButtonClick;
    this.#onPrevButtonClick = onPrevButtonClick;
    this.#nextButton = this.element.querySelector('.next-choice');

    this.#nextButton.addEventListener('click', this.#nextButtonClickHandler);

    this.element.querySelector('.previous-choice')
      .addEventListener('click', this.#prevButtonClickHandler);

    this.element.querySelector('form')
    .addEventListener('change', this.#inputHandler);
  }

  get template() {
    return createChoiceTemplate();
  }

  #nextButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onNextButtonClick(this.#currentChoice, this.#checkedInputs);
  };

  #prevButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onPrevButtonClick(this.#currentChoice);
  };

  #inputHandler = (evt) => {
    evt.preventDefault();

    const value = evt.target.value;
    const isChecked = evt.target.checked;

    if (isChecked) {
      this.#checkedInputs.push(value);
    } else {
      this.#checkedInputs = this.#checkedInputs.filter((item) => item !== value);
    }

    this.#nextButton.disabled = this.#checkedInputs.length === 0;
  }
}
