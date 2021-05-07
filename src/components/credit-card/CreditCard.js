import React from 'react';
import './CreditCard.css';

function CreditCard(props) {
  return (
    <div
      className="credit-card-container"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div>
        <h4>{props.type}</h4>{' '}
      </div>
      <div>{props.number}</div>
      <div>
        <span>
          Expires {props.expirationMonth}/{props.expirationYear}{' '}
        </span>
        <span>{props.bank}</span>
      </div>
      <div>{props.owner}</div>
    </div>
  );
}

export default CreditCard;

// props.type="Visa"
// props.number="0123456789018845"
// props.expirationMonth={3}
// props.expirationYear={2021}
// props.bank="BNP"
// props.owner="Maxence Bouret"
// props.bgColor="#11aa99"
// props.color="white"
