import { getDreamCardBySleepCardId } from './dreamCardData';
import { getSingleSleepCard } from './sleepCardData';

const viewThisSleepStudy = (scFirebaseKey) => new Promise((resolve, reject) => {
  getSingleSleepCard(scFirebaseKey)
    .then((scObj) => {
      getDreamCardBySleepCardId(scFirebaseKey)
        .then((dcObj) => {
          resolve({ dcObj, ...scObj });
        });
    }).catch((error) => reject(error));
});

export default viewThisSleepStudy;
