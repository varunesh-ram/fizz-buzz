import React from 'react';
import {shallow} from 'enzyme';
import FizzBuzzPrinter from "../component/FizzBuzzPrinter";
describe(("<FizzBuzzPrinter/> component"), () => {  
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FizzBuzzPrinter/>);
    });
    it("should render correctly", () => {
                expect(wrapper).toMatchSnapshot();
    });
    it("should load label component", () => {
          expect(wrapper.find('label').length).toBe(1);
      });
  });
  describe(("print functionality"), () => { 
    it("should print 1 for prop number passed as 1", () => {
        let wrapper = shallow(<FizzBuzzPrinter number="1"/>);
        expect(wrapper.find('label').text()).toBe("1");
        expect(wrapper.instance().props.number).toBe("1");
    });
    it("should print 2 for prop number passed as 2", () => {
        let wrapper = shallow(<FizzBuzzPrinter number="2"/>);
        expect(wrapper.find('label').text()).toBe("2");
        expect(wrapper.instance().props.number).toBe("2");
    });
    it("should print Fizz for prop number passed as 3", () => {
        let wrapper = shallow(<FizzBuzzPrinter number="3"/>);
        expect(wrapper.find('label').text()).toBe("Fizz");
        expect(wrapper.instance().props.number).toBe("3");
    });
    it("should print Buzz for prop number passed as 5", () => {
        let wrapper = shallow(<FizzBuzzPrinter number="5"/>);
        expect(wrapper.find('label').text()).toBe("Buzz");
        expect(wrapper.instance().props.number).toBe("5");
    });
    it("should print Fizz for prop number passed as 6", () => {
        let wrapper = shallow(<FizzBuzzPrinter number="6"/>);
        expect(wrapper.find('label').text()).toBe("Fizz");
        expect(wrapper.instance().props.number).toBe("6");
    });
});