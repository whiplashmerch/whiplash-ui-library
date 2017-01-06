import React, { PropTypes } from 'react';
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
