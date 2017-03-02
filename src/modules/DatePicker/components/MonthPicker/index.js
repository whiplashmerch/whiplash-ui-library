import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import moment from 'moment';
import 'animate.css';
import '../../../../fonts/index.css';
import './MonthPicker.css';


export default class MonthPicker extends Component {
  static propTypes = {
    active: PropTypes.object,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    active: moment()
  }

  // PRIVATE

  _getMonths = () => {
    const { active, onSelect } = this.props;
    const months  = Array.from({length: 12}, (v, i) => i);
    let activeMonth, linkClass = null;

    return months.map(mo => {
      activeMonth = Number(active.format('M')) - 1;
      linkClass = classnames('MonthPicker-li-link', { active: mo === Number(activeMonth) });

      return(
        <li
          className="MonthPicker-li"
          key={ mo }
        >
          <a
            className={ linkClass }
            href="#"
            onClick={e => {
              e.preventDefault();
              onSelect(active.month(mo));
            }}
          >
            { moment().month(mo).format('MMM') }

            <span className="MonthPicker-link-bar-wrapper">
              <svg
                height="4px"
                width="26px"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
              >
                <line
                  className="MonthPicker-link-bar"
                  x1="3" x2="23"
                  y1="2" y2="2"
                />
              </svg>
            </span>
          </a>
        </li>
      );
    })
  }


  render() {
    const { active } = this.props;
    const months = this._getMonths();

    return(
      <div className="MonthPicker">
        <header className="MonthPicker-header">
          <div className="MonthPicker-year">
            { active.year() }
          </div>
        </header>

        <div className="MonthPicker-list-wrapper">
          <ul className="MonthPicker-ul">
            { months }
          </ul>
        </div>
      </div>
    );
  }
}
