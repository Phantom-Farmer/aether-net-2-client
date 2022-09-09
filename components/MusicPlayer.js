import React from 'react';
import MusicPlayerDetails from './MusicPlayerDetails';
import MusicPlayerControls from './MusicPlayerControls';

function MusicPlayer() {
  return (
    <div className="musicPlayer">
      <audio><track kind="captions" /></audio>
      <h4>Playing now</h4>
      <MusicPlayerDetails />
      <MusicPlayerControls />
    </div>
  );
}
export default MusicPlayer;
