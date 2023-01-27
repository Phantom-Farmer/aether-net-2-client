/* eslint-disable @next/next/no-img-element */
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteSingleDreamCard } from '../api/dreamCardData';

export default function DreamCard({ dcObj, onUpdate }) {
  const deleteThisDreamCard = () => {
    if (window.confirm('Are you sure?')) {
      deleteSingleDreamCard(dcObj.id).then(onUpdate);
    }
  };
  return (
    <>
      <Card className="dc" style={{ width: '75rem' }}>
        <img alt="dream-pic" src="/images/dreamjournal.jpg" />
        <Card.Body style={{ backgroundColor: 'peachpuff' }}>
          <Card.Text>
            wake up: {dcObj.timeStamp}
          </Card.Text>
          <div className="dcText">
            <h4>- sleep review:</h4>
            <h3>{dcObj.sleep_review}</h3>
          </div>
          <div>
            <h4>- dream journal:</h4>
            <h3>{dcObj.dream}</h3>
          </div>
          <Link href="/dreamcard/dream_journal" passHref>
            <Button onClick={deleteThisDreamCard} className="m-2">
              delete
            </Button>
          </Link>
          <Link href={`/dreamcard/edit/${dcObj.id}`} passHref>
            <Button className="m-2">
              edit
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

DreamCard.propTypes = {
  dcObj: PropTypes.shape({
    id: PropTypes.number,
    timeStamp: PropTypes.string,
    sleep_review: PropTypes.string,
    dream: PropTypes.string,
    sleep_number_id: PropTypes.string,
    author_id: PropTypes.number,
    uid: PropTypes.string,
  }),
  onUpdate: PropTypes.func.isRequired,
};

DreamCard.defaultProps = {
  dcObj: PropTypes.shape({
    id: '',
    timeStamp: '',
    sleep_review: '',
    dream: '',
    sleep_number_id: '',
    author_id: '',
    uid: '',
  }),

};
