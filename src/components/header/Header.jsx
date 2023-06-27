import { Link } from "react-router-dom";
import "./Header.scss";

// Assets
import brainflixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import brainflixAvatar from "../../assets/images/avatar/Mohan-muruge.jpg";

export default function Header() {

  // TODO: add to uploadpage
  // Event handler for upload button
  // const uploadHandler = (event) => {
  //   event.preventDefault();
  // };

  // TODO:
  // Event handler for search input
  const searchHandler = (event) => {
    const searchTerm = event.target.value;
  };

  return (
    <header className="header">
        <Link  to="/" className="header__logo-index">
          <img
            className="header__logo"
            src={brainflixLogo}
            alt="BrainFlix Logo"
          />
      </Link>

      {/* remove upload handler here and move to upload page */}
        <form
          // onClick={(event) => uploadHandler(event)}
          className="header__form"
        >
          <div className="header__search-container">
            <input
              className="header__form--search"
              type="text"
              placeholder="Search"
              onChange={(event) => searchHandler(event)}
            ></input>
            <img
              className="header__form--avatar"
              src={brainflixAvatar}
              alt="BrainFlix Avatar"
            />
          </div>
          <Link to="/upload"> <button className="header__form--upload">Upload</button></Link>
          <img
            className="header__form--avatar-tablet"
            src={brainflixAvatar}
            alt="BrainFlix Avatar"
          />
        </form>
      </header>
  );
}
