import React from 'react';
import logo from './logo.svg';
import './App.css';

import IdCard from './components/id-card/IdCard';
import Greetings from './components/greetings/Greetings';
import Random from './components/random/Random';
import BoxColor from './components/box-color/BoxColor';
import CreditCard from './components/credit-card/CreditCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <IdCard
            lastName="Doe"
            firstName="John"
            gender="male"
            height={178}
            // birth={new Date('1992-07-14')}
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
        </div>
        <div>
          <Greetings lang="de">Ludwig</Greetings>
          <Greetings lang="fr">François</Greetings>
          <Greetings lang="en">Chad</Greetings>
          <Greetings lang="es">Pancho</Greetings>
          <Greetings lang="es">Aldo</Greetings>
        </div>
        <div>
          <Random min={1} max={6} />
          <Random min={1} max={100} />
        </div>
        <div>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>
        <div id="credit-card">
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
          />
          <br />
          <br />
          <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
          />

          <br />

          <br />
          <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white"
          />

          <br />
          <br />
        </div>
      </header>
    </div>
  );
}

export default App;
