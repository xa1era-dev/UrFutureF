import AbstractView from '../utils/abstract-view.js';

function createTrajectoryTemplate() {
  return(
    `<div class="trajectory">
        <div class="trajectory__inner">
            <h2 class="trajectory__title">
                Проложи траекторию своей карьеры: Определи, научись и преуспей
            </h2>
            <p class="trajectory__text">
                Твоя дорога к успеху: узнай свою профессию, найди курсы и стань лучшим в своей области
            </p>
            <button class="trajectory__link">
                Построить траекторию
            </button>
        </div>
    </div>`
    );
}

export default class TrajectoryView extends AbstractView {
    #onTrajectoryButtonClick = null;

    constructor(onTrajectoryButtonClick) {
        super();
        this.#onTrajectoryButtonClick = onTrajectoryButtonClick;

        this.element.querySelector('.trajectory__link')
            .addEventListener('click', this.#buttonClickHandler)
    }

    get template() {
        return createTrajectoryTemplate();
    }

    #buttonClickHandler = (evt) => {
        evt.preventDefault();
        this.#onTrajectoryButtonClick();
    };
}
