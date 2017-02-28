import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { refresh } from 'src/modules/Icon/Icons';


describe('<refresh />', () => {

  const defaultWrapper = mount(<refresh />);
  const wrapper = mount(<refresh iconColor="blue" />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<refresh />, div);
  });

  it('should have a default iconColor prop', () => {
    expect(defaultWrapper.props().iconColor).to.not.equal(null);
    expect(defaultWrapper.props().iconColor).to.not.equal(undefined);
    expect(defaultWrapper.props().iconColor).to.not.equal('');
    expect(defaultWrapper.props().iconColor).to.equal('#646471');
  });

  it('should take a iconColor prop', () => {
    expect(wrapper.props().iconColor).to.not.equal(null);
    expect(wrapper.props().iconColor).to.not.equal(undefined);
    expect(wrapper.props().iconColor).to.not.equal('');
    expect(wrapper.props().iconColor).to.equal('blue');
  });

});
