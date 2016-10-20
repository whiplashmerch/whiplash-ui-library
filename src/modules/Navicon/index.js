import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import { css } from 'aphrodite/no-important';
import NaviconStyles from './styles.js';

const propTypes = {
  active: PropTypes.bool.isRequired,
  barColor: PropTypes.string,
  onUserInput: PropTypes.func
};

const defaultProps = {
  active: false,
  barColor: '#303030'
};



export default class Navicon extends Component {
  constructor() {
    super();

    // init state
    this.state = {
      finish: false
    };

    // cache methods
    this._getBottomBarStyles = this._getBottomBarStyles.bind(this);
    this._getTopBarStyles = this._getTopBarStyles.bind(this);
    this._toggleIcon = this._toggleIcon.bind(this);
  }


  // PRIVATE

  _getBottomBarStyles() {
    if (!!this.props.active & !this.state.finish) {
      return css([NaviconStyles.bar, NaviconStyles.activeBottomBar]);
    } else if (!!this.props.active && this.state.finish) {
      return css([NaviconStyles.bar, NaviconStyles.activeBottomBar, NaviconStyles.finishBottomBar]);
    } else {
      return css(NaviconStyles.bar);
    }
  }

  _getTopBarStyles() {
    if (!!this.props.active & !this.state.finish) {
      return css([NaviconStyles.bar, NaviconStyles.activeTopBar]);
    } else if (!!this.props.active && this.state.finish) {
      return css([NaviconStyles.bar, NaviconStyles.activeTopBar, NaviconStyles.finishTopBar]);
    } else {
      return css(NaviconStyles.bar);
    }
  }

  _toggleIcon(e) {
    e.preventDefault();

    if (!!this.props.active) {
      this.setState({ finish: false });
      this.props.onUserInput(false);
    } else {
      window.setTimeout(() => {
        this.setState({ finish: true });
      }, 200);

      this.props.onUserInput(true);
    }
  }


  render() {
    const TopBarStyles = this._getTopBarStyles();
    const BottomBarStyles = this._getBottomBarStyles();

    const MiddleBarStyles = css(
      !!this.props.active ? [NaviconStyles.bar, NaviconStyles.middleBar, NaviconStyles.activeMiddleBar] : [NaviconStyles.bar, NaviconStyles.middleBar]
    );

    const barColor = {
      backgroundColor: this.props.barColor
    };

    return (
      <div className={ css(NaviconStyles.main) } data-navicon>
        <a className={ css(NaviconStyles.link) } href="#" onClick={ this._toggleIcon }>
          <span className={ TopBarStyles } style={ barColor } />
          <span className={ MiddleBarStyles } style={ barColor } />
          <span className={ BottomBarStyles } style={ barColor } />
        </a>
      </div>
    );
  }
}


Navicon.propTypes = propTypes;
Navicon.defaultProps = defaultProps;
