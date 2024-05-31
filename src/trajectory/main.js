import NavView from "../view/nav-view";
import { render } from "../utils/render";
import TrajectoryPresenter from "../presenter/trajectory-presenter";
import StudyModel from "../model/study-model";
import ProfessionsModel from "../model/professions-model";
import CoursesModel from "../model/courses-model";

const studyModel = new StudyModel();
const professionsModel = new ProfessionsModel();
const coursesModel = new CoursesModel();

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
