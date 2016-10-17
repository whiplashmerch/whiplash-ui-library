import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import Button from './';


describe('Button Component', () => {

  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button buttonText="test" callback={ function(){} } />, div);
  });


  it('should have a button trigger', () => {
    const wrapper = shallow(<Button buttonText="test" callback={ function(){} } />);
    expect(wrapper.find('.Button')).toBeDefined();
  });


  it('should have a default buttonType prop', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.props().buttonType).toEqual('button');
  });


  it('should add buttonType prop to type attribute', () => {
    const wrapper = mount(<Button buttonType="submit" />);
    expect(wrapper.props().buttonType).toEqual('submit');
    expect(wrapper.props().buttonType).not.toEqual('button');
  });


  it('should have a default callback prop', () => {
    const wrapper = mount(<Button />);
    expect(wrapper.props().callback).not.toEqual(null);
  });

});
