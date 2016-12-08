import React, { PropTypes } from 'react';
import 'fonts/index.css';
import './MoreOptions.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function MoreOptions({ iconColor }) {
  return(
    <svg className="MoreOptions" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 5"><title>more-options</title><g id="Main"><g><g id="Group-10"><circle className="MoreOptions-path" fill={ iconColor } cx="2.5" cy="2.5" r="2.5" /><circle className="MoreOptions-path" fill={ iconColor } cx="12.5" cy="2.5" r="2.5" data-name="Oval-70" /><circle className="MoreOptions-path" fill={ iconColor } cx="22.5" cy="2.5" r="2.5" /></g></g></g></svg>
  );
}


MoreOptions.propTypes = propTypes;
MoreOptions.defaultProps = defaultProps;
