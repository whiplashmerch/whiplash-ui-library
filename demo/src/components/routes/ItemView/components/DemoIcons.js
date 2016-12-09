import React from 'react';
import { Icon } from 'src';

const icons = [
  'add', 'alarm', 'alarm_filled', 'arrow_down_circle', 'arrow_down',
  'arrow_right', 'clipboard', 'close', 'copy', 'edit', 'export', 'grid',
  'info', 'list', 'more_options', 'print', 'refresh', 'search', 'settings',
  'trash'
];


export default function DemoIcons() {
  const date = new Date();

  return(
    <ul className="Icon-wrapper">
      {
        icons.map((ico, index) => (
          <li className="Icon-container" key={ `${ date }-${ index }` }>
            <Icon name={ ico }>{ ico }</Icon>
          </li>
        ))
      }
    </ul>
  );
}
