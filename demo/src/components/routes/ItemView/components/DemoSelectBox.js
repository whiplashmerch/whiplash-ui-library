import React from 'react';
import PropTypes from 'prop-types';
import { SelectBox } from 'src';

const propTypes = {
  callback: PropTypes.func
};


export default function DemoSelectBox({ callback }) {
  const list1 = ['item 1', 'item 2', 'item 3'];
  const list2 = ['austin', 'denver', 'portland', 'seattle', 'los angeles'];

  return(
    <div>
      <div style={{ paddingBottom: '2rem' }}>
        <SelectBox
          list={ list1 }
          callback={ callback }
        />
      </div>

      <div>
        <SelectBox
          form
          label="select city"
          list={ list2 }
          name="city"
          required
          callback={ callback }
        />
      </div>
    </div>
  );
}


DemoSelectBox.propTypes = propTypes;
