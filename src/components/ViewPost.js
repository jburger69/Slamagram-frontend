import { Component } from 'react';
import {connect} from 'react-redux'
import {viewPost} from '../actions/Posts';

class ViewPost extends Component  {

    constructor(props) {
        super(props)
        this.state = {
            posts: props.post
        }

        this.handlePost = this.handlePost.bind(this);
    }
    
    handlePost = () => {
        this.props.viewPost()
        console.log(this)
    }

    // let post = props.post

    render(){
        return (
            <button onClick={this.handlePost}>View Post</button>
        )
    }


}

const mapStateToProps = (state) => {
    return{
      posts: state.post
    }
}


export default connect(mapStateToProps,{viewPost})(ViewPost)