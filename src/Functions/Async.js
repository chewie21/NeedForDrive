import {yandexGetMapsInfo} from "../Environments/YMapsUrls";

async function getPoints(changeCityPoints) {
    try {
        let newArr = [];
        for (const item of changeCityPoints) {

            const str = item.cityId.name + ` ` + item.address;

            let response = await fetch(yandexGetMapsInfo(str));
            let coordinate = await response.json().then(result => result.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ', 2).reverse());

            newArr.push(coordinate);
        }
        return newArr;
    } catch (error) {
        console.log(error);
        return [];
    }
}

async function getCenter(center) {
    try {
        let response = await fetch(yandexGetMapsInfo(center));
        return await response.json().then(result => result.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ', 2).reverse());
    } catch (error) {
        console.log(error);
    }
}

export async function setPoints(points, changeCity, setPointsOfCity, setCenter, order, setValue) {
    const pointsOfThisCity = points.data.filter(item => item.cityId.name === changeCity.city);

    const pointsCoordinates = await getPoints(pointsOfThisCity);

    let centerOfMap;

    if(order) {
        centerOfMap = await getCenter(`${order.point.city} + ${order.point.label}`);
    } else {
        if(pointsOfThisCity.length) centerOfMap = await getCenter(pointsOfThisCity[0].cityId.name);
    }

    const arr = []
    pointsOfThisCity.forEach((item, index) => {
        const obj = {
            label: item.address,
            value: item.address,
            city: item.cityId.name,
            coordinates: pointsCoordinates[index]
        }
        if(order && order.point.label === item.address) setValue(obj);
        arr.push(obj);
    });

    setPointsOfCity(arr);
    setCenter(centerOfMap);
}