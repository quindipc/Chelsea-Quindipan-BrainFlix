import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.scss";

// Components
import Header from "./components/header/Header";
import VideoDetails from "./components/video/VideoDetails";
import Comments from "./components/comments/Comments";
import NextVideo from "./components/video/NextVideo";
import Video from "./components/video/Video";

// Pages
import UploadPage from "./components/Page/UploadPage";

//TODO: remove this, replace with API/useEffect
import data from "./data/video-details.json"; // Video details (JSON)
import videos from "./data/videos.json"; // Videos (JSON)

// const API_KEY = "257751fa-d1f7-4f35-98cc-aaeb7fd20b9a";
// const BASE_URL = "https://project-2-api.herokuapp.com";

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

  // TODO: edit this to reflect useState to grab the data to display
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

  // TODO: Add React Router to link to routes/page -- route would be in the header upload button?
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          {/* Need to create a home page that will link to the Logo */}
          <Route path="/" element={<Header />} />
          {/* Need to create an Upload page that links to the upload button */}
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Header /> */}
      <Video selected={selectedVideoDetails} />
      <div className="container">
        <div className="main">
          <VideoDetails selected={selectedVideoDetails} />
          <Comments
            comments={selectedVideoDetails?.comments ?? []}
            setSelectedVideoDetails={setSelectedVideoDetails}
          />
        </div>
        <div className="playlist">
          <NextVideo
            videos={nextVideos}
            selectedVideoDetails={selectedVideoDetails}
            getVideoDetails={getVideoDetails}
          />
        </div>
      </div>
    </>
  );

  // TODO: Create a function for a 404 not found? maybe not necessary.. good for catching error
}
