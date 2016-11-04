/**
 * Created by gongy on 5/11/16.
 */

import React, { PropTypes } from 'react';
import RawHtml from "react-raw-html"

let styles = {
  item: {
    background: "rgba(255, 255, 255, 0.7)",
    textAlign: "left",
    margin: "5px",
  }
}

function SearchResult ({ result }) {
  if (result.description)
    return (
      <div style={styles.item}>
        <div>
          <RawHtml.div>{result.title}</RawHtml.div>
        </div>
        <div>{result.target}</div>
        <div>
          <RawHtml.div>{result.description}</RawHtml.div>
        </div>
        <br/>
      </div>
    );
  else
    return (
      <div style={styles.item}>
        <div>{result.slug}</div>
        <div>{result.target}</div>
        <div>{result.title}</div>
        <br/>
      </div>
    );
}

SearchResult.propTypes = PropTypes.oneOfType([
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
]);

export default SearchResult;
