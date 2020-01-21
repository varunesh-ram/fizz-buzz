import React from 'react';
import './App.css';
import FizzBuzzPrinter from './component/FizzBuzzPrinter'

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fizz-Buzz</h1>
        </header>        
        <FizzBuzzPrinter number={1}/>
      </div>
    );
}

export default App;
