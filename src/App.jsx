// import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
// import axios from "axios";
import "./App.scss";

// Pages
import Homepage from "./pages/HomePage/Homepage";
import UploadPage from "./pages/UploadPage/UploadPage";

export default function App() {

  // Do I need 2 states?? 
  // const [nextVideos, setNextVideos] = useState([]);
  // const [selectedVideoDetails, setSelectedVideoDetails] = useState({});

  // const API_KEY = "257751fa-d1f7-4f35-98cc-aaeb7fd20b9a";
  // const BASE_URL = "https://project-2-api.herokuapp.com/";

  // // Set Next Videos from the list -- move this to Next Videos?? 
  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}videos?api_key=${API_KEY}`)
  //     .then((response) => {
  //       setNextVideos(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching next videos:", error);
  //     });
  // }, []);

  // // // Set Selected Video -- Move this to Video info/details? 
  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}videos?api_key=${API_KEY}`)
  //     .then((response) => {
  //       if (response.data.length > 0) {
  //         setSelectedVideoDetails(response.data[0]);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching selected video details:", error);
  //     });
  // }, []);

  // // Finds and stores the selected video's details
  // const getVideoDetails = (videoId) => {
  //   axios
  //     .get(`${BASE_URL}videos/${videoId}?api_key=${API_KEY}`)
  //     .then((response) => {
  //       setSelectedVideoDetails(response.data);

  //       // initial state -- not working, fix this -- should this even be in here? 
  //       if (response.data != null) {
  //         selectedVideoDetails(response.data[0]);
  //       }
  //       if (response.video != null) {
  //         setNextVideos(response.video);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching video details:", error);
  //     });
  // };


  // * Empty dependencies as we only want this to run on the initial load
  // * to populate our initial video details and grab our upcomming videos
  // */

  // Need to refactor this for initial load 
//  useEffect(() => {
//    if (data != null) {
//      setSelectedVideoDetails(data[0]);
//    }
//    if (videos != null) {
//      setNextVideos(videos);
//    }
//  }, []);

  const { } = useParams();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/video/:id" element={<Homepage/>} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>


      {/* <Video selected={selectedVideoDetails} />
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
      </div> */}
    </>
  );
}
