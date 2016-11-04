/**
 * Created by gongy on 5/11/16.
 */

import React, { PropTypes } from 'react';

function SearchResult ({ result }) {
  if (result.description)
    return (
      <div>
        <div>{result.slug}</div>
        <div>{result.target}</div>
        <div>{result.title}</div>
        <br/>
      </div>
    );
  else
    return (
      <div>
        <div>{result.slug}</div>
        <div>{result.target}</div>
        <div>{result.title}</div>
        <br/>
      </div>
    );
}

SearchResult.propTypes = PropTypes.oneOfType([
  PropTypes.shape({
    slug: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
    is_private: PropTypes.bool
  }),
  PropTypes.shape({
    description: PropTypes.string,
    slug: PropTypes.string,
    target: PropTypes.string,
    title: PropTypes.string,
    is_private: PropTypes.bool
  }),
]);

export default SearchResult;
