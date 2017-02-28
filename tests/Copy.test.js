import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { copy } from 'src/modules/Icon/Icons';


describe('<copy />', () => {

  const defaultWrapper = mount(<copy />);
  const wrapper = mount(<copy iconColor="blue" />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<copy />, div);
  });

  it('should take a iconColor prop', () => {
    expect(wrapper.props().iconColor).to.not.equal(null);
    expect(wrapper.props().iconColor).to.not.equal(undefined);
    expect(wrapper.props().iconColor).to.not.equal('');
    expect(wrapper.props().iconColor).to.equal('blue');
  });

});
