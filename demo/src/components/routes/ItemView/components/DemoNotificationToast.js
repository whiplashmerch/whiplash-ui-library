import React, { PropTypes } from 'react';
import { NotificationToast } from 'src';


export default function DemoNotificationToas() {
  return(
    <div>
      <NotificationToast active />

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
