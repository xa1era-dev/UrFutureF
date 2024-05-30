import NavView from "../view/nav-view";
import { render } from "../utils/render";
import ChoicePresenter from "../presenter/choice-presenter";
import TeacherModel from "../model/teacher-model";
import CoursesModel from "../model/courses-model";
import DisciplinesModel from "../model/disciplines-model";

const coursesModel = new CoursesModel();
const teacherModel = new TeacherModel();
const disciplinesModel = new DisciplinesModel();

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
