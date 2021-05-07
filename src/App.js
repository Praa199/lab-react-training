import React from 'react';
import logo from './logo.svg';
import './App.css';

import IdCard from './components/idCard/IdCard';
import Greetings from './components/greetings/Greetings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IdCard
          lastName="Doe"
          firstName="John"
          gender="male"
          height={178}
          birth={new Date('1992-07-14')}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          lastName="Delores "
          firstName="Obrien"
          gender="female"
          height={172}
          birth={new Date('1988-05-11')}
          picture="https://randomuser.me/api/portraits/women/44.jpg"
        />

        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings lang="en">Chad</Greetings>
        <Greetings lang="es">Pancho</Greetings>
        <Greetings lang="es">Aldo</Greetings>
      </header>
    </div>
  );
}

export default App;
