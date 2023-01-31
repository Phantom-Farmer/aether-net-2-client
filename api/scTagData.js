import { clientCredentials } from '../utils/client';

const dbUrl = clientCredentials.databaseURL;

const getTagsBySC = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/sc_tag?sleep_card=${id}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteSCTag = (id) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/sc_tag/${id}`, {
    method: 'DELETE',
  })
    .then(resolve)
    .catch(reject);
});

const createSCTag = (scTag) => new Promise((resolve, reject) => {
  const scTagObj = {
    sleep_number_id: Number(scTag.postId),
    tag_id: Number(scTag.tagId),
  };
  fetch(`${dbUrl}/sc_tag`, {
    method: 'POST',
    body: JSON.stringify(scTagObj),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

export { getTagsBySC, deleteSCTag, createSCTag };
