import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';
import { createSleepCard, updateSleepCard } from '../api/sleepCardData';

const initialState = {
  id: '',
  timeStamp: '',
  mind: '',
  body: '',
  meditation: '',
  favorite: false,
};

export default function NewSleepCardForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();

  // const { user } = useAuth();

  useEffect(() => {
    if (obj.id)setFormInput(obj);
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

    const sleepObj = {
      id: formInput.id,
      timeStamp: formInput.timeStamp,
      mind: formInput.mind,
      body: formInput.body,
      meditation: formInput.meditation,
      favorite: formInput.favorite,
    };

    if (obj.id) {
      updateSleepCard(formInput)
        .then(() => router.push('/'));
    } else {
      createSleepCard(sleepObj).then(() => router.push('/events'));
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{obj.id ? 'update' : 'create'} sleepcard</h2>
      <FloatingLabel controlId="floatingInput2" label="mind" className="mb-3">
        <Form.Control type="text" placeholder="how does your mind feel?" name="mind" value={formInput.mind} onChange={handleChange} as="textarea" aria-label="With textarea" required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingInput2" label="body" className="mb-3">
        <Form.Control type="text" placeholder="how does your body feel?" name="body" value={formInput.body} onChange={handleChange} as="textarea" aria-label="With textarea" required />
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="meditation">
        <Form.Select name="meditation" value={formInput.meditation} onChange={handleChange} className="mb-3" required>
          <option disabled value="">
            select a meditation
          </option>
          <option value="chakra visualization method">chakra visualization method</option>
          <option value="goodnight everything method">goodnight everything method</option>
          <option value="make room for gratitude method">make room for gratitude method</option>
          <option value="custom meditation - choose your own adventure">custom meditation - choose your own adventure</option>
        </Form.Select>
      </FloatingLabel>
      <Form.Check
        className="text-black mb-3"
        type="switch"
        id="favorite"
        name="favorite"
        label="Favorite?"
        checked={formInput.favorite}
        onChange={(e) => setFormInput((prevState) => ({
          ...prevState,
          favorite: e.target.checked,
        }))}
      />
      <Button type="submit">{obj.id ? 'update' : 'create'} sleepcard</Button>
    </Form>
  );
}

NewSleepCardForm.propTypes = {
  obj: PropTypes.shape({
    id: PropTypes.number,
    timeStamp: PropTypes.string,
    mind: PropTypes.string,
    body: PropTypes.string,
    meditation: PropTypes.string,
    favorite: PropTypes.bool,
  }),
};

NewSleepCardForm.defaultProps = {
  obj: initialState,
};
