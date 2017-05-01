import React from 'react';
import PropTypes from 'prop-types';
import { SelectBox } from 'src';

const propTypes = {
  callback: PropTypes.func
};


export default function DemoSelectBox({ callback }) {
  const cities = [
    { name: 'austin', value: '0001' },
    { name: 'denver', value: '0002' },
    { name: 'portland', value: '0003' },
    { name: 'seatle', value: '0004' },
    { name: 'los angeles', value: '0005' }
  ];

  const books = [
    { name: 'LeanUx', value: '0001' },
    { name: 'The Lean Startup', value: '0002' },
    { name: 'Remote: Office Not Required', value: '0003' }
  ];

  const bikes = [
    { name: 'sworks-tarmac', value: '1001' },
    { name: 'santa cruz stigmata', value: '222' },
    { name: 'titanium travel', value: '33300' },
    { name: 'sworks-sagan', value: '405' }
  ];

  const cityList = cities.map((city, i) => (
    <div key={ `book-${ i }` } value={ city.value }>{ city.name }</div>
  ));

  const bookList = books.map((book, i) => (
    <div key={ `book-${ i }` } value={ book.value }>{ book.name }</div>
  ));

  const bikeList = bikes.map((bike, i) => (
    <div key={ `bike-${ i }` } value={ bike.value }>{ bike.name }</div>
  ));

  return(
    <div>
      <div style={{ paddingBottom: '2rem' }}>

      </div>

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
          form
          callback={ (e) => console.log(e) }
          label="select book (controlled)"
          name="books"
          required
          value="0002"
        >
          { bookList }
        </SelectBox>
      </div>

      <div>
        <SelectBox
          form
          label="Select Bike"
          name="Bikes"
          callback={ (a,b) => console.log(a, b) }
          value={ 1001 }
        >
          { bikeList }
        </SelectBox>
      </div>

    </div>
  );
}


DemoSelectBox.propTypes = propTypes;
