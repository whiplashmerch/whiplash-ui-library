import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { alarm } from 'src/modules/Icon/Icons';


describe('<alarm />', () => {

  const defaultWrapper = mount(<alarm />);
  const wrapper = mount(<alarm iconColor="blue" />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<alarm />, div);
  });

  it('should take a iconColor prop', () => {
    expect(wrapper.props().iconColor).to.not.equal(null);
    expect(wrapper.props().iconColor).to.not.equal(undefined);
    expect(wrapper.props().iconColor).to.not.equal('');
    expect(wrapper.props().iconColor).to.equal('blue');
  });

});
