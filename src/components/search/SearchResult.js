/**
 * Created by gongy on 5/11/16.
 */
import React, { PropTypes } from 'react';

const styles = {
  item: {
    background: "rgba(255, 255, 255, 0.7)",
    textAlign: "left",
    margin: "5px",
  }
};

function SearchResult ({ result }) {
  if (result.description)
    return (
      <div style={styles.item}>
        <div>
          <a dangerouslySetInnerHTML={{ __html: result.title }} href={result.target}/>
        </div>
        <div>{result.target}</div>
        <div>
          <div dangerouslySetInnerHTML={{ __html: result.description }}/>
        </div>
        <br/>
      </div>
    );
  else
    return (
      <div style={styles.item}>
        <div>{result.slug}</div>
        <a>{result.target}</a>
        <div>{result.title}</div>
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
