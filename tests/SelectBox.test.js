import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { SelectBox } from 'src';


describe('<SelectBox />', () => {

  const callback = sinon.spy();

  const books = [
    { name: 'LeanUx', value: '0001' },
    { name: 'The Lean Startup', value: '0002' },
    { name: 'Remote: Office Not Required', value: '0003' }
  ];

  const books2 = [
    { name: 'LeanUx', value: 0 },
    { name: 'The Lean Startup', value: 1 },
    { name: 'Remote: Office Not Required', value: 2 }
  ];

  const bookList2 = books2.map((book, i) => (
    <div key={ `book-${ i }` } value={ book.value }>{ book.name }</div>
  ));

  const bookList = books.map((book, i) => (
    <div key={ `book-${ i }` } value={ book.value }>{ book.name }</div>
  ));

  const badBookList = books.map((book, i) => (
    <div key={ `book-${ i }` }>{ book.name }</div>
  ));

  const props = {
    callback,
    form: true,
    label: 'test label',
    name: 'test name'
  };

  const controlledProps = {
    callback,
    form: true,
    label: 'test label',
    name: 'test name',
    value: "0002"
  };

  const noChildrenWrapper = mount(
    <SelectBox { ...props }>
      { [] }
    </SelectBox>
  );

  const defaultWrapper = mount(
    <SelectBox>
      { bookList }
    </SelectBox>
  );

  const controlledWrapper = mount(
    <SelectBox
      { ...controlledProps }
    >
      { bookList }
    </SelectBox>
  );

  const numWrapper = mount(
    <SelectBox { ...props }>
      { bookList2 }
    </SelectBox>
  );

  const badWrapper = mount(
    <SelectBox { ...props }>
      { badBookList }
    </SelectBox>
  );

  const wrapper = mount(
    <SelectBox { ...props }>
      { bookList }
    </SelectBox>
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <SelectBox>
        { bookList }
      </SelectBox>
      , div);
  });

  // PROPS

  it('should have a default form prop', () => {
    const prop = defaultWrapper.props().form;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('false');
    expect(prop).to.equal(false);
  });

  it('should accept a form prop', () => {
    const prop = wrapper.props().form;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal(false);
    expect(prop).to.not.equal('true');
    expect(prop).to.equal(true);
  });

  it('should have a default label prop', () => {
    const prop = defaultWrapper.props().label;
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal(null);
  });

  it('should accept a label prop', () => {
    const prop = wrapper.props().label;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('test label');
  });

  it('should have a default callback prop', () => {
    const prop = defaultWrapper.props().callback;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(() => prop()).to.not.throw();
  });

  it('should accept a callback prop', () => {
    const prop = wrapper.props().callback;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal(callback);
    expect(() => prop()).to.not.throw();
  });

  it('should accept all other props given', () => {
    const prop = wrapper.props().name
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('test name');
  });

  // STATE

  it('should have a default open state', () => {
    const state = wrapper.state().open;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.not.equal('false');
    expect(state).to.equal(false);
  });

  it('should have a default selected state', () => {
    const state = wrapper.state().selected;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.equal('');
  });

  it('should have a default selectedValue state', () => {
    const state = wrapper.state().selectedValue;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.equal('');
  });

  it('should have a controlled selected state', () => {
    const state = controlledWrapper.state().selected;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.equal('The Lean Startup');
  });

  it('should have a controlled selectedValue state', () => {
    const state = controlledWrapper.state().selectedValue;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.equal('0002');
  });

  // COMPONENT

  it('should not display the list options in the UI by default', () => {
    const selector = wrapper.find('.SelectBox-li').length;
    expect(selector).to.not.equal(null);
    expect(selector).to.not.equal(undefined);
    expect(selector).to.not.equal(2);
    expect(selector).to.equal(0);
  });

  it('should display the label in the UI if given', () => {
    const defaultSelector = defaultWrapper.find('.SelectBox-label').length;
    const selector = wrapper.find('.SelectBox-label');
    expect(defaultSelector).to.not.equal(1);
    expect(defaultSelector).to.equal(0);
    expect(selector.length).to.not.equal(0);
    expect(selector.length).to.equal(1);
    expect(selector.text()).to.not.equal('');
    expect(selector.text()).to.equal('test label');
  });

  it('should display the selected choice in the UI', () => {
    // open menu
    wrapper.find('.SelectBox-selection').simulate('click');
    // select item
    wrapper.find('.SelectBox-li').at(1).simulate('click');

    expect(wrapper.find('.SelectBox-selection').text()).to.not.equal('choose option');
    expect(wrapper.find('.SelectBox-selection').text()).to.equal('The Lean Startup');
  });

  it('should display a hidden form input if form prop given', () => {
    const prop = wrapper.find('input').length;
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(0);
    expect(prop).to.equal(1);
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

  it('should change the open state to false when SelectBox is blurred', () => {
    expect(wrapper.state().open).to.equal(false);
    wrapper.find('.SelectBox-selection').simulate('click');
    expect(wrapper.state().open).to.equal(true);

    const selector = wrapper.find('.SelectBox');
    selector.simulate('blur');
    expect(wrapper.state().open).to.equal(false);
  });

  // SelectBox with text and value objects -- TESTS

  it('should callback with a text and value, update state when uncontrolled', () => {
    wrapper.find('.SelectBox-selection').simulate('click');
    wrapper.find('.SelectBox-li').at(1).simulate('click');

    // make sure the callback was fired
    expect(callback.args[4][0].target.text).to.equal('The Lean Startup');
    expect(callback.args[4][0].target.value).to.equal('0002');

    // make sure state was updated
    expect(wrapper.state().selected).to.equal('The Lean Startup');
    expect(wrapper.state().selectedValue).to.equal('0002');
  });

  it('should callback with a text and value, but not update state when controlled', () => {
    controlledWrapper.find('.SelectBox-selection').simulate('click');
    controlledWrapper.find('.SelectBox-li').at(2).simulate('click');

    // make sure the callback fired the new value
    expect(callback.args[5][0].target.text).to.equal('Remote: Office Not Required');
    expect(callback.args[5][0].target.value).to.equal('0003');

    // make sure state did not change
    expect(controlledWrapper.state().selected).to.equal('The Lean Startup');
    expect(controlledWrapper.state().selectedValue).to.equal('0002');
  });

  it('should handle controlled component value changes', () => {
    controlledWrapper.setProps({ value: '0003'});
    expect(controlledWrapper.state().selected).to.equal('Remote: Office Not Required');
    expect(controlledWrapper.state().selectedValue).to.equal('0003');
  });

  it('should callback with a text and value when value is numerical instead of string', () => {
    numWrapper.find('.SelectBox-selection').simulate('click');
    numWrapper.find('.SelectBox-li').at(0).simulate('click');

    // make sure the callback was fired and value converted to string
    expect(callback.args[6][0].target.text).to.equal('LeanUx');
    expect(callback.args[6][0].target.value).to.equal('0');
  });

});
