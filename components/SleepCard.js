/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Card, Button } from 'react-bootstrap';
import { deleteSingleSleepCard } from '../api/sleepCardData';
import { getTagsBySC } from '../api/scTagData';

export default function SleepCard({ scObj, onUpdate }) {
  const [scTagsArray, setScTagsArray] = useState([]);
  const deleteThisSleepCard = () => {
    if (window.confirm('Are you sure you want to delete this sleep card and all corresponding dream journals?')) {
      deleteSingleSleepCard(scObj.id).then(onUpdate);
    }
  };

  useEffect(() => {
    getTagsBySC(scObj.id).then(setScTagsArray);
  }, [scObj.id]);
  return (
    <>
      <Card className="sc" style={{ width: '75rem' }}>
        <img alt="sleep-pic" src="/images/sleepcard.jpg" />
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
        </Card.Body>
        <Card.Footer className="cardFooter">
          <Link href="/" passHref>
            <Button onClick={deleteThisSleepCard} className="m-3">
              delete
            </Button>
          </Link>
          <Link href={`/sleepcard/edit/${scObj.id}`} passHref>
            <Button className="m-3">
              edit
            </Button>
          </Link>
          <Link href={`dreamcard/new/${scObj.id}`} passHref>
            <Button className="m-3">
              add dream journal
            </Button>
          </Link>
          <Link href={`sleepcard/sleepstudy/${scObj.id}`} passHref>
            <Button className="m-3">
              view this sleep study
            </Button>
          </Link>
          {scTagsArray.length > 0
            ? scTagsArray.map((scTag) => (
              <span key={scTag.id} className="badge text-bg-light">
                {scTag.tag_label}
              </span>
            ))
            : ''}
        </Card.Footer>
      </Card>
    </>
  );
}

SleepCard.propTypes = {
  scObj: PropTypes.shape({
    id: PropTypes.number,
    timeStamp: PropTypes.string,
    mind: PropTypes.string,
    body: PropTypes.string,
    meditation: PropTypes.string,
    favorite: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
