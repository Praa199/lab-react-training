import React from 'react';
import './IdCard.css';

function IdCard(props) {
  console.log(props.birth);
  return (
    <section className="id-container">
      <div>
        <img src={props.picture} />
      </div>
      <div>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        {/* <p>Birth: {props.birth}</p> */}
      </div>
    </section>
  );
}

export default IdCard;
