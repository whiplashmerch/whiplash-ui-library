import { StyleSheet } from 'aphrodite/no-important';
import Theme from '../Theme';


const ModalStyles = StyleSheet.create({

  main: {
    boxSizing: 'border-box',
    display: 'none',
    left: 0,
    height: '100%',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 9999
  },

  overlay: {
    animationDuration: '400ms',
    backgroundColor: 'rgba(184, 183, 215, 0.9)',
    display: 'block',
    left: 0,
    height: '100%',
    opacity: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 0
  },

  content: {
    animationDuration: '400ms',
    backgroundColor: Theme.whiteText,
    boxShadow: '4px 4px 16px rgba(51, 48, 125, 0.2)',
    height: '100%',
    margin: '0 auto',
    overflowY: 'auto',
    position: 'relative',
    width: '100%',
    '@media only screen and (min-width: 655px)': {
      borderRadius: '5px',
      bottom: 0,
      left: 0,
      margin: 'auto',
      maxHeight: '33rem',
      position: 'absolute',
      right: 0,
      top: 0
    }
  },

  fadeOutUp: {
    animationDuration: '300ms'
  },

  header: {
    backgroundColor: Theme.primary,
    padding: '1rem',
    position: 'relative',
    textAlign: 'center'
  },

  logoContainer: {
    display: 'inline-block',
    height: '100%',
    width: '2.3125rem'
  },

  logo: {
    display: 'inline-block',
    width: '100%'
  },

  closeBtn: {
    backgroundSize: '1rem',
    cursor: 'pointer',
    display: 'inline-block',
    height: '2rem',
    position: 'absolute',
    right: '1rem',
    top: '1rem',
    width: '2rem'
  },

  activeModal: {
    display: 'block'
  },

  activeOverlay: {
    opacity: 1
  },

  outroOverlay: {
    opacity: 0
  },

  hidden: {
    display: 'none'
  }

});


export default ModalStyles;
