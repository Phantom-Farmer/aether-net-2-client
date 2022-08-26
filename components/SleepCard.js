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
    <Card style={{ width: '18rem', margin: '5px' }}>
      <Card.Body>
        <Card.Text>
          sleep card for: {scObj.timeStamp}
        </Card.Text>
        <div>mind: {scObj.mind}</div>
        <div>body: {scObj.body}</div>
        <div>meditation: {scObj.meditation}</div>
        <Link href="/" passHref>
          <Button variant="danger" onClick={deleteThisSleepCard} className="m-2">
            DELETE
          </Button>
        </Link>
      </Card.Body>
    </Card>
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
