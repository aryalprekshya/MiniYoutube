import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchBar from "./SearchBar";
import axios from "axios";
import VideoList from "./VideoList";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 350,
  },

  media: {
    height: 140,
  },
}));

export default function Home(props) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState("");

  let handleSubmit = async (searchText) => {
    console.log(searchText);
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          maxResults: 12,
          key: "AIzaSyBOssQYLOjNUKKDoS1IIRzx3mnp6W-ge7w",
          q: searchText,
        },
      }
    );

    //For displaying the list of videos received from api
    console.log(response.data.items);
    setVideos(response.data.items);
  };

  return (
    <div>
      <Grid container justify="center" spacing={10}>
        <Grid item xs={11}>
          <Grid container>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={handleSubmit} />
            </Grid>
            <VideoList videos={videos} />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
