/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'react-bootstrap';
import viewThisSleepStudy from '../../../api/mergeData';
import SleepCard from '../../../components/SleepCard';
import DreamCard from '../../../components/DreamCard';

export default function ViewSleepStudy() {
  const [sleepStudy, setSleepStudy] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    viewThisSleepStudy(firebaseKey).then(setSleepStudy);
  }, [firebaseKey]);
  console.warn(sleepStudy);
  return (
    <>
      <Card className="title">
        <img variant="top" alt="titlePic" src="/images/title.jpg" />
      </Card>
      <div className="mt-5 d-flex flex-wrap">
        <h2>
          sleep study
        </h2>
        <div className="sleepStudyBox">
          <SleepCard scObj={sleepStudy} />
        </div>
        <div className="sleepStudyDreamBox">
          {sleepStudy.dreamCards?.map((dreamCard) => (
            <DreamCard
              key={dreamCard.firebaseKey}
              dcObj={dreamCard}
              onUpdate={() => {
                viewThisSleepStudy(firebaseKey).then(setSleepStudy);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}
