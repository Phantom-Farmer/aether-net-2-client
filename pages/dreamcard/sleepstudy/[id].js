/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import viewThisSleepStudy from '../../../api/mergeData';
// import SleepCard from '../../../components/SleepCard';
// import DreamCard from '../../../components/DreamCard';

export default function ViewSleepStudy() {
  const [sleepStudy, setSleepStudy] = useState({});
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    viewThisSleepStudy(id).then(setSleepStudy);
  }, [id]);

  return (
    <div className="mt-5 d-flex flex-wrap">
      <h2>
        sleep study
      </h2>
      <h5>
        {sleepStudy.scObj?.favorite ? ' 🤍' : ''}
      </h5>
      { /* <div className="sleepStudyBox">
        <SleepCard />
      </div>
      <div className="sleepStudyBox">
        <DreamCard />
  </div> */ }
    </div>
  );
}
