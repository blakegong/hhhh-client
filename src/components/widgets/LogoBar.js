/**
 * Created by gongy on 4/11/16.
 */

import React from 'react';
import Radium from 'radium';
import logo from '../../images/logo_white.png';


let styles = {
  wrapper: {
    position: "absolute",
    left: "0",
    top: "0",
    width: "100%",
    textAlign: "center",
  },
  logo: {
    backgroundImage: `url(${logo})`,
    display: "inline-block",
    width: "200px",
    height: "200px",
    backgroundSize: 'cover',
    textIndent: "-9999px",
    opacity: 0.8,
    cursor: "pointer",

    ":hover": {
      opacity: 1,
    }
  },
};

class LogoBar extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={styles.wrapper}>
        <a style={styles.logo} onClick={() => this.props.goTo('/')}>G/</a>
      </div>
    )
  }
}

export default Radium(LogoBar);


