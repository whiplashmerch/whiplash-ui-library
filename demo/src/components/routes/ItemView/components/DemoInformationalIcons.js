import React from 'react';
import { InformationalIcon } from 'src';

const icons = [
  'approved', 'approved_shield', 'box', 'chip', 'clock', 'doc',
  'errored', 'error_shield', 'graph', 'logistics', 'secure', 'settings',
  'stacked_boxes', 'whiplash'
];


export default function DemoInformationalIcon() {
  const date = new Date();

  return(
    <ul className="Icon-wrapper">
      {
        icons.map((ico, index) => (
          <li className="Icon-container" key={ `${ date }-${ index }` }>
            <InformationalIcon name={ ico }>{ ico }</InformationalIcon>
          </li>
        ))
      }
    </ul>
  );
}
