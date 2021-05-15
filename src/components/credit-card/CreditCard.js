import React from 'react';
// import MasterCard from 'public/img/master-card.svg';
// import Visa from 'public/img/visa.png';

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const digitsShow = number.slice(-4);
  const cardType = {
    Visa: '/img/visa.png',
    'Master Card': '/img/master-card.svg',
  };
  const cardStyle = { backgroundColor: bgColor, color: color };

  return (
    <div className="credit-card-container" style={cardStyle}>
      <div>
        <img src={cardType[type]} />
      </div>
      <div>
        {'*'.repeat(12)} {digitsShow}
      </div>
      <div>
        <span>
          Expires{' '}
          {expirationMonth > 9 ? expirationMonth : `0${expirationMonth}`} /
          {expirationYear - 2000} - {bank}
        </span>
      </div>
      <div>{owner}</div>
    </div>
  );
}

export default CreditCard;

// function CreditCard(props) {
//   const {
//     type,
//     number,
//     expirationMonth,
//     expirationYear,
//     bank,
//     owner,
//     bgColor,
//     color,
//   } = props;

//   const digitsShow = number.slice(-4);
//   const cardType = {
//     visa: '/img/visa.png',
//     'Master Card': '/img/master-card.svg',
//   };

//   return (
//     <div
//       className="credit-card-container"
//       style={{ backgroundColor: bgColor, color: color }}
//     >
//       <div>
//         <img>{cardType[type]}</img>{' '}
//       </div>
//       <div>
//         {'*'.repeat(12)} {digitsShow}
//       </div>
//       <div>
//         <span>
//           Expires{' '}
//           {expirationMonth > 9 ? expirationMonth : `0${expirationMonth}`} /
//           {expirationYear - 2000} - {bank}
//         </span>
//       </div>
//       <div>{owner}</div>
//     </div>
//   );
// }
