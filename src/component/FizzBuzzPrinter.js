import React from 'react';

export default class FizzBuzzPrinter extends React.Component {
    render = () => {
        return  (<div>
            <form>
            <label >{this.props.number}</label>                
            </form>
        </div>);
    }        
    }