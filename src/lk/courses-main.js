import CardListPresenter from './presenter/card-presenter';
import NavView from './view/nav-view';
import { render } from './framework/render';


const mainContainer = document.querySelector('.content-area');
const cardContainer = mainContainer.querySelector('.content-main');
const cardListPresenter = new CardListPresenter(cardContainer);
const navViewComponent = new NavView();

// render(navViewComponent, mainContainer);
cardListPresenter.init();
