import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { SelectBox } from 'src';


describe('<SelectBox />', () => {

  const testFn = (val) => console.log(val);
  let lastCall = null;
  function updateLastCall(text, value) {
    lastCall = { text, value };
  }

  const testList = ['test 1', 'test 2', 'test 3'];
  const testList2 = [
    { text: 'LeanUx', value: '0001' },
    { text: 'The Lean Startup', value: '0002' },
    { text: 'Remote: Office Not Required', value: '0003' },
  ];

  const defaultWrapper = mount(<SelectBox />);

  const wrapper = mount(
    <SelectBox
      form
      label="test label"
      name="test name"
      list={ testList }
      callback={ testFn }
    />
  );

  const valueWrapper = mount(
    <SelectBox
      form
      label="test label"
      name="test name value"
      list={ testList2 }
      callback={ updateLastCall }
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

  it('should have a default label prop', () => {
    expect(defaultWrapper.props().label).to.not.equal(undefined);
    expect(defaultWrapper.props().label).to.equal(null);
  });

  it('should accept a label prop', () => {
    expect(wrapper.props().label).to.not.equal(null);
    expect(wrapper.props().label).to.not.equal(undefined);
    expect(wrapper.props().label).to.not.equal('');
    expect(wrapper.props().label).to.equal('test label');
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

  it('should not display the list options in the UI by default', () => {
    expect(wrapper.find('.SelectBox-li').length).to.not.equal(null);
    expect(wrapper.find('.SelectBox-li').length).to.not.equal(undefined);
    expect(wrapper.find('.SelectBox-li').length).to.not.equal(2);
    expect(wrapper.find('.SelectBox-li').length).to.equal(0);
  });

  it('should display the label in the UI if given', () => {
    expect(defaultWrapper.find('.SelectBox-label').length).to.not.equal(1);
    expect(defaultWrapper.find('.SelectBox-label').length).to.equal(0);
    expect(wrapper.find('.SelectBox-label').length).to.not.equal(0);
    expect(wrapper.find('.SelectBox-label').length).to.equal(1);
    expect(wrapper.find('.SelectBox-label').text()).to.not.equal('');
    expect(wrapper.find('.SelectBox-label').text()).to.equal('test label');
  });

  it('should display the selected choice in the UI', () => {
    // open menu
    wrapper.find('.SelectBox-selection').simulate('click');
    // select item
    wrapper.find('.SelectBox-li').at(1).simulate('click');

    expect(wrapper.find('.SelectBox-selection').text()).to.not.equal('choose option');
    expect(wrapper.find('.SelectBox-selection').text()).to.equal('test 2');
  });

  it('should display a hidden form input if form prop given', () => {
    expect(wrapper.find('input').length).to.not.equal(undefined);
    expect(wrapper.find('input').length).to.not.equal(null);
    expect(wrapper.find('input').length).to.not.equal(0);
    expect(wrapper.find('input').length).to.equal(1);
  });

  it('should change the open state to true when .SelectBox-selection clicked', () => {
    expect(wrapper.state().open).to.equal(false);
    wrapper.find('.SelectBox-selection').simulate('click');
    expect(wrapper.state().open).to.equal(true);
  });

  it('should change the open state to false when .SelectBox-li clicked', () => {
    wrapper.find('.SelectBox-li').at(1).simulate('click');
    expect(wrapper.state().open).to.equal(false);
    wrapper.find('.SelectBox-selection').simulate('click');
    expect(wrapper.state().open).to.equal(true);
    wrapper.find('.SelectBox-li').at(1).simulate('click');
    expect(wrapper.state().open).to.equal(false);
  });

  // SelectBox with text and value objects -- TESTS
  it('should have a providedValues state of true', () => {
    expect(valueWrapper.state().providedValues).to.equal(true);
  });

  it('should callback with a text and value when providedValues is true', () => {
    valueWrapper.find('.SelectBox-selection').simulate('click');
    valueWrapper.find('.SelectBox-li').at(1).simulate('click');
    expect(lastCall.text).to.equal('The Lean Startup');
    expect(lastCall.value).to.equal('0002');
  });

});
