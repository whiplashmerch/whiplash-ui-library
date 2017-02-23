import React, { PropTypes } from 'react';
import { Table } from 'src';


export default function DemoTable() {
  return(
    <div>
      <Table>
        <thead>
          <tr>
            <th>movies</th>
            <th>rating</th>
            <th>reviews</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lego Batman</td>
            <td>Prolly PG</td>
            <td>Ameowzing</td>
          </tr>
          <tr>
            <td>Fanstastic Beasts...</td>
            <td>PG 13</td>
            <td>Magical</td>
          </tr>
          <tr>
            <td>X-Men Apocalypse</td>
            <td>Prolly PG13</td>
            <td>Netflix it</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
