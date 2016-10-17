import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { css } from 'aphrodite';
import NaviconStyles from './styles.js';

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
    this._getBottomBarStyles = this._getBottomBarStyles.bind(this);
    this._getTopBarStyles = this._getTopBarStyles.bind(this);
    this._toggleIcon = this._toggleIcon.bind(this);
  }


  // PRIVATE

  _getBottomBarStyles() {
    if (!!this.state.active & !this.state.finish) {
      return css([NaviconStyles.bar, NaviconStyles.activeBottomBar]);
    } else if (!!this.state.active && this.state.finish) {
      return css([NaviconStyles.bar, NaviconStyles.activeBottomBar, NaviconStyles.finishBottomBar]);
    } else {
      return css(NaviconStyles.bar);
    }
  }

  _getTopBarStyles() {
    if (!!this.state.active & !this.state.finish) {
      return css([NaviconStyles.bar, NaviconStyles.activeTopBar]);
    } else if (!!this.state.active && this.state.finish) {
      return css([NaviconStyles.bar, NaviconStyles.activeTopBar, NaviconStyles.finishTopBar]);
    } else {
      return css(NaviconStyles.bar);
    }
  }

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
    const TopBarStyles = this._getTopBarStyles();
    const BottomBarStyles = this._getBottomBarStyles();

    const MiddleBarStyles = css(
      !!this.state.active ? [NaviconStyles.bar, NaviconStyles.middleBar, NaviconStyles.activeMiddleBar] : [NaviconStyles.bar, NaviconStyles.middleBar]
    );



    return (
      <div className={ css(NaviconStyles.main) }>
        <a className={ css(NaviconStyles.link) } href="#" onClick={ this._toggleIcon }>
          <span className={ TopBarStyles } />
          <span className={ MiddleBarStyles } />
          <span className={ BottomBarStyles } />
        </a>
      </div>
    );
  }
}


Navicon.propTypes = propTypes;
