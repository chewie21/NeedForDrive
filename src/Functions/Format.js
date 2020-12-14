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
    Object.keys(item.thumbnail).length !== 0 ?
        item.thumbnail.path ?
            item.thumbnail.path.charAt(0) === '/' ?
                `${url}${item.thumbnail.path}` :
                item.thumbnail.path :
            DefaultImg : DefaultImg;

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

export const formatOrderStatus = (status) => {
    if(status === `issued`) {
        return `В работе`
    } else if (status === `new`) {
        return `Новый`
    } else if (status === `confirmed`) {
        return `Подтвержден`
    } else if (status === `cancelled`) {
        return `Отменнен`
    }
}

export const formatDateToToken = (seconds) => new Date(new Date().getTime() + +seconds * 1000).getTime();

export const formatToFilter = (data, name) => {
    let arr = [];
    data.forEach((item) => {
        let obj = {
            label: item.name,
            value: item.id,
            name: name
        }
        arr.push(obj);
    });
    return arr;
}

export const formatToOrderInfo = (data) => {
    let arr = [];
    data.forEach((item) => {
        let obj = {
            label: item.address ? item.address : item.name,
            value: item.id,
            item: item
        }
        arr.push(obj);
    });
    return arr;
}

export const formatColor = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const formatFindEntityErrors = (obj) => {

    if(obj.priceMax && obj.priceMin && (obj.priceMax < obj.priceMin)) return false;

    const isEmpty = (obj) => {
        for(let key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }
        return true;
    }

    for(const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === "string" || typeof obj[key] === "number") {
                if (!obj[key]) return false;
            } else if (typeof obj[key] !== "boolean") {
                if (isEmpty(obj[key])) return false;
            }
        }
    }

    return true;
}