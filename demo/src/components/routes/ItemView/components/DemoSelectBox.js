import React, { PropTypes } from 'react';
import { SelectBox } from 'src';

const propTypes = {
  callback: PropTypes.func
};


export default function DemoSelectBox({ callback }) {
  const list1 = ['item 1', 'item 2', 'item 3'];
  const list2 = ['austin', 'denver', 'portland'];

  return(
    <div>
      <div style={{ paddingBottom: '1rem' }}>
        <SelectBox
          list={ list1 }
          callback={ callback }
        />
      </div>

      <div>
        <SelectBox
          form
          name="city"
          required
          list={ list2 }
          callback={ callback }
        />
      </div>
    </div>
  );
}


DemoSelectBox.propTypes = propTypes;
