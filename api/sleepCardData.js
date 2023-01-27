import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getSleepCardsByUid = () => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/sleep_card`)
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const createSleepCard = (scObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/sleepCards.json?`, scObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/sleepCards/${response.data.name}.json`, payload).then(() => {
        getSleepCardsByUid(scObj.uid).then((scArray) => resolve(scArray));
      });
    }).catch((error) => reject(error));
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
    .then(() => getSleepCardsByUid(scObj.uid)).then(resolve)
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
  getSleepCardsByUid,
  createSleepCard,
  getSingleSleepCard,
  deleteSingleSleepCard,
  updateSleepCard,
  getSleepCardDreamJournals,
  getSleepCardsByFav,

};
