import { useEffect, useState } from 'react';

function Music2() {
  const song1 = new Audio('/songs/song1.mp3');
  const [playInLoop, setPlayInLoop] = useState(false);

  useEffect(() => {
    song1.load();
  }, []);

  useEffect(() => {
    song1.loop = playInLoop;
  }, [playInLoop]);

  const playSound = () => {
    song1.play();
  };

  const pauseSound = () => {
    song1.pause();
  };

  const stopSound = () => {
    song1.pause();
    song1.currentTime = 0;
  };

  return (
    <div className="Sounds">
      <input type="button" className="btn btn-primary mr-2" value="Play" onClick={playSound} />
      <input type="button" className="btn btn-primary mr-2" value="Pause" onClick={pauseSound} />
      <input type="button" className="btn btn-primary mr-2" value="Stop" onClick={stopSound} />

      <label>
        <input type="checkbox" checked={playInLoop} onChange={(e) => setPlayInLoop(e.target.checked)} /> Play in Loop
      </label>
    </div>
  );
}

export default Music2;
