import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { InformationalIcon } from 'src';


describe('<InformationalIcon />', () => {

  const defaultWrapper = mount(<InformationalIcon name="logistics" />);

  const wrapper = mount(
    <InformationalIcon
      color="blue"
      height="60"
      name="logistics"
      width="60"
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InformationalIcon name="logistics" />, div);
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
    expect(defaultWrapper.props().height).to.not.equal(50);
    expect(defaultWrapper.props().height).to.equal('50');
  });

  it('should have a default width prop', () => {
    expect(defaultWrapper.props().width).to.not.equal(null);
    expect(defaultWrapper.props().width).to.not.equal(undefined);
    expect(defaultWrapper.props().width).to.not.equal('');
    expect(defaultWrapper.props().width).to.not.equal(50);
    expect(defaultWrapper.props().width).to.equal('50');
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
    expect(wrapper.props().name).to.equal('logistics');
  });

  it('should take a height prop', () => {
    expect(wrapper.props().height).to.not.equal(null);
    expect(wrapper.props().height).to.not.equal(undefined);
    expect(wrapper.props().height).to.not.equal('');
    expect(wrapper.props().height).to.not.equal('50');
    expect(wrapper.props().height).to.equal('60');
  });

  it('should take a width prop', () => {
    expect(wrapper.props().width).to.not.equal(null);
    expect(wrapper.props().width).to.not.equal(undefined);
    expect(wrapper.props().width).to.not.equal('');
    expect(wrapper.props().width).to.not.equal('50');
    expect(wrapper.props().width).to.equal('60');
  });

});
