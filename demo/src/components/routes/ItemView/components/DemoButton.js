import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'src';

const propTypes = {
  onCallback: PropTypes.func
};

export default function DemoButton({ onCallback }) {
  return(
    <div>
      <Button
        type="button"
        buttonText="default"
        callback={ onCallback }
      />

      <Button
        type="button"
        buttonText="secondary-border"
        theme="secondary-border"
        callback={ onCallback }
      />

      <Button
        type="button"
        buttonText="secondary-dark"
        theme="secondary-dark"
      />

      <Button
        type="button"
        buttonText="text link"
        theme="text"
        callback={ onCallback }
      />
    </div>
  );
}

DemoButton.propTypes = propTypes;
