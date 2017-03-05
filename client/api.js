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

export function deleteTag(tag) {
    return fetch('./api/tags/' + tag.tagName, {
        method: 'delete',
  })
        .then((res) => {
            return res.json()
    })
}
