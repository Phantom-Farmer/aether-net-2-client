/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import AudioPlayer from 'react-mp3';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const Player = () => {
  { /* const [songs, setSongs] = useState([
    {
      title: '$orries',
      artist: 'Peachy!',
      album: ' Shiloh',
      track: '$orries',
      year: '1',
      img_src: './songs_images/$orries_Cover (front)_e.jpg',
      src: './songs/$orries.mp3',
    },
  ]); */ }
  return (
    <>
      <div className="audio-player">
        Music Player
      </div>
      <div style={styles}>
        <AudioPlayer
          src="public/resources/scr.mp3"
          autoPlay
          controls
        />
      </div>
    </>
  );
};

export default Player;
