import React from 'react';
import ReactDOM from 'react-dom';
import sinon from 'sinon';
import { expect } from 'chai';
import { mount, shallow } from 'enzyme';
import { Image } from 'src';


describe('<Image />', () => {

  const props = {
    alt: 'test image',
    backgroundSize: '2rem',
    onError: sinon.spy(),
    placeholder: 'placeholder.svg',
    src: 'realImg.svg'
  };

  const shallowWrapper = shallow(<Image />);
  const defaultWrapper = mount(<Image />);
  const wrapper = mount(<Image { ...props } />);


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image { ...props } />, div);
  });

  // PROPS

  it('should accept a all other props given', () => {
    const prop = wrapper.props().src;
    const onErrorProp = wrapper.props().onError;

    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('');
    expect(prop).to.equal(props.src);
    expect(onErrorProp).to.equal(props.onError);
  });


  // COMPONENT

  it('should add a "fadeIn" class if this.img exists', () => {
    const func = wrapper.instance()._loadImage;

    expect(func).to.not.equal(null);
    expect(func).to.not.equal(undefined)
    expect(() => sinon.spy(() => func()).threw()).to.not.equal(true);

    func();
    expect(wrapper.find('.fadeIn').length).to.not.equal(0);
    expect(wrapper.find('.fadeIn').length).to.equal(1);
  });

  it('should return null if no src prop given', () => {
    const el = shallowWrapper.type();
    expect(el).to.not.equal(undefined);
    expect(el).to.equal(null);
  });

  it('should display an <img /> in the UI', () => {
    const el = wrapper.find('.Image').length;
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
  });

});
