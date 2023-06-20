import "./Header.scss";
import brainflixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import brainflixAvatar from "../../assets/images/avatar/Mohan-muruge.jpg";

export default function Header() {
  const uploadHandler = (event) => {
    console.log(event);
    event.preventDefault();
  };

  const searchHandler = (event) => {
    const searchTerm = event.target.value;
    console.log("Search term:", searchTerm);
  };

  return (
    <>
      <header className="header">
        <a className="header__logo-index" href="../../index.js">
          <img
            className="header__logo"
            src={brainflixLogo}
            alt="BrainFlix Logo"
          />
        </a>
        <form
          onClick={(event) => uploadHandler(event)}
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
          <button className="header__form--upload">Upload</button>
          <img
            className="header__form--avatar-tablet"
            src={brainflixAvatar}
            alt="BrainFlix Avatar"
          />
        </form>
      </header>
    </>
  );
}
