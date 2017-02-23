import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Dropdown from './';


describe('<Dropdown />', () => {

  const defaultWrapper = mount(
    <Dropdown>
      <p></p>
    </Dropdown>
  );

  const wrapper = mount(
    <Dropdown right open={ true }>
      <p>test 1</p>
      <p>test 2</p>
    </Dropdown>
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Dropdown><p></p></Dropdown>, div);
  });

  it('should have a default open prop', () => {
    expect(defaultWrapper.props().open).to.not.equal(null);
    expect(defaultWrapper.props().open).to.not.equal(undefined);
    expect(defaultWrapper.props().open).to.not.equal(true);
    expect(defaultWrapper.props().open).to.not.equal('false');
    expect(defaultWrapper.props().open).to.equal(false);
  });

  it('should accept an open prop', () => {
    expect(wrapper.props().open).to.not.equal(null);
    expect(wrapper.props().open).to.not.equal(undefined);
    expect(wrapper.props().open).to.not.equal(false);
    expect(wrapper.props().open).to.not.equal('true');
    expect(wrapper.props().open).to.equal(true);
  });

  it('should have a default left prop', () => {
    expect(defaultWrapper.props().left).to.not.equal(null);
    expect(defaultWrapper.props().left).to.not.equal(undefined);
    expect(defaultWrapper.props().left).to.not.equal('false');
    expect(defaultWrapper.props().left).to.equal(false);
  });

  it('should accept an left prop', () => {
    expect(wrapper.props().left).to.not.equal(null);
    expect(wrapper.props().left).to.not.equal(undefined);
    expect(wrapper.props().left).to.not.equal(true);
    expect(wrapper.props().left).to.not.equal('false');
    expect(wrapper.props().left).to.equal(false);
  });

  it('should have a default right prop', () => {
    expect(defaultWrapper.props().right).to.not.equal(null);
    expect(defaultWrapper.props().right).to.not.equal(undefined);
    expect(defaultWrapper.props().right).to.not.equal(true);
    expect(defaultWrapper.props().right).to.not.equal('false');
    expect(defaultWrapper.props().right).to.equal(false);
  });

  it('should accept an right prop', () => {
    expect(wrapper.props().right).to.not.equal(null);
    expect(wrapper.props().right).to.not.equal(undefined);
    expect(wrapper.props().right).to.not.equal(false);
    expect(wrapper.props().right).to.not.equal('true');
    expect(wrapper.props().right).to.equal(true);
  });

  it('should add a left or right class depending on the props', () => {
    expect(wrapper.props().right).to.equal(true);
    expect(wrapper.find('.Dropdown.right')).to.not.equal(null);
    expect(wrapper.find('.Dropdown.right')).to.not.equal(undefined);
    expect(wrapper.find('.Dropdown.left').length).to.not.equal(1);
    expect(wrapper.find('.Dropdown.left').length).to.equal(0);
  });

  it('should display the children given', () => {
    expect(wrapper.find('.Dropdown-ul').children()).to.not.equal(null);
    expect(wrapper.find('.Dropdown-ul').children()).to.not.equal(undefined);
    expect(wrapper.find('.Dropdown-ul').children()).to.not.have.length(0);
    expect(wrapper.find('.Dropdown-ul').children()).to.have.length(2);
  });

});
