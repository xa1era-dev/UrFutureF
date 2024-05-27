import { render, remove, replace } from '../utils/render';
import Choice1View from '../view/choice1-view';
import Choice2View from '../view/choice2-view';
import Choice3View from '../view/choise3-view';
import { Choices } from '../const';

export default class ChoicePresenter {
    #container = null;
    #timeValue = null;
    #dayValue = null;

    #choise1Component = new Choice1View(this.#handleNextClick);
    #choise2Component = new Choice2View(this.#handleNextClick);
    #choise3Component = new Choice3View(this.#handleNextClick);

    constructor(container) {
        this.#container = container;
    }

    init() {
        render(this.#choise1Component, this.#container);
    }

    #handleNextClick = (currentChoice, value) => {
        switch (currentChoice) {
            case Choices.CHOISE1:
                this.#timeValue = value;
                replace(this.#choise1Component, this.#choise2Component);
                break;
            case Choices.CHOISE2:
                this.#dayValue = value;
                replace(this.#choise2Component, this.#choise3Component);
                break;
            case Choices.CHOISE3:
                break;
                
                
        };
    };
}
