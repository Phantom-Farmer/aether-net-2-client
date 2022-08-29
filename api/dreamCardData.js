import axios from 'axios';
import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getDreamCardsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dreamCards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createDreamCard = (dcObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/dreamCards.json?`, dcObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/dreamCards/${response.data.name}.json`, payload).then(() => {
        getDreamCardsByUid(dcObj.uid).then((dcArray) => resolve(dcArray));
      });
    }).catch((error) => reject(error));
});

const getSingleDreamCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/dreamCards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteSingleDreamCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/dreamCards/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateDreamCard = (dcObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/dreamCards/${dcObj.firebaseKey}.json`, dcObj)
    .then(() => getDreamCardsByUid(dcObj.uid)).then(resolve)
    .catch(reject);
});

export {
  getDreamCardsByUid,
  createDreamCard,
  getSingleDreamCard,
  deleteSingleDreamCard,
  updateDreamCard,

};
