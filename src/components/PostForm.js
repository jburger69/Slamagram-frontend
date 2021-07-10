import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createPost} from "../actions/Posts"
import '../components/PostForm.css';


class PostForm extends Component {
    
    state={
        content: "",  
        image_url: ""
    }

    constructor(){
        super();
       this.handleChange.bind(this);
       this.handleSubmit.bind(this);
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
        this.props.history.push('/posts');
    }
    
    
    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <h1> Create a new Post</h1>
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
            
        )
    }
}



// connect() -> returns a function. We can then invoke again and pass in our component
export default connect(null, { createPost })(PostForm)   