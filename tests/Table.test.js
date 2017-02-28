import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Table } from 'src';


describe('<Table />', () => {

  const defaultWrapper = mount(<Table />);

  const wrapper = mount(
    <Table>
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
