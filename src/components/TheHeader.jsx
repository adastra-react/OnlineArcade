import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";
import "../css/theheader.css";
function TheHeader() {
    return (
        <div className="about-nav">
        <header className="landingPage-header">
          <Link to="/">
            <Logo className="landingPage-logo" />
          </Link>
          <div className="links-container">
            {" "}
            <Link to="/">Home   </Link>{" "}
            <Link to="/about">About   </Link>{" "}
            <Link to="/login">Login   </Link>{" "}
            <Link to="/signup">
            <button className="landingPage-sign-up-button">
              Sign up
            </button>{" "}
            </Link>
          </div>
        </header>
      </div>
    )

}

export default TheHeader;