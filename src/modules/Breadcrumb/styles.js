import { StyleSheet } from 'aphrodite';
import Theme from '../Theme';


const BreadcrumbStyles = StyleSheet.create({
  main: {
    boxSizing: 'border-box',
    display: 'block',
    padding: '0.5rem 0.8rem',
    width: '100%',
    '@media only screen and (min-width: 655px)': {
      padding: '0.5rem 2rem'
    }
  },

  list: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'flex-start',
    listStyle: 'none',
    overflowX: 'auto',
    overflowY: 'hidden',
    whiteSpace: 'nowrap'
  },

  item: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    ':after': {
      color: Theme.darkText,
      content: '">"',
      display: 'inline-block',
      fontSize: '0.625rem',
      fontWeight: 100,
      padding: '0 0.5rem',
      position: 'relative'
    },
    ':last-child:after': {
      display: 'none'
    }
  },

  link: {
    boxSizing: 'border-box',
    color: '#303030',
    display: 'inline-block',
    fontFamily: Theme.fontFamily,
    fontSize: '0.625rem',
    fontWeight: 100,
    letterSpacing: '0.0125rem',
    textDecoration: 'none',
    textTransform: 'capitalize',
    transition: 'color 200ms linear',
    ':hover': {
      color: '#EE2C8D'
    }
  },

  activeLink: {
    color: '#5134C4'
  },

  hidden: {
    display: 'none'
  }

});


export default BreadcrumbStyles;
