export const addPost = (postObj) => {
    return {
        type: "ADD_POST",
        payload: postObj
    }
}

// export const createPost = (post) => {
//     return (dispatch) => {
//         post fetch for creating a new post
//         then dispatch
//         call ADD_POST for dispatch
//     }
// }

export const getPosts = () => {
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