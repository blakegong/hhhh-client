/**
 * Created by gongy on 4/11/16.
 */

import React from 'react';

let styles = {
  wrapper: {
    position: "absolute",
    right: "0",
    top: "0",
  },
  profilePicture: {
    width: "50px",
    height: "50px",
    borderRadius: "25px"
  },
  username: {
    color: "#FFFFFF"
  }
};

export default function({ account, goTo, ...others }) {
  if (account['email']) {
    return (
      <div style={styles.wrapper}>
        <div onClick={() => goTo('/a/account/')}>
          <img style={styles.profilePicture} src={account['profile_picture']} />
          <div style={styles.username}>{account['username']}</div>
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

};

