import axios from 'axios';
import { clientCredentials } from '../../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getSongsByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/songs.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    })
    .catch((error) => reject(error));
});

const createSongs = (songObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/songs.json?`, songObj)
    .then((response) => {
      const payload = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/songs/${response.data.name}.json`, payload).then(() => {
        getSongsByUid(songObj.uid).then((songArray) => resolve(songArray));
      });
    }).catch((error) => reject(error));
});

const getSingleSong = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/songs/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const deleteSingleSong = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/songs/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const updateSong = (songObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/songs/${songObj.firebaseKey}.json`, songObj)
    .then(() => getSongsByUid(songObj.uid)).then(resolve)
    .catch(reject);
});

export {
  getSongsByUid,
  createSongs,
  getSingleSong,
  deleteSingleSong,
  updateSong,

};
