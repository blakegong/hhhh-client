/**
 * Created by gongy on 4/11/16.
 */

import React from 'react';
// import Header from './home/Header';
// import Footer from './home/Footer'

const App = ({ children, ...others }) => (
  <div>
    <div className="container" style={{ width: 970, marginTop: 70, marginBottom: 20 }}>
      {children}
    </div>
  </div>
);

export default App;
