/**
 * Created by gongy on 4/11/16.
 */

import React from 'react';

export default function({ account, children, goTo, ...others }) {
  return (
    <div>
      <div className="container" style={{width: 970, marginTop: 70, marginBottom: 20}}>
        <div>
          <a onClick={() => goTo('/')}>Home</a>
          {account['email'] ? (
            <a onClick={() => goTo('/a/account/')}>Account</a>
          ) : (
            <a href="/api/v1/google_login/">Log In</a>
          )}
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  )
};

