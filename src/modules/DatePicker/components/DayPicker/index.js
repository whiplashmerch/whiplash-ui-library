import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import classnames from 'classnames';
import CalendarMonthGrid from '../CalendarMonthGrid';
import MonthPicker from '../MonthPicker';

import 'animate.css';
import '../../../../fonts/index.css';
import './DayPicker.css';


export default class DayPicker extends Component {
  static propTypes = {
    active: PropTypes.bool,
    infoHeader: PropTypes.string,
    onDayClick: PropTypes.func
  }

  static defaultProps = {
    active: false,
    infoHeader: null
  }

  state = {
    currentMonth: moment(),
    currentYear: moment().year()
  }

  // PRIVATE

  _getInfoHeader = () => {
    const { infoHeader } = this.props;

    if (!!!infoHeader) {
      return null;
    }

    return(
      <p className="DayPicker-feature-label">
        { infoHeader }
      </p>
    );
  }

  _getWeekdays = () => {
    const days  = ['s', 'm', 't', 'w', 't', 'f', 's'];
    let liClass = null;

    return days.map((day, index) => {
      liClass = classnames('DayPicker-week-li', { accent: day === 's' });

      return(
        <li
          className={ liClass }
          key={ `${ day }-${ index }` }
        >
          { day }
        </li>
      );
    })
  }

  _goToMonth = (month) => {
    const currentMonth = moment().month(month);
    this.setState({ currentMonth });
  }

  _goToNext = () => {
    console.log('go to next');
  }

  _goToPrev = () => {
    console.log('go to prev');
  }


  render() {
    const { currentMonth, currentYear } = this.state;
    const { active, onDayClick } = this.props;
    const infoHeaderContent = this._getInfoHeader();
    const weekDays = this._getWeekdays();

    if (!active) {
      return null;
    }

    return(
      <div className="DayPicker animated fadeIn">
        <div className="DayPicker-feature">
          <header className="DayPicker-feature-header">
            { infoHeaderContent }

            <div className="DayPicker-header-title-wrapper">
              <span
                className="DayPicker-arrow prev"
                onClick={ this._goToPrev }
              />

              <span
                className="DayPicker-arrow next"
                onClick={ this._goToNext }
              />

              <h4 className="DayPicker-header-title">
                { currentMonth.format('MMMM') }
              </h4>
            </div>
          </header>

          <div className="DayPicker-feature-main">
            <div className="DayPicker-week-wrapper">
              <ul className="DayPicker-week-ul">
                { weekDays }
              </ul>
            </div>

            <CalendarMonthGrid
              initialMonth={ currentMonth }
              onDayClick={ onDayClick }
            />
          </div>
        </div>

        <MonthPicker
          active={ currentMonth }
          year={ currentYear }
          onSelect={ this._goToMonth }
        />
      </div>
    );
  }
}
