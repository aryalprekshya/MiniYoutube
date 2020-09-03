import React from "react";
import Video from "./Video";

function VideoList(props) {
  console.log(props.videos);

  return (
    <>
      {props.videos.map((video) => (
        <Video video={video} />
      ))}
    </>
  );
}

export default VideoList;
