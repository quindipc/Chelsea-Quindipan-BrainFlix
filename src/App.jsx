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
// import data from "./data/video-details.json"; // Video details (JSON)
// import videos from "./data/videos.json"; // Videos (JSON)

export default function App() {
  const [nextVideos, setNextVideos] = useState([]);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState({});

  const API_KEY = "257751fa-d1f7-4f35-98cc-aaeb7fd20b9a";
  const BASE_URL = "https://project-2-api.herokuapp.com/";

  // steps:
  // 1) create a useEffect
  // 2) create a callback function with axios
  // 3) set the response data into state
  // 4) dependencies?? depends on when we want it to run when the component mounts

  // Do I need useParams(); here?

  //   useEffect(() => {
  //     axios.get(`${BASE_URL}`)
  //       .then(response => {
  //         console.log(response.data);
  //         setNextVideos(response.data);
  //     })
  // })

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch video details from API
        const response = await axios.get(`${BASE_URL}/videos?api_key=${API_KEY}`);
        console.log(response.data);
        const videoDetails = response.data;

        if (videoDetails.length > 0) {
          setSelectedVideoDetails(videoDetails[0]);
        }

        // Fetch next videos from API
        const nextVideosResponse = await axios.get(`${BASE_URL}/videos?api_key=${API_KEY}`);
        const nextVideosData = nextVideosResponse.data;

        if (nextVideosData.length > 0) {
          setNextVideos(nextVideosData);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }

    };

    fetchData();
  }, []);

  //  * Empty dependencies as we only want this to run on the initial load
  //  * to populate our initial video details and grab our upcomming videos
  //  */

  // Do I still need this? 
  // useEffect(() => {
  //   if (data != null) {
  //     setSelectedVideoDetails(data[0]);
  //   }
  //   if (videos != null) {
  //     setNextVideos(videos);
  //   }
  // }, []);


  // {BASE_URL}/videos:id?api_key=${API_KEY} -- how do i use this?? need the id

  // // Finds and stores the selected videos details
  const getVideoDetails = (videoId) => {
    // Get the selected video details
    const details = data?.find(({ id }) => id === videoId);

    if (details != null) {
      setSelectedVideoDetails(details);
    }
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
