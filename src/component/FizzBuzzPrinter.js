import React from 'react';

export default class FizzBuzzPrinter extends React.Component {
    printFizzBuzz = () => {
        if (this.props.number === "3")
            return "Fizz";
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