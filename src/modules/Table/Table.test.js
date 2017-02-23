import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import Table from './';


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
    expect(defaultWrapper.find('.Table').length).toBeDefined();
    expect(defaultWrapper.find('.Table').length).not.toEqual(1);
    expect(defaultWrapper.find('.Table').length).toEqual(0);
  });

  it('should display the children in the UI', () => {
    expect(wrapper.props().children).not.toBeNull();
    expect(wrapper.props().children).toBeDefined();
    expect(wrapper.props().children.length).not.toEqual(0);
    expect(wrapper.find('th').text()).not.toEqual('');
    expect(wrapper.find('th').text()).toEqual('test');
    expect(wrapper.find('td').text()).not.toEqual('');
    expect(wrapper.find('td').text()).toEqual('test data');
  });

});
