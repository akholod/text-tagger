import fetch from 'isomorphic-fetch';

export function getText() {
    return fetch('./api/text')
        .then((res) => {
            return res.json()
    })
}
