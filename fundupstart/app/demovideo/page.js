"use client";
import React from "react";
import YouTube from "react-youtube";

export default function page() {
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <div>
      <h3>GeeksforGeeks - Youtube</h3>
      <YouTube
        videoId="sTnm5jvjgjM"
        opts={opts}
        //   onReady={this.onReady}
      />
    </div>
  );
  //   _onReady(event) {
  //     event.target.pauseVideo();
  //   }
}
