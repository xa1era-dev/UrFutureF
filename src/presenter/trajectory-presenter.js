import { render, remove, replace } from '../utils/render';
import TrajectoryView from '../view/trakectory-view';
import CardsView from '../view/cards-view';
import CardsSelectView from '../view/cards-select-view';
import CardButtonsView from '../view/cards-buttons-view';
import { CardType } from '../const';
import CoursesModel from '../model/courses-model';
import { professions } from '../mock/professions';


export default class TrajectoryPresenter {
    #container = null;

    #studyModel = null;
    #professionsModel = null;
    #coursesModel = null;

    #studies = null;
    #professionsValue = null;
    #courses = null;

    #trajectoryComponent = null;
    #studyCardsComponent = null;
    #professionCardsComponent = null;
    #courseCardsComponent = null;
    #cardButtonsComponent = null;

    #studySelectComponent = null;
    #professionSelectComponent = null;
    #courseSelectComponent = null;

    constructor(container, studyModel, professionsModel, coursesModel) {
        this.#container = container;
        this.#studyModel = studyModel;
        this.#professionsModel = professionsModel;
        this.#coursesModel = coursesModel;
    }

    init() {
        const professions = [...this.#professionsModel.professions];

        this.#trajectoryComponent = new TrajectoryView(this.#handleMainButtonClick);
        render(this.#trajectoryComponent, this.#container)

        // this.#studyCardsComponent = new CardsView();
        this.#professionCardsComponent = new CardsView(CardType.PROFESSIONS, professions, this.#handleNextClick);
        this.#professionSelectComponent = new CardsSelectView(CardType.PROFESSIONS, this.#handleNextClick, professions);
    }

    #handleMainButtonClick = () => {
        replace(this.#professionCardsComponent, this.#trajectoryComponent);
        render(this.#professionSelectComponent, this.#container);
    };

    #handleNextClick = (currentComponent, value) => {
        switch (currentComponent) {
            case CardType.PROFESSIONS:
                this.#professionsValue = value;
                const courses = [...this.#coursesModel.courses];

                this.#courseCardsComponent = new CardsView(CardType.COURSES, courses);
                this.#courseSelectComponent = new CardsSelectView(CardType.COURSES, this.#handleNextClick, new Array(this.#professionsValue));
                this.#cardButtonsComponent = new CardButtonsView();
                replace(this.#courseCardsComponent, this.#professionCardsComponent);
                replace(this.#courseSelectComponent, this.#professionSelectComponent);
                render(this.#cardButtonsComponent, this.#container);
                break;
        };
    };
}
