import { useState, useEffect } from "react";
import axios from "axios";
import "./NextVideo.scss";

// Components
import NextVideoItem from "./NextVideoItem";

export default function NextVideo({
  videos,
  getVideoDetails,
  selectedVideoDetails,
}) {
  // const [nextVideos, setNextVideos] = useState([]);

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

  return (
    <section className="nextvideo">
      <hr className="nextvideo__divider" />

      {/* Filter out the videos from the clicked one */}
      <h3 className="nextvideo__title">Next videos</h3>
      {videos
        .filter(({ id }) => id !== selectedVideoDetails?.id)
        .map(({ id, image, title, channel, video }) => (
          <NextVideoItem
            key={id}
            id={id}
            image={image}
            title={title}
            channel={channel}
            video={video}
            getVideoDetails={getVideoDetails}
          />
        ))}
    </section>
  );
}
