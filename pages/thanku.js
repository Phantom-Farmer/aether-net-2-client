/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Card from 'react-bootstrap/Card';

export default function thankyouPage() {
  return (
    <>
      <Card className="thanks">
        <img alt="thank-pic" src="/images/thankyou.jpg" />
        <Card.Body className="thankBox">
          <div>
            <h1>I want to sincerely thank all of you for being such wonderful people!</h1>
          </div>
        </Card.Body>
      </Card>
    </>

  );
}
