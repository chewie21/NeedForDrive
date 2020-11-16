//Информация для построения карты для Step1
export const yandexGetMapsInfo = (param) => {
    const yandexKey = `a1063db3-d44b-4180-aeeb-bb6ff55455df`;
    return `https://geocode-maps.yandex.ru/1.x/?format=json&geocode=${param}&apikey=${yandexKey}`;
}

//Геолокация пользователя
export const yandexGetUserLocation = (param) => {
    const yandexKey = `a1063db3-d44b-4180-aeeb-bb6ff55455df`;
    return `https://geocode-maps.yandex.ru/1.x/?apikey=${yandexKey}&format=json&geocode=${param}&kind=locality&lang=ru_RU`;
}
