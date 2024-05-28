import { render, remove, replace } from '../utils/render';
import CardsView from '../view/cards-view';
import { CardType } from '../const';

export default class CardListPresenter {
    #container = null;
    #cardListComponent = null;
    #type = null;

    #coursesModel = null;

    #courses = null;

    constructor(container, coursesModel, type) {
        this.#container = container;
        this.#coursesModel = coursesModel;
        this.#type = type;
    }

    init() {
        this.#courses = this.#coursesModel.courses;

        this.#cardListComponent = new CardsView(this.#type, this.#courses);
        render(this.#cardListComponent, this.#container)
    }
}