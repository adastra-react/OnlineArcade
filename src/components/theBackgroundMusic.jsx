import React from "react";
import sound from "../audio/backgroundMusic.mp3";
import { useEffect, useState } from "react";
import { ReactComponent as Play } from "../images/play-button.svg";
import { ReactComponent as Pause } from "../images/pause.svg";
import "../css/audio.css";
function TheBackgroundMusic() {
  let playAudio = false;
  let playState = "Play";

  const audio = new Audio(sound);

  function play() {
    if (!playAudio) {
      audio.play();

    } else {
      audio.pause();
    }
    
    audio.addEventListener(
      "ended",
      function () {
        this.currentTime = 0;
        this.play();
      },
      false
    );
    
    playAudio = !playAudio;
  }

  let button;
  if (playAudio === true) {
    button = <Pause onClick={play} />;
  } else {
    button = <Play className='Playbtn' onClick={play} />;
  }

  useEffect(() => {
    // This gets called after every render, by default
    // (the first one, and every one after that)
    //   audio.play();

    // If you want to implement componentWillUnmount,
    // return a function from here, and React will call
    // it prior to unmounting.
    return () => console.log("unmounting...");
  });

  return <div className="audio">{button}</div>;
}

export default TheBackgroundMusic;
