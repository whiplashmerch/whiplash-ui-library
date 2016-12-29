import React, { PropTypes } from 'react';
import { Button } from 'src';

const propTypes = {
  onCallback: PropTypes.func
};

export default function DemoButton({ onCallback }) {
  return(
    <div>
      <Button
        buttonText="default"
        callback={ onCallback }
      />

      <Button
        buttonText="secondary-border"
        theme="secondary-border"
        callback={ onCallback }
      />

      <Button
        buttonText="secondary-dark"
        theme="secondary-dark"
        callback={ onCallback }
      />

      <Button
        buttonText="text link"
        theme="text"
        callback={ onCallback }
      />
    </div>
  );
}

DemoButton.propTypes = propTypes;
