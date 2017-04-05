import React, { Component, PropTypes } from 'react';
import Icon from '../Icon';
import classnames from 'classnames';

import 'animate.css';
import './Modal.css';


export default class Modal extends Component {
  static propTypes = {
    active: PropTypes.bool,
    content: PropTypes.object,
    onCloseModal: PropTypes.func
  }

  static defaultProps = {
    active: false,
    content: null,
    modalWidth: '38.75rem'
  }

  componentDidMount() {
    // allow exit on esc press
    document.body.onkeydown = (e) => {
      const evt = e || window.event;
      if (evt.keyCode === 27) {
        this._close();
      }
    };
  }

  componentWillUnmount() {
    document.body.onkeydown = null;
  }

  // PRIVATE

  _close = () => {
    const { onCloseModal } = this.props;
    onCloseModal(false);
  }


  render() {
    const { active, content } = this.props;

    if (!active) {
      return null;
    }


    return (
      <div className="Modal animated fadeIn">
        <span
          className="Modal-close-btn"
          onClick={ this._close }
        >
          <Icon name="close" />
        </span>

        <div className="Modal-content">
          { content }
        </div>
      </div>
    );
  }
}
