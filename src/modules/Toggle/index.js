import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import './Toggle.css';


export default class Toggle extends Component {
  static propTypes = {
    active: PropTypes.bool,
    toggleRef: PropTypes.func
  }

  static defaultProps = {
    active: false
  }

  state = {
    active: false
  }

  componentWillMount() {
    const { active } = this.props;

    if (!!active) {
      this.setState({ active });
    }
  }

  // PRIVATE

  _updateState = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  }


  render() {
    const { active, ...props } = this.state;
    const { toggleRef } = this.props;
    const MainClass = classnames('Toggle', { active });

    return(
      <div className={ MainClass }>
        <div className="Toggle-wrapper">
          <span className="Toggle-btn" />
          <input
            className="Toggle-input"
            ref={ toggleRef }
            type="checkbox"
            onClick={ this._updateState }
            { ...props }
          />
        </div>
      </div>
    );
  }
}
