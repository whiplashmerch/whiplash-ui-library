import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Button from './';


describe('<Button />', () => {

  const defaultWrapper = mount(<Button />);

  const wrapper = mount(
    <Button
      buttonText="test button"
      buttonType="submit"
      theme="secondary"
      callback={e => e.preventDefault()}
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button buttonText="test" callback={ function(){} } />, div);
  });

  it('should have a default buttonText prop', () => {
    expect(defaultWrapper.props().buttonText).to.not.equal(null);
    expect(defaultWrapper.props().buttonText).to.not.equal(undefined);
    expect(defaultWrapper.props().buttonText).to.equal('add buttonText prop');
    expect(defaultWrapper.props().buttonText).to.not.equal('test button');
    expect(defaultWrapper.props().buttonText).to.not.equal('');
  });

  it('should have a default buttonType prop', () => {
    expect(defaultWrapper.props().buttonType).to.not.equal(null);
    expect(defaultWrapper.props().buttonType).to.not.equal(undefined);
    expect(defaultWrapper.props().buttonType).to.equal('button');
    expect(defaultWrapper.props().buttonType).to.not.equal('submit');
    expect(defaultWrapper.props().buttonType).to.not.equal('');
  });

  it('should have a default theme prop', () => {
    expect(defaultWrapper.props().theme).to.not.equal(null);
    expect(defaultWrapper.props().theme).to.not.equal(undefined);
    expect(defaultWrapper.props().theme).to.equal('');
    expect(defaultWrapper.props().theme).to.not.equal('secondary');
  });

  it('should add buttonText to UI', () => {
    expect(wrapper.find('.Button').text()).to.not.equal(null);
    expect(wrapper.find('.Button').text()).to.not.equal(undefined);
    expect(wrapper.find('.Button').text()).to.not.equal('');
    expect(wrapper.find('.Button').text()).to.not.equal('add buttonText prop');
    expect(wrapper.find('.Button').text()).to.equal('test button');
  });

  it('should add theme as Button class', () => {
    expect(wrapper.find('.secondary')).to.not.equal(null);
    expect(wrapper.find('.secondary')).to.not.equal(undefined);
    expect(wrapper.find('.secondary').length).to.equal(1);
  });

  it('should add buttonType to Button type attribute', () => {
    expect(wrapper.props().buttonType).to.not.equal(null);
    expect(wrapper.props().buttonType).to.not.equal(undefined);
    expect(wrapper.props().buttonType).to.not.equal('');
    expect(wrapper.props().buttonType).to.not.equal('button');
    expect(wrapper.props().buttonType).to.equal('submit');
  });

});
