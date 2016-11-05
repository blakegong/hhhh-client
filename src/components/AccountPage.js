import React from 'react';
import UrlList from '../containers/UrlList'
import AddUrlBox from './AddUrlBox'

const styles = {
  wrapper: {
    padding: "200px 50px 20px",
    overflow: "auto",
  },
  content: {
    background: "rgba(255, 255, 255, 0.7)"
  },
  h2: {
    display: "inline-block",
    margin: "20px 30px",
    color: "#3d6ed1",
    borderBottom: "1px solid #3d6ed1",
    fontWeight: 200,
    fontSize: "24px",
    paddingBottom: "4px",
  }
};

const AccountPage = ({ addUrl, ...others }) => (
    <div style={styles.wrapper}>

      <div style={styles.content}>
        <h2><span style={styles.h2}>Add New URL</span></h2>
        <div>
          <AddUrlBox addUrl={addUrl} />
        </div>
      </div>
      <div style={styles.content}>
        <h2><span style={styles.h2}>My URLs</span></h2>
        <UrlList />
      </div>
      <div style={styles.content}>
        <a href="/api/v1/logout/" style={{ padding: "20px", display: "inline-block" }}>Log Out</a>
      </div>
    </div>
);

export default AccountPage;
