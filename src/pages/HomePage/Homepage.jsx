import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Components
import Header from "../../components/Header/Header";
import Video from "../../components/Video/Video";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import Comments from "../../components/Comments/Comments";
import NextVideo from "../../components/NextVideo/NextVideo";

export default function Homepage() {
  const BASE_URL = "http://localhost:8000/";

  const [nextVideos, setNextVideos] = useState([]);
  const [selectedVideoDetails, setSelectedVideoDetails] = useState(null);

  const { id } = useParams();

  const getVideoDetails = (videoId) => {
    axios
      .get(`${BASE_URL}videos/${videoId}`)
      .then((response) => {
        setSelectedVideoDetails(response.data);

        // Scroll to top when a video is clicked
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        console.log("Error fetching video details:", error);
      });
  };
  
  useEffect(() => {
    axios
      .get(`${BASE_URL}videos`)
      .then((response) => {
        setNextVideos(response.data);
        // Get initial video details
        if (id) {
          getVideoDetails(id);
        } else {
          getVideoDetails(response.data?.[0]?.id);
        }
      })
      .catch((error) => {
        console.log("Error fetching video details:", error);
      });
  }, [id]);

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
