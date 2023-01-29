// API calls for tags
/* eslint-disable import/prefer-default-export */
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

export const getTags = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/tag`).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export const getSingleTag = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/tag/${id}`).then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export const addTag = (tag) => new Promise((resolve, reject) => {
  const tagObj = {
    label: tag.label,
  };
  fetch(`${dbUrl}/tag`, {
    method: 'POST',
    body: JSON.stringify(tagObj),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((err) => reject(err));
});

export const updateTag = (tag, id) => new Promise((resolve, reject) => {
  const tagObj = {
    label: tag.label,
  };
  fetch(`${dbUrl}/tag/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tagObj),
  })
    .then((response) => resolve(response))
    .catch((err) => reject(err));
});

export const deleteTag = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/tags/${id}`, {
    method: 'DELETE',
  })
    .then(resolve)
    .catch(reject);
});
