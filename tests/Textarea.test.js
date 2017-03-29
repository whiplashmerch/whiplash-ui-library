import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Textarea } from 'src';


describe('<Textarea />', () => {

  const props = {
    inputLabel: 'test label',
    placeholder: 'dear customer, you rule'
  };

  const defaultWrapper = mount(<Textarea />);

  const wrapper = mount(
    <Textarea { ...props } />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Textarea { ...props } />, div);
  });

  // PROPS

  it('should have a default inputLabel prop', () => {
    const prop = defaultWrapper.props().inputLabel;
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(null);
  });

  it('should accept a inputLabel prop', () => {
    const prop = wrapper.props().inputLabel;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(props.inputLabel);
  });

  it('should accept all other props given', () => {
    const prop = wrapper.props().placeholder;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(props.placeholder);
  });

  // COMPONENT

  it('should display the inputLabel in the UI if given', () => {
    const defaultText = defaultWrapper.find('.Textarea').text();
    const text = wrapper.find('.Textarea').text();

    expect(text).to.not.equal(null);
    expect(text).to.not.equal(undefined);
    expect(text).to.not.equal('');
    expect(text).to.equal(props.inputLabel);
    // check for no prop
    expect(defaultText).to.not.equal(undefined);
    expect(defaultText).to.not.equal(null);
    expect(defaultText).to.equal('');
  });

  it('should display a textarea input', () => {
    const el = wrapper.find('.Textarea-input').length;
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
  });
});
