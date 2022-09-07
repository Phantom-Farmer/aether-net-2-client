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
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            when you wake up: {dcObj.timeStamp}
          </Card.Text>
          <div>
            <h1>sleep review:</h1>
            <h3>{dcObj.sleepReview}</h3>
          </div>
          <div>
            <h1>dream journal:</h1>
            <h3>{dcObj.dreamJournal}</h3>
          </div>
          <Link href="/" passHref>
            <Button variant="danger" onClick={deleteThisDreamCard} className="m-2">
              delete
            </Button>
          </Link>
          <Link href={`/dreamcard/edit/${dcObj.firebaseKey}`} passHref>
            <Button variant="danger" className="m-2">
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
