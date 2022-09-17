/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import Head from 'next/head';
import { Card } from 'react-bootstrap';
import { getSleepCardsByUid } from '../api/sleepCardData';
import SleepCard from '../components/SleepCard';
import { useAuth } from '../utils/context/authContext';

  <Head>
    <meta charset="UTF-8" />
    <meta name="keywords" content="title, meta, nextjs" />
    <meta name="author" content="joel mcanulty" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>aether-net</title>
  </Head>;

export default function Home() {
  const [sleepCards, setSleepCards] = useState([]);
  const { user } = useAuth();
  const getAllSleepCards = () => {
    getSleepCardsByUid(user.uid).then((scArray) => {
      setSleepCards(scArray);
    });
  };

  const sortedSC = (array) => {
    const orderedSCs = array.sort((a, b) => ((b.timeStamp > a.timeStamp) ? 1 : -1));
    return orderedSCs;
  };

  useEffect(() => {
    document.title = 'aether-net';
  }, []);

  useEffect(() => {
    getAllSleepCards();
  }, [user.uid]);
  console.warn(sleepCards);
  return (
    <>
      <div className="container-fluid">
        <Card className="title" style={{ width: '75rem' }}>
          <img alt="titlePic" src="/images/title.jpg" />
        </Card>
      </div>
      <h2>
        sleep cards
      </h2>
      <div className="d-flex flex-wrap">
        {sortedSC(sleepCards).map((scObj) => (
          <SleepCard key={scObj.firebaseKey} scObj={scObj} onUpdate={getAllSleepCards} />
        ))}
      </div>
    </>
  );
}
