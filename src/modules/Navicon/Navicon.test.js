import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Navicon from './';

describe('<Navicon />', () => {

  const testFn = () => console.log('onUserClick');

  const defaultWrapper = mount(<Navicon />);

  const wrapper = mount(
    <Navicon
      barColor="blue"
      onUserClick={ testFn }
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Navicon />, div);
  });

  it('should have a default barColor prop', () => {
    expect(defaultWrapper.props().barColor).to.not.equal(null);
    expect(defaultWrapper.props().barColor).to.not.equal(undefined);
    expect(defaultWrapper.props().barColor).to.not.equal('');
    expect(defaultWrapper.props().barColor).to.equal('#303030');
  });

  it('should accept a barColor prop', () => {
    expect(wrapper.props().barColor).to.not.equal(null);
    expect(wrapper.props().barColor).to.not.equal(undefined);
    expect(wrapper.props().barColor).to.not.equal('#303030');
    expect(wrapper.props().barColor).to.equal('blue');
  });

  it('should accept a onUserClick prop', () => {
    expect(wrapper.props().onUserClick).to.not.equal(null);
    expect(wrapper.props().onUserClick).to.not.equal(undefined);
    expect(wrapper.props().onUserClick).to.equal(testFn);
  });

  it('should have a default active state', () => {
    expect(wrapper.state().active).to.not.equal(null);
    expect(wrapper.state().active).to.not.equal(undefined);
    expect(wrapper.state().active).to.not.equal('false');
    expect(wrapper.state().active).to.equal(false);
  });

  it('should have a default finish state', () => {
    expect(wrapper.state().finish).to.not.equal(null);
    expect(wrapper.state().finish).to.not.equal(undefined);
    expect(wrapper.state().finish).to.not.equal('false');
    expect(wrapper.state().finish).to.equal(false);
  });

  it('should have 3 bars in the UI', () => {
    expect(wrapper.find('.Navicon-bar')).to.not.equal(null);
    expect(wrapper.find('.Navicon-bar')).to.not.equal(undefined);
    expect(wrapper.find('.Navicon-bar').length).to.not.equal(0);
    expect(wrapper.find('.Navicon-bar').length).to.equal(3);
  });

  it('should apply the correct classes onClick', () => {
    expect(wrapper.find('.Navicon-bar').length).to.equal(3);

    wrapper.find('.Navicon-link').simulate('click');

    // step 1 animation
    expect(wrapper.find('.active_top')).to.not.equal(null);
    expect(wrapper.find('.active_top')).to.not.equal(undefined);
    expect(wrapper.find('.active_top').length).to.equal(1);
    expect(wrapper.find('.active_middle')).to.not.equal(null);
    expect(wrapper.find('.active_middle')).to.not.equal(undefined);
    expect(wrapper.find('.active_middle').length).to.equal(1);
    expect(wrapper.find('.active_bottom')).to.not.equal(null);
    expect(wrapper.find('.active_bottom')).to.not.equal(undefined);
    expect(wrapper.find('.active_bottom').length).to.equal(1);
  });

});
