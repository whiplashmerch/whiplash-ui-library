import React from 'react';

export default function Graph({ iconColor }) {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><title>graph</title><g fill="none" fillRule="evenodd"><circle cx="50" cy="50" r="50" fill="#00E7AE"/><g stroke="#FFF" transform="translate(25 29)"><circle cx="3" cy="32" r="3"/><circle cx="25" cy="32" r="3"/><circle cx="47" cy="32" r="3"/><path d="M3 29v-9m22 9V9m22 20v-9M3 19h44" strokeLinecap="square"/><path d="M25 0l5 8H20z"/></g></g></svg>
  );
}
