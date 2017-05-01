import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { DotLoader } from 'src';


describe('<DotLoader />', () => {

  const wrapper = mount(<DotLoader />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DotLoader />, div);
  });

  // COMPONENT

  it('should display 3 dots', () => {
    const el = wrapper.find('.DotLoader-li').length;
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el).to.not.equal(0);
    expect(el).to.not.equal(1);
    expect(el).to.not.equal(2);
    expect(el).to.equal(3);
  });

});
