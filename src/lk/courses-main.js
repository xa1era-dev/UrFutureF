import CardListPresenter from "../presenter/card-list-presenter";
import NavView from "../view/nav-view";
import CoursesModel from "../model/courses-model";
import { CardType } from "../const";
import { render } from "../utils/render";

const coursesModel = new CoursesModel();
const cardType = CardType.COURSES;

const navContainer = document.querySelector('.content-area');
const contentContainer = navContainer.querySelector('.cards');

const cardListPresenter = new CardListPresenter(contentContainer, coursesModel, cardType);
const navComponent = new NavView();

render(navComponent, navContainer);
cardListPresenter.init();
