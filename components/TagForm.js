/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import { FloatingLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { addTag, getTags, updateTag } from '../api/tagData';

const initialState = {
  label: '',
};

// eslint-disable-next-line react/prop-types
function TagForm({ object }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const [setTag] = useState([]);

  useEffect(() => {
    getTags().then(setTag);
    if (object.id) setFormInput(object);
  }, [object, setTag]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (object.id) {
      updateTag(formInput, object.id)
        .then(() => router.push('/tag'));
    } else {
      const payload = { ...formInput };
      addTag(payload).then(setFormInput(initialState));
    }
  };
  return (
    <Form className="form-floating" onSubmit={handleSubmit}>
      <h2 className="text-black mt-5">{object.id ? 'update' : 'create'} a tag</h2>
      <FloatingLabel controlId="floatingInput1" label="tag" className="m-3">
        <Form.Control type="text" placeholder="Label" name="label" value={formInput.label} onChange={handleChange} required />
      </FloatingLabel>
      <Button type="submit" className="m-3">{object.id ? 'Update' : 'create'} tag</Button>
    </Form>
  );
}

TagForm.propTypes = {
  object: PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
  }),
};

TagForm.defaultProps = {
  object: initialState,
};

export default TagForm;
