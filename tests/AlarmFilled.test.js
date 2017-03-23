import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { alarm_filled } from 'src/modules/Icon/Icons';


describe('<alarm_filled />', () => {

  const defaultWrapper = mount(<alarm_filled />);
  const wrapper = mount(<alarm_filled iconColor="blue" />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<alarm_filled />, div);
  });

  it('should take a iconColor prop', () => {
    const prop = wrapper.props().iconColor;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('blue');
  });

});
