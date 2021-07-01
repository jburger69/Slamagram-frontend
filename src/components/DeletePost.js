import React from 'react';
import {connect} from 'react-redux'
import {deletePost} from '../actions/Posts';

const DeletePost = (props) => {
    
    const handleDelete = (post) => {
        props.deletePost(post.id)
        window.location.reload()
    }

    let post = props.post

 return (
     <button onClick={() => handleDelete(post)}>Delete</button>
 )

}
export default connect(null,{deletePost})(DeletePost)