/**
 * Created by gongy on 4/11/16.
 */

import React from 'react';
import { Table } from 'react-bootstrap';
import Url from './Url'

function UrlList ({ urlList, addUrl, removeUrl, updateUrl }) {
  return (
    <div>
      <Table>
        <thead>
        <tr>
          <th>When I say</th>
          <th>Actually I mean</th>
        </tr>
        </thead>
        <tbody>
        {urlList.map(u => <Url key={u.key} url={u}/>)}
        </tbody>
      </Table>
    </div>
  );
}

export default UrlList;
