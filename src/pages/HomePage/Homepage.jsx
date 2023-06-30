import { useState, useEffect } from "react";
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
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(null);

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

  useEffect(() => {
    axios
      .get(`${BASE_URL}videos?api_key=${API_KEY}`)
      .then((response) => {
        setNextVideos(response.data);

        // Get initial video details
        getVideoDetails(response.data?.[0]?.id);
      })
      .catch((error) => {
        console.log("Error fetching video details:", error);
      });
  }, []);


  if (!selectedVideoDetails || !nextVideos) {
    return <>Loading....</>;
  }

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