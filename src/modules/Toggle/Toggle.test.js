import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Toggle from './';


describe('<Toggle />', () => {

  const newRef = () => console.log('working');

  const defaultWrapper = mount(<Toggle />);

  const wrapper = mount(
    <Toggle
      active={ true }
      toggleRef={ newRef }
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Toggle />, div);
  });

  it('should have a default active prop', () => {
    expect(defaultWrapper.props().active).to.not.equal(null);
    expect(defaultWrapper.props().active).to.not.equal(undefined);
    expect(defaultWrapper.props().active).to.not.equal('false');
    expect(defaultWrapper.props().active).to.equal(false);
  });

  it('should accept a active prop', () => {
    expect(wrapper.props().active).to.not.equal(null);
    expect(wrapper.props().active).to.not.equal(undefined);
    expect(wrapper.props().active).to.not.equal(false);
    expect(wrapper.props().active).to.equal(true);
  });

});
