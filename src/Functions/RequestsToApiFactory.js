import {applicationID, secret} from "../Environments/ApiFactoryUrls";

export const getRequest = (url, token) =>
    fetch(url,{
        method: `GET`,
        headers: {
            'X-Api-Factory-Application-Id': applicationID,
            'Authorization': token
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
    });

export const putRequest = (url, path, body, token = secret) =>
    fetch(`${url}/${path}`, {
        method: `PUT`,
        body: JSON.stringify(body),
        headers: {
            'X-Api-Factory-Application-Id': applicationID,
            'Authorization': token,
            'Content-Type': 'application/json',
        }
    }).then(res => res.json());

export const deleteRequest = (url, path, token) =>
    fetch(`${url}/${path}`, {
        method: `DELETE`,
        headers: {
            'X-Api-Factory-Application-Id': applicationID,
            'Authorization': token,
        }
    }).then(res => res.json());