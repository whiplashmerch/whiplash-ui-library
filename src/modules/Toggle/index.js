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
    active: this.props.active
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active
    }, () => {
      this.input.checked = nextProps.active;
    });
  }

  // PRIVATE

  _updateState = () => {
    const { callback } = this.props;
    const checked = this.input.checked;

    this.setState({
      active: checked
    }, () => {
      if (!!callback) {
        callback(checked);
      }
    });
  }


  render() {
    const { active, callback, ...props } = this.state;
    const { toggleRef } = this.props;

    const MainClass = classnames('Toggle', { active });


    return(
      <div className={ MainClass }>
        <div className="Toggle-wrapper">
          <span className="Toggle-btn" />
          <input
            className="Toggle-input"
            defaultChecked={ active }
            ref={ el => this.input = el }
            type="checkbox"
            onClick={ this._updateState }
            { ...props }
          />
        </div>
      </div>
    );
  }
}
