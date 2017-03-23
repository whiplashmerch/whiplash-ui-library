import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { box } from 'src/modules/InformationalIcon/Icons';


describe('<box />', () => {

  const defaultWrapper = mount(<box />);
  const wrapper = mount(<box iconColor="blue" />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<box />, div);
  });

  // PROPS

  it('should have a default iconColor prop', () => {
    const prop = defaultWrapper.props().iconColor;
    expect(prop).to.not.equal(null);
    // expect(prop).to.not.equal(undefined);
    // expect(prop).to.not.equal('');
    // expect(prop).to.equal('#646471');
  });

  it('should take a iconColor prop', () => {
    expect(wrapper.props().iconColor).to.not.equal(null);
    expect(wrapper.props().iconColor).to.not.equal(undefined);
    expect(wrapper.props().iconColor).to.not.equal('');
    expect(wrapper.props().iconColor).to.equal('blue');
  });

});
