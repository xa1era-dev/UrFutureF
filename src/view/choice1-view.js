import AbstractView from '../framework/view/abstract-view.js';

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
            <label>В первой половине дня<input type="checkbox" name="time" value="В первой половине дня"></label>
            <label>Во второй половине дня<input type="checkbox" name="time" value="Во второй половине дня"></label>
        </form>
      </div>
      <button>Далее</button>
    </div>`
  )
}

export default class Choice1View extends AbstractView {

  get template() {
    return createChoiceTemplate();
  }
}
