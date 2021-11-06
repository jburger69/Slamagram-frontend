import { Component } from 'react';
import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { Grid} from "@material-ui/core";
import DeletePost from "./DeletePost";
import { Link } from "react-router-dom";


class PostCard extends Component {

  state={
    likes: 0
  }


  handleLikes = () => {
    this.setState((state) => {
      return {likes: state.likes + parseInt(this.props.i)};
    });
  }



  render() {
    const { image_url, content, id } = this.props.post
    return (
      <Grid container spacing={10}  justify="center">
          <Grid item xs={4}>
              <Card  variant="outlined">
                  <CardMedia
                  className={"media"}
                  image={image_url}
                  />
                  <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                      Description: {content}
                  </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <DeletePost post={this.props.post}/>
                    <Link to={`posts/${id}`}>View Post</Link>
                    <button onClick={() => this.handleLikes()}>{this.state.likes}</button>
                  </CardActions>
              </Card>
          </Grid>
      </Grid>
    );
  }
}

export default (PostCard);