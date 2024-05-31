import NavView from "../view/nav-view";
import { render } from "../utils/render";
import TrajectoryPresenter from "../presenter/trajectory-presenter";

import StudyModel from "../model/study-model";
import ProfessionsModel from "../model/professions-model";
import CoursesModel from "../model/courses-model";

import CoursesApi from "../api/courses-api";
import ProfessionsApi from "../api/professions-api";

const AUTHORIZATION = 'accept: application/json';
const END_POINT = 'http://urfuture.ru.website.yandexcloud.net';

const studyModel = new StudyModel();

const professionsModel = new ProfessionsModel(
    new ProfessionsApi(END_POINT, AUTHORIZATION)
);

const coursesModel = new CoursesModel(
    new CoursesApi(END_POINT, AUTHORIZATION)
);

const navContainer = document.querySelector('.content-area');
const contentContainer = navContainer.querySelector('.content-main');

const navComponent = new NavView();
render(navComponent, navContainer);


const trajectoryPresenter = new TrajectoryPresenter(
    contentContainer, 
    studyModel,
    professionsModel, 
    coursesModel, 
);

trajectoryPresenter.init();
