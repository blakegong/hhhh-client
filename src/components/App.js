/**
 * Created by gongy on 4/11/16.
 */

import React from 'react';
import AccountBar from './widgets/AccountBar';
import LogoBar from './widgets/LogoBar';

import bg1 from '../images/bg_1.jpg';
import bg2 from '../images/bg_2.jpg';

let styles = {
  background: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bg2})`,
    backgroundSize: 'cover',
    overflow: "auto"
  },
  container: {
    position: "relative"
  }
};

export default function({ account, children, goTo, ...others }) {
  return (
    <div style={styles.background}>
      <div style={styles.container}>
        <LogoBar goTo={goTo} />
        <AccountBar account={account} goTo={goTo} />
        <div>
          {children}
        </div>
      </div>
    </div>
  )
};

