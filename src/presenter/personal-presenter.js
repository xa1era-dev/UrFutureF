import { render, remove, replace } from '../utils/render';
import PersonalView from '../view/personal-view';

export default class PersonalPresenter {
    #container = null;
    #personalComponent = null;

    #personalModel = null;
    #teacherModel = null;

    #teachers = null;
    #person = null;

    
    constructor(container, personalModel, teacherModel) {
        this.#container = container;
        this.#personalModel = personalModel;
        this.#teacherModel = teacherModel;
    }

    init() {
        this.#teachers = this.#teacherModel.teachers;
        this.#person = this.#personalModel.person;

        this.#personalComponent = new PersonalView(this.#person, this.#teachers);
        render(this.#personalComponent, this.#container)
    }
}
