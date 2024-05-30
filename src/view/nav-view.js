import AbstractView from '../utils/abstract-view.js';

function createNavTemplate() {
  return(
    `<div class="content-nav">
        <div class="content-nav__inner">
            <div class="content-nav__top">
                <div class="content-nav__box">
                    <div class="content-nav__item">
                        <div class="content-nav__toggle">
                            <svg class="content-nav__icon">
                                <use href="images/sprite.svg#nav-main"></use>
                            </svg>
                        </div>
                        <div class="content-nav__dropdown">
                            <a class="content-nav__link" href="#">
                                Главная страница
                            </a>
                        </div>
                    </div>
                </div>
                <div class="content-nav__item">
                    <div class="content-nav__toggle">
                        <svg class="content-nav__icon">
                            <use href="images/sprite.svg#nav-calendar"></use>
                        </svg>
                    </div>
                    <div class="content-nav__dropdown">
                        <a class="content-nav__link" href="#">
                            Расписание
                        </a>
                    </div>
                </div>
                <div class="content-nav__item">
                    <div class="content-nav__toggle">
                        <svg class="content-nav__icon">
                            <use href="images/sprite.svg#nav-studies"></use>
                        </svg>
                    </div>
                    <div class="content-nav__dropdown">
                        <a class="content-nav__link" href="#">
                            Личный кабинет
                        </a>
                        <ul class="content-nav__list">
                            <li class="content-nav__item">
                                <a class="content-nav__item-link" href="#">
                                    Мое направление
                                </a>
                            </li>
                            <li class="content-nav__item">
                                <a class="content-nav__item-link" href="finish-courses.html">
                                    Пройденные курсы
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="content-nav__item">
                    <div class="content-nav__toggle">
                        <svg class="content-nav__icon">
                            <use href="images/sprite.svg#nav-list"></use>
                        </svg>
                    </div>
                    <div class="content-nav__dropdown">
                        <a class="content-nav__link" href="#">
                            ИОТ
                        </a>
                        <ul class="content-nav__list">
                            <li class="content-nav__item">
                                <a class="content-nav__item-link" href="#">
                                    Все курсы ИОТ
                                </a>
                            </li>
                            <li class="content-nav__item">
                                <a class="content-nav__item-link" href="#">
                                    Рекомендованные
                                    траектории
                                </a>
                            </li>
                            <li class="content-nav__item">
                                <a class="content-nav__item-link" href="#">
                                    Курсы в рамках
                                    направления
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="content-nav__item">
                    <div class="content-nav__toggle">
                        <svg class="content-nav__icon">
                            <use href="images/sprite.svg#nav-statistics"></use>
                        </svg>
                    </div>
                    <div class="content-nav__dropdown">
                        <a class="content-nav__link" href="trajectory.html">
                            Построение траектории
                        </a>
                    </div>
                </div>
                <div class="content-nav__item">
                    <div class="content-nav__toggle">
                        <svg class="content-nav__icon">
                            <use href="images/sprite.svg#nav-hat"></use>
                        </svg>
                    </div>
                    <div class="content-nav__dropdown">
                        <a class="content-nav__link" href="#">
                            Профессии
                        </a>
                        <ul class="content-nav__list">
                            <li class="content-nav__item">
                                <a class="content-nav__item-link" href="#">
                                    Библиотека профессий
                                </a>
                            </li>
                            <li class="content-nav__item">
                                <a class="content-nav__item-link" href="#">
                                    Рекомендуемые профессии
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="content-nav__item">
                    <div class="content-nav__toggle">
                        <svg class="content-nav__icon">
                            <use href="images/sprite.svg#nav-archive"></use>
                        </svg>
                    </div>
                    <div class="content-nav__dropdown">
                        <a class="content-nav__link" href="#">
                            Тест на профориентацию
                        </a>
                    </div>
                </div>
                <div class="content-nav__item">
                    <div class="content-nav__toggle">
                        <img class="content-nav__icon" src="images/nav-panel.png" alt="">
                    </div>
                    <div class="content-nav__dropdown">
                        <a class="content-nav__link" href="#">
                            Админ-панель
                        </a>
                    </div>
                </div>
            </div>
            <div class="content-nav__bottom">
                <div class="content-nav__item">
                    <div class="content-nav__toggle">
                        <svg class="content-nav__icon">
                            <use href="images/sprite.svg#nav-account"></use>
                        </svg>
                    </div>
                    <div class="content-nav__dropdown">
                        <a class="content-nav__link" href="#">
                            Аккаунт
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>`
    );
}

export default class NavView extends AbstractView {
  get template() {
    return createNavTemplate();
  }
}
