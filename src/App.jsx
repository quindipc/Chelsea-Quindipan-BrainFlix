import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Video from "./components/video/Video";
import Comments from "./components/comments/Comments";
import NextVideo from "./components/video/NextVideo";

// Data (JSON)
import data from "./data/video-details.json";

// TODO: Add click handler to change videos

export default function App() {
  const [selectedVideoDetails, setSelectedVideoDetails] = useState({});

  // Finds and stores the selected videos details
  const getVideoDetails = (videoId) => {
    // Get the selected video details
    const details = data?.find(({ id }) => id === videoId);

    if (details != null) {
      setSelectedVideoDetails(details);
    }
  };

  /**
   * Empty dependencies as we only want this to run on the initial load
   * to populate our initial video
   */
  useEffect(() => {
    if (data == null) return;

    setSelectedVideoDetails(data[0]);
  }, []);


  return (
    <>
      <Header />
      <Video
        image={selectedVideoDetails.image}
        video={selectedVideoDetails.video}
        title={selectedVideoDetails.title}
        description={selectedVideoDetails.description}
        likes={selectedVideoDetails.likes}
        views={selectedVideoDetails.views}
        timestamp={selectedVideoDetails.timestamp}
        channel={selectedVideoDetails.channel}
      />
      <Comments
        comments={selectedVideoDetails?.comments ?? []}
        setSelectedVideoDetails={setSelectedVideoDetails}
      />
      <NextVideo />
    </>
  );
}
