import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components
import Header from "../../components/header/Header";
import Video from "../../components/video/Video";
import VideoDetails from "../../components/video/VideoDetails";
import Comments from "../../components/comments/Comments";
import NextVideo from "../../components/video/NextVideo";

export default function Homepage() {
  const API_KEY = "257751fa-d1f7-4f35-98cc-aaeb7fd20b9a";
  const BASE_URL = "https://project-2-api.herokuapp.com/";

  const [nextVideos, setNextVideos] = useState([]);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState({});

  // // Set Next Videos from the list -- move this to Next Videos??
  useEffect(() => {
    axios
      .get(`${BASE_URL}videos?api_key=${API_KEY}`)
      .then((response) => {
        setNextVideos(response.data);
        console.log(response.data)
      })
      .then((response) => {
        if (response.data.length > 0) {
          setSelectedVideoDetails(response.data[0]);
        }
      }).catch((error) => {
        console.log("Error fetching video details:", error);
      });
  }, []);

  // // // Set Selected Video
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

  // Finds and stores the selected video's details
  const {id}= useParams();
  
  const getVideoDetails = (videoId) => {
    axios
      .get(`${BASE_URL}videos/${videoId}?api_key=${API_KEY}`)
      .then((response) => {
        setSelectedVideoDetails(response.data);

        // // initial state -- not working, fix this -- should this even be in here?
        if (response.data != null) {
          selectedVideoDetails(response.data[0]);
        }
        if (response.video != null) {
          setNextVideos(response.video);
        }
      })
      .catch((error) => {
        console.log("Error fetching video details:", error);
      });
  };

  return (
    <>
      <Header />
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
