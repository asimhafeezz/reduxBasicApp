import React, { useState } from 'react'
import { useSelector} from 'react-redux'
import useActions from '../actions/postActions'

export default () => {

    const [title , settitle] = useState('')
    const [body, setbody] = useState('')
    
    let {newPost} = useActions()
    let post = useSelector(state => state.posts.item)

    let onFormSubmit = (e) => {
        e.preventDefault()
        const postData = {
            title: title,
            body: body
        }
        console.log('action called')

        newPost(postData)

        console.log(post)

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

// const mapStateToProps = state => ({
//     post: state.posts.item
// })

// export default connect(mapStateToProps , { newPost })(NewPost)