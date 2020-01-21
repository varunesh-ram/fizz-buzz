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
});