import React from 'react';
import PropTypes from 'prop-types';
import { NewSelect, SelectBox } from 'src';

const propTypes = {
  callback: PropTypes.func
};


export default function DemoSelectBox({ callback }) {
  const list1 = ['item 1', 'item 2', 'item 3'];
  const list2 = ['austin', 'denver', 'portland', 'seattle', 'los angeles'];
  const list3 = [
    { text: 'LeanUx', value: '0001' },
    { text: 'The Lean Startup', value: '0002' },
    { text: 'Remote: Office Not Required', value: '0003' },
  ];

  const bikes = [
    { name: 'sworks-tarmac', value: '1001' },
    { name: 'santa cruz stigmata', value: '222' },
    { name: 'titanium travel', value: '33300' },
    { name: 'sworks-sagan', value: '405' },
  ];

  const bikeList = bikes.map((bike, i) => (
    <div key={ `bike-${ i }` } value={ bike.value }>{ bike.name }</div>
  ));

  return(
    <div>
      <div style={{ paddingBottom: '2rem' }}>
        <SelectBox
          list={ list1 }
          callback={ callback }
        />
      </div>

      <div style={{ paddingBottom: '2rem' }}>
        <SelectBox
          form
          label="select city"
          list={ list2 }
          name="city"
          required
          callback={ callback }
        />
      </div>

      <div>
        <SelectBox
          form
          label="select book"
          list={ list3 }
          name="books"
          required
          callback={ (a,b) => console.log(a, b) }
        />
      </div>

      <div>
        <NewSelect
          label="Select Bike"
          name="Bikes"
          callback={ (a,b) => console.log(a, b) }
          value={ 1001 }
        >
          { bikeList }
        </NewSelect>
      </div>

    </div>
  );
}


DemoSelectBox.propTypes = propTypes;
