import React from 'react';

import AudioPlayer from 'react-h5-audio-player';

function PlayerControls() {
  return (
    <div className="playerControls">
      <AudioPlayer
        autoPlay
        src
        onPlay
       // other props here
        showSkipControls
      />
    </div>
  );
}
export default PlayerControls;
