import React from 'react';
import PropTypes from 'prop-types';
import { SelectBox } from 'src';

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
    </div>
  );
}


DemoSelectBox.propTypes = propTypes;
