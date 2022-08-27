import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteSingleSleepCard, updateSleepCard } from '../api/sleepCardData';

export default function SleepCard({ scObj, onUpdate }) {
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
            <h1>mind: {scObj.mind}</h1>
          </div>
          <div>
            <h2>body: {scObj.body}</h2>
          </div>
          <div>
            <h3>meditation: {scObj.meditation}</h3>
          </div>
          <Link href="/" passHref>
            <Button variant="danger" onClick={deleteThisSleepCard} className="m-2">
              DELETE
            </Button>
          </Link>
          <Link href="/" passHref>
            <Button variant="danger" onClick={updateSleepCard} className="m-2">
              UPDATE
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <br />
      <Card>
        <Card.Img variant="bottom" src="holder.js/100px180" />
        <Card.Body>
          <Card.Text>
            dream card
          </Card.Text>
          <Link href="/" passHref>
            <Button variant="danger" onClick={deleteThisSleepCard} className="m-2">
              DELETE
            </Button>
          </Link>
          <Link href={`/sleepcard/edit/${scObj.firebaseKey}`} passHref>
            <Button variant="danger" onClick={updateSleepCard} className="m-2">
              UPDATE
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
};
