import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleSleepCard } from '../../../api/sleepCardData';
import NewSleepCardForm from '../../../components/NewSleepCardForm';

export default function UpdateSleepCard() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleSleepCard(id).then(setEditItem);
  }, [id]);

  return (<NewSleepCardForm obj={editItem} />);
}
