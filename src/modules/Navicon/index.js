import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './Navicon.css';


export default class Navicon extends Component {
  static propTypes = {
    barColor: PropTypes.string,
    onUserClick: PropTypes.func
  }

  static defaultProps = {
    barColor: '#303030'
  }

  state = {
    active: false,
    finish: false
  }

  // PRIVATE

  _toggleIcon = (e) => {
    const { active } = this.state;
    const { onUserClick } = this.props;

    e.preventDefault();

    if (!!active) {
      this.setState({
        active: false,
        finish: false
      }, () => {
        onUserClick(!active);
      });
    } else {
      this.setState({
        active: true,
      }, () => {
        onUserClick(!active);

        window.setTimeout(() => {
          this.setState({ finish: true });
        }, 200);
      });
    }
  }


  render() {
    const { active, finish } = this.state;
    const TopBarClass = classnames('Navicon-bar', { active_top: !!active && !finish, finish_top: !!active && !!finish });
    const MiddleBarClass = classnames('Navicon-bar middle', { active_middle: !!active });
    const BottomBarClass = classnames('Navicon-bar', { active_bottom: !!active && !finish, finish_bottom: !!active && !!finish });

    const barColor = {
      backgroundColor: this.props.barColor
    };

    return (
      <div className="Navicon" data-navicon>
        <a className="Navicon-link" href="#" onClick={ this._toggleIcon }>
          <span className={ TopBarClass } style={ barColor } />
          <span className={ MiddleBarClass } style={ barColor } />
          <span className={ BottomBarClass } style={ barColor } />
        </a>
      </div>
    );
  }
}
