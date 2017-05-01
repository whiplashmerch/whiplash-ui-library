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
        buttonText="default"
        callback={ onCallback }
        type="button"
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

      <Button
        buttonText="default"
        callback={ onCallback }
        loading
        type="button"
      />

      <Button
        type="button"
        buttonText="secondary-border"
        callback={ onCallback }
        loading
        theme="secondary-border"
      />

      <Button
        type="button"
        buttonText="secondary-dark"
        loading
        theme="secondary-dark"
      />
    </div>
  );
}

DemoButton.propTypes = propTypes;
