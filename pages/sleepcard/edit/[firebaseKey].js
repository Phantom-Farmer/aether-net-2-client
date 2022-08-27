import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleSleepCard } from '../../../api/sleepCardData';
import NewSleepCardForm from '../../../components/NewSleepCardForm';

export default function UpdateSleepCard() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // grab the firebasekey
  const { firebaseKey } = router.query;

  // make a call to the API to get the author data
  useEffect(() => {
    getSingleSleepCard(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // pass object to form
  return (<NewSleepCardForm obj={editItem} />);
}
