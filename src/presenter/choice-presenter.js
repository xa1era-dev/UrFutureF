import { render, remove, replace } from '../utils/render';
import Choice1View from '../view/choice1-view';
import Choice2View from '../view/choice2-view';
import Choice3View from '../view/choise3-view';
import { Choices } from '../const';
import { setDragonDrop } from '../utils/dragonDrop';

export default class ChoicePresenter {
    #container = null;

    #timeValue = null;
    #dayValue = null;
    #coursesValue = null;

    #courses = null;
    #teachers = null;
    #disciplines = null;

    #teacherModel = null;
    #coursesModel = null;
    #disciplinesModel = null;

    #choise1Component = null;
    #choise2Component = null;
    #choise3Component = null;

    constructor(container, teacherModel, coursesModel, disciplinesModel) {
        this.#container = container;
        this.#teacherModel = teacherModel;
        this.#coursesModel = coursesModel;
        this.#disciplinesModel = disciplinesModel;
    }

    init() {
        this.#disciplines = this.#disciplinesModel.disciplines;
        this.#courses = this.#coursesModel.courses;
        this.#teachers = this.#teacherModel.teachers;

        this.#choise1Component = new Choice1View(this.#handleNextClick);
        this.#choise2Component = new Choice2View(this.#handleNextClick, this.#handlePrevClick);
        this.#choise3Component = new Choice3View(this.#handleNextClick, this.#handlePrevClick, this.#disciplines, this.#coursesModel);

        render(this.#choise1Component, this.#container);
    }

    #handleNextClick = (currentChoice, value) => {
        switch (currentChoice) {
            case Choices.CHOISE1:
                this.#timeValue = value;
                replace(this.#choise2Component, this.#choise1Component);
                break;
            case Choices.CHOISE2:
                this.#dayValue = value;
                replace(this.#choise3Component, this.#choise2Component);
                setDragonDrop();
                break;
            case Choices.CHOISE3:
                this.#coursesValue = value
                break;
        };
    };

    #handlePrevClick = (currentChoice) => {
        switch (currentChoice) {
            case Choices.CHOISE2:
                replace(this.#choise1Component, this.#choise2Component);
                break;
            case Choices.CHOISE3:
                replace(this.#choise2Component, this.#choise3Component);
                break;   
        };
    };
}
