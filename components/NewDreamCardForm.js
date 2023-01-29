import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { createDreamCard, updateDreamCard } from '../api/dreamCardData';
import { getSingleSleepCard } from '../api/sleepCardData';

const initialState = {
  timeStamp: '',
  sleepReview: '',
  dream: '',
};

export default function NewDreamCardForm({ obj, scId }) {
  const [formInput, setFormInput] = useState(initialState);
  const [sleepCard, setSleepCard] = useState({});
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    if (obj.firebaseKey)setFormInput(obj);
    getSingleSleepCard(scId).then((sc) => {
      setSleepCard(sc);
    });
    console.warn(sleepCard);
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
        .then(() => router.push('/dreamcard/dream-journal'));
    } else {
      const payload = {
        ...formInput, timeStamp: new Date().toLocaleString(), author: sleepCard.author.id, sleepNumber: scId,
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
        <Form.Control type="text" placeholder="SLEEPREVIEW" name="sleepReview" value={formInput.sleepReview} onChange={handleChange} as="textarea" aria-label="With textarea" required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="dream journal" className="mb-3">
        <Form.Control type="text" placeholder="DREAMJOURNAL" name="dream" value={formInput.dream} onChange={handleChange} as="textarea" aria-label="With textarea" required />
      </FloatingLabel>
      <Button type="submit">{obj.firebaseKey ? 'update' : 'create'} dream journal</Button>
    </Form>
  );
}

NewDreamCardForm.propTypes = {
  obj: PropTypes.shape({
    timeStamp: PropTypes.string,
    sleepReview: PropTypes.string,
    dream: PropTypes.string,
    author: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
  scId: PropTypes.number,
};

NewDreamCardForm.defaultProps = {
  obj: initialState,
  scId: undefined,
};
