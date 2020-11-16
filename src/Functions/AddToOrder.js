export const addPointToOrder = (item) => {
    return {
        point: {
            name: 'Пункт выдачи',
            city: item.city,
            address: item.label,
            coordinates: item.coordinates
        }
    }
}

export const addCarToOrder = (order, item) => {
    let obj = {...order};
    obj.car = {
        name: 'Модель',
        colors: item.colors,
        model: item.name,
        number: item.number,
        priceMax: item.priceMax,
        priceMin: item.priceMin,
        tank: item.tank ? item.tank : 0,
        img: item.thumbnail.path,
        category: item.categoryId.name
    }
    return obj;
}

export const addParamsToOrder = (order, item, param, description) => {
    let obj = {...order};
    obj.param = {
        name: description,
        value: item
    }
    return obj;
}