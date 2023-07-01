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
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(null);

  // TODO: on scroll when video is clicked 
  const { videoId } = useParams();

  const getVideoDetails = (videoId) => {
    axios
      .get(`${BASE_URL}videos/${videoId}?api_key=${API_KEY}`)
      .then((response) => {
        setSelectedVideoDetails(response.data);

        window.scrollTo({ top: 0, behavior: "smooth" });
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
        if (videoId) {
          getVideoDetails(videoId);
        } else {
          getVideoDetails(response.data?.[0]?.id);
        }
      })
      .catch((error) => {
        console.log("Error fetching video details:", error);
      });
  }, [videoId]);


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