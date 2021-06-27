
const initialState = {
    posts: [],
    loading: false
}
const postsReducer = (state = initialState, action ) => {
    switch(action.type) {
        case "ADD_POSTS":
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }

            
        case "GET_POSTS":
            return {
                ...state,
                posts: [...state.posts, ...action.payload]
            }
        default:
            return state
    }
}

export default postsReducer;