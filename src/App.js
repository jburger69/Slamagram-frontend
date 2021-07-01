import { Component } from 'react';
import './App.css';
import {connect} from 'react-redux'
import { getPosts } from './actions/Posts';
import PostForm from './components/PostForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Postpage from './pages/Postpage';

class App extends Component {


  componentDidMount(){
    this.props.getPosts()
  }



  render(){
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/posts' exact component={Postpage} />
          <Route path='/posts/new' exact component={PostForm} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
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
