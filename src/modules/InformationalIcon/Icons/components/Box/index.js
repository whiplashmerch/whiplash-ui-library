import React from 'react';
import PropTypes from 'prop-types';
import './Box.css';

const propTypes = {
  iconColor: PropTypes.string
};

const defaultProps = {
  iconColor: '#646471'
};


export default function Box({ iconColor }) {
  return(
    <svg className="Box" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47 47"><title>Box</title><g fill="none" fillRule="evenodd"><mask id="a" fill="#fff"><path d="M46.434 46.464H0V0h46.434v46.464z"/></mask><path className="Box-path" fill={ iconColor } d="M45.302 9.977v25.88L35.11 40.213v-7.8c.012-.312-.313-.596-.638-.556-.278.033-.506.29-.496.557v8.103c-.005.062 0 .125.018.186l-10.21 4.373V18.182L33.976 14.3v7.85c-.004.286.268.55.567.55.3 0 .57-.264.566-.55v-8.103c.002-.057-.004-.114-.02-.17l10.21-3.9zm-44.17 0l21.52 8.205v26.894L1.13 35.858V9.978zm10.76-4.54l21.13 8.07-9.805 3.73-21.13-8.053 9.805-3.748zm11.325-4.323L31.5 4.27l5.663 2.162c.033.02.07.038.105.05l.054.018h.017l7.007 2.684-9.803 3.73-21.13-8.052 9.804-3.748zm0-1.114C15.677 2.827 8.05 5.744.497 8.627c-.28.033-.507.29-.497.557v27.01c-.01.274.23.533.513.56l22.368 9.62c.024.014.047.026.07.035h.02c.177.084.4.07.566-.035l22.51-9.656c.227-.073.393-.296.39-.525V9.185c0-.217-.146-.427-.356-.507-2.912-1.106-5.876-2.24-8.37-3.192-.04-.02-.08-.038-.124-.05l-5.662-2.16C28.994 2.328 26.05 1.08 23.217 0z" mask="url(#a)"/></g></svg>
  );
}


Box.propTypes = propTypes;
Box.defaultProps = defaultProps;
