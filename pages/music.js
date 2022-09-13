import React from 'react';
import Song1 from '../components/Song1';
import Song2 from '../components/Song2';
import Song3 from '../components/Song3';
import Song4 from '../components/Song4';

export default function PlayerPage() {
  return (
    <>
      <div>
        <h1>
          meditation music
        </h1>
        <div>
          <Song1 />
        </div>
        <div>
          <Song2 />
        </div>
        <div>
          <Song3 />
        </div>
        <div>
          <Song4 />
        </div>
      </div>
    </>
  );
}
