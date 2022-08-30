import { getSingleSleepCard } from './sleepCardData';
import { getDreamCardBySleepCardId } from './dreamCardData';

const getDreamCardOnSleepCard = (scFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleSleepCard(scFirebaseKey),
    getDreamCardBySleepCardId(scFirebaseKey)])
    .then(([scObj, dcObj]) => {
      resolve({ ...scObj, dcObj });
    }).catch((error) => reject(error));
});

export default getDreamCardOnSleepCard;
