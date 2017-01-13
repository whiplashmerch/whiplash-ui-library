import React, { PropTypes } from 'react';
import './CheckButton.css';

const propTypes = {
  defaultChecked: PropTypes.bool
};

const defaultProps = {
  defaultChecked: false
};


export default function CheckButton({ defaultChecked }) {
  return(
    <div className="CheckButton">
      <input
        className="CheckButton-input"
        type="checkbox"
        defaultChecked={ defaultChecked }
      />

      <span className="CheckButton-btn" />
    </div>
  );
}


CheckButton.propTypes = propTypes;
CheckButton.defaultProps = defaultProps;
