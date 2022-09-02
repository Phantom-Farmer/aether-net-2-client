/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Player = () => (
  <div style={styles}>
    <ReactAudioPlayer
      src="public/resources/scr.mp3"
      autoPlay
      controls
    />
  </div>
);

export default Player;
