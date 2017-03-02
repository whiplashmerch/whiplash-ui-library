import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import moment from 'moment';
import CalendarMonthGrid from 'src/modules/DatePicker/components/CalendarMonthGrid';


describe('<CalendarMonthGrid />', () => {

  const testFn = e => e.preventDefault();
  const testMonth = moment();

  const defaultWrapper = mount(<CalendarMonthGrid />);

  const wrapper = mount(
    <CalendarMonthGrid
      initialMonth={ testMonth }
      onDayClick={ testFn }
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CalendarMonthGrid />, div);
  });

  it('should have a default initialMonth prop', () => {
    expect(defaultWrapper.props().initialMonth).to.not.equal(null);
    expect(defaultWrapper.props().initialMonth).to.not.equal(undefined);
    expect(defaultWrapper.props().initialMonth).to.not.equal('');
  });

  it('should accept an initialMonth prop', () => {
    expect(wrapper.props().initialMonth).to.not.equal(null);
    expect(wrapper.props().initialMonth).to.not.equal(undefined);
    expect(wrapper.props().initialMonth).to.not.equal('');
    expect(wrapper.props().initialMonth).to.equal(testMonth);
  });

  it('should accept a onDayClick prop', () => {
    expect(wrapper.props().onDayClick).to.not.equal(null);
    expect(wrapper.props().onDayClick).to.not.equal(undefined);
    expect(wrapper.props().onDayClick).to.not.equal('');
    expect(wrapper.props().onDayClick).to.equal(testFn);
  });

});
