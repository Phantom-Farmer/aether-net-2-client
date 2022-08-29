import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteSingleSleepCard } from '../api/sleepCardData';

export default function SleepCard({ scObj, dcObj, onUpdate }) {
  const deleteThisSleepCard = () => {
    if (window.confirm('Are you sure?')) {
      deleteSingleSleepCard(scObj.firebaseKey).then(onUpdate);
    }
  };
  return (
    <>
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            sleep card for: {scObj.timeStamp}
          </Card.Text>
          <div>
            <h1>mind:</h1>
            <h3>{scObj.mind}</h3>
          </div>
          <div>
            <h1>body:</h1>
            <h3>{scObj.body}</h3>
          </div>
          <div>
            <h1>meditation:</h1>
            <h3>{scObj.meditation}</h3>
          </div>
          <Link href="/" passHref>
            <Button variant="danger" onClick={deleteThisSleepCard} className="m-2">
              delete
            </Button>
          </Link>
          <Link href={`/sleepcard/edit/${scObj.firebaseKey}`} passHref>
            <Button variant="danger" className="m-2">
              update
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img variant="bottom" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            when you wake up:
          </Card.Text>
          <div>
            <h1>sleep review:</h1>
            <h3>{dcObj.sleepReview}</h3>
          </div>
          <div>
            <h1>dream journal:</h1>
            <h3>{dcObj.dreamJournal}</h3>
          </div>
          <div>
            <h1>favorite: </h1>
          </div>
          <Link href={`dreamcard/new/${scObj.firebaseKey}`} passHref>
            <Button variant="danger" className="m-2">
              dream journal
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

SleepCard.propTypes = {
  scObj: PropTypes.shape({
    timeStamp: PropTypes.string,
    mind: PropTypes.string,
    body: PropTypes.string,
    meditation: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  dcObj: PropTypes.shape({
    timeStamp: PropTypes.string,
    sleepReview: PropTypes.string,
    dreamJournal: PropTypes.string,
    dreamId: PropTypes.string,
    favorite: PropTypes.bool,
  }),
};

SleepCard.defaultProps = {
  dcObj: PropTypes.shape({
    timeStamp: '',
    sleepReview: '',
    dreamJournal: '',
    dreamId: '',
    favorite: false,
  }),
};
