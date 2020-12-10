export const addPointToOrder = (point, city, coordinates) => {
    return {
        pointId: point,
        cityId: city,
        coordinates: coordinates
    }
}

export const addCarToOrder = (order, item) => {
    const availableKeys = [`carId`, `meanPrice`, `pointId`, `cityId`, `coordinates`];
    let obj = {...order, carId: item, meanPrice: `${item.priceMin} - ${item.priceMax}`};
    Object.keys(obj).forEach(key => {
        if(!availableKeys.includes(key)) delete obj[key];
    });
    return obj;
}

export const addParamToOrder = (order, key, item) => {
    let obj = {...order};
    obj[key] = item;
    return obj;
}

export const deleteParamFromOrder = (order, key) => {
    let obj = {...order};
    delete obj[key];
    return obj;
}

export const addDateFromToOrder = (order, item) => {
    let obj = {...order};
    item ? obj.dateFrom = item : delete obj.dateFrom;
    delete obj.dateTo;
    return obj;
}

export const sendOrder = (order, status) => {
    return {...order, orderStatusId: status};
}