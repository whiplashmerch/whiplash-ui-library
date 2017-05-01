import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { SelectBox } from 'src';


describe('<SelectBox />', () => {

  // const testFn = (val) => console.log(val);
  const callback = sinon.spy();

  const books = [
    { name: 'LeanUx', value: '0001' },
    { name: 'The Lean Startup', value: '0002' },
    { name: 'Remote: Office Not Required', value: '0003' }
  ];

  const bookList = books.map((book, i) => (
    <div key={ `book-${ i }` } value={ book.value }>{ book.name }</div>
  ));


  const props = {
    form: true,
    label: 'test label',
    name: 'test name',
    callback
  };

  const controlledProps = {
    form: true,
    label: 'test label',
    name: 'test name',
    callback,
    value: "0002"
  };

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

  it('should accept a callback prop', () => {
    const prop = wrapper.props().callback;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal(callback);
    expect(prop).to.equal(callback);
    // expect(() => prop()).to.not.throw();
  });

  it('should accept all other props given', () => {
    const prop = wrapper.props().name
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('test name');
  });

  it('should have a default open state', () => {
    const state = wrapper.state().open;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.not.equal('false');
    expect(state).to.equal(false);
  });

  it('should have a default selected state', () => {
    const state = wrapper.state().selected;
    expect(wrapper.state().selected).to.not.equal(null);
    expect(wrapper.state().selected).to.not.equal(undefined);
    expect(wrapper.state().selected).to.equal('');
  });

  it('should have a default selectedValue state', () => {
    const state = wrapper.state().selectedValue;
    expect(wrapper.state().selected).to.not.equal(null);
    expect(wrapper.state().selected).to.not.equal(undefined);
    expect(wrapper.state().selected).to.equal('');
  });

  it('should have a controlled selected state', () => {
    const state = controlledWrapper.state().selected;
    expect(wrapper.state().selected).to.not.equal(null);
    expect(wrapper.state().selected).to.not.equal(undefined);
    expect(wrapper.state().selected).to.equal('');
  });

  // it('should have a controlled selectedValue state', () => {
  //   const state = controlledWrapper.state().selectedValue;
  //   expect(wrapper.state().selectedValue).to.not.equal(null);
  //   expect(wrapper.state().selectedValue).to.not.equal(undefined);
  //   expect(wrapper.state().selectedValue).to.equal('lskdfjsd');
  // });

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
    expect(wrapper.find('.SelectBox-selection').text()).to.equal('The Lean Startup');
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

  it('should callback with a text and value when providedValues is true', () => {
    wrapper.find('.SelectBox-selection').simulate('click');
    wrapper.find('.SelectBox-li').at(1).simulate('click');
    expect(callback.called).to.equal(true);
    expect(callback.args[0][0].target.text).to.equal('The Lean Startup');
    expect(callback.args[0][0].target.value).to.equal('0002');
  });

});
