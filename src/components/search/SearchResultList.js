/**
 * Created by gongy on 5/11/16.
 */

import React, { PropTypes } from 'react';
import SearchResult from './SearchResult';

const styles = {
  ul: {
    padding: "0"
  }
};

function SearchResultList ({ resultList }) {
  return (
    <ul style={styles.ul}>
      {resultList.map((result, i) => <SearchResult key={i} result={result}/>)}
    </ul>
  )
}

SearchResultList.propTypes = {
  resultList: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchResultList;
