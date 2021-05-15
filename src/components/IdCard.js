import React from 'react';

function IdCard(props) {
  const { picture, firstName, lastName, gender, height, birth } = props;
  return (
    <section className="id-container">
      <div>
        <img src={picture} />
      </div>
      <div>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height / 100}m</p>
        <p>Birth: {birth.toDateString()}</p>
      </div>
    </section>
  );
}

export default IdCard;
