import React from 'react';
import { useRouter } from 'next/router';
import NewDreamCardForm from '../../../components/NewDreamCardForm';

export default function NewDream() {
  const router = useRouter();
  const { firebaseKey } = router.query;
  console.warn(router);
  return (
    <NewDreamCardForm scFirebaseKey={firebaseKey} />
  );
}
