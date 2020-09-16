import React from 'react';
import './App.css';
import Description from './helloworld';

const compromises = ["Acordar", "Código", "Comer", "Código Denovo", "Talvez Comer Denovo", "Dormir"];

const App = () => (
  <ul>
    {
      compromises.map(compromissos => <li>{compromissos}</li>)
    }
  </ul>
);

export default App;
