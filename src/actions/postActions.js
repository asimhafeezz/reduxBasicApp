import * as types from './types'
import axios from 'axios'
import { useDispatch } from 'react-redux'

export default () => {
    
    let dispatch = useDispatch()

    const fetchPosts = () => {
        console.log('in fetch posts functions')
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => dispatch({
                type: types.FETCH_POSTS,
                payload: res.data
            }))
    }

    const newPost = postData => {
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

    return {fetchPosts , newPost}

}