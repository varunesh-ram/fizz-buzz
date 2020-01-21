import React from 'react';
import './App.css';
import FizzBuzzPrinter from './component/FizzBuzzPrinter'

class  App extends React.Component {
  createFizzBuzzList = () => {
    let body=[];
    for(let i=1;i<101;i++)
    {
      body.push(<FizzBuzzPrinter key={i} number={i}/>)
    }
    return body
  };
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Fizz-Buzz</h1>
        </header>
        {this.createFizzBuzzList()}
      </div>
    );
  } 
}

export default App;
