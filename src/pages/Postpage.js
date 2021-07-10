import React from 'react';
import { Component } from 'react';
import PostCard from '../components/PostCard';
import {connect} from 'react-redux';




class Postpage extends Component {



  render() {
    const posts = this.props.posts.map(p => <PostCard post={p} />)
    return (
      <div>
        {posts}
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