import fetch from 'isomorphic-fetch';

//get dummy text from server
export function getText() {
    return fetch('./api/text')
        .then((res) => {
            return res.json()
    })
}
//get all saved text from server
export function getTags() {
    return fetch('./api/tags')
        .then((res) => {
            return res.json()
    })
}
//save tag on server
export function saveTag(tag) {
    return fetch('./api/tags', {
        method: 'post',
        headers: {
          "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'tagName='+tag
  })
        .then((res) => {
            return res.json()
    })
}
//delete tag from server
export function deleteTag(tag) {
    return fetch('./api/tags/' + tag.tagName, {
        method: 'delete',
  })
        .then((res) => {
            return res.json()
    })
}
