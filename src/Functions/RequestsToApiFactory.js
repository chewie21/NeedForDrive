export const getRequest = (url) =>
    fetch(url,{
        method: `GET`,
        headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            'Authorization': '4cbcea96de'
        }
    }).then(res => res.json());

export const postRequest = (url, order) =>
    fetch(url, {
        method: `POST`,
        body: JSON.stringify(order),
        headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            'Authorization': '4cbcea96de',
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());

export const putRequest = (url, path, order) =>
    fetch(`${url}/${path}`, {
        method: `PUT`,
        body: JSON.stringify(order),
        headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            'Authorization': '4cbcea96de',
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());