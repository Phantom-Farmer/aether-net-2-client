import { getSingleSleepCard, getSleepCardDreamJournals } from './sleepCardData';

const viewThisSleepStudy = (scId) => new Promise((resolve, reject) => {
  Promise.all([getSingleSleepCard(scId), getSleepCardDreamJournals(scId)])
    .then(([scObj, scDreamJournalsArray]) => {
      resolve({ ...scObj, dreamCards: scDreamJournalsArray });
    }).catch((error) => reject(error));
});

export default viewThisSleepStudy;
