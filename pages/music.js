import { useEffect, useState } from 'react';

function Music() {
  const song1 = new Audio('/songs/song1.mp3');
  const [playInLoop, setPlayInLoop] = useState(false);
  const [currentSong, setCurrentSong] = useState(song1);

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
    <div className="Sounds">
      <div>
        <button type="button">
          song1
        </button>
        <button type="button">
          song2
        </button>
        <button type="button">
          song3
        </button>

      </div>
      <input type="button" className="btn btn-primary mr-2" value="Play" onClick={playSound} />
      <input type="button" className="btn btn-primary mr-2" value="Pause" onClick={pauseSound} />
      <input type="button" className="btn btn-primary mr-2" value="Stop" onClick={stopSound} />

      <label>
        <input type="checkbox" checked={playInLoop} onChange={(e) => setPlayInLoop(e.target.checked)} /> Play in Loop
      </label>
    </div>
  );
}

export default Music;
