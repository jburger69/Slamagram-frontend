export const addPost = (postObj) => {
    return {
        type: "ADD_POST",
        payload: postObj
    }
}

export const createPost = (post) => {
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({post}), 
        })
            .then(resp => resp.json())
            .then(post => {
                dispatch(addPost(post))
            })
    }
}



export const getPosts = () => {
    console.log("c")
    return (dispatch) => {
        fetch("http://localhost:3000/api/v1/posts")
            .then(resp => resp.json())
            .then(posts => {
                dispatch({
                    type: "GET_POSTS",
                    payload: posts
                })
            })
        }
}



export const deletePost = (Id) => {
    return (dispatch) => {
        dispatch({ type: "DELETE_POST", payload: Id });
        fetch(`http://localhost:3000/api/v1/posts/${Id}`, {
        method: "DELETE",
        })
    }
}