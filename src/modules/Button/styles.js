import { StyleSheet } from 'aphrodite';
import Theme from '../Theme';


const ButtonStyles = StyleSheet.create({
  main: {
    appearance: 'none',
    backgroundColor: 'transparent',
    border: `1px solid ${ Theme.darkText }`,
    borderRadius: '5px',
    boxSizing: 'border-box',
    color: Theme.darkText,
    cursor: 'pointer',
    display: 'inline-block',
    fontSize: '1em',
    letterSpacing: '0.0125rem',
    margin: '0.5rem auto',
    minWidth: '11.9375rem',
    padding: '0.7rem 0.5rem',
    textAlign: 'center',
    textTransform: 'capitalize',
    transition: 'background-color 200ms ease-out, border 200ms ease-out, color 200ms ease-out',
    width: '100%',
    ':hover': {
      backgroundColor: Theme.darkText,
      border: `1px solid ${ Theme.darkText }`,
      color: Theme.whiteText
    },
    '@media only screen and (min-width: 600px)': {
      margin: '0.5rem',
      width: 'initial'
    }
  },


  filled: {
    backgroundColor: Theme.darkText,
    color: Theme.whiteText,
    ':hover': {
      backgroundColor: 'transparent',
      border: `1px solid ${ Theme.darkText }`,
      color: Theme.darkText
    }
  },


  text: {
    border: 'none',
    ':hover': {
      border: 'none',
      backgroundColor: 'transparent',
      color: Theme.primary
    }
  },


  primary: {
    border: `1px solid ${ Theme.primary }`,
    color: Theme.primary,
    ':hover': {
      backgroundColor: Theme.primary,
      border: `1px solid ${ Theme.primary }`,
      color: Theme.whiteText
    }
  },


  primaryFilled: {
    backgroundColor: Theme.primary,
    border: `1px solid ${ Theme.primary }`,
    color: Theme.whiteText,
    ':hover': {
      backgroundColor: 'transparent',
      border: `1px solid ${ Theme.primary }`,
      color: Theme.primary
    }
  },


  secondary: {
    border: `1px solid ${ Theme.secondary }`,
    color: Theme.secondary,
    ':hover': {
      backgroundColor: Theme.secondary,
      border: `1px solid ${ Theme.secondary }`,
      color: Theme.whiteText
    }
  },


  secondaryFilled: {
    backgroundColor: Theme.secondary,
    border: `1px solid ${ Theme.secondary }`,
    color: Theme.whiteText,
    ':hover': {
      backgroundColor: 'transparent',
      border: `1px solid ${ Theme.secondary }`,
      color: Theme.secondary
    }
  },


  danger: {
    border: `1px solid ${ Theme.danger }`,
    color: Theme.danger,
    ':hover': {
      backgroundColor: Theme.danger,
      border: `1px solid ${ Theme.danger }`,
      color: Theme.whiteText
    }
  },


  dangerFilled: {
    backgroundColor: Theme.danger,
    border: `1px solid ${ Theme.danger }`,
    color: Theme.whiteText,
    ':hover': {
      backgroundColor: 'transparent',
      border: `1px solid ${ Theme.danger }`,
      color: Theme.danger
    }
  }
});


export default ButtonStyles;
