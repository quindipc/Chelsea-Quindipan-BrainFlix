import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import Video from "./components/video/Video";
import Comments from "./components/comments/Comments";
import NextVideo from "./components/video/NextVideo";

import data from "./data/video-details.json"; // Video details (JSON)
import videos from "./data/videos.json" // Videos (JSON)


export default function App() {
  const [nextVideos, setNextVideos] = useState([]);
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
   * to populate our initial video details and grab our upcomming videos
   */
  useEffect(() => {
    if (data != null) {
      setSelectedVideoDetails(data[0]);
    }
    if (videos != null) {
      setNextVideos(videos);
    }
  }, []);

  console.log(videos)


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
      <NextVideo videos={nextVideos} selectedVideoDetails={selectedVideoDetails} getVideoDetails={getVideoDetails} />
    </>
  );
}
