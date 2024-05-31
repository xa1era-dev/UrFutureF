import { render, remove, replace } from '../utils/render';
import CardsView from '../view/cards-view';
import CardsSelectView from '../view/cards-select-view';
import { CardType } from '../const';
import { filter, FilterType } from '../utils/common';
export default class CardListPresenter {
    #container = null;
    #cardListComponent = null;
    #cardSelectComponent = null;

    #type = null;

    #coursesModel = null;

    #courses = null;

    constructor(container, coursesModel, type) {
        this.#container = container;
        this.#coursesModel = coursesModel;
        this.#type = type;
    }

    init() {
        this.#courses = [...this.#coursesModel.courses];

        this.#cardSelectComponent = new CardsSelectView(CardType.FINISH_COURSES, this.#handleSelectChange);
        this.#cardListComponent = new CardsView(CardType.FINISH_COURSES, this.#courses);

        render(this.#cardSelectComponent, this.#container);
        render(this.#cardListComponent, this.#container);
    }

    #handleSelectChange = (type, option) => {
        switch(type){
            case CardType.FINISH_COURSES:
                const filtredCourses = filter[option](this.#courses);
                const newCardsComponent = new CardsView(CardType.FINISH_COURSES, filtredCourses);
                replace(newCardsComponent, this.#cardListComponent);
                this.#cardListComponent = newCardsComponent;
                break;
        };
    };
}