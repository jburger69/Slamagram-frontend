import { Component } from 'react';
import './App.css';
import PostCard from './components/PostCard'
import Header from './components/Header';
import {connect} from 'react-redux'
import { getPosts } from './actions/Posts';
import PostForm from './components/PostForm';

class App extends Component {


  componentDidMount(){
    this.props.getPosts()
  }



render(){
  return (
    <div className="App">
      <Header />
      <PostForm />
      <div className="cards">
          {this.props.posts.map((post) => (<PostCard post={post} />))}
      </div>
    </div>
  )
}



}


const mapStateToProps = (state) => {
  return{
    posts: state.posts,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getPosts })(App);
