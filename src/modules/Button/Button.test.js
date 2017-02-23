import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Button from './';


describe('<Button />', () => {

  const testFn = e => e.preventDefault();

  const defaultWrapper = mount(<Button />);

  const wrapper = mount(
    <Button
      buttonText="test button"
      theme="secondary"
      type="submit"
      callback={ testFn }
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button buttonText="test" callback={ function(){} } />, div);
  });

  it('should have a default buttonText prop', () => {
    expect(defaultWrapper.props().buttonText).to.not.equal(null);
    expect(defaultWrapper.props().buttonText).to.not.equal(undefined);
    expect(defaultWrapper.props().buttonText).to.equal('do it');
    expect(defaultWrapper.props().buttonText).to.not.equal('test button');
    expect(defaultWrapper.props().buttonText).to.not.equal('');
  });

  it('should accept a buttonText prop', () => {
    expect(wrapper.props().buttonText).to.not.equal(null);
    expect(wrapper.props().buttonText).to.not.equal(undefined);
    expect(wrapper.props().buttonText).to.not.equal('do it');
    expect(wrapper.props().buttonText).to.not.equal('');
    expect(wrapper.props().buttonText).to.equal('test button');
  });

  it('should have a default theme prop', () => {
    expect(defaultWrapper.props().theme).to.not.equal(null);
    expect(defaultWrapper.props().theme).to.not.equal(undefined);
    expect(defaultWrapper.props().theme).to.equal('');
  });

  it('should accept a theme prop', () => {
    expect(wrapper.props().theme).to.not.equal(null);
    expect(wrapper.props().theme).to.not.equal(undefined);
    expect(wrapper.props().theme).to.not.equal('');
    expect(wrapper.props().theme).to.equal('secondary');
  });

  it('should accept a callback prop', () => {
    expect(wrapper.props().callback).to.not.equal(null);
    expect(wrapper.props().callback).to.not.equal(undefined);
    expect(wrapper.props().callback).to.equal(testFn);
  });

  it('should accept all other props given', () => {
    expect(wrapper.props().type).to.not.equal(null);
    expect(wrapper.props().type).to.not.equal(undefined);
    expect(wrapper.props().type).to.not.equal('');
    expect(wrapper.props().type).to.equal('submit');
  });

  it('should add a special class containing the theme prop to Component', () => {
    expect(wrapper.find('.secondary').length).to.not.equal(null);
    expect(wrapper.find('.secondary').length).to.not.equal(undefined);
    expect(wrapper.find('.secondary').length).to.not.equal(0);
    expect(wrapper.find('.secondary').length).to.equal(1);
  });

  it('should add buttonText to UI', () => {
    expect(wrapper.find('.Button').text()).to.not.equal(null);
    expect(wrapper.find('.Button').text()).to.not.equal(undefined);
    expect(wrapper.find('.Button').text()).to.not.equal('');
    expect(wrapper.find('.Button').text()).to.not.equal('do it');
    expect(wrapper.find('.Button').text()).to.equal('test button');
  });

});
