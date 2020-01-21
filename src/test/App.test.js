import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';
import FizzBuzzPrinter from "../component/FizzBuzzPrinter";
describe(("<App/> component"), () => {  
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>);
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();     
  });
  
  it("should have the title", () => {
    expect(wrapper.find("header h1").text()).toEqual("Fizz-Buzz");     
  });

it("should load FizzBuzzPrinter component", () => {
    expect(wrapper.find(FizzBuzzPrinter)).toBeDefined();
  });

it("should print 1 to 100", () => {
    expect(wrapper.find(FizzBuzzPrinter).length).toBe(100);
  });
});
