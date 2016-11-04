/**
 * Created by gongy on 4/11/16.
 */
import React from 'react';
import { Table } from 'react-bootstrap';
import Url from './Url';
import AddUrlBox from './AddUrlBox';

function UrlList ({ urlList, addUrl, ...others }) {
  return (
    <div>
      <Table>
        <thead>
        <tr>
          <th>When I say</th>
          <th>Actually I mean</th>
          <th>And I would call you</th>
          <th/>
          <th/>
        </tr>
        </thead>
        <tbody>
        {urlList.map(u => <Url key={JSON.stringify(u)} url={u} {...others}/>)}
        </tbody>
      </Table>

      <AddUrlBox addUrl={addUrl} />
    </div>
  );
}

export default UrlList;
