import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createDreamCard, updateDreamCard } from '../api/dreamCardData';

const initialState = {
  timeStamp: '',
  sleepReview: '',
  dreamJournal: '',
  firebaseKey: '',
};

export default function NewDreamCardForm({ obj, scFirebaseKey }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey)setFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateDreamCard(formInput)
        .then(() => router.push('/'));
    } else {
      const payload = {
        ...formInput, timeStamp: new Date().toLocaleString(), uid: user.uid, sleepCardId: scFirebaseKey,
      };
      createDreamCard(payload).then(() => {
        router.push('/dreamcard/dream-journal');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{obj.firebaseKey ? 'update' : 'create'} dream journal</h2>
      <FloatingLabel controlId="floatingInput2" label="sleep review" className="mb-3">
        <Form.Control type="text" placeholder="SLEEPREVIEW" name="sleepReview" value={formInput.sleepReview} onChange={handleChange} required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="dream journal" className="mb-3">
        <Form.Control type="text" placeholder="DREAMJOURNAL" name="dreamJournal" value={formInput.dreamJournal} onChange={handleChange} required />
      </FloatingLabel>
      <Button type="submit">{obj.firebaseKey ? 'update' : 'create'} dream journal</Button>
    </Form>
  );
}

NewDreamCardForm.propTypes = {
  obj: PropTypes.shape({
    timeStamp: PropTypes.string,
    sleepReview: PropTypes.string,
    dreamJournal: PropTypes.string,
    favorite: PropTypes.bool,
    sleepCardId: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  scFirebaseKey: PropTypes.string,
};

NewDreamCardForm.defaultProps = {
  obj: initialState,
  scFirebaseKey: '',
};
