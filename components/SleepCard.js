/* eslint-disable @next/next/no-img-element */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteScDreamCards } from '../api/mergeData';

export default function SleepCard({ scObj, onUpdate }) {
  const deleteThisSleepCard = () => {
    if (window.confirm('Are you sure you want to delete this sleep card and all corresponding dream journals?')) {
      deleteScDreamCards(scObj.firebaseKey).then(onUpdate);
    }
  };
  return (
    <>
      <Card className="sc" style={{ width: '75rem' }}>
        <img variant="top" alt="sleep-pic" src="/images/sleepcard.jpg" />
        <Card.Body style={{ backgroundColor: 'lightblue' }}>
          <Card.Text>
            sleep card for: {scObj.timeStamp}
          </Card.Text>
          <div>
            <h4>- mind:</h4>
            <h3>{scObj.mind}</h3>
          </div>
          <div>
            <h4>- body:</h4>
            <h3>{scObj.body}</h3>
          </div>
          <div>
            <h4>- meditation:</h4>
            <h3>{scObj.meditation}</h3>
          </div>
          <p className="card-text bold">{scObj.favorite ? 'Favorite!' : '' }</p>
          <Link href="/" passHref>
            <Button onClick={deleteThisSleepCard} className="m-3">
              delete
            </Button>
          </Link>
          <Link href={`/sleepcard/edit/${scObj.firebaseKey}`} passHref>
            <Button className="m-3">
              edit
            </Button>
          </Link>
          <Link href={`dreamcard/new/${scObj.firebaseKey}`} passHref>
            <Button className="m-3">
              add dream journal
            </Button>
          </Link>
          <Link href={`sleepcard/sleepstudy/${scObj.firebaseKey}`} passHref>
            <Button className="m-3">
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
