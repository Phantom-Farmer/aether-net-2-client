import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getSleepCardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/sleepCards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
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

const getSingleSleepCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/sleepCards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
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

export {
  getSleepCardsByUid,
  createSleepCard,
  getSingleSleepCard,
  deleteSingleSleepCard,
  updateSleepCard,

};
