import PersonalPresenter from "../presenter/personal-presenter";
import NavView from "../view/nav-view";
import PersonModel from "../model/person-model";
import TeacherModel from "../model/teacher-model";
import { render } from "../utils/render";

const personModel = new PersonModel();
const teacherModel = new TeacherModel();

const navContainer = document.querySelector('.content-area');
const contentContainer = navContainer.querySelector('.content-main');

const personalPresenter = new PersonalPresenter(contentContainer, personModel, teacherModel);
const navComponent = new NavView();

render(navComponent, navContainer);
personalPresenter.init();
