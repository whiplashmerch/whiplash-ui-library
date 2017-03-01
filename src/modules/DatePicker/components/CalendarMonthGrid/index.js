import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import getCalendarMonthWeeks from './utils/getCalendarMonthWeeks';

import 'animate.css';
import '../../../../fonts/index.css';
import './CalendarMonthGrid.css';


export default class CalendarMonthGrid extends Component {
  static propTypes = {
    initialMonth: PropTypes.object
  }

  static defaultProps = {
    initialMonth: moment()
  }

  // PRIVATE

  _getWeeks = () => {
    const { initialMonth } = this.props;
    const weeks = getCalendarMonthWeeks(moment(), false);
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
