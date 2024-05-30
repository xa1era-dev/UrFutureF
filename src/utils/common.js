const FilterType = {
    All: 'Все семестры',
    FIRST: '1 семестр',
    SECOND: '2 семестр',
    THIRD: '3 семестр',
    FOURTH: '4 семестр',
};

const filter = {
    [FilterType.All]: (cards) => cards,
    [FilterType.FIRST]: (cards) => cards.filter((card) => card.half.half === 1),
    [FilterType.SECOND]: (cards) => cards.filter((card) => card.half.half === 2),
    [FilterType.THIRD]: (cards) => cards.filter((card) => card.half.half === 3),
    [FilterType.FOURTH]: (cards) => cards.filter((card) => card.half.half === 4), 
};

export{filter, FilterType}
