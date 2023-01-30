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
  const [sleepCardNumber, setSleepCardNumber] = useState(null);
  const router = useRouter();

  const { user } = useAuth();

  useEffect(() => {
    if (obj.id) {
      setFormInput(obj);
      setSleepCardNumber(obj.sleepNumberId.id);
    } else {
      getSingleSleepCard(scId).then((sc) => {
        setSleepCard(sc);
      });
    }
  }, [obj]);

  useEffect(() => {
    console.warn(sleepCardNumber);
  }, [sleepCardNumber]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dreamObj = {
      id: formInput.id,
      timeStamp: formInput.timeStamp,
      sleepReview: formInput.sleepReview,
      dream: formInput.dream,
      author: user.id,
      sleepNumberId: sleepCardNumber,
    };
    if (obj.id) {
      updateDreamCard(dreamObj, obj.id)
        .then(() => router.push('/dreamcard/dream_journal'));
    } else {
      const payload = {
        ...formInput, timeStamp: new Date().toLocaleString(), author: sleepCard.author.id, sleepNumberId: sleepCard.id,
      };
      createDreamCard(payload).then(() => {
        router.push('/dreamcard/dream_journal');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{obj.id ? 'update' : 'create'} dream journal</h2>
      <FloatingLabel controlId="floatingInput2" label="sleep review" className="mb-3">
        <Form.Control type="text" placeholder="SLEEPREVIEW" name="sleepReview" value={formInput.sleepReview} onChange={handleChange} as="textarea" aria-label="With textarea" required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="dream journal" className="mb-3">
        <Form.Control type="text" placeholder="DREAMJOURNAL" name="dream" value={formInput.dream} onChange={handleChange} as="textarea" aria-label="With textarea" required />
      </FloatingLabel>
      <Button type="submit">{obj.id ? 'update' : 'create'} dream journal</Button>
    </Form>
  );
}

NewDreamCardForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    timeStamp: PropTypes.string,
    sleepReview: PropTypes.string,
    dream: PropTypes.string,
    author: PropTypes.number,
    sleepNumberId: PropTypes.number,
  }),
  scId: PropTypes.number,
};

NewDreamCardForm.defaultProps = {
  obj: initialState,
  scId: '',
};
