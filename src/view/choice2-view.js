import AbstractView from '../framework/view/abstract-view.js';

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
        <button class="next-choice">Далее</button>
    </div>`
  )
}

export default class Choice2View extends AbstractView {

  get template() {
    return createChoiceTemplate();
  }
}
