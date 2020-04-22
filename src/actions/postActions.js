import * as types from './types'
import axios from 'axios'

export const fetchPosts = () => dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => dispatch({
            type: types.FETCH_POSTS,
            payload: res.data
        }))
}

export const newPost = postData => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
        .then(data => dispatch({
            type: types.NEW_POST,
            payload: data
    }))
}