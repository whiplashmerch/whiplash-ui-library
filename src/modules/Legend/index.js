import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Theme from '../Theme';

import './Legend.css';


const propTypes = {
  activeIndex: PropTypes.string.isRequired,
  color: PropTypes.string,
  total: PropTypes.string.isRequired,
  callback: PropTypes.func
};

const defaultProps = {
  color: Theme.primaryLight
};

const getActiveStyle = (...props) => {
  const activeIndex = props[0];
  const current = props[1];
  const color   = props[2];

  if (current === activeIndex) {
    return { backgroundColor: color, borderColor: color };
  } else {
    return null;
  }
};


export default function Legend({ activeIndex, callback, color, total }) {
  let activeStyle, date, dotClasses = null;
  const numTotal  = Number(total);
  const listItems = [];

  const triggerCallback = (e) => {
    if (!!callback && e.target.classList.contains('completed')) {
      callback(e.target.dataset.eq);
    } else {
      return;
    }
  };

  for (var i = 0; i < numTotal; i++) {
    date = new Date();
    dotClasses  = classnames('Legend-dot', { active: i === Number(activeIndex), completed: i < activeIndex });
    activeStyle = getActiveStyle(Number(activeIndex), i, color);

    listItems.push(
      <li
        className="Legend-list-li"
        key={ `${ date }-${ i }` }
      >
        <span
          className={ dotClasses }
          data-eq={ i }
          style={ activeStyle }
          onClick={ triggerCallback }
        />
      </li>
    );
  }


  return(
    <div className="Legend">
      <ul className="Legend-list">
        { listItems }
      </ul>
    </div>
  );
}


Legend.propTypes = propTypes;
Legend.defaultProps = defaultProps;
