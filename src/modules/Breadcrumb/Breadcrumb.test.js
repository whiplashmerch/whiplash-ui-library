import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import Breadcrumb from './';


describe('<Breadcrumb />', () => {

  const breadList = [{ name: 'test', url: 'test' }];

  const defaultWrapper = mount(<Breadcrumb />);
  const shallowWrap = shallow(<Breadcrumb />);

  const wrapper = mount(
    <Breadcrumb bgColor="#f5f5f5" list={ breadList } />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Breadcrumb />, div);
  });

  it('should have a list prop', () => {
    expect(wrapper.props().list).to.not.equal(null);
    expect(wrapper.props().list).to.not.equal(undefined);
    expect(wrapper.props().list.length).to.equal(1);
    expect(wrapper.props().list).to.equal(breadList);
    expect(wrapper.props().list).to.not.equal([]);
  });

  it('should have a bgColor prop', () => {
    expect(wrapper.props().bgColor).to.not.equal(null);
    expect(wrapper.props().bgColor).to.not.equal(undefined);
    expect(wrapper.props().bgColor).to.not.equal('transparent');
    expect(wrapper.props().bgColor).to.equal('#f5f5f5');
  });

  it('should have a default bgColor prop value', () => {
    expect(defaultWrapper.props().bgColor).to.not.equal(null);
    expect(defaultWrapper.props().bgColor).to.not.equal(undefined);
    expect(defaultWrapper.props().bgColor).to.not.equal('');
    expect(defaultWrapper.props().bgColor).to.equal('transparent');
  });

  it('should have a default list prop value', () => {
    expect(defaultWrapper.props().list).to.not.equal(null);
    expect(defaultWrapper.props().list).to.not.equal(undefined);
    expect(defaultWrapper.props().list.length).to.equal(0);
    expect(defaultWrapper.props().list).to.not.equal(breadList);
  });

  it('should display the list items of array length', () => {
    expect(wrapper.find('.Breadcrumb-list-li').length).to.not.equal(null);
    expect(wrapper.find('.Breadcrumb-list-li').length).to.not.equal(0);
    expect(wrapper.find('.Breadcrumb-list-li').length).to.equal(1);
  });

  it('should not show if list length is 0', () => {
    expect(shallowWrap.find('.Breadcrumb')).to.not.equal(true);
    expect(shallowWrap.find('.Breadcrumb').length).to.equal(0);
    expect(shallowWrap.find('.Breadcrumb').length).to.not.equal(1);
  });

});
