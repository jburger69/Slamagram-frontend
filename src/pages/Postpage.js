import React from 'react';
import { Component } from 'react';
import PostCard from '../components/PostCard';
import {connect} from 'react-redux';


class Postpage extends Component {


  state={
    i: 0,
    posts: [],
    sorted: false
  }

  handleChange = (e) => {
    this.setState(
      {i: e.target.value}
    );
  }

  handleSort = () => {
    if(this.state.sorted){
      this.setState({ sorted: false, posts: []})
    } else {
      this.setState({ sorted: true, posts: [...this.props.posts].sort((a,b) => a.content.length < b.content.length ? 1 : -1 )})
    }
  }


  render() {
    const posts = this.state.posts.length === 0 ? this.props.posts.map(p => <PostCard post={p} i={this.state.i}/>) : this.state.posts.map(p => <PostCard post={p} i={this.state.i}/>)

    return (
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div>
        {posts}
        </div>
        <label htmlFor="i">Likes: </label>
        <input name="likes" value={this.state.i} onChange={this.handleChange} />
        <button onClick={this.handleSort}>Sort Posts</button>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return{
    posts: state.posts
  }
}



export default connect(mapStateToProps)(Postpage);