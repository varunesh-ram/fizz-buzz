import React from 'react';
import App from './App';
import {shallow} from 'enzyme'; 
describe(("<App/> component"), () => {  
  it("should render correctly", () => {
    let wrapper = shallow(<App/>);
      expect(wrapper).toMatchSnapshot();     
  });
});
