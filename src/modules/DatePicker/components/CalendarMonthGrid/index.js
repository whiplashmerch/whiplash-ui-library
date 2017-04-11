import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames';

import getCalendarMonthWeeks from './utils/getCalendarMonthWeeks';

import '../../../../fonts/index.css';
import './CalendarMonthGrid.css';


export default class CalendarMonthGrid extends Component {
  static propTypes = {
    initialMonth: PropTypes.object,
    onDayClick: PropTypes.func
  }

  static defaultProps = {
    initialMonth: moment()
  }

  // PRIVATE

  _getWeeks = () => {
    const { initialMonth, onDayClick } = this.props;
    const weeks = getCalendarMonthWeeks(initialMonth, false);
    let dayClass = null;

    return weeks.map((week, index) => (
      <tr
        className="CalendarMonthGrid-tr"
        key={ `${ week }-${ index }` }
      >
        {
          week.map((day, dayOfWeek) => {
            dayClass = classnames('CalendarMonthGrid-td', { blank: !!!day });

            return(
              <td
                className={ dayClass }
                key={ `${ day }-${ dayOfWeek }` }
                onClick={e => onDayClick(e, day)}
              >
                { day ? day.format('D') : '' }
              </td>
            )
          })
        }
      </tr>
    ))
  }


  render() {
    const weeks = this._getWeeks();

    return(
      <div className="CalendarMonthGrid">
        <table className="CalendarMonthGrid-table">
          <tbody className="CalendarMonthGrid-tbody">
            { weeks }
          </tbody>
        </table>
      </div>
    );
  }
}
