import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Button } from 'src';


describe('<Button />', () => {

  const props = {
    buttonText: 'test button',
    theme: 'secondary',
    type: 'submit',
    callback: sinon.spy()
  };

  const defaultWrapper = mount(<Button />);

  const wrapper = mount(
    <Button { ...props } />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button { ...props } />, div);
  });

  // PROPS

  it('should have a default buttonText prop', () => {
    const prop = defaultWrapper.props().buttonText;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('test button');
    expect(prop).to.not.equal('');
    expect(prop).to.equal('do it');
  });

  it('should accept a buttonText prop', () => {
    const prop = wrapper.props().buttonText;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('do it');
    expect(prop).to.not.equal('');
    expect(prop).to.equal(props.buttonText);
  });

  it('should have a default theme prop', () => {
    const prop = defaultWrapper.props().theme;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal('');
  });

  it('should accept a theme prop', () => {
    const prop = wrapper.props().theme;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(props.theme);
  });

  it('should accept a callback prop', () => {
    const prop = wrapper.props().callback;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal(props.callback);
  });

  it('should accept all other props given', () => {
    const prop = wrapper.props().type;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(props.type);
  });

  it('should add a special class containing the theme prop to Component', () => {
    const el = wrapper.find('.secondary').length;
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
  });

  it('should add buttonText to UI', () => {
    const text = wrapper.find('.Button').text();
    expect(text).to.not.equal(null);
    expect(text).to.not.equal(undefined);
    expect(text).to.not.equal('');
    expect(text).to.not.equal('do it');
    expect(text).to.equal('test button');
  });

  it('should call the callback prop onClick', () => {
    wrapper.find('.Button').simulate('click');
    expect(props.callback.called).to.equal(true);
    expect(props.callback.callCount).to.equal(1);
  });

});
