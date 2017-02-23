import React from 'react';
import './Table.css';


export default function Table({ children, ...props }) {

  if (!!!children) {
    return null;
  }

  return(
    <table className="Table" { ...props }>
      { children }
    </table>
  );
}
