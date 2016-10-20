import { StyleSheet } from 'aphrodite/no-important';
import Theme from '../Theme';


const NaviconStyles = StyleSheet.create({

  main: {
    boxSizing: 'border-box',
    display: 'inline-block',
    height: '48px',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '48px'
  },

  link: {
    boxSizing: 'border-box',
    display: 'inline-block',
    height: '100%',
    padding: '0.8rem 0.6rem',
    position: 'relative',
    width: '100%',
    ':active': {
      backgroundColor: 'transparent'
    },
    ':focus': {
      backgroundColor: 'transparent'
    }
  },

  bar: {
    boxSizing: 'border-box',
    display: 'block',
    height: '1px',
    transform: 'translate3d(0, 0, 0)',
    transition: 'transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946)',
    transformOrigin: 'center',
    width: '100%',
    willChange: 'transform'
  },

  middleBar: {
    margin: '0.5rem 0',
    opacity: 1,
    transition: 'opacity 300ms'
  },

  activeTopBar: {
    transform: 'translate3d(0, 9px, 0)'
  },

  activeMiddleBar: {
    opacity: 0
  },

  activeBottomBar: {
    transform: 'translate3d(0, -9px, 0)'
  },

  finishTopBar: {
    transform: 'translate3d(0, 9px, 0) rotate(135deg)'
  },

  finishBottomBar: {
    transform: 'translate3d(0, -9px, 0) rotate(-135deg)'
  }

});


export default NaviconStyles;
