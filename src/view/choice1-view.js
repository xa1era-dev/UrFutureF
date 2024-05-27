import AbstractView from '../framework/view/abstract-view.js';
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
      <button class="next-choice">Далее</button>
    </div>`
  )
}

export default class Choice1View extends AbstractView {
  #onNextButtonClick = null;
  #currentChoice = Choices.CHOISE1;
  #formValue = null;

  constructor(onNextButtonClick) {
    super()
    this.#onNextButtonClick = onNextButtonClick;

    this.element.querySelector('.next-choise')
      .addEventListener('click', this.#nextButtonClickHandler);
  }

  get template() {
    return createChoiceTemplate();
  }

  #nextButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#formValue = this.element?.querySelector('input[name="time"]:checked').value;
    this.#onNextButtonClick(this.#currentChoice, this.#formValue);
  };
}
