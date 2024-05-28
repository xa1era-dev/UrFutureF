const CardType = {
    COURSES: 'courses',
    AREAS: 'areas'
};

const Cards= {
    [CardType.COURSES]: {
        title: 'Пройденные курсы',
        select: ['Все семестры', '1 семестр', '2 семестр', '3 семестр', '4 семестр'],
    },
    [CardType.AREAS]: {
        title: 'Выбор направления',
        select: [
            'Все направления',
            'Безопасность компьютерных систем', 
            'Инфокоммуникационные технологии и системы ', 
            'Информатика и вычислительная техника', 
            'Конструирование и технология электронных', 
            'Прикладная информатика',
            'Программная инженерия',
            'Радиотехника',
            'Управление в технических системах',
        ]
    },
};

const Choices = {
    CHOISE1: 'choise1',
    CHOISE2: 'choise2',
    CHOISE3: 'choise3',
    CHOISE4: 'choise4',
}

export {CardType, Cards, Choices}