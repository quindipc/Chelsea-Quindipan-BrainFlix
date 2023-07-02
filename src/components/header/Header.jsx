import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

// Assets
import brainflixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import brainflixAvatar from "../../assets/images/avatar/Mohan-muruge.jpg";

export default function Header() {
  const navigate = useNavigate(); 

  // Reset to Homepage with the initial video state when clicked
  const handleHistory = () => {
    navigate("/");
  }


  return (
    <>
    
    <header className="header">
      <Link to="/" className="header__logo-index" onClick={handleHistory}>
        <img
          className="header__logo" 
          src={brainflixLogo}
          alt="BrainFlix Logo"
        />
      </Link> 

      <form
        className="header__form"
      >
        <div className="header__search-container">
          <input
            className="header__form--search"
            type="text"
            placeholder="Search"
          ></input>
          <img
            className="header__form--avatar"
            src={brainflixAvatar}
            alt="BrainFlix Avatar"
          />
        </div>
        <Link to="/upload" className="header__form--upload">
          Upload
        </Link>
        <img
          className="header__form--avatar-tablet"
          src={brainflixAvatar}
          alt="BrainFlix Avatar"
        />
      </form>
      <hr className="header__divider--mobile" />
      </header>
      <hr className="header__divider--desktop" />
    </>
  );
}
