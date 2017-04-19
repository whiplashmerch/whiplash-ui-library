import React from 'react';
import ReactDOM from 'react-dom';

import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { CheckButton } from 'src';


describe('<CheckButton />', () => {

  const props = {
    checked: true,
    onClick: sinon.spy(),
    name: 'test'
  };

  const defaultWrapper = mount(<CheckButton />);
  const wrapper = mount(<CheckButton { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckButton />, div);
  });

  // PROPS

  it('should accept an checked prop', () => {
    const prop = wrapper.props().checked;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal(false);
    expect(prop).to.equal(true);
  });

  it('should accept all other props given', () => {
    const prop = wrapper.props().name;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('test');
  });

  // COMPONENT

  it('should fire an onClick if given', () => {
    const el = wrapper.find('.CheckButton-input');
    el.simulate('click');
    expect(props.onClick.called).to.equal(true);
    expect(props.onClick.calledOnce).to.equal(true);
  });

});
