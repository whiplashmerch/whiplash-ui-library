import { StyleSheet } from 'aphrodite/no-important';
import Theme from '../Theme';


const LegendStyles = StyleSheet.create({

  list: {
    display: 'block',
    listStyle: 'none',
    padding: '1rem',
    whiteSpace: 'nowrap'
  },

  listItem: {
    display: 'inline-block',
    position: 'relative',
    ':after': {
      backgroundColor: Theme.border,
      content: "''",
      display: 'inline-block',
      height: '1px',
      left: '0.6rem',
      position: 'absolute',
      top: '0.7rem',
      width: '2.5rem',
      zIndex: 0
    },
    ':last-of-type:after': {
      display: 'none'
    }
  },

  dot: {
    backgroundColor: Theme.white,
    border: '1px solid #A5A5AD',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'inline-block',
    height: '0.625rem',
    marginRight: '2.5rem',
    transition: 'background-color 200ms linear',
    width: '0.625rem',
    zIndex: 10,
    ':hover': {
      borderColor: '#EE2C8D'
    }
  },

  activeDot: {
    backgroundColor: Theme.accent,
    borderColor: 'transparent',
    cursor: 'default',
    ':hover': {
      borderColor: 'transparent'
    }
  }

});


export default LegendStyles;
