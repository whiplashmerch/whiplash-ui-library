import React from 'react';

const secureIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 50"><defs><mask id="a" width="10" height="18" x="0" y="0" fill="#fff"><rect width="10" height="18" x="5" rx="5"/></mask><mask id="b" width="20" height="14" x="0" y="0" fill="#fff"><rect width="20" height="14" y="7" rx="2"/></mask><mask id="c" width="6" height="6" x="0" y="0" fill="#fff"><circle cx="10" cy="14" r="3"/></mask></defs><g fill="none" fillRule="evenodd" stroke="#646471"><path d="M22.11 1.468c-.596-.012-1.19.074-1.758.253L3.007 7.988c-.88.386-1.472 1.22-1.537 2.166V23.47c0 14.84 18.94 25.585 19.13 25.662.953.447 2.06.447 3.01 0 .2-.077 19.14-10.83 19.14-25.66V10.15c-.065-.946-.657-1.78-1.537-2.165L23.868 1.72c-.568-.178-1.162-.264-1.758-.252"/><g strokeWidth="2" transform="translate(12 12)"><rect width="10" height="18" x="5" mask="url(#a)" rx="5"/><rect width="20" height="14" y="7" fill="#FFF" mask="url(#b)" rx="2"/><circle cx="10" cy="14" r="3" mask="url(#c)"/></g></g></svg>
);

export default function Secure() {
  return secureIcon;
}
