import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import './Navicon.css';

const propTypes = {
  onUserInput: PropTypes.func
};



export default class Navicon extends Component {
  constructor() {
    super();

    // init state
    this.state = {
      active: false,
      finish: false
    };

    // cache methods
    this._toggleIcon = this._toggleIcon.bind(this);
  }


  // PRIVATE

  _toggleIcon(e) {
    e.preventDefault();

    if (!!this.state.active) {
      this.setState({ active: false, finish: false });
      this.props.onUserInput(false);
    } else {
      this.setState({ active: true }, () => {
        window.setTimeout(() => {
          this.setState({ finish: true });
        }, 200);
      });

      this.props.onUserInput(true);
    }
  }


  render() {
    const NaviconClass = classNames('Navicon', { active: !!this.state.active, finish: !!this.state.finish });

    return (
      <div className={ NaviconClass }>
        <a className="Navicon-link" href="#" onClick={ this._toggleIcon }>
          <span className="Navicon-bar Navicon-bar-top" />
          <span className="Navicon-bar Navicon-bar-middle" />
          <span className="Navicon-bar Navicon-bar-bottom" />
        </a>
      </div>
    );
  }
}


Navicon.propTypes = propTypes;
