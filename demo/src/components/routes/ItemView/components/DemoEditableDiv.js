import React from 'react';
import PropTypes from 'prop-types';
import { EditableDiv } from 'src';

const propTypes = {
  onCallback: PropTypes.func
};


export default function DemoEditableDiv({ onCallback }) {
  return(
    <div>
      <EditableDiv
        dataId={ 1 }
        divContent="Weasly is our King!"
        name="fav song"
        onUpdate={ onCallback }
      />

      <span style={{ display: 'inline-block', paddingLeft: '1rem' }}>
        <EditableDiv
          dataId={ 2 }
          divContent={ 23 }
          name="goblets"
          onUpdate={ onCallback }
          type="number"
        />
      </span>
    </div>
  );
}

DemoEditableDiv.propTypes = propTypes;
