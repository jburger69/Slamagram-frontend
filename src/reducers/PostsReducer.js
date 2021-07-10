
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


        case "VIEW_POST":
            return state.posts.filter(post => post.id !== action.payload)

            

        case "DELETE_POST":
            return state.posts.filter(post => post.id !== action.payload)



        default:
            return state
    }
}

export default postsReducer;