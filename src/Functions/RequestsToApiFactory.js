import {applicationID, secret} from "../Environments/ApiFactoryUrls";

export const getRequest = (url) =>
    fetch(url,{
        method: `GET`,
        headers: {
            'X-Api-Factory-Application-Id': applicationID,
            'Authorization': secret
        }
    }).then(res => res.json());

export const postRequest = (url, body, token) =>
    fetch(url, {
        method: `POST`,
        body: JSON.stringify(body),
        headers: {
            'X-Api-Factory-Application-Id': applicationID,
            'Authorization': token,
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());

export const logoutRequest = (url, token) =>
    fetch(url, {
        method: `POST`,
        headers: {
            'X-Api-Factory-Application-Id': applicationID,
            'Authorization': token,
        }
    }).then(res => {
        console.log(res);
    });

export const putRequest = (url, path, order) =>
    fetch(`${url}/${path}`, {
        method: `PUT`,
        body: JSON.stringify(order),
        headers: {
            'X-Api-Factory-Application-Id': applicationID,
            'Authorization': secret,
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());