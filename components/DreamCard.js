/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteSingleDreamCard } from '../api/dreamCardData';

export default function DreamCard({ dcObj, onUpdate }) {
  const deleteThisDreamCard = () => {
    if (window.confirm('Are you sure?')) {
      deleteSingleDreamCard(dcObj.firebaseKey).then(onUpdate);
    }
  };
  return (
    <>
      <Card className="dc" style={{ width: '75rem' }}>
        <img variant="top" alt="dream-pic" src="/images/dreamjournal.jpg" />
        <Card.Body style={{ backgroundColor: 'peachpuff' }}>
          <Card.Text>
            wake up: {dcObj.timeStamp}
          </Card.Text>
          <div>
            <h4>sleep review:</h4>
            <h3>{dcObj.sleepReview}</h3>
          </div>
          <div>
            <h4>dream journal:</h4>
            <h3>{dcObj.dreamJournal}</h3>
          </div>
          <Link href="/dreamcard/dream-journal" passHref>
            <Button onClick={deleteThisDreamCard} className="m-2">
              delete
            </Button>
          </Link>
          <Link href={`/dreamcard/edit/${dcObj.firebaseKey}`} passHref>
            <Button className="m-2">
              update
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

DreamCard.propTypes = {
  dcObj: PropTypes.shape({
    timeStamp: PropTypes.string,
    sleepReview: PropTypes.string,
    dreamJournal: PropTypes.string,
    sleepCardId: PropTypes.string,
    firebaseKey: PropTypes.string,
    uid: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
};

DreamCard.defaultProps = {
  dcObj: PropTypes.shape({
    timeStamp: '',
    sleepReview: '',
    dreamJournal: '',
    sleepCardId: '',
    firebaseKey: '',
    uid: '',
  }),

};
