/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Card from 'react-bootstrap/Card';

export default function MeditationPage() {
  return (
    <>
      <Card className="med">
        <img variant="top" alt="med-pic" src="/images/meditations.jpg" />
        <Card.Body className="medBox">
          <Card.Text>
            These are descriptions for the meditation options you will have when creating a new sleep card.
          </Card.Text>
          <div>
            <h1>meditation 1:</h1>
          </div>
          <div>
            <h1>meditation 2:</h1>
          </div>
          <div>
            <h1>meditation 3:</h1>
          </div>
          <div>
            <h1>meditation 4:</h1>
          </div>
        </Card.Body>
      </Card>
    </>

  );
}
