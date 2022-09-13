import { getSingleSleepCard, getSleepCardDreamJournals } from './sleepCardData';

const viewThisSleepStudy = (scFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleSleepCard(scFirebaseKey), getSleepCardDreamJournals(scFirebaseKey)])
    .then(([scObj, scDreamJournalsArray]) => {
      resolve({ ...scObj, dreamCards: scDreamJournalsArray });
    }).catch((error) => reject(error));
});

export default viewThisSleepStudy;
