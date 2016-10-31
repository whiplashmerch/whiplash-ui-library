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


const Legend = ({ activeIndex, callback, color, total }) => {
  const numTotal  = Number(total);
  const listItems = [];

  for (var i = 0; i < numTotal; i++) {
    const date = new Date();
    const active = i === Number(activeIndex) ? true : false;
    const dotStyle = active ? css([LegendStyles.dot, LegendStyles.activeDot]) : css(LegendStyles.dot);

    listItems.push(
      <li
        className={ css(LegendStyles.listItem) }
        key={ `${ date }-${ i }` }
      >
        <span
          className={ dotStyle }
          data-eq={ i }
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
