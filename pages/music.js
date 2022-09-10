import useSound from 'use-sound';
import { Button } from 'react-bootstrap';
import song1 from '../public/songs/song1.mp3';

const Song1Button = () => {
  const [play] = useSound(song1);

  return <Button type="basic" onClick={play}>song1</Button>;
};

export default Song1Button;
