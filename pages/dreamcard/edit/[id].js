import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDreamCard } from '../../../api/dreamCardData';
import NewDreamCardForm from '../../../components/NewDreamCardForm';

export default function UpdateDreamCard() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleDreamCard(id).then(setEditItem);
  }, [id]);

  return (<NewDreamCardForm obj={editItem} />);
}
