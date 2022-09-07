import { getDreamCardBySleepCardId } from './dreamCardData';
import { getSingleSleepCard } from './sleepCardData';

const viewThisSleepStudy = (scFirebaseKey) => new Promise((resolve, reject) => {
  getSingleSleepCard(scFirebaseKey)
    .then((scObj) => {
      getDreamCardBySleepCardId(scFirebaseKey)
        .then((dcObj) => {
          const dreamObj = dcObj[0];
          resolve({ dreamObj, ...scObj });
        });
    }).catch((error) => reject(error));
});

export default viewThisSleepStudy;
