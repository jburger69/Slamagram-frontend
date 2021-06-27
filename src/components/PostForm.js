import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createPost} from "../actions/Posts"

class PostForm extends Component {
    
    state={
        content: "",  
        image_url: ""
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // WE WANT TO TAKE THE OBJECT THAT WE ARE SUBMITTING 
        // AND PASS IT TO THE REDUCER
        this.props.createPost(this.state)
        this.setState({
            content: "",  
            image_url: ""
        })
    }
    
    render() {
        return (
            <div id="posts-form">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="content">Content: </label>
                        <input id="content" name="content" value={this.state.content} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label htmlFor="image_url">Image_url: </label>
                        <input id="image_url" name="image_url" onChange={this.handleChange} value={this.state.image_url} />
                    </div>
                    <div>
                        <input type="submit" value="ADD A POST" />
                    </div>
                </form>
            </div>
        )
    }
}



// connect() -> returns a function. We can then invoke again and pass in our component
export default connect(null, { createPost })(PostForm)   