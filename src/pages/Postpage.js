import React from 'react';
import PostCard from '../components/PostCard';
import {connect} from 'react-redux';

const Postpage = (props) => {
  return (
    <div>
          <div className="cards">
              {props.posts.map((post) => (<PostCard post={post} />))}
          </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    posts: state.posts
  }
}
export default connect(mapStateToProps)(Postpage);