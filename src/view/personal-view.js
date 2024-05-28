import AbstractView from "../utils/abstract-view";

function createPesonalTemplate(person, teachers) {
    return (
        `<div class="direction">
                <div class="direction__about">
                    <div class="direction__about-avatar">
                        <img src="${person.img}" alt="${person.name}">
                    </div>
                    <div class="direction__about-box">
                        <div class="direction__about-name">
                            ${person.name}
                        </div>
                        <div class="direction__about-items">
                            <div class="direction__about-item">
                                <div class="direction__about-subtitle">
                                    № студенческого билета:
                                </div>
                                <div class="direction__about-value">
                                    ${person.cardId}
                                </div>
                            </div>
                            <div class="direction__about-item">
                                <div class="direction__about-subtitle">
                                    Группа:
                                </div>
                                <div class="direction__about-value">
                                    ${person.group}
                                </div>
                            </div>
                            <div class="direction__about-item">
                                <div class="direction__about-subtitle">
                                    Электронная почта:
                                </div>
                                <div class="direction__about-value">
                                    ${person.email}
                                </div>
                            </div>
                            <div class="direction__about-item">
                                <div class="direction__about-subtitle">
                                    Мое направление:
                                </div>
                                <div class="direction__about-value">
                                    ${person.direction}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                ${createTeachersList(teachers)}
            </div>`
    )
}
function createTeachersList(teachers) {
    const teachersList = teachers.map((teacher) => (
        createTeachersListItem(teacher))
      ).join('');

    return (
        `<div class="direction__items">
            ${teachersList}
        </div>`
    );
}

function createTeachersListItem(teacher) {
    return (
        `<div class="direction__item">
        <div class="direction__item-avatar">
            <img src="${teacher.img}" alt="${teacher.name}">
        </div>
        <div class="direction__item-content">
            <div class="direction__item-name">
                ${teacher.name}
            </div>
            <div class="direction__item-position">
            ${teacher.position}
            </div>
            <ul class="direction__item-list">
                <li class="direction__item-group">
                    <div class="direction__item-title">
                        Адрес:
                    </div>
                    <div class="direction__item-value">
                    ${teacher.adress}
                    </div>
                </li>
                <li class="direction__item-group">
                    <div class="direction__item-title">
                        Аудитория:
                    </div>
                    <div class="direction__item-value">
                        ${teacher.kabinet}
                    </div>
                </li>
                <li class="direction__item-group">
                    <div class="direction__item-title">
                        Телефон:
                    </div>
                    <div class="direction__item-value">
                        ${teacher.tel}
                    </div>
                </li>
                <li class="direction__item-group">
                    <div class="direction__item-title">
                        Email:
                    </div>
                    <div class="direction__item-value">
                        <a href="${teacher.email}">${teacher.email}</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>`
    )
}

export default class PersonalView extends AbstractView {
    #person = null;
    #teachers = null;

    constructor(person, teachers) {
        super();
        this.#person = person;
        this.#teachers = teachers
    }

  get template() {
    return createPesonalTemplate(this.#person, this.#teachers);
  }
}