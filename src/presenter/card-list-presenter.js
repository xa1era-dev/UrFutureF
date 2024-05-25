import { render, remove, replace } from '../utils/render';
import CardsView from '../view/cards-view';
import { CardType } from '../const';

export default class CardListPresenter {
    #container = null;
    #cardListComponent = null;
    #type = CardType.COURSES;
    constructor(container) {
        this.#container = container;
    }

    init() {
        this.#cardListComponent = new CardsView(this.#type);
        render(this.#cardListComponent, this.#container)
    }
}
