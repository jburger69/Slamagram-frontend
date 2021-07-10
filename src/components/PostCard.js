import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Grid } from "@material-ui/core";
import DeletePost from "./DeletePost";
// import ViewPost from "./ViewPost";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  gridContainer: {
    paddingLeft: "200px",
    paddingRight: "200px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function PostCard(props) {
  const classes = useStyles();
  const { image_url, content, id } = props.post




  return (
    <Grid container spacing={10} className={classes.gridContainer} justify="center">
        <Grid item xs={6}>
            <Card className={classes.root} variant="outlined">
                <CardMedia
                className={classes.media}
                image={image_url}
                />
                <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Description: {content}
                </Typography>
                </CardContent>
                <CardActions disableSpacing>
                <DeletePost post={props.post}/>
                {/* <ViewPost post={props.post}/> */}
                <Link to={`posts/${id}`}>View Post</Link>
                </CardActions>
            </Card>
        </Grid>
    </Grid>
  );
}