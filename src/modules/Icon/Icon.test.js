import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Icon from './';


describe('<Icon />', () => {

  const defaultWrapper = mount(<Icon name="add" />);

  const wrapper = mount(
    <Icon
      color="blue"
      height="50"
      name="add"
      width="50"
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Icon name="add" />, div);
  });

  it('should have a default color prop', () => {
    expect(defaultWrapper.props().color).to.not.equal(null);
    expect(defaultWrapper.props().color).to.not.equal(undefined);
    expect(defaultWrapper.props().color).to.not.equal('');
    expect(defaultWrapper.props().color).to.equal('#646471');
  });

  it('should have a default height prop', () => {
    expect(defaultWrapper.props().height).to.not.equal(null);
    expect(defaultWrapper.props().height).to.not.equal(undefined);
    expect(defaultWrapper.props().height).to.not.equal('');
    expect(defaultWrapper.props().height).to.not.equal(24);
    expect(defaultWrapper.props().height).to.equal('24');
  });

  it('should have a default width prop', () => {
    expect(defaultWrapper.props().width).to.not.equal(null);
    expect(defaultWrapper.props().width).to.not.equal(undefined);
    expect(defaultWrapper.props().width).to.not.equal('');
    expect(defaultWrapper.props().width).to.not.equal(24);
    expect(defaultWrapper.props().width).to.equal('24');
  });

  it('should take a color prop', () => {
    expect(wrapper.props().color).to.not.equal(null);
    expect(wrapper.props().color).to.not.equal(undefined);
    expect(wrapper.props().color).to.not.equal('#646471');
    expect(wrapper.props().color).to.equal('blue');
  });

  it('should take a name prop', () => {
    expect(wrapper.props().name).to.not.equal(null);
    expect(wrapper.props().name).to.not.equal(undefined);
    expect(wrapper.props().name).to.not.equal('');
    expect(wrapper.props().name).to.equal('add');
  });

  it('should take a height prop', () => {
    expect(wrapper.props().height).to.not.equal(null);
    expect(wrapper.props().height).to.not.equal(undefined);
    expect(wrapper.props().height).to.not.equal('');
    expect(wrapper.props().height).to.not.equal('24');
    expect(wrapper.props().height).to.equal('50');
  });

  it('should take a width prop', () => {
    expect(wrapper.props().width).to.not.equal(null);
    expect(wrapper.props().width).to.not.equal(undefined);
    expect(wrapper.props().width).to.not.equal('');
    expect(wrapper.props().width).to.not.equal('24');
    expect(wrapper.props().width).to.equal('50');
  });

});
