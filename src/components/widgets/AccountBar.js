/**
 * Created by gongy on 4/11/16.
 */

import React from 'react';
import Radium from 'radium';

let styles = {
  wrapper: {
    position: "absolute",
    right: "5px",
    top: "5px",
    width: "220px",
    height: "70px",
    display: "flex",
    flexDirection: "row",
    padding: "10px",
    cursor: "pointer",
    ":hover": {
      background: "rgba(255,255,255,0.2)"
    }
  },
  info: {
    display: "flex",
    flexDirection: "column",
  },
  profilePicture: {
    width: "50px",
    height: "50px",
    borderRadius: "25px",
    marginRight: "5px"
  },
  username: {
    color: "#FFFFFF",
    margin: "5px 5px 0 5px",
    fontSize: "15px"
  },
  email: {
    color: "#FFFFFF",
    margin: "2px 5px 5px 5px",
    fontSize: "12px"
  }
};

export default Radium(function ({ account, goTo, ...others }) {
  if (account['email']) {
    return (
      <div style={styles.wrapper} onClick={() => goTo('/a/account/')}>
        <img style={styles.profilePicture} src={account['profile_picture']} alt="profile"/>
        <div style={styles.info}>
          <div style={styles.username}>{account['username']}</div>
          <div style={styles.email}>{account['email']}</div>
        </div>
      </div>
    )
  } else {
    return (
      <div style={styles.wrapper}>
        <a href="/api/v1/google_login/">Log In</a>
      </div>
    )
  }

});

