import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import geoLogo from './whiplash-geo-logo-white.svg';
import './Modal.css';

const propTypes = {
  active: PropTypes.bool,
  content: PropTypes.object,
  onCloseModal: PropTypes.func,
  modalWidth: PropTypes.string
};

const defaultProps = {
  active: false,
  conent: '',
  modalWidth: '38.75rem'
};


export default class Modal extends Component {
  constructor() {
    super();

    // cache methods
    this._close = this._close.bind(this);
  }


  componentDidMount() {
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

  _close() {
    const container = document.querySelector('.Modal-content');
    const modal = document.querySelector('.Modal');

    container.classList.remove('fadeInDown');
    container.classList.add('fadeOutUp');
    modal.classList.add('outro');

    // wait till animation finished before de-activating
    window.setTimeout(() => {
      this.props.onCloseModal(false);
    }, 300);
  }


  render() {
    const ModalClass = classNames('Modal', { active: this.props.active });
    const ContentClass = classNames('Modal-content', 'animated', { fadeInDown: this.props.active });
    const contentStyle = { maxWidth: this.props.modalWidth };

    return (
      <div className={ ModalClass }>
        <div className="Modal-overlay" onClick={ this._close } />

        <div className={ ContentClass } style={ contentStyle }>
          <div className="Modal-header">
            <div className="Modal-logo-container">
              <img className="Modal-logo" src={ geoLogo } alt="whiplash logo" />
            </div>

            <span className="Modal-close-btn" onClick={ this._close } />
          </div>

          { this.props.content }
        </div>
      </div>
    );
  }

}


Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
