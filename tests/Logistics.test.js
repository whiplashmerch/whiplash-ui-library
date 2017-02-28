import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { logistics } from 'src/modules/InformationalIcon/Icons';


describe('<logistics />', () => {

  const defaultWrapper = mount(<logistics />);
  const wrapper = mount(<logistics iconColor="blue" />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<logistics />, div);
  });

  it('should take a iconColor prop', () => {
    expect(wrapper.props().iconColor).to.not.equal(null);
    expect(wrapper.props().iconColor).to.not.equal(undefined);
    expect(wrapper.props().iconColor).to.not.equal('');
    expect(wrapper.props().iconColor).to.equal('blue');
  });

});
