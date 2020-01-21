import React from 'react';

export default class FizzBuzzPrinter extends React.Component {
    printFizzBuzz = () => {
        if (this.props.number % 3 === 0 && this.props.number % 5 === 0)
            return "FizzBuzz"; 
        if (this.props.number % 3 === 0)
            return "Fizz";
        if (this.props.number % 5 === 0)
            return "Buzz";  
        return this.props.number;
    }
    render = () => {
        return  (<div>
            <form>
            <label >{this.printFizzBuzz()}</label>                
            </form>
        </div>);
    }        
 }