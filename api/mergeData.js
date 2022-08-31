import { getSingleDreamCard } from './dreamCardData';
import { getSingleSleepCard } from './sleepCardData';

const viewThisSleepStudy = (dcFirebaseKey) => new Promise((resolve, reject) => {
  getSingleDreamCard(dcFirebaseKey)
    .then((dcObj) => {
      getSingleSleepCard(dcObj.sleepCardId)
        .then((scObj) => {
          resolve({ scObj, ...dcObj });
        });
    }).catch((error) => reject(error));
});

export default viewThisSleepStudy;
