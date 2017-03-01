import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import MonthPicker from 'src/modules/DatePicker/components/MonthPicker';


describe('<MonthPicker />', () => {

  const testFn = e => e.preventDefault();

  const defaultWrapper = mount(<MonthPicker />);

  const wrapper = mount(
    <MonthPicker
      active={ 3 }
      year={ 2016 }
      onSelect={ testFn }
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MonthPicker />, div);
  });

  it('should have a default active prop', () => {
    expect(defaultWrapper.props().active).to.not.equal(null);
    expect(defaultWrapper.props().active).to.not.equal(undefined);
    expect(defaultWrapper.props().active).to.not.equal('0');
    expect(defaultWrapper.props().active).to.equal(0);
  });

  it('should accept an active prop', () => {
    expect(wrapper.props().active).to.not.equal(null);
    expect(wrapper.props().active).to.not.equal(undefined);
    expect(wrapper.props().active).to.not.equal(0);
    expect(wrapper.props().active).to.not.equal('3');
    expect(wrapper.props().active).to.equal(3);
  });

  it('should have a default year prop', () => {
    expect(defaultWrapper.props().year).to.not.equal(null);
    expect(defaultWrapper.props().year).to.not.equal(undefined);
    expect(defaultWrapper.props().year).to.not.equal('2017');
    expect(defaultWrapper.props().year).to.equal(2017);
  });

  it('should accept an year prop', () => {
    expect(wrapper.props().year).to.not.equal(null);
    expect(wrapper.props().year).to.not.equal(undefined);
    expect(wrapper.props().year).to.not.equal(2017);
    expect(wrapper.props().year).to.not.equal('2016');
    expect(wrapper.props().year).to.equal(2016);
  });

  it('should accept an onSelect prop', () => {
    expect(wrapper.props().onSelect).to.not.equal(null);
    expect(wrapper.props().onSelect).to.not.equal(undefined);
    expect(wrapper.props().onSelect).to.equal(testFn);
  });

  it('should display the year prop in the UI', () => {
    expect(wrapper.find('.MonthPicker-year').text()).to.not.equal(null);
    expect(wrapper.find('.MonthPicker-year').text()).to.not.equal(undefined);
    expect(wrapper.find('.MonthPicker-year').text()).to.not.equal('');
    expect(wrapper.find('.MonthPicker-year').text()).to.equal('2016');
  });

  it('should dispaly 12 months in the UI', () => {
    expect(wrapper.find('.MonthPicker-li').length).to.not.equal(null);
    expect(wrapper.find('.MonthPicker-li').length).to.not.equal(undefined);
    expect(wrapper.find('.MonthPicker-li').length).to.not.equal(0);
    expect(wrapper.find('.MonthPicker-li').length).to.not.equal(6);
    expect(wrapper.find('.MonthPicker-li').length).to.equal(12);
  });

});
