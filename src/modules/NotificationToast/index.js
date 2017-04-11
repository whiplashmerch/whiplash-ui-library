import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import '../../fonts/index.css';
import './NotificationToast.css';


const propTypes = {
  active: PropTypes.bool,
  message: PropTypes.string,
  theme: PropTypes.string
};

const defaultProps = {
  active: false,
  message: 'add your notification message prop',
  theme: ''
};


export default function NotificationToast({ active, theme, message }) {
  const MainClass = classnames('NotificationToast', theme);
  let NotificationIcon = null;

  if (!active) {
    return null;
  }


  return(
    <div className={ MainClass }>
      <p className="NotificationToast-text">
        { message }.
      </p>
    </div>
  );
}

NotificationToast.propTypes = propTypes;
NotificationToast.defaultProps = defaultProps;
