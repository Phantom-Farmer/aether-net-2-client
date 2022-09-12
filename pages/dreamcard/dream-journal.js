/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { getDreamCardsByUid } from '../../api/dreamCardData';
import DreamCard from '../../components/DreamCard';
import { useAuth } from '../../utils/context/authContext';

export default function DisplayDc() {
  const [dreamCards, setDreamCards] = useState([]);
  const { user } = useAuth();
  const getAllDreamCards = () => {
    getDreamCardsByUid(user.uid).then((scArray) => {
      setDreamCards(scArray);
    });
  };

  useEffect(() => {
    getAllDreamCards();
  }, [user.uid]);
  console.warn(dreamCards);
  return (
    <>
      <h2>
        dream journals
      </h2>
      <div className="d-flex flex-wrap">
        {dreamCards.map((dcObj) => (
          <DreamCard key={dcObj.firebaseKey} dcObj={dcObj} onUpdate={getAllDreamCards} />
        ))}
      </div>
    </>
  );
}
