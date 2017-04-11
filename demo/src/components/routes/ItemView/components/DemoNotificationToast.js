import React from 'react';
import PropTypes from 'prop-types';
import { NotificationToast } from 'src';


export default function DemoNotificationToast() {
  return(
    <div>
      <NotificationToast
        active
        message="This is a default theme notification"
      />

      <NotificationToast
        active
        message="This is a pending theme notification"
        theme="pending"
      />

      <NotificationToast
        active
        message="This is a error theme notification"
        theme="error"
      />
    </div>
  );
}
