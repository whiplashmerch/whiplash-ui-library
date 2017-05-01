import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount } from 'enzyme';
import DayPicker from 'src/modules/DatePicker/components/DayPicker';


describe('<DayPicker />', () => {

  const props = {
    active: true,
    infoHeader: 'to',
    onDayClick: sinon.spy()
  };

  const defaultWrapper = mount(<DayPicker />);
  const wrapper = mount(<DayPicker { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DayPicker />, div);
  });

  // PROPS

  it('should have a default active prop', () => {
    const prop = defaultWrapper.props().active;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('false');
    expect(prop).to.equal(false);
  });

  it('should accept an active prop', () => {
    const prop = wrapper.props().active;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal(false);
    expect(prop).to.not.equal('true');
    expect(prop).to.equal(true);
  });

  it('should have a default infoHeader prop', () => {
    const prop = defaultWrapper.props().infoHeader;
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(null);
  });

  it('should accept an infoHeader prop', () => {
    const prop = wrapper.props().infoHeader;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('to');
  });

  it('should have a default onDayClick prop', () => {
    const prop = defaultWrapper.props().onDayClick;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop()).to.equal(null);
  });

  it('should accept an onDayClick prop', () => {
    const prop = wrapper.props().onDayClick;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.equal(props.onDayClick);
  });

  // STATE

  it('should have a default currentMonth state', () => {
    const state = wrapper.state().currentMonth;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.not.equal('0');
  });

  it('should have a default transition state', () => {
    const state = wrapper.state().transition;
    expect(state).to.not.equal(null);
    expect(state).to.not.equal(undefined);
    expect(state).to.equal('');
  });

  // COMPONENT

  it('should update the state multiple times when called', () => {
    const func = wrapper.instance()._animateMonths;
    const spy  = sinon.spy();

    // confirm state
    expect(wrapper.state().transition).to.equal('');

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    func('intro', 'outro', spy);

    expect(wrapper.state().transition).to.equal('intro');

    setTimeout(() => {
      expect(wrapper.state().transition).to.equal('outro');
    }, 300);

    setTimeout(() => {
      expect(spy.called).to.equal(true);
    }, 800);
  });

  it('should update the currentMonth state when called', () => {
    const func = wrapper.instance()._getCurrentNext;
    const oldMonth = wrapper.state().currentMonth;
    const result = oldMonth.clone().add({ months: 1 });

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    func();

    setTimeout(() => {
      expect(wrapper.state().currentMonth).to.equal(result);
    }, 500);

    // null case
    wrapper.setState({ currentMonth: undefined });
    expect(func()).to.equal(undefined);

    // resetState
    wrapper.setState({ currentMonth: moment() });
  });

  it('should call the arg func given when ran', () => {
    const func = wrapper.instance()._getCurrentMonth;
    const spy  = sinon.spy();

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
    func(spy);
    expect(spy.called).to.equal(true);
  });

  it('should update the currentMonth state when called', () => {
    const func = wrapper.instance()._getCurrentPrevious;
    const oldMonth = wrapper.state().currentMonth;
    const result = oldMonth.clone().subtract({ months: 1 });

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    func();

    setTimeout(() => {
      expect(wrapper.state().currentMonth).to.equal(result);
    }, 500);

    // null case
    wrapper.setState({ currentMonth: undefined });
    expect(func()).to.equal(undefined);

    // resetState
    wrapper.setState({ currentMonth: moment() });
  });

  it('should return jsx if infoHeader prop exists', () => {
    const defaultFunc = defaultWrapper.instance()._getInfoHeader;
    const func = wrapper.instance()._getInfoHeader;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    expect(defaultFunc()).to.equal(null);
    expect(func()).to.not.equal(null);
  });

  it('should return an Array of jsx if infoHeader prop exists', () => {
    const func = wrapper.instance()._getWeekdays;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);
    expect(func()).to.not.equal(null);
    expect(func().length).to.not.equal(0);
    expect(func().length).to.equal(7);
  });

  it('should update the currentMonth state when called', () => {
    const func = wrapper.instance()._goToMonth;
    const newDate = moment();

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    func(newDate);

    setTimeout(() => {
      expect(wrapper.state().currentMonth).to.equal(newDate);
    }, 500);
  });

  it('should update the state when called', () => {
    const func = wrapper.instance()._goToNext;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    wrapper.setState({ transition: 'yes' });
    expect(func()).to.equal(undefined);
    wrapper.setState({ transition: '' });
    func();

    setTimeout(() => {
      expect(wrapper.state().transition).to.not.equal('');
    }, 500);
  });

  it('should update the state when called', () => {
    const func = wrapper.instance()._goToPrev;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined);

    wrapper.setState({ transition: 'yes' });
    expect(func()).to.equal(undefined);
    wrapper.setState({ transition: '' });
    func();

    setTimeout(() => {
      expect(wrapper.state().transition).to.not.equal('');
    }, 500);
  });

  it('should display the infoHeader in the UI if given', () => {
    const defaultEl = defaultWrapper.find('.DayPicker-feature-label').length;
    const el = wrapper.find('.DayPicker-feature-label').length;
    const text = wrapper.find('.DayPicker-feature-label').text();

    expect(defaultEl).to.not.equal(1);
    expect(defaultEl).to.equal(0);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
    expect(text).to.not.equal('');
    expect(text).to.equal('to');
  });

  it('should display the currentMonth state in the UI', () => {
    const el = wrapper.find('.DayPicker-header-title').text();
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el).to.not.equal('');
    expect(el).to.equal(moment().format('MMMM'));
  });

  it('should display the weekdays', () => {
    const el = wrapper.find('.DayPicker-week-li').length;
    expect(el).to.not.equal(0);
    expect(el).to.not.equal(3);
    expect(el).to.not.equal(5);
    expect(el).to.equal(7);
  });

  it('should update the transition state when arrows clicked', () => {
    wrapper.setState({ transition: '' });
    // click prev
    wrapper.find('.prev').simulate('click');
    expect(wrapper.state().transition).to.equal('fadeOutRight');

    setTimeout(() => {
      expect(wrapper.state().transition).to.equal('fadeInLeft');
    }, 300);

    setTimeout(() => {
      expect(wrapper.state().transition).to.equal('');
    }, 800);

    // click next
    setTimeout(() => {
      wrapper.find('.next').simulate('click');
      expect(wrapper.state().transition).to.equal('fadeOutLeft');

      setTimeout(() => {
        expect(wrapper.state().transition).to.equal('fadeInRight');
      }, 300);

      setTimeout(() => {
        expect(wrapper.state().transition).to.equal('');
      }, 800);
    }, 1000);
  });

});
