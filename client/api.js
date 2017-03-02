import fetch from 'isomorphic-fetch';

export function getText() {
    return fetch('./api/text')
        .then((res) => {
            return res.json()
    })
}

export function getTags() {
    return fetch('./api/tags')
        .then((res) => {
            return res.json()
    })
}
