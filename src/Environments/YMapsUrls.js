//Информация для построения карты для Step1
export const yandexGetMapsInfo = (param) => {
    const yandexKey = `941d25b3-c4cd-4c8d-a363-67789eb0ff5e`;
    return `https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${param}&apikey=${yandexKey}`;
}

//Геолокация пользователя
export const yandexGetUserLocation = (param) => {
    const yandexKey = `941d25b3-c4cd-4c8d-a363-67789eb0ff5e`;
    return `https://geocode-maps.yandex.ru/1.x/?apikey=${yandexKey}&format=json&geocode=${param}&kind=locality&lang=ru_RU`;
}
