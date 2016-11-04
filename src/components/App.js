/**
 * Created by gongy on 4/11/16.
 */

import React from 'react';
import AccountBar from './widgets/AccountBar';
import LogoBar from './widgets/LogoBar';

import bg1 from '../images/bg_1.jpg';

let styles = {
  container: {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bg1})`,
    backgroundSize: 'cover',
  }
};

export default function({ account, children, goTo, ...others }) {
  return (
    <div style={styles.container}>
      <LogoBar goTo={goTo} />
      <AccountBar account={account} goTo={goTo} />
      <div>
        {children}
      </div>
    </div>
  )
};

