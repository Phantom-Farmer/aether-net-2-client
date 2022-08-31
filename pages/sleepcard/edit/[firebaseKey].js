import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleSleepCard } from '../../../api/sleepCardData';
import NewSleepCardForm from '../../../components/NewSleepCardForm';

export default function UpdateSleepCard() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleSleepCard(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<NewSleepCardForm obj={editItem} />);
}
