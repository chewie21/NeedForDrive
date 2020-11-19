export const addPointToOrder = (item) => {
    return {
        point: {
            name: 'Пункт выдачи',
            value: `${item.city}, ${item.label}`,
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
        value: item.name,
        colors: item.colors,
        model: item.name,
        number: item.number,
        priceMax: item.priceMax,
        priceMin: item.priceMin,
        tank: item.tank ? item.tank : 0,
        img: item.thumbnail.path,
        category: item.categoryId.name
    }
    obj.meanPrice = `${item.priceMin} - ${item.priceMax}`;
    for(const item in obj) {
        if(item !== `car` && item !== `meanPrice` && item !== `point`) {
            delete obj[item];
        }
    }
    return obj;
}

export const addColorToOrder = (order, value) => {
    let obj = {...order};
    obj.color = {
        name: `Цвет`,
        value: value
    };
    return obj;
}

export const addRateTypeToOrder = (order, value, price) => {
    let obj = {...order};
    obj.rate = {
        name: `Тариф`,
        value: value,
        price: price
    }
    return obj;
}

export const addRentTimeToOrder = (order, time, minutes, days, startDate, endDate) => {
    let obj = {...order};
    obj.rentTime = {
        name: 'Длительность аренды',
        value: time,
        minutes: minutes,
        days: days,
        startDate: startDate,
        endDate: endDate
    }
    return obj;
}

export const deleteRentTimeFromOrder = (order, param) => {
    let obj = {...order};
    delete obj[param];
    return obj;
}

export const addPriceToOrder = (order, price) => {
    let obj = {...order};
    obj.price = price;
    return obj;
}

export const deletePriceFromOrder = (order, price) => {
    let obj = {...order};
    delete obj[price];
    return obj;
}

export const addServiceToOrder = (order, item) => {
    let obj = {...order};
    obj[item.name] = {
        name: item.label,
        value: 'Да'
    }
    obj.price = +obj.price + +item.value;
    return obj;
}

export const deleteServiceFromOrder = (order, item) => {
    let obj = {...order};
    obj.price = +obj.price - +item.value;
    delete obj[item.name];
    return obj;
}