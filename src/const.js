const CardType = {
    FINISH_COURSES: 'finish-courses',
    STUDY: 'study',
    PROFESSIONS: 'professions',
    COURSES: 'courses'
};

const Cards= {
    [CardType.FINISH_COURSES]: {
        title: 'Пройденные курсы',
        placeholder: 'Все семестры',
        select: ['1 семестр', '2 семестр', '3 семестр', '4 семестр'],
    },
    [CardType.STUDY]: {
        title: 'Выбор направления',
        placeholder: 'Больше направлений',
    },
    [CardType.PROFESSIONS]: {
        title: 'Выбор профессий',
        placeholder: 'Больше профессий'
    },
    [CardType.COURSES]: {
        title: 'Рекомендуемые курсы',
    }
};

const Choices = {
    CHOISE1: 'choise1',
    CHOISE2: 'choise2',
    CHOISE3: 'choise3',
    CHOISE4: 'choise4',
};

const TrajectoryComponents = {
    MAIN: 'main',
    STUDY: 'study',
    PROFESSIONS: 'PROFESSIONS',
    COURSES: 'courses',
}

export {CardType, Cards, Choices, TrajectoryComponents}