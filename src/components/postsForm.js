import React, { useState } from 'react'
import { connect } from 'react-redux'
import { newPost } from '../actions/postActions'
const NewPost = (props) => {

    const [title , settitle] = useState('')
    const [body , setbody] = useState('')

    let onFormSubmit = (e) => {
        e.preventDefault()
        const postData = {
            title: title,
            body: body
        }
        console.log('action called')

        props.newPost(postData)

        console.log(props.post)

    }

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <h2>Form</h2>
                <label>Title:</label><br />
                <input type='text' value={title} onChange={(e) => settitle(e.target.value)} />
                <br />
                <label>Body:</label>
                <br />
                <input type='text' value={body} onChange={e => setbody(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    post: state.posts.item
})

export default connect(mapStateToProps , { newPost })(NewPost)