import React, { PropTypes } from 'react';
import classnames from 'classnames';
import './NotificationToast.css';

const propTypes = {
  message: PropTypes.string,
  theme: PropTypes.string
};

const defaultProps = {
  message: 'add your notification message prop',
  theme: ''
};


export default function NotificationToast({ theme, message }) {
  const MainClass = classnames('NotificationToast', { theme });

  return(
    <div className={ MainClass }>
      <span className="NotificationToast-icon-wrapper">
      </span>

      <p className="NotificationToast-text">
        { message }.
      </p>
    </div>
  );
}

NotificationToast.propTypes = propTypes;
NotificationToast.defaultProps = defaultProps;
