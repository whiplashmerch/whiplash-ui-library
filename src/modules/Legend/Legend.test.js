import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Legend from './';


describe('<Legend />', () => {

  const wrapper = mount(
    <Legend
      activeIndex="2"
      total="4"
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Legend activeIndex="3" total="5" />, div);
  });

  it('should have a default color prop', () => {
    expect(wrapper.props().color).to.not.equal(null);
    expect(wrapper.props().color).to.not.equal(undefined);
    expect(wrapper.props().color).to.not.equal('');
    expect(wrapper.props().color).to.equal('#8071FE');
  });

  it('should have an activeIndex prop', () => {
    expect(wrapper.props().activeIndex).to.not.equal(null);
    expect(wrapper.props().activeIndex).to.not.equal(undefined);
    expect(wrapper.props().activeIndex).to.not.equal('0');
    expect(wrapper.props().activeIndex).to.equal('2');
  });

  it('should have an total prop', () => {
    expect(wrapper.props().total).to.not.equal(null);
    expect(wrapper.props().total).to.not.equal(undefined);
    expect(wrapper.props().total).to.not.equal('0');
    expect(wrapper.props().total).to.equal('4');
  });

  it('should have same amount of <li/> as total prop', () => {
    expect(wrapper.find('.Legend-list-li').length).to.not.equal(null);
    expect(wrapper.find('.Legend-list-li').length).to.not.equal(undefined);
    expect(wrapper.find('.Legend-list-li').length).to.not.equal(0);
    expect(wrapper.find('.Legend-list-li').length).to.equal(4);
  });

  it('should have 1 active dot', () => {
    expect(wrapper.find('.active')).to.not.equal(null);
    expect(wrapper.find('.active')).to.not.equal(undefined);
    expect(wrapper.find('.active').length).to.equal(0);
  });

  it('should have 2 completed dots', () => {
    expect(wrapper.find('.completed')).to.not.equal(null);
    expect(wrapper.find('.completed')).to.not.equal(undefined);
    expect(wrapper.find('.completed').length).to.equal(2);
  });

});
