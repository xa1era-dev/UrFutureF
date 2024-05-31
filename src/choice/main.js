import NavView from "../view/nav-view";
import { render } from "../utils/render";

import ChoicePresenter from "../presenter/choice-presenter";

import TeacherModel from "../model/teacher-model";
import CoursesModel from "../model/courses-model";
import DisciplinesModel from "../model/disciplines-model";

import DisciplinesApi from "../api/disciplines-api";
import CoursesApi from "../api/courses-api";
import TeachersApi from "../api/teachers-api";

const AUTHORIZATION = 'accept: application/json';
const END_POINT = 'http://urfuture.ru.website.yandexcloud.net';

const coursesModel = new CoursesModel(
    new CoursesApi(END_POINT, AUTHORIZATION)
);

const teacherModel = new TeacherModel(
    new TeachersApi(END_POINT, AUTHORIZATION)
);

const disciplinesModel = new DisciplinesModel(
    new DisciplinesApi(END_POINT, AUTHORIZATION)
);

const navContainer = document.querySelector('.content-area');
const contentContainer = navContainer.querySelector('.content-main');

const navComponent = new NavView();
render(navComponent, navContainer);

const choisePresenter = new ChoicePresenter(
    contentContainer, 
    teacherModel, 
    coursesModel, 
    disciplinesModel
);

choisePresenter.init();
