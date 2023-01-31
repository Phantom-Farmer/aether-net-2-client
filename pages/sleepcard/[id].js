import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleSleepCard } from '../../api/sleepCardData';
import SleepCard from '../../components/SleepCard';

export default function ViewSleepCard() {
  const [viewSleepCard, setViewSleepCard] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleSleepCard(id).then(setViewSleepCard);
  }, [id]);

  return (
    <div className="d-flex flex-wrap">
      <SleepCard key={id} scObj={viewSleepCard} onUpdate={() => {}} />
    </div>
  );
}
