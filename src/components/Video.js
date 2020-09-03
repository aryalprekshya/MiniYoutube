import React from "react";
import {
  Grid,
  Card,
  Box,
  CardActionArea,
  CardMedia,
  IconButton,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  card: {
    maxWidth: 350,
    height: 250,
  },

  media: {
    height: 140,
  },
}));

function Video(props) {
  const classes = useStyles();
  return (
    <Grid item xs={6} sm={3}>
      <Box pr={2} pb={2}>
        <Link to={`${props.video.id.videoId}`}>
          <Card className={classes.card} m="2rem" onClick="">
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={props.video.snippet.thumbnails.medium.url}
              />
              <CardHeader
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                titleTypographyProps={{ variant: "subtitle1" }}
                title={props.video.snippet.title}
                subheader={props.video.snippet.channelTitle}
              />
            </CardActionArea>
          </Card>
        </Link>
      </Box>
    </Grid>
  );
}

export default Video;
