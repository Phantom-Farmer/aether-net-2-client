import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDreamCard } from '../../../api/dreamCardData';
import NewDreamCardForm from '../../../components/NewDreamCardForm';

export default function UpdateDreamCard() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  // grab the firebasekey
  const { firebaseKey } = router.query;

  // make a call to the API to get the author data
  useEffect(() => {
    getSingleDreamCard(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  // pass object to form
  return (<NewDreamCardForm obj={editItem} />);
}
