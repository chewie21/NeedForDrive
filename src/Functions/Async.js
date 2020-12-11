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

    const arr = [];
    let valueObj;
    const pointsOfThisCity = points.data.filter(item => item.cityId.name === changeCity.label);

    if(pointsOfThisCity.length) {
        const pointsCoordinates = await getPoints(pointsOfThisCity);
        pointsOfThisCity.forEach((item, index) => {
            const obj = {
                label: item.address,
                value: item.address,
                pointId: item,
                cityId: item.cityId,
                coordinates: pointsCoordinates ? pointsCoordinates[index] : null
            }
            if(order && order.pointId.address === item.address) valueObj = obj;
            arr.push(obj);
        });
    }

    let centerOfMap;

    if(order) {
        centerOfMap = order.coordinates;
    } else {
        if(pointsOfThisCity.length) centerOfMap = await getCenter(pointsOfThisCity[0].cityId.name);
    }

    setValue(valueObj);
    setPointsOfCity(arr);
    setCenter(centerOfMap);
}