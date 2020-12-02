import DefaultImg from "../img/defaulImg.png";

export const formatNumber = (number) =>
    (number.slice(0, 1) + ' ' + number.slice(1,4) +
        ' ' + number.slice(4, 7) + ' ' + number.slice(7)).toUpperCase();

export const formatDateToOrderMain = (milliseconds) => {
    const date = new Date(milliseconds);
    return (
        (date.getDate().toString().length === 1 ? `0${date.getDate()}` : date.getDate()) + '.' +
        ((date.getMonth() + 1).toString().length === 1 ? `0${date.getMonth() + 1}` : date.getMonth() + 1) + '.' +
        date.getFullYear() + ' ' +
        (date.getHours().toString().length === 1 ? `0${date.getHours()}` : date.getHours()) + ':' +
        (date.getMinutes().toString().length === 1 ? `0${date.getMinutes()}` : date.getMinutes())
    );
};

export const formatDateToOrderList = (milliseconds) => {
    const minutes = Math.round(milliseconds / 60 / 1000);
    const finalMinutes = minutes % 60;

    const hours = Math.floor(minutes / 60);
    const finalHours = hours % 24;

    const days = Math.floor(hours / 24);

    const daysStr = days !== 0 ? `${days} д` : '';
    const hoursStr = finalHours !== 0 ? `${finalHours} ч` : '';
    const minutesStr = finalMinutes !== 0 ? `${finalMinutes} м` : '';

    return `${daysStr} ${hoursStr} ${minutesStr}`
};

export const formatImgPath = (item, url) =>
    item.thumbnail.path ?
        item.thumbnail.path.charAt(0) === '/' ?
            `${url}${item.thumbnail.path}` :
            item.thumbnail.path :
        DefaultImg;

export const formatToken = (token) => {
    let range = (start, end) => [...Array(end - start).keys(), end - start].map(n => start + n);
    let A = range(65, 90);
    let a = range(97, 122);
    let dig = range(48, 57);
    let all = A.concat(a).concat(dig);

    function generateString(length = 10){
        let str = '';
        for(let i = 0; i < length; i++){
            str += String.fromCharCode(all[Math.floor(Math.random() * all.length)]);
        }
        return str;
    }

    let string = `${generateString(10)}:${token}`;

    return btoa(string);
}