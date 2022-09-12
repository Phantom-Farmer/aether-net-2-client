/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteSingleSleepCard } from '../api/sleepCardData';

export default function SleepCard({ scObj, onUpdate }) {
  const deleteThisSleepCard = () => {
    if (window.confirm('Are you sure?')) {
      deleteSingleSleepCard(scObj.firebaseKey).then(onUpdate);
    }
  };
  return (
    <>
      <Card style={{ width: '75rem' }}>
        <img variant="top" alt="sleep-pic" src="https://picsum.photos/500/100" />
        <Card.Body>
          <Card.Text>
            sleep card for: {scObj.timeStamp}
          </Card.Text>
          <div>
            <h4>mind:</h4>
            <h3>{scObj.mind}</h3>
          </div>
          <div>
            <h4>body:</h4>
            <h3>{scObj.body}</h3>
          </div>
          <div>
            <h4>meditation:</h4>
            <h3>{scObj.meditation}</h3>
          </div>
          <p className="card-text bold">{scObj.favorite ? 'Favorite!' : '' }</p>
          <Link href="/" passHref>
            <Button variant="danger" onClick={deleteThisSleepCard} className="m-2">
              delete
            </Button>
          </Link>
          <Link href={`/sleepcard/edit/${scObj.firebaseKey}`} passHref>
            <Button variant="danger" className="m-2">
              edit
            </Button>
          </Link>
          <Link href={`dreamcard/new/${scObj.firebaseKey}`} passHref>
            <Button variant="danger" className="m-2">
              add dream journal
            </Button>
          </Link>
          <Link href={`sleepcard/sleepstudy/${scObj.firebaseKey}`} passHref>
            <Button variant="danger" className="m-2">
              view this sleep study
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
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
