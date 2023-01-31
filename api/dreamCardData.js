import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getDreamCardsByUid = (id) => new Promise((resolve, reject) => {
  console.warn(id);
  fetch(`${dbUrl}/dream_journal?author=${id}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const createDreamCard = (dcObj) => new Promise((resolve, reject) => {
  const dreamObj = {
    time_stamp: dcObj.timeStamp,
    sleep_review: dcObj.sleepReview,
    dream: dcObj.dream,
    sleep_number: Number(dcObj.sleepNumberId),
    author: Number(dcObj.author),
  };
  fetch(`${dbUrl}/dream_journal`, {
    method: 'POST',
    body: JSON.stringify(dreamObj),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const getSingleDreamCard = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/dream_journal/${id}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        timeStamp: data.time_stamp,
        sleepReview: data.sleep_review,
        dream: data.dream,
        author: data.author,
        sleepNumberId: data.sleep_number,
      });
    })
    .catch((error) => reject(error));
});

const deleteSingleDreamCard = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/dream_journal/${id}`, {
    method: 'DELETE',
  })
    .then(resolve)
    .catch(reject);
});

const updateDreamCard = (dcObj, id) => new Promise((resolve, reject) => {
  const dreamObj = {
    time_stamp: dcObj.timeStamp,
    sleep_review: dcObj.sleepReview,
    dream: dcObj.dream,
    sleep_number: Number(dcObj.sleepNumberId),
    author: Number(dcObj.author),
  };
  fetch(`${dbUrl}/dream_journal/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dreamObj),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getDreamCardBySleepNumberId = (sleepNumberId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dream_journal?sleep_card${sleepNumberId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getDreamCardsByUid,
  createDreamCard,
  getSingleDreamCard,
  deleteSingleDreamCard,
  updateDreamCard,
  getDreamCardBySleepNumberId,

};
