import React from 'react';
import PropTypes from 'prop-types';
import './StackedBoxes.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function StackedBoxes({ iconColor }) {
  return(
    <svg className="StackedBoxes" viewBox="0 0 83 61" xmlns="http://www.w3.org/2000/svg">
      <title>stacked boxes</title>
      <defs>
        <mask id="j" x="-1" y="-1" width="30.311" height="40.456">
          <path fill="#fff" d="M-1 15.481h30.311v40.456H-1z"/>
          <path id="a" d="M28.31 54.937L0 43.143V16.48l28.31 11.794z"/>
        </mask>

        <mask id="k" x="-1" y="-1" width="30.311" height="41.241">
          <path fill="#fff" d="M28.097 9.987h30.311v41.241H28.097z"/>
          <path id="b" d="M57.408 50.228l-28.31-11.794V10.987l28.31 12.58z"/>
        </mask>

        <mask id="l" x="-1" y="-1" width="59.408" height="24.759">
          <path fill="#fff" d="M-1-1h59.408v24.759H-1z"/>
          <path id="c" d="M28.704 22.76L0 10.965 28.31 0l29.098 11.772z"/>
        </mask>

        <mask id="m" x="-1" y="-1" width="15.186" height="17.623">
          <path fill="#fff" d="M13.942 3.782h15.186v17.623H13.942z"/>
          <path id="d" d="M28.128 20.405l-13.186-4.791V4.782l13.186 4.792z"/>
        </mask>

        <mask id="n" x="-1" y="-1" width="15.186" height="17.941">
          <path fill="#fff" d="M27.494 3.464H42.68v17.941H27.494z"/>
          <path id="e" d="M41.68 20.405l-13.186-4.791V4.464l13.186 5.11z"/>
        </mask>

        <mask id="o" x="-1" y="-1" width="28.738" height="11.246">
          <path fill="#fff" d="M13.942-1H42.68v11.246H13.942z"/>
          <path id="f" d="M28.31 9.246L14.943 4.455 28.128 0 41.68 4.782z"/>
        </mask>

        <mask id="p" x="-1" y="-1" width="22.942" height="26.035">
          <path fill="#fff" d="M37.534 33.826h22.942v26.035H37.534z"/>
          <path id="g" d="M59.476 58.86l-20.942-7.37V34.826l20.942 7.371z"/>
        </mask>

        <mask id="q" x="-1" y="-1" width="22.942" height="26.525">
          <path fill="#fff" d="M59.058 33.335H82V59.86H59.058z"/>
          <path id="h" d="M81 58.86l-20.942-7.37V34.335L81 42.197z"/>
        </mask>

        <mask id="r" x="-1" y="-1" width="44.466" height="16.225">
          <path fill="#fff" d="M37.534 26.468H82v16.225H37.534z"/>
          <path id="i" d="M59.767 41.693l-21.233-7.371 20.942-6.854L81 34.826z"/>
        </mask>
      </defs>

      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)">
          <path fill="#FAFAFA" d="M28.31 54.937L0 43.143V16.48l28.31 11.794z"/>
          <path
            className="StackedBoxes-stroke"
            stroke={ iconColor }
            mask="url(#j)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M28.31 54.937L0 43.143V16.48l28.31 11.794z"
          />
        </g>

        <g transform="matrix(-1 0 0 1 87.505 5.709)">
          <path fill="#FAFAFA" d="M57.408 50.228l-28.31-11.794V10.987l28.31 12.58z"/>
          <path
            className="StackedBoxes-stroke"
            stroke={ iconColor }
            mask="url(#k)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M57.408 50.228l-28.31-11.794V10.987l28.31 12.58z"
          />
        </g>

        <g transform="matrix(-1 0 0 1 58.408 5.709)">
          <path fill="#FAFAFA" d="M28.704 22.76L0 10.965 28.31 0l29.098 11.772z"/>
          <path
            className="StackedBoxes-stroke"
            stroke={ iconColor }
            mask="url(#l)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M28.704 22.76L0 10.965 28.31 0l29.098 11.772z"
          />
        </g>

        <g transform="translate(1 1)">
            <path fill="#FAFAFA" d="M28.128 20.405l-13.186-4.791V4.782l13.186 4.792z"/>
            <path className="StackedBoxes-stroke" stroke={ iconColor } mask="url(#m)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M28.128 20.405l-13.186-4.791V4.782l13.186 4.792z"/>
        </g>

        <g transform="matrix(-1 0 0 1 71.173 1)">
            <path fill="#FAFAFA" d="M41.68 20.405l-13.186-4.791V4.464l13.186 5.11z"/>
            <path className="StackedBoxes-stroke" stroke={ iconColor } mask="url(#n)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M41.68 20.405l-13.186-4.791V4.464l13.186 5.11z"/>
        </g>

        <g transform="matrix(-1 0 0 1 57.621 1)">
            <path fill="#FAFAFA" d="M28.31 9.246L14.943 4.455 28.128 0 41.68 4.782z"/>
            <path className="StackedBoxes-stroke" stroke={ iconColor } mask="url(#o)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M28.31 9.246L14.943 4.455 28.128 0 41.68 4.782z"/>
        </g>

        <g transform="translate(1 1)">
            <path fill="#FAFAFA" d="M59.476 58.86l-20.942-7.37V34.826l20.942 7.371z"/>
            <path className="StackedBoxes-stroke" stroke={ iconColor } mask="url(#p)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M59.476 58.86l-20.942-7.37V34.826l20.942 7.371z"/>
        </g>

        <g transform="matrix(-1 0 0 1 142.058 1)">
          <path fill="#FAFAFA" d="M81 58.86l-20.942-7.37V34.335L81 42.197z"/>
          <path className="StackedBoxes-stroke" stroke={ iconColor } mask="url(#q)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M81 58.86l-20.942-7.37V34.335L81 42.197z"/>
        </g>

        <g transform="matrix(-1 0 0 1 120.534 1)">
            <path fill="#FAFAFA" d="M59.767 41.693l-21.233-7.371 20.942-6.854L81 34.826z"/>
          <path className="StackedBoxes-stroke" stroke={ iconColor } mask="url(#r)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M59.767 41.693l-21.233-7.371 20.942-6.854L81 34.826z"/>
        </g>
    </g>
  </svg>
  );
}


StackedBoxes.propTypes = propTypes;
StackedBoxes.defaultProps = defaultProps;
