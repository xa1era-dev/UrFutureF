import AbstractView from '../framework/view/abstract-view.js';

function createChoiceTemplate() {
  return (
    `<div class="tests">
        <div class="tests-content">
            <div class="tests-title">Расставьте приоритет выбора курсов в рамках каждого предмета</div>
            <div class="disciplines">
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

function createDisciplineItem() {
    return (
        `<details>
        <summary><label>${discipline.name}<input type="checkbox" name="discipline" disabled></label></summary>
            ${createCoursesList(courses)}
        </details>`
    )
}

function createCoursesList(courses) {
    const courseList = courses.map((course) => (
        createCoursesItem(course.name))
    ).join('');

    return (
        `<ol class="lesson-list">
            ${courseList}
        </ol>`
    )
}

function createCoursesItem(name) {
    return (
        `<li class="lesson-item">${name}</li>`
    )
}

export default class Choice3View extends AbstractView {

  get template() {
    return createChoiceTemplate();
  }
}
