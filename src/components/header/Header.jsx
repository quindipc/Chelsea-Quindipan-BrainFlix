import './Header.scss';
import brainflixLogo from "../../assets/images/logo/BrainFlix-logo.svg";
import brainflixAvatar from "../../assets/images/avatar/Mohan-muruge.jpg";

export default function Header() {
    return (
     <>
        <header className="header">
                <img
                    className="header__logo"
                    src={brainflixLogo} 
                    alt="BrainFlix Logo"
                />
                <form className="header__form">
                    <input className="header__form--search" type="text" placeholder="Search"></input>
                    <img
                        className="header__form--avatar"
                        src={brainflixAvatar} 
                        alt="BrainFlix Avatar"
                    />
                    <button className="header__form--upload">Upload</button>
                </form> 
      </header>
     </>
    );
  }