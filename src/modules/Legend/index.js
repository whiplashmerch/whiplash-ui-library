import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Theme from '../Theme';
import './Legend.css';

const propTypes = {
  activeIndex: PropTypes.string.isRequired,
  color: PropTypes.string,
  total: PropTypes.string.isRequired
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


const Legend = ({ activeIndex, callback, color, total }) => {
  const numTotal  = Number(total);
  const listItems = [];
  let date = null;
  let dotClasses = null;
  let activeStyle = null;

  for (var i = 0; i < numTotal; i++) {
    date = new Date();
    dotClasses  = classnames('Legend-dot', { active: i === activeIndex, completed: i < activeIndex });
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
          onClick={(e) => callback(e.target.dataset.eq)}
        />
      </li>
    )
  }


  return(
    <div className="Legend">
      <ul className="Legend-list">
        { listItems }
      </ul>
    </div>
  );
};


Legend.propTypes = propTypes;
Legend.defaultProps = defaultProps;

export default Legend;
