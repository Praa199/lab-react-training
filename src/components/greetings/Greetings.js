import React from 'react';
import './Greetings.css';

function Greetings(props) {
  const { lang, children } = props;
  let greeting = '';
  switch (lang) {
    case 'de':
      greeting = `Hallo ${children}`;
      console.log(greeting);
      break;
    case 'en':
      greeting = `Hello ${children}`;
      console.log(greeting);
      break;
    case 'es':
      greeting = `Hola ${children}`;
      console.log(greeting);
      break;
    case 'fr':
      greeting = `Bonjour ${children}`;
      console.log(greeting);
      break;
  }
  return (
    <p className="greetings-container">
      <h5>{greeting}</h5>
    </p>
  );

  //   return (
  //     <p className="greetings-container">
  //       <h5>Hello {props.children}</h5>
  //     </p>
  //   );
}

export default Greetings;
