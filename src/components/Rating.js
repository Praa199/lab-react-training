import React from 'react';

function Rating(props) {
  const { children } = props;
  const roundedRating = Math.round(children);

  const starsEmpty = '☆☆☆☆☆';
  const starsFull = '★★★★★';

  return (
    <div>
      <p>
        {starsFull.slice(0, roundedRating)}
        {starsEmpty.slice(roundedRating)}{' '}
      </p>
    </div>
  );
}

export default Rating;
