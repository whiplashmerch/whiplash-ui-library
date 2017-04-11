import React from 'react';
import PropTypes from 'prop-types';
import './CheckButton.css';

const propTypes = {
  defaultChecked: PropTypes.bool
};

const defaultProps = {
  defaultChecked: false
};


export default function CheckButton({ defaultChecked, ...props }) {
  return(
    <div className="CheckButton">
      <input
        className="CheckButton-input"
        type="checkbox"
        defaultChecked={ defaultChecked }
        { ...props }
      />

      <span className="CheckButton-btn" />
    </div>
  );
}


CheckButton.propTypes = propTypes;
CheckButton.defaultProps = defaultProps;
