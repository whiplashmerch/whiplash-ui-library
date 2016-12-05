import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import 'fonts/index.css';
import './CheckButton.css';

const propTypes = {
  onUserSelect: PropTypes.func
};

const defaultProps = {
  onUserSelect: (e) => console.warn('missing onUserSelect prop')
};


export default class CheckButton extends Component {
  constructor() {
    super();

    // cache methods
    this._toggleState = this._toggleState.bind(this);

    this.state = {
      active: false
    };
  }

  // PRIVATE

  _toggleState() {
    const { active } = this.state;
    const { onUserSelect } = this.props;

    this.setState({ active: !active }, () => {
      onUserSelect(!active);
    });
  }


  render() {
    const { active } = this.state;
    const CheckClass = classnames('CheckButton', { selected: !!active });

    return(
      <span className={ CheckClass } onClick={ this._toggleState } />
    );
  }
}


CheckButton.propTypes = propTypes;
CheckButton.defaultProps = defaultProps;
