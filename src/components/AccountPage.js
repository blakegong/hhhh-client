import React from 'react';
import UrlList from '../containers/UrlList'

const App = ({ ...others }) => (
    <div>
        <div className="container" style={{ width: 970, marginTop: 70, marginBottom: 20 }}>
            <UrlList />
        </div>
    </div>
);

export default App;
