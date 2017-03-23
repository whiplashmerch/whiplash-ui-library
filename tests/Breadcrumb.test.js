import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { Breadcrumb } from 'src';


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

  // PROPS

  it('should have a list prop', () => {
    const prop = wrapper.props().list;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop.length).to.equal(1);
    expect(prop).to.equal(breadList);
    expect(prop).to.not.equal([]);
  });

  it('should have a bgColor prop', () => {
    const prop = wrapper.props().bgColor;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('transparent');
    expect(prop).to.equal('#f5f5f5');
  });

  it('should have a default bgColor prop value', () => {
    const prop = defaultWrapper.props().bgColor;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal('transparent');
  });

  it('should have a default list prop value', () => {
    const prop = defaultWrapper.props().list;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop.length).to.equal(0);
    expect(prop).to.not.equal(breadList);
  });

  // COMPONENT

  it('should display the list items of array length', () => {
    const el = wrapper.find('.Breadcrumb-list-li').length;
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
  });

  it('should not show if list length is 0', () => {
    const el = shallowWrap.find('.Breadcrumb');
    expect(el).to.not.equal(true);
    expect(el.length).to.equal(0);
    expect(el.length).to.not.equal(1);
  });

});
