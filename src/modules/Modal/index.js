import 'animate.css';
import React, { Component, PropTypes } from 'react';
import { css } from 'aphrodite';
import classNames from 'classnames';
import ModalStyles from './styles.js';

const propTypes = {
  active: PropTypes.bool,
  content: PropTypes.object,
  logo: PropTypes.object,
  modalWidth: PropTypes.string,
  onCloseModal: PropTypes.func
};

const defaultProps = {
  active: false,
  conent: null,
  logo: null,
  modalWidth: '38.75rem'
};


export default class Modal extends Component {
  constructor(props) {
    super();

    // cache methods
    this._close = this._close.bind(this);
  }


  componentDidMount() {
    // allow exit on esc press
    document.body.onkeydown = (e) => {
      const evt = e || window.event;
      if (evt.keyCode === 27) {
        this._close();
      }
    };

    this.refs.ModalContent.classList.add('animated');
    this.refs.ModalOverlay.classList.add('animated');
  }


  componentWillUnmount() {
    document.body.onkeydown = null;
  }


  // PRIVATE

  _close() {
    const modal = this.refs.Modal;
    const overlay = this.refs.ModalOverlay;
    const container = this.refs.ModalContent;

    container.classList.remove('fadeInDown');
    container.classList.add('fadeOutUp');

    overlay.classList.remove('fadeIn');
    overlay.classList.add('fadeOut');

    // wait till animation finished before de-activating
    window.setTimeout(() => {
      this.props.onCloseModal(false);
    }, 400);
  }


  render() {
    const ModalClass = css(
      !this.props.active ? ModalStyles.main : [ ModalStyles.main, ModalStyles.activeModal ]
    );

    const ContentStyle = { maxWidth: this.props.modalWidth };

    if (this.props.active) {
      this.refs.ModalContent.classList.remove('fadeOutUp');
      this.refs.ModalContent.classList.add('fadeInDown');

      this.refs.ModalOverlay.classList.remove('fadeOut');
      this.refs.ModalOverlay.classList.add('fadeIn');
    }


    return (
      <div ref="Modal" className={ ModalClass }>
        <div ref="ModalOverlay" className={ css(ModalStyles.overlay) } onClick={ this._close } />

        <div ref="ModalContent"
          className={ css([ModalStyles.content, ModalStyles.fadeOutUp]) }
          style={ ContentStyle }>

          <div className={ css(ModalStyles.header) }>
            <div className={ css(ModalStyles.logoContainer) }>
              <img
                className={ css(ModalStyles.logo) }
                src={ this.props.logo } alt="logo" />
            </div>

            <span
              className={ css(ModalStyles.closeBtn) }
              onClick={ this._close } />
          </div>

          { this.props.content }
        </div>
      </div>
    );
  }

}


Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;
