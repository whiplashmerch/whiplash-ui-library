import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Modal from './';


describe('<Modal />', () => {

  const defaultWrapper = mount(<Modal />);

  const wrapper = mount(
    <Modal
      active={ true }
      content="test content"
      logo="fake.svg"
      modalWidth="40rem"
      onCloseModal={() => console.log('close')}
    />
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Modal />, div);
  });

  it('should have a default active prop', () => {
    expect(defaultWrapper.props().active).to.not.equal(null);
    expect(defaultWrapper.props().active).to.not.equal(undefined);
    expect(defaultWrapper.props().active).to.not.equal('false');
    expect(defaultWrapper.props().active).to.not.equal(true);
    expect(defaultWrapper.props().active).to.equal(false);
  });

  it('should have a default content prop', () => {
    expect(defaultWrapper.props().content).to.not.equal(undefined);
    expect(defaultWrapper.props().content).to.not.equal('');
    expect(defaultWrapper.props().content).to.equal(null);
  });

  it('should have a default logo prop', () => {
    expect(defaultWrapper.props().logo).to.not.equal(null);
    expect(defaultWrapper.props().logo).to.not.equal(undefined);
    expect(defaultWrapper.props().logo).to.not.equal('test.svg');
    expect(defaultWrapper.props().logo).to.equal('');
  });

  it('should have a default modalWidth prop', () => {
    expect(defaultWrapper.props().modalWidth).to.not.equal(null);
    expect(defaultWrapper.props().modalWidth).to.not.equal(undefined);
    expect(defaultWrapper.props().modalWidth).to.not.equal('');
    expect(defaultWrapper.props().modalWidth).to.equal('38.75rem');
  });

  it('should accept an active prop', () => {
    expect(wrapper.props().active).to.not.equal(null);
    expect(wrapper.props().active).to.not.equal(undefined);
    expect(wrapper.props().active).to.not.equal(false);
    expect(wrapper.props().active).to.equal(true);
  });

  it('should accept an content prop', () => {
    expect(wrapper.props().content).to.not.equal(null);
    expect(wrapper.props().content).to.not.equal(undefined);
    expect(wrapper.props().content).to.equal('test content');
  });

  it('should accept an logo prop', () => {
    expect(wrapper.props().logo).to.not.equal(null);
    expect(wrapper.props().logo).to.not.equal(undefined);
    expect(wrapper.props().logo).to.not.equal('');
    expect(wrapper.props().logo).to.equal('fake.svg');
  });

  it('should accept an modalWidth prop', () => {
    expect(wrapper.props().modalWidth).to.not.equal(null);
    expect(wrapper.props().modalWidth).to.not.equal(undefined);
    expect(wrapper.props().modalWidth).to.not.equal('38.75rem');
    expect(wrapper.props().modalWidth).to.equal('40rem');
  });

  it('should add an active class if active prop true', () => {
    expect(wrapper.props().active).to.equal(true);
    expect(wrapper.find('.active')).to.not.equal(null);
    expect(wrapper.find('.active')).to.not.equal(undefined);
    expect(wrapper.find('.active').length).to.equal(1);
  });

  it('should add correct animation classes dependent active prop', () => {
    expect(wrapper.props().active).to.equal(true);
    expect(wrapper.find('.fadeInDown')).to.not.equal(null);
    expect(wrapper.find('.fadeInDown')).to.not.equal(undefined);
    expect(wrapper.find('.fadeInDown').length).to.equal(1);

    expect(wrapper.find('.fadeIn')).to.not.equal(null);
    expect(wrapper.find('.fadeIn')).to.not.equal(undefined);
    expect(wrapper.find('.fadeIn').length).to.equal(1);

    // non-active
    expect(defaultWrapper.props().active).to.equal(false);
    expect(defaultWrapper.find('.fadeOutDown')).to.not.equal(null);
    expect(defaultWrapper.find('.fadeOutDown')).to.not.equal(undefined);
    expect(defaultWrapper.find('.fadeOutDown').length).to.equal(0);

    expect(defaultWrapper.find('.fadeOut')).to.not.equal(null);
    expect(defaultWrapper.find('.fadeOut')).to.not.equal(undefined);
    expect(defaultWrapper.find('.fadeOut').length).to.equal(1);
  });

});
