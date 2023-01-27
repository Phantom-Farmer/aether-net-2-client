/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { React, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
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

  const sortedDC = (array) => {
    const orderedDCs = array.sort((a, b) => ((b.timeStamp > a.timeStamp) ? 1 : -1));
    return orderedDCs;
  };

  useEffect(() => {
    getAllDreamCards();
  }, [user.uid]);
  console.warn(dreamCards);
  return (
    <>
      <div className="container-fluid">
        <Card className="title" style={{ width: '75rem' }}>
          <img alt="titlePic" src="/images/title.jpg" />
        </Card>
      </div>
      <h2>
        dream journals
      </h2>
      <div className="d-flex flex-wrap">
        {sortedDC(dreamCards).map((dcObj) => (
          <DreamCard key={dcObj.id} dcObj={dcObj} onUpdate={getAllDreamCards} />
        ))}
      </div>
    </>
  );
}
