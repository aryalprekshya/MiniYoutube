import React, { useState, useEffect } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const [selectedVideo, setSelectedVideo] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/videos",
        {
          params: {
            part: "snippet",
            key: "AIzaSyBOssQYLOjNUKKDoS1IIRzx3mnp6W-ge7w",
            id: id,
          },
        }
      );
      console.log(response.data.items[0]);
      setSelectedVideo(response.data.items[0]);
    }
    fetchData();
  }, []);

  const videoSrc = `https://www.youtube.com/embed/${id}`;
  return (
    <>
      <Grid container justify="center" spacing={10}>
        <Grid item xs={11}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Paper elevation={6} style={{ height: "200%" }}>
                <iframe
                  frameBorder="0"
                  height="100%"
                  width="100%"
                  title="Video Player"
                  src={videoSrc}
                />
              </Paper>
              <Paper elevation={6} style={{ padding: "15px" }}>
                <Typography variant="h4">
                  {selectedVideo && selectedVideo.snippet.title}
                </Typography>
                <Typography variant="subtitle1">
                  {selectedVideo && selectedVideo.snippet.channelTitle}
                </Typography>
                <Typography variant="subtitle2">
                  {selectedVideo && selectedVideo.snippet.localized.description}
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
