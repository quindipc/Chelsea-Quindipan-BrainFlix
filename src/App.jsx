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

// import data from "./data/video-details.json"; // Video details (JSON)
// import videos from "./data/videos.json"; // Videos (JSON)

export default function App() {
  const [nextVideos, setNextVideos] = useState([]);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState({});

  const API_KEY = "257751fa-d1f7-4f35-98cc-aaeb7fd20b9a";
  const BASE_URL = "https://project-2-api.herokuapp.com/";


  // Set Next Videos from the list
  useEffect(() => {
    axios
      .get(`${BASE_URL}videos?api_key=${API_KEY}`)
      .then((response) => {
        setNextVideos(response.data);
      })
      .catch((error) => {
        console.log("Error fetching next videos:", error);
      });
  }, []);

  // Set Selected Video 
  useEffect(() => {
    axios
      .get(`${BASE_URL}videos?api_key=${API_KEY}`)
      .then((response) => {
        if (response.data.length > 0) {
          setSelectedVideoDetails(response.data[0]);
        }
      })
      .catch((error) => {
        console.log("Error fetching selected video details:", error);
      });
  }, []);

  // Finds and stores the selected video's details
  const getVideoDetails = (videoId) => {
    axios
      .get(`${BASE_URL}videos/${videoId}?api_key=${API_KEY}`)
      .then((response) => {
        setSelectedVideoDetails(response.data);
      })
      .catch((error) => {
        console.log("Error fetching video details:", error);
      });
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
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
}
