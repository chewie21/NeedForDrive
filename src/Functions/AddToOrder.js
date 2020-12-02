export const addPointToOrder = (point, city, coordinates) => {
    return {
        pointId: point,
        cityId: city,
        coordinates: coordinates
    }
}

export const addCarToOrder = (order, item) => {
    let obj = {...order};
    obj.carId = item;
    obj.meanPrice = `${item.priceMin} - ${item.priceMax}`;
    for(const item in obj) {
        if(item !== `carId` && item !== `meanPrice` && item !== `pointId` && item !== `cityId` && item !== `coordinates`) {
            delete obj[item];
        }
    }
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
    if(item) {
        obj.dateFrom = item;
    } else {
        delete obj.dateFrom;
    }
    delete obj.dateTo;
    return obj;
}

export const sendOrder = (order, status) => {
    let obj = {...order};
    obj.orderStatusId = status;
    return obj;
}