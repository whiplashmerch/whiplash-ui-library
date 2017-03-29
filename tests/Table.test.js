import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Table } from 'src';


describe('<Table />', () => {

  const defaultWrapper = mount(<Table />);

  const wrapper = mount(
    <Table inverted>
      <thead>
        <tr><th>test</th></tr>
      </thead>
      <tbody>
        <tr><td>test data</td></tr>
      </tbody>
    </Table>
  );


  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table />, div);
  });

  // PROPS

  it('should have a default inverted prop', () => {
    const prop = defaultWrapper.props().inverted;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal('false');
    expect(prop).to.equal(false);
  });

  it('should accept an inverted prop', () => {
    const prop = wrapper.props().inverted;
    expect(prop).to.not.equal(null);
    expect(prop).to.not.equal(undefined);
    expect(prop).to.not.equal(false);
    expect(prop).to.equal(true);
  });

  // COMPONENT

  it('should add a "inverted" class if inverted prop true', () => {
    const el = wrapper.find('.inverted').length;
    expect(el).to.not.equal(null);
    expect(el).to.not.equal(undefined);
    expect(el).to.not.equal(0);
    expect(el).to.equal(1);
  });

  it('should return null if no children given', () => {
    expect(defaultWrapper.find('.Table').length).to.not.equal(undefined);
    expect(defaultWrapper.find('.Table').length).to.not.equal(1);
    expect(defaultWrapper.find('.Table').length).to.equal(0);
  });

  it('should display the children in the UI', () => {
    expect(wrapper.props().children).to.not.equal(null);
    expect(wrapper.props().children).to.not.equal(undefined);
    expect(wrapper.props().children.length).to.not.equal(0);
    expect(wrapper.find('th').text()).to.not.equal('');
    expect(wrapper.find('th').text()).to.equal('test');
    expect(wrapper.find('td').text()).to.not.equal('');
    expect(wrapper.find('td').text()).to.equal('test data');
  });

});
