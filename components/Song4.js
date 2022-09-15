/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function Song4() {
  const song4 = new Audio('/songs/song4.mp3');
  const [playInLoop, setPlayInLoop] = useState(false);
  const [currentSong, setCurrentSong] = useState(song4);

  useEffect(() => {
    currentSong.load(setCurrentSong);
  }, []);

  useEffect(() => {
    currentSong.loop = playInLoop;
  }, [playInLoop]);

  const playSound = () => {
    currentSong.play();
  };

  const pauseSound = () => {
    currentSong.pause();
  };

  const stopSound = () => {
    currentSong.pause();
    currentSong.currentTime = 0;
  };
  return (
    <Card className="mc" style={{ width: '40rem' }}>
      <img variant="top" alt="sleep-pic" src="/images/water.jpg" />
      <Card.Body>
        <Card.Text>
          play water song for the light drizzle of soft rain or gentle flow of the ocean tide meeting the shoreline
        </Card.Text>
      </Card.Body>
      <div className="btnBox">
        <input type="button" className="bto" value="Play" onClick={playSound} />
        <input type="button" className="bto" value="Pause" onClick={pauseSound} />
        <input type="button" className="bto" value="Stop" onClick={stopSound} />
      </div>
      <label className="loop">
        <input type="checkbox" checked={playInLoop} onChange={(e) => setPlayInLoop(e.target.checked)} /> Play in Loop
      </label>
    </Card>
  );
}

export default Song4;
