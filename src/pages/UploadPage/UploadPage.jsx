import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./UploadPage.scss";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

//Assets
import thumbnail from "../../assets/images/thumbnail/Upload-video-preview.jpg";

export default function UploadPage() {
  const [showSuccess, setSuccess] = useState(false);
  const [showError, setError] = useState(false);
  const navigate = useNavigate();
  const BASE_URL = "http://localhost:8000/";

  const publishHandler = (event) => {
    event.preventDefault();

    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;

    // Error handling for empty fields
    if (title.trim() === "" || description.trim() === "") {
      setError(true);
      return;
    }

    setError(false);

    // Data for POST request
    const data = {
      title: title,
      description: description,
      channel: "Chelsea Quindipan",
      image: "/images/thumbnail.jpg",
      likes: 1000000,
      views: 1000000,
      timestamp: Date.now(),
      comments: [
        {
          id: uuidv4(),
          name: "Jon Doe",
          comment:
            "This video is absolutely amazing! I can't stop watching it. Great job!",
          likes: 10,
          timestamp: 1688740879,
        },
        {
          id: uuidv4(),
          name: "Jane Doe",
          comment:
            "I'm so inspired by this video. It's incredibly well-made. Keep up the good work!",
          likes: 5,
          timestamp: 1688740879,
        },
        {
          id: uuidv4(),
          name: "Jonane DoeDoe",
          comment:
            "This was a cool video, I guess. I could film one better than this.",
          likes: 0,
          timestamp: 1688740877,
        },
      ],
    };

    //POST request to server
    axios
      .post(`${BASE_URL}videos`, data)
      .then((response) => {
        console.log("Video uploaded!", response.data);
        // Return to homepage
        setTimeout(() => {
          setSuccess(true);
          navigate("/");
        }, 3000);
      })
      .catch((error) => {
        console.log("Error uploading video:", error);
        setError(true);
      });
    setSuccess(true);
  };

  const cancelHandler = (event) => {
    event.preventDefault();

    const confirmCancel = window.confirm(
      "Are you sure you would like to cancel?",
    );

    if (confirmCancel) {
      navigate("/");
    }
  };

  return (
      <div className="upload">
        <hr className="upload__divider--mobile" />
        <h1 className="upload__title">Upload Video</h1>
        <hr className="upload__divider--desktop" />
        <div className="upload__container--desktop">
          <div className="upload__container">
            <h2 className="upload__label">Video Thumbnail</h2>
            <img
              className="upload__thumbnail"
              src={thumbnail}
              alt="bike thumbnail"
            />
          </div>
          <form className="upload__form" onSubmit={publishHandler}>
            <label className="upload__label" htmlFor="">
              Title Your Video
            </label>
            <input
              className="upload__input upload__input--title"
              type="text"
              name="title"
              placeholder="Add a title to your video"
            />
            <label className="upload__label">Add a video description</label>
            <input
              className="upload__input upload__input--description"
              type="text"
              name="description"
              placeholder="Add a description to your video"
            />
            {showError && (
              <div className="upload__error">
                Please fill out all the fields.
              </div>
            )}
            <hr className="upload__divider--tablet" />
            <div className="upload__container--form">
              <div className="upload__container--actions">
                <button className="upload__publish" type="submit">
                  Publish
                </button>
                <p className="upload__cancel" onClick={cancelHandler}>
                  Cancel
                </p>
              </div>
            </div>
          </form>
          {showSuccess && (
            <div className="upload__success">Upload successful!</div>
          )}
        </div>
        {showSuccess && (
          <div className="upload__success--desktop">Upload successful!</div>
        )}
        <hr className="upload__divider--form" />
      </div>
  );
}
