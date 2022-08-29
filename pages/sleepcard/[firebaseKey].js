import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleSleepCard } from '../../api/sleepCardData';
import SleepCard from '../../components/SleepCard';

export default function ViewSleepCard() {
  const [viewSleepCard, setViewSleepCard] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleSleepCard(firebaseKey).then(setViewSleepCard);
  }, [firebaseKey]);

  return (
    <div className="d-flex flex-wrap">
      <SleepCard key={firebaseKey} scObj={viewSleepCard} />
    </div>
  );
}
