import { StyleSheet } from 'aphrodite/no-important';
import Theme from '../Theme';


const InputStyles = StyleSheet.create({

  main: {
    boxSizing: 'border-box',
    display: 'block',
    marginBottom: '1rem',
    position: 'relative'
  },

  label: {
    bottom: '1rem',
    boxSizing: 'border-box',
    color: Theme.placeholder,
    cursor: 'text',
    display: 'inline-block',
    fontFamily: Theme.fontFamily,
    fontSize: '1.125rem',
    left: 0,
    position: 'absolute',
    textTransform: 'capitalize',
    transform: 'translate3d(0, 0, 0)',
    transition: 'transform 200ms ease-out, font-size 200ms ease-out',
    willChange: 'transform',
    zIndex: 0
  },

  wrapper: {
    borderBottom: '1px solid #DFDFDF',
    boxSizing: 'border-box',
    height: '5.0625rem',
    position: 'relative',
    ':before': {
      backgroundColor: 'transparent',
      bottom: 0,
      content: '""',
      height: '2px',
      left: 0,
      display: 'block',
      position: 'absolute',
      right: 0,
      transition: 'width 200ms ease-out',
      width: 0,
      willChange: 'width',
      zIndex: 15
    }
  },

  input: {
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    bottom: 0,
    boxShadow: 'none',
    boxSizing: 'border-box',
    display: 'block',
    fontSize: '1.125rem',
    left: 0,
    outline: 0,
    padding: '1.1rem 0',
    position: 'absolute',
    right: 0,
    width: '100%',
    zIndex: 10,
    ':focus': {
      boxShadow: 'none',
      outline: 0
    }
  },

  activeLabel: {
    color: '#A5A5AD',
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    transform: 'translate3d(0, -3rem, 0)'
  },


  activeWrapper: {
    borderBottom: '1px solid transparent',
    ':before': {
      backgroundColor: Theme.primaryLight,
      width: '100%'
    }
  }

});


export default InputStyles;
