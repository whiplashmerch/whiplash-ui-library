import React, { PropTypes } from 'react';
import { css } from 'aphrodite/no-important';
import Theme from '../Theme';
import LegendStyles from './styles';


const propTypes = {
  activeIndex: PropTypes.string.isRequired,
  color: PropTypes.string,
  total: PropTypes.string.isRequired
};

const defaultProps = {
  color: Theme.accent
};

const getActiveStyle = (...props) => {
  const activeIndex = props[0];
  const current = props[1];
  const color   = props[2];

  if (current === activeIndex) {
    return { backgroundColor: color };
  } else {
    return null;
  }
};

const getDotStyle = (...props) => {
  const total = props[0];
  const activeIndex = props[1];
  const current = props[2];

  // completed
  while (current < activeIndex) {
    return css([LegendStyles.dot, LegendStyles.completedDot]);
  }

  // active or normal
  if (current === activeIndex) {
    return css([LegendStyles.dot, LegendStyles.activeDot]);
  } else {
    return css([LegendStyles.dot]);
  }
};


const Legend = ({ activeIndex, callback, color, total }) => {
  const numTotal  = Number(total);
  const listItems = [];

  for (var i = 0; i < numTotal; i++) {
    const date = new Date();
    const dotClasses  = getDotStyle(numTotal, Number(activeIndex), i);
    const activeStyle = getActiveStyle(Number(activeIndex), i, color);

    listItems.push(
      <li
        className={ css(LegendStyles.listItem) }
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
      <ul className={ css(LegendStyles.list) }>
        { listItems }
      </ul>
    </div>
  );
};


Legend.propTypes = propTypes;
Legend.defaultProps = defaultProps;
export default Legend;
