/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { getSleepCardsByUid } from '../api/sleepCardData';
import SleepCard from '../components/SleepCard';
import { useAuth } from '../utils/context/authContext';

export default function Home() {
  const [sleepCards, setSleepCards] = useState([]);
  const { user } = useAuth();
  const getAllSleepCards = () => {
    getSleepCardsByUid(user.uid).then(setSleepCards);
  };

  useEffect(() => {
    getAllSleepCards(user.uid);
  }, [user.uid]);
  return (
    <div className="d-flex flex-wrap">
      {sleepCards.map((scObj) => (
        <SleepCard key={scObj.firebaseKey} scObj={scObj} onUpdate={getAllSleepCards} />
      ))}
    </div>
  );
}
