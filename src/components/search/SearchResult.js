/**
 * Created by gongy on 5/11/16.
 */
import React, { PropTypes } from 'react';

const styles = {
  item: {
    background: "rgba(255, 255, 255, 0.7)",
    textAlign: "left",
    margin: "10px",
    padding: "10px 15px 0 15px"
  },
  title: {
    fontSize: "18px",
    color: "#337ab7",
  },
  link: {
    fontSize: "13px",
    color: "#006621",
  },
  description: {
    fontSize: "15px",
    color: "#545454",
  }
};

function SearchResult ({ result }) {
  if (result.description)
    return (
      <div style={styles.item}>
        <div>
          <a style={styles.title} dangerouslySetInnerHTML={{ __html: result.title }} href={result.target} target="_blank"/>
        </div>
        <div style={styles.link}>{result.target}</div>
        <div style={styles.description}>
          <div dangerouslySetInnerHTML={{ __html: result.description }}/>
        </div>
        <br/>
      </div>
    );
  else
    return (
      <div style={styles.item}>
        <div>
          <a style={styles.title} href={result.target}  target="_blank">{result.title}</a>
        </div>
        <div style={styles.link}>http://g/{result.slug}</div>
        <div style={styles.description}>A short URL link to <em>{result.target}</em>.</div>
        <br/>
      </div>
    );
}

SearchResult.propTypes = {
  result: PropTypes.oneOfType([
    PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
      target: PropTypes.string,
    }),
    PropTypes.shape({
      title: PropTypes.string,
      target: PropTypes.string,
      description: PropTypes.string,
    }),
  ])
};

export default SearchResult;
