import "../css/about.css";
import TheAuthHeader from "./TheAuthHeader";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Ig } from "../images/instagram.svg";
import { ReactComponent as Fb } from "../images/facebook.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from '../components/sidebar';
import TheBackgroundMusic from "../components/theBackgroundMusic";

const FORMSPARK_ACTION_URL = "https://submit-form.com/ySTGL23j";

function About() {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState("");
  let [message, setMessage] = useState("");

  let submitted = false;
  const textName = React.useRef();
  const textEmail = React.useRef();
  const textPhone = React.useRef();
  const textMessage = React.useRef();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (email && name && phone && message.length > 9 && !submitted) {
      await fetch(FORMSPARK_ACTION_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          name,
          phone,
          message,
        }),
      });
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");

      textName.current.value = "";
      textEmail.current.value = "";
      textPhone.current.value = "";
      textMessage.current.value = "";

      submitted = true;

      alert("Form submitted");
    } else if (message.length < 10) {
      alert("Message should be more than 10 characters");
    } else if (submitted === true) {
      alert("Already Submitted");
    } else {
      alert("Failed Submission");
    }
  };

  return (
    <section className="about-page">
      <TheAuthHeader />
      <div className="about-page-background">
        <h1>About Us</h1>
      </div>
      <div className="about-info">
        <div>
          <h2>Majestic Arcade</h2>
          <p>
            If you love playing the most exciting arcade games, you have come to
            the right spot. Majestic Arcade offers a wide variety of games which
            includes, slots, blackjack, roulette, bingo just to name a few. We
            guarantee the best online experience as you play to your heart’s
            desires.{" "}
          </p>

          <p>
            With your smart phone, tablet or Pc you can play all your favorite
            games without any restrictions other than an internet connection.
          </p>
          <p>
            Majestic Arcade website offers high quality arcade games, with
            creative and exceptional graphics. Our core focus is our users
            experience for each player. With the convince of playing your
            favorite arcade games, anywhere, anytime and always online, players
            get the chance to level up on their skills as the have a variety of
            options to choose from.
          </p>
          <p>
            With a seamless interface and very user-friendly dashboard, players
            feel right at home enjoying every minute of the game. All our games
            are entertaining, and they allow you to earn cash by using your
            skills.
          </p>
        </div>
        <div>
          <h3>Signup</h3>
          <p>
            You can sign up to play Majestic Arcade games with just a few
            clicks. Click on the <Link to='/login'>Signup</Link> Button and enter your information.
          </p>
        </div>
        <div>
          <h3>LEGALITY</h3>
          <p>
            Majestic Arcade is an online arcade game provider that offers fully
            licensed games. So, no need to worry about the legal issues because
            all arcade games are perfectly legal to play in almost every state.
            The exceptions are Washington DC and Washington State.
          </p>
        </div>
        <div>
          <h3>Technical Support</h3>
          <p>
            We at Majestic Arcade provide our customers with 24hr service to
            assist with any issue that they may face while signing up or playing
            the games.{" "}
          </p>
        </div>
        <div>
          <h3>Privacy Policy</h3>
          <p>
            We, at Majestic Arcade, respect your privacy and are committed to
            protect the privacy of our users. Please visit our{" "}
            <Link to="/privacy">Privacy Policy</Link> page to learn more.
          </p>
        </div>
        <div>
          <h3> Contact Us</h3>
          <form className="about-contact-form" onSubmit={onSubmit}>
            <input
              ref={textName}
              className="contact-a"
              placeholder="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              ref={textEmail}
              className="contact-b"
              placeholder="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              ref={textPhone}
              className="contact-c"
              placeholder="Phone Number"
              type="tel"
              minLength="10"
              pattern="[0-9]{10}"
              maxLength="10"
              title="Ten-digit dialing"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />{" "}
            <textarea
              type="text"
              ref={textMessage}
              placeholder="Message"
              className="contact-d"
              name="Message"
              minLength="5"
              pattern=".{5,}"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button className="contact-e landingPage-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      <footer className="lpfooter">
        <a href="https://www.instagram.com/majesticarcade/" target="_blank">
          {" "}
          <div className="socialBg">
            {" "}
            <Ig className="social" />
          </div>
        </a>
        <a
          href="https://www.facebook.com/majesticarcadesm/?business_id=132384572356014"
          target="_blank"
        >
          {" "}
          <div className="socialBg">
            {" "}
            <Fb className="social" />
          </div>
        </a>
      </footer>
      <TheBackgroundMusic />
      <Sidebar />
    </section>
  );
}

export default About;
