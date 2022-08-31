import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDreamCard } from '../../../api/dreamCardData';
import NewDreamCardForm from '../../../components/NewDreamCardForm';

export default function UpdateDreamCard() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleDreamCard(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<NewDreamCardForm obj={editItem} />);
}
