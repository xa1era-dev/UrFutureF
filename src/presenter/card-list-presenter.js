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

        this.#cardSelectComponent = new CardsSelectView(this.#type, this.#handleSelectChange);
        this.#cardListComponent = new CardsView(this.#courses);

        render(this.#cardSelectComponent, this.#container);
        render(this.#cardListComponent, this.#container);
    }

    #handleSelectChange = (type, option) => {
        switch(type){
            case CardType.COURSES:
                const filtredCourses = filter[option](this.#courses);
                replace(new CardsView(filtredCourses), this.#cardListComponent);
                break;
        };
    };
}