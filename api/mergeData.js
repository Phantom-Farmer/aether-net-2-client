import { deleteSingleDreamCard } from './dreamCardData';
import { deleteSingleSleepCard, getSingleSleepCard, getSleepCardDreamJournals } from './sleepCardData';

const viewThisSleepStudy = (scFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleSleepCard(scFirebaseKey), getSleepCardDreamJournals(scFirebaseKey)])
    .then(([scObj, scDreamJournalsArray]) => {
      resolve({ ...scObj, dreamCards: scDreamJournalsArray });
    }).catch((error) => reject(error));
});

const deleteScDreamCards = (sleepCardId) => new Promise((resolve, reject) => {
  getSleepCardDreamJournals(sleepCardId).then((dcArray) => {
    console.warn(dcArray, 'these dream journals');
    const deleteDcPromises = dcArray.map((dreamCard) => deleteSingleDreamCard(dreamCard.firebaseKey));

    Promise.all(deleteDcPromises).then(() => {
      deleteSingleSleepCard(sleepCardId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewThisSleepStudy, deleteScDreamCards };
