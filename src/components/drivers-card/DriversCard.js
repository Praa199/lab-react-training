import React from 'react';
import Rating from '../rating/Rating';

function DriversCard(props) {
  const { name, rating, img, car } = props;
  const { model, licensePlate } = car;

  return (
    <div>
      <div>
        <img src={img} alt={`${name}'s photo`} />
      </div>
      <div>
        <h4>{name}</h4>
        <Rating children={rating} />
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriversCard;
