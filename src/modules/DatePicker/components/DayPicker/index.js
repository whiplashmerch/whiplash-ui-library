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
    currentYear: moment().year(),
    transition: ''
  }

  // PRIVATE

  _animateMonths = (intro, outro) => {
    this.setState({
      transition: intro
    }, () => {
      setTimeout(() => {
        this.setState({ transition: outro });
      }, 300);

      setTimeout(() => {
        this.setState({ transition: '' });
      }, 800);
    });
  }

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
    const { transition } = this.state;

    if (!!transition) {
      return;
    }

    this._animateMonths('fadeOutLeft', 'fadeInRight');
  }

  _goToPrev = () => {
    const { transition } = this.state;

    if (!!transition) {
      return;
    }

    this._animateMonths('fadeOutRight', 'fadeInLeft');
  }


  render() {
    const { currentMonth, currentYear, transition } = this.state;
    const { active, onDayClick } = this.props;

    const MonthTitleClass = classnames('DayPicker-header-title', 'animated', `${ transition }`);
    const CalendarMonthGridClass = classnames('animated', `${ transition }`);

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

              <span className="DayPicker-transition-wrapper">
                <h4 className={ MonthTitleClass } >
                  { currentMonth.format('MMMM') }
                </h4>
              </span>
            </div>
          </header>

          <div className="DayPicker-feature-main">
            <div className="DayPicker-week-wrapper">
              <ul className="DayPicker-week-ul">
                { weekDays }
              </ul>
            </div>

            <div className="DayPicker-transition-wrapper">
              <div className={ CalendarMonthGridClass }>
                <CalendarMonthGrid
                  initialMonth={ currentMonth }
                  onDayClick={ onDayClick }
                />
              </div>
            </div>
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
