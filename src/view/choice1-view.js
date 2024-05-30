import AbstractView from '../utils/abstract-view.js';
import { Choices } from '../const.js';

function createChoiceTemplate() {
  return (
    `<div class="tests">
      <h1>примечание</h1>
      <p>Данный раздел создан для автоматизации выбора вашей индивидуальной образовательной траектории. Перед началом работы в сервисе озакомьтесь с описаниями курсов. 
        Просим обратить ваше внимание на то, что в связи с разнообразием занятости преподавателей, доступности аудиторий и других факторов, не всегда удается составить расписание точно в соответствии с вашими пожеланиями.
      </p>
      <div class="tests-content">
        <form>
            <div class="tests-title">Выберите в какой половине дня вам бы хотелось посещать пары</div>
            <label>В первой половине дня<input type="radio" name="time" value="1"></label>
            <label>Во второй половине дня<input type="radio" name="time" value="2"></label>
        </form>
      </div>
      <button class="next-choice" disabled>Далее</button>
    </div>`
  )
}

export default class Choice1View extends AbstractView {
  #onNextButtonClick = null;
  #currentChoice = Choices.CHOISE1;
  #checkedInputs = [];
  #nextButton = null;

  constructor(onNextButtonClick) {
    super()
    this.#onNextButtonClick = onNextButtonClick;
    this.#nextButton = this.element.querySelector('.next-choice');

    this.#nextButton.addEventListener('click', this.#nextButtonClickHandler);

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
