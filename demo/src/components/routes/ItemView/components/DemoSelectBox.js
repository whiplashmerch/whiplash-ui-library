import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, SelectBox } from 'src';

const propTypes = {
  callback: PropTypes.func
};


export default class DemoSelectBox extends Component {
  state = {
    currentItem: '002'
  }


  render() {
    const { currentItem } = this.state;
    const { callback } = this.props;

    const cities = [
      { name: 'austin',      value: '0001' },
      { name: 'denver',      value: '0002' },
      { name: 'portland',    value: '0003' },
      { name: 'seatle',      value: '0004' },
      { name: 'los angeles', value: '0005' }
    ];

    const cityList = cities.map((city, i) => (
      <div key={ `book-${ i }` } value={ city.value }>{ city.name }</div>
    ));


    return(
      <div>
        <div style={{ paddingBottom: '2rem' }}>
          <SelectBox
            form
            label="select city"
            name="city"
            required
            callback={ callback }
          >
            { cityList }
          </SelectBox>
        </div>

        <div style={{ paddingBottom: '2rem' }}>
          <SelectBox
            callback={ e => this.setState({ currentItem: e.target.value }) }
            label="select book (controlled)"
            required
            value={ currentItem }
          >
            <div value="001">the philosopher's stone</div>
            <div value="002">the chamber of secrets</div>
            <div value="003">the prizoner of azkaban</div>
          </SelectBox>
        </div>
      </div>
    );
  }
}
