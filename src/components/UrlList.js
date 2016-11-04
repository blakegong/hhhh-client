/**
 * Created by gongy on 4/11/16.
 */

import React from 'react';
import { Button, Table } from 'react-bootstrap';
import Url from './Url'

function UrlList ({ urlList, addUrl, ...others }) {
  return (
    <div>
      <Table>
        <thead>
        <tr>
          <th>When I say</th>
          <th>Actually I mean</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        {urlList.map(u => <Url key={u.slug} url={u} {...others}/>)}
        </tbody>
      </Table>

      <Button onClick={() => addUrl({
        is_private: true,
        slug: ('' + Date.now()).substring(3),
        target: '' + Date.now()
      })}>
        Add Random Url
      </Button>
    </div>
  );
}

export default UrlList;
