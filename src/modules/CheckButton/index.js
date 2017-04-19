import React from 'react';
import PropTypes from 'prop-types';
import './CheckButton.css';


export default function CheckButton({ ...props }) {
  return(
    <div className="CheckButton">
      <input
        className="CheckButton-input"
        type="checkbox"
        { ...props }
      />

      <span className="CheckButton-btn" />
    </div>
  );
}
