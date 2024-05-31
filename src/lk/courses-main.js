import CardListPresenter from "../presenter/card-list-presenter";
import NavView from "../view/nav-view";
import CoursesModel from "../model/courses-model";
import { CardType } from "../const";
import { render } from "../utils/render";
import CoursesApi from "../api/courses-api";

const AUTHORIZATION = 'accept: application/json';
const END_POINT = 'http://urfuture.ru.website.yandexcloud.net';

const coursesModel = new CoursesModel(
    new CoursesApi(END_POINT, AUTHORIZATION)
);

const cardType = CardType.COURSES;

const navContainer = document.querySelector('.content-area');
const contentContainer = navContainer.querySelector('.cards');

const cardListPresenter = new CardListPresenter(contentContainer, coursesModel, cardType);
const navComponent = new NavView();

render(navComponent, navContainer);
cardListPresenter.init();
