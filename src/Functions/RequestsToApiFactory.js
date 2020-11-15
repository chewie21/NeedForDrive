export const getRequest = (url) => {
    return fetch(url,{
        method: `GET`,
        headers: {
            'X-Api-Factory-Application-Id': '5e25c641099b810b946c5d5b',
            'Authorization': '4cbcea96de'
        }
    }).then(res => res.json())
}