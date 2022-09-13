/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';

function Song3() {
  const song3 = new Audio('/songs/song3.mp3');
  const [playInLoop, setPlayInLoop] = useState(false);
  const [currentSong, setCurrentSong] = useState(song3);

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
    <Card style={{ width: '40rem' }}>
      <img variant="top" alt="sleep-pic" src="https://picsum.photos/500/150" />
      <Card.Body>
        <Card.Title>earth Song</Card.Title>
        <Card.Text>
          play earth song for a grounding experience putting you in touch with the divine mother
        </Card.Text>
      </Card.Body>
      <input type="button" className="btn" value="Play" onClick={playSound} />
      <input type="button" className="btn" value="Pause" onClick={pauseSound} />
      <input type="button" className="btn" value="Stop" onClick={stopSound} />

      <label>
        <input type="checkbox" checked={playInLoop} onChange={(e) => setPlayInLoop(e.target.checked)} /> Play in Loop
      </label>
    </Card>
  );
}

export default Song3;
