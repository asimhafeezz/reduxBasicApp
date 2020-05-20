import React, { useEffect }from 'react'
import { useSelector } from 'react-redux'
import useActions from '../actions/postActions'

const Posts = () => {

    let {fetchPosts} = useActions()
    let posts = useSelector(state => state.posts.items)

    useEffect(() => {
        fetchPosts()
    } , [])

    return (
        <div>
            
            <h1>Posts:</h1>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
            
        </div>
    )
}


// const mapStateToProps = state => ({
//     posts: state.posts.items
// })

// export default connect(mapStateToProps , { fetchPosts })(Posts)
export default Posts