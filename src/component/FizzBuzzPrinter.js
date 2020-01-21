import React from 'react';

export default class FizzBuzzPrinter extends React.Component {
    printFizzBuzz = () => {
        let print = [];
        if (this.isDivisibleBy(3))
            print.push("Fizz");
        if (this.isDivisibleBy(5))
            print.push("Buzz");  
        return print.length === 0 ? this.props.number : print ;
    }
    isDivisibleBy = (number) => {
        return this.props.number % number === 0;
    }
    render = () => {
        return  (<div>
            <form>
            <label >{this.printFizzBuzz()}</label>                
            </form>
        </div>);
    }        
 }