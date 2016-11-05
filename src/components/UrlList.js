/**
 * Created by gongy on 4/11/16.
 */
import React from 'react';
import Radium from 'radium';
import Url from './Url';
import AddUrlBox from './AddUrlBox';

const styles = {
  ul: {
    display: "block",
    padding: "0 30px 50px"
  },
  li: {
    display: "block"
  },
  headerRow: {
    display: "flex",
    flexDirection: "row",
    background: "#f0f2f5",
    justifyContent: "space-between"
  },
  rowElement: {
    padding: "10px 20px",
    flexBasis: "20%"
  },
  rowElementLarge: {
    padding: "10px 20px",
    flexBasis: "40%"
  }
};

function UrlList ({ urlList, addUrl, ...others }) {
  return (
    <div>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <div style={styles.headerRow}>
            <div style={styles.rowElement}></div>
            <div style={styles.rowElement}>When I Say</div>
            <div style={styles.rowElementLarge}>Actually I Mean</div>
            <div style={styles.rowElement}></div>
          </div>
        </li>
        {urlList.map(u =>
          <li key={JSON.stringify(u)} style={styles.li}>
            <Url url={u} {...others} />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Radium(UrlList);
