import AbstractView from "../utils/abstract-view";
import { Choices } from "../const";

function createChoiceTemplate(disciplines) {
  return (
    `<div class="tests">
        <div class="tests-content">
            <div class="tests-title">Расставьте приоритет выбора курсов в рамках каждого предмета</div>
            <div class="disciplines">
                ${createDesciplineList(disciplines)}
            </div>
        </div>
        <button class="previous-choice">Назад</button>
        <button class="next-choice" disabled>Далее</button>
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
        <summary><label>${discipline.name}<input type="checkbox" name="discipline" value="${discipline.id}" disabled></label></summary>
            ${createCoursesList(discipline.courses)}
        </details>`
    )
}

function createCoursesList(courses) {
    const courseList = courses.map((course) => (
        createCoursesItem(course))
    ).join('');

    return (
        `<ol class="lesson-list">
            ${courseList}
        </ol>`
    )
}

function createCoursesItem(course) {
    return (
        `<li class="lesson-item" data-value="${course.id}">${course.name}</li>`
    )
}

export default class Choice3View extends AbstractView {
    #currentChoice = Choices.CHOISE3;

    #onNextButtonClick = null;
    #onPrevButtonClick = null;

    #disciplines = null;
    #coursesModel = null;

    #nextButton = null;

    #formValue = {}; 

    constructor(onNextButtonClick, onPrevButtonClick, disciplines, coursesModel) {
        super()
        this.#onNextButtonClick = onNextButtonClick;
        this.#onPrevButtonClick = onPrevButtonClick;
        this.#disciplines = disciplines;
        this.#coursesModel = coursesModel;

        this.#nextButton = this.element.querySelector('.next-choice');

        this.#nextButton.addEventListener('click', this.#nextButtonClickHandler);

        this.element.querySelector('.previous-choice')
            .addEventListener('click', this.#prevButtonClickHandler);

        this.element.querySelectorAll('summary')
            .forEach((elem) => elem.addEventListener('click', this.#summaryClickHandler))
    }

    get template() {
        return createChoiceTemplate(this.#disciplines);
    }

    #nextButtonClickHandler = (evt) => {
        evt.preventDefault();
        const details = this.element.querySelectorAll('details');
        details.forEach((elem) => {
            const discipline = elem.querySelector('input').value;
            const courses = Array.from(elem.querySelectorAll('li'))
                .map((li) => li.dataset.value);
            this.#formValue[discipline] = courses;
        });
        this.#onNextButtonClick(this.#currentChoice, this.#formValue);
    };

    #prevButtonClickHandler = (evt) => {
        evt.preventDefault();
        this.#onPrevButtonClick(this.#currentChoice);
    };

    #summaryClickHandler = (evt) => {
        const discipline = evt.target.querySelector('input');
        if (!discipline.checked) {
            discipline.checked = true;
            this.#formValue[discipline.value] = []; 
        }

        if (Object.keys(this.#formValue).length === this.#disciplines.length) {
            this.#nextButton.disabled = false;
        }
    };
}
