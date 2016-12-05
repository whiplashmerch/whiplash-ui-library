import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import CheckButton from './';


describe('<CheckButton />', () => {

  const defaultWrapper = mount(<CheckButton />);
  const wrapper = mount(<CheckButton onUserSelect={e => console.log(e)} />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CheckButton />, div);
  });

  it('should have a default onUserSelect prop', () => {
    expect(defaultWrapper.props().onUserSelect).to.not.equal(null);
    expect(defaultWrapper.props().onUserSelect).to.not.equal(undefined);
    expect(defaultWrapper.props().onUserSelect).to.not.throw(Error);
  });

  it('should have a default false state', () => {
    expect(wrapper.state().active).to.not.equal(null);
    expect(wrapper.state().active).to.not.equal(undefined);
    expect(wrapper.state().active).to.not.equal(true);
    expect(wrapper.state().active).to.equal(false);
  });

  it('should update the state onClick', () => {
    expect(wrapper.state().active).to.equal(false);

    wrapper.simulate('click');

    expect(wrapper.state().active).to.equal(true);
  });

});
