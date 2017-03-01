import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import getCalendarMonthWeeks from './getCalendarMonthWeeks';

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
