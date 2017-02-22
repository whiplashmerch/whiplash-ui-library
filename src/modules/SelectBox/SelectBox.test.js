import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import SelectBox from './';


describe('<SelectBox />', () => {

  const testFn = (val) => console.log(val);
  const testList = ['test 1', 'test 2', 'test 3'];

  const defaultWrapper = mount(<SelectBox />);

  const wrapper = mount(
    <SelectBox
      form
      name="test name"
      list={ testList }
      callback={ testFn }
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SelectBox />, div);
  });

  it('should have a default form prop', () => {
    expect(defaultWrapper.props().form).to.not.equal(null);
    expect(defaultWrapper.props().form).to.not.equal(undefined);
    expect(defaultWrapper.props().form).to.not.equal('false');
    expect(defaultWrapper.props().form).to.equal(false);
  });

  it('should accept a form prop', () => {
    expect(wrapper.props().form).to.not.equal(null);
    expect(wrapper.props().form).to.not.equal(undefined);
    expect(wrapper.props().form).to.not.equal(false);
    expect(wrapper.props().form).to.not.equal('true');
    expect(wrapper.props().form).to.equal(true);
  });

  it('should have a default list prop', () => {
    expect(defaultWrapper.props().list).to.not.equal(null);
    expect(defaultWrapper.props().list).to.not.equal(undefined);
    expect(defaultWrapper.props().list).to.not.equal('[]');
  });

  it('should accept a list prop', () => {
    expect(wrapper.props().list).to.not.equal(null);
    expect(wrapper.props().list).to.not.equal(undefined);
    expect(wrapper.props().list).to.not.equal([]);
    expect(wrapper.props().list).to.equal(testList);
  });

  it('should accept a callback prop', () => {
    expect(wrapper.props().callback).to.not.equal(null);
    expect(wrapper.props().callback).to.not.equal(undefined);
    expect(wrapper.props().callback).to.equal(testFn);
  });

  it('should accept all other props given', () => {
    expect(wrapper.props().name).to.not.equal(null);
    expect(wrapper.props().name).to.not.equal(undefined);
    expect(wrapper.props().name).to.not.equal('');
    expect(wrapper.props().name).to.equal('test name');
  });

  it('should have a default open state', () => {
    expect(wrapper.state().open).to.not.equal(null);
    expect(wrapper.state().open).to.not.equal(undefined);
    expect(wrapper.state().open).to.not.equal('false');
    expect(wrapper.state().open).to.equal(false);
  });

  it('should have a default selected state', () => {
    expect(wrapper.state().selected).to.not.equal(null);
    expect(wrapper.state().selected).to.not.equal(undefined);
    expect(wrapper.state().selected).to.equal('');
  });

  it('should display the children in the UI', () => {
    expect(wrapper.find('.SelectBox-li').length).to.not.equal(null);
    expect(wrapper.find('.SelectBox-li').length).to.not.equal(undefined);
    expect(wrapper.find('.SelectBox-li').length).to.not.equal(0);
    expect(wrapper.find('.SelectBox-li').length).to.not.equal(2);
  });

  it('should display the selected choice in the UI', () => {
    expect(wrapper.find('.SelectBox-selection').length).to.not.equal(1);
    expect(wrapper.find('.SelectBox-selection').length).to.equal(0);

    wrapper.find('.SelectBox-li').at(1).simulate('click');

    expect(wrapper.find('.SelectBox-selection').length).to.not.equal(0);
    expect(wrapper.find('.SelectBox-selection').length).to.equal(1);
    expect(wrapper.find('.SelectBox-selection').text()).to.not.equal('');
    expect(wrapper.find('.SelectBox-selection').text()).to.equal('test 2');
  });

  it('should display a hidden form input if form prop given', () => {
    expect(wrapper.find('input').length).to.not.equal(undefined);
    expect(wrapper.find('input').length).to.not.equal(null);
    expect(wrapper.find('input').length).to.not.equal(0);
    expect(wrapper.find('input').length).to.equal(1);
  });

});
