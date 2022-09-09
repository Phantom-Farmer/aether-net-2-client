import React, { useState } from 'react';
import MusicPlayer from '../components/MusicPlayer';

export default function Player() {
  const songs = useState([
    {
      title: 'song 1',
      artist: 'phantom farmer',
      src: './songs/song 1.mp3',
    },
    {
      title: 'song 2',
      artist: 'phantom farmer',
      src: './songs/song 2.mp3',
    },
    {
      title: 'song 3',
      artist: 'phantom farmer',
      src: './songs/.mp3',
    },
  ]);
  const currentSongIndex = useState(0);
  return (
    <div>
      <head>
        <title>aether-net music player</title>
      </head>
      <h1>sleep music</h1>
      <MusicPlayer
        song={songs[currentSongIndex]}
      />
    </div>
  );
}
