import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getSleepCardsByUserId = (uid) => new Promise((resolve, reject) => {
  console.warn(uid);
  fetch(`${dbUrl}/sleep_card?uid=${uid}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const createSleepCard = (scObj) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/sleep_card`, {
    method: 'POST',
    body: JSON.stringify(scObj),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const getSingleSleepCard = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/sleep_card/${id}`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const deleteSingleSleepCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/sleepCards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateSleepCard = (scObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/sleepCards/${scObj.firebaseKey}.json`, scObj)
    .then(() => getSleepCardsByUserId(scObj.uid)).then(resolve)
    .catch(reject);
});

const getSleepCardDreamJournals = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dreamCards.json?orderBy="sleepCardId"&equalTo="${firebaseKey}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSleepCardsByFav = (favorite) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/sleepCards.json?orderBy="favorite"&equalTo="${favorite.true}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getSleepCardsByUserId,
  createSleepCard,
  getSingleSleepCard,
  deleteSingleSleepCard,
  updateSleepCard,
  getSleepCardDreamJournals,
  getSleepCardsByFav,

};
