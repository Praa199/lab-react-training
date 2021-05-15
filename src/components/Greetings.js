import React from 'react';

const greetings = {
  fr: 'Salut',
  en: 'Hello',
  de: 'Hallo',
  es: 'Hola',
};

function Greetings(props) {
  const { lang, children } = props;
  // let greeting = '';
  // switch (lang) {
  //   case 'de':
  //     greeting = `Hallo ${children}`;
  //     break;
  //   case 'en':
  //     greeting = `Hello ${children}`;
  //     break;
  //   case 'es':
  //     greeting = `Hola ${children}`;
  //     break;
  //   case 'fr':
  //     greeting = `Bonjour ${children}`;
  //     break;
  // }
  return (
    <div className="greetings-container">
      <p>
        {greetings[lang]} {children}
      </p>
    </div>
  );
}

export default Greetings;
