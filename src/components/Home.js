import React from 'react';

let styles = {
  page: {
    padding: "200px 30px 20px",
    overflow: "auto",
    textAlign: "center",
  },
  content: {
    background: "rgba(255, 255, 255, 0.7)"
  },
  searchBar: {
    display: "inline-block",
    background: "rgba(255, 255, 255, 0.6)",
    width: "70%",
    textAlign: "left",
    padding: "10px 20px"
  }
};

const Home = ({ goTo, ...others }) => (
  <div style={styles.page}>
    <div style={styles.searchBar} onClick={() => goTo('/a/search/')}>Search Garena</div>
    <div style={{
      width: "100%",
      left: "0",
      position: "fixed",
      textAlign: "center",
      color: "#ffffff",
      fontSize: "13px",
      bottom: "20px"
    }}>Powered by HHHH</div>
  </div>
);

export default Home;
