import React from 'react';

function Random(props) {
  const { min, max } = props;

  return (
    <div className="random-container">
      <p>
        Random value between {min} and {max} {'=>'}{' '}
        {Math.floor(Math.random() * max) + min}
      </p>
    </div>
  );
}

export default Random;

// const {min, max} = props;

// random = Math.floor(Math.random() * max) + min;

// return (
//   <div className="random-container">
//     <p>
//       Random value between {min} and {max} => {random}
//     </p>
//   </div>
// );
