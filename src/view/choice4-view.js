import AbstractView from "../utils/abstract-view";
import { Choices } from "../const";
import { teachers } from "../mock/teachers";

function createChoiceTemplate(disciplines) {
  return (
    `<div class="tests">
        <div class="tests-content">
            <div class="tests-title">Расставьте приоритет выбора курсов в рамках каждого предмета</div>
            <div class="teachers">
                ${createDesciplineList(disciplines)}
            </div>
        </div>
        <button class="previous-choice">Назад</button>
        <button class="next-choice">Далее</button>
    </div>`
  )
}

function createDesciplineList(disciplines) {
    const desciplineList = disciplines.map((discipline) => (
        createDisciplineItem(discipline))
    ).join('');

    return desciplineList;
}

function createDisciplineItem(discipline) {
    return (
        `<details>
            <summary>
                ${discipline.name}
                <label class="checkbox-label">
                <input class="checkbox-input" type="checkbox" name="lesson" value="${discipline.id}">
                <div class="checkbox-border"></div>
                    <p class="checkbox-title">Важен приоритет преподавателей</p>
                </label>
            </summary>
            ${createTeachersList(discipline)}
        </details>`
    )
}

function createTeachersList(discipline) {
    let teachersList = [];
    const courses = discipline.courses;
    courses.forEach((course) => teachersList.concat(course.teachers));

    const teachersListTemplate = teachers.map((teacher) => (
        createTeacherItem(teacher))
    ).join('');

    return (
        `<ol class="lesson-list">
            ${teachersListTemplate}
        </ol>`
    )
}

function createTeacherItem(teacher) {
    return (
        `<li class="lesson-item" data-value="${teacher.id}">${teacher.name}</li>`
    )
}

export default class Choice4View extends AbstractView {
    #currentChoice = Choices.CHOISE4;

    #onNextButtonClick = null;
    #onPrevButtonClick = null;

    #disciplines = null;

    #nextButton = null;

    #formValue = {}; 

    constructor(onNextButtonClick, onPrevButtonClick, disciplines) {
        super()
        this.#onNextButtonClick = onNextButtonClick;
        this.#onPrevButtonClick = onPrevButtonClick;
        this.#disciplines = disciplines;

        this.#nextButton = this.element.querySelector('.next-choice');

        this.#nextButton.addEventListener('click', this.#nextButtonClickHandler);

        this.element.querySelector('.previous-choice')
            .addEventListener('click', this.#prevButtonClickHandler);
    }

    get template() {
        return createChoiceTemplate(this.#disciplines);
    }

    #nextButtonClickHandler = (evt) => {
        evt.preventDefault();
        const details = this.element.querySelectorAll('details');
        details.forEach((elem) => {
            const discipline = elem.querySelector('input').value;
            const isChecked = elem.querySelector('.checkbox-input').checked;
            let teachers = [];

            if (isChecked){
                teachers = Array.from(elem.querySelectorAll('li'))
                    .map((li) => li.dataset.value);
            }

            this.#formValue[discipline] = teachers;
        });

        this.#onNextButtonClick(this.#currentChoice, this.#formValue);
    };

    #prevButtonClickHandler = (evt) => {
        evt.preventDefault();
        this.#onPrevButtonClick(this.#currentChoice);
    };
}
