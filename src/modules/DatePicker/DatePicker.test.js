import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import DatePicker from './';


describe('<DatePicker />', () => {

  const testFn = e => e.preventDefault();

  const defaultWrapper = mount(<DatePicker />);

  const wrapper = mount(
    <DatePicker />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DatePicker />, div);
  });

});
