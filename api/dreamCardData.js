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
  data = ({})
  fetch(`${dbUrl}/dream_journal`, {
    method: 'POST',
    body: JSON.stringify(dcObj),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const getSingleDreamCard = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/dream_journal/${id}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const deleteSingleDreamCard = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/dream_journal/${id}`, {
    method: 'DELETE',
  })
    .then(resolve)
    .catch(reject);
});

const updateDreamCard = (dcObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/dreamCards/${dcObj.firebaseKey}.json`, dcObj)
    .then(() => getDreamCardsByUid(dcObj.uid)).then(resolve)
    .catch(reject);
});

const getDreamCardBySleepCardId = (sleepCardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dreamCards.json?orderBy="sleepCardId"&equalTo="${sleepCardId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getDreamCardsByUid,
  createDreamCard,
  getSingleDreamCard,
  deleteSingleDreamCard,
  updateDreamCard,
  getDreamCardBySleepCardId,

};
