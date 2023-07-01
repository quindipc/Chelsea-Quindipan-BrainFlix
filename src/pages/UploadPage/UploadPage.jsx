import { useNavigate } from "react-router-dom";
import { useState } from "react";

//Components
import Header from "../../components/header/Header";

//Assets
import thumbnail from "../../assets/images/thumbnail/Upload-video-preview.jpg";

export default function UploadPage() {
  const [showSuccess, setSuccess] = useState(false);
  const [showError, setError] = useState(false);
  const navigate = useNavigate();

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

    //Return to homepage
    setTimeout(() => {
      setSuccess(true);
      navigate("/");
    }, 3000);
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
    <>
      <Header />
      <h1 className="upload__title">Upload Video</h1>
      <h2 className="upload__subheader">Video Thumbnail</h2>
      <img className="upload__thumbnail" src={thumbnail} alt="bike thumbnail" />
      <form onSubmit={publishHandler}>
        <label className="upload__subheader" htmlFor="">
          Title Your Video
        </label>
        <input className="upload__input" type="text" name="title" />
        <label className="upload__subheader">Add a video description</label>
        <input className="upload__input" type="text" name="description" />
        {showError && <div>Please fill out all the fields</div>}
        <button type="submit">Publish</button>
        <button onClick={cancelHandler}>Cancel</button>
      </form>

      {showSuccess && (
        <div className="success-notification">Upload successful!</div>
      )}
    </>
  );
}
