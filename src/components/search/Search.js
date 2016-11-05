/**
 * Created by gongy on 5/11/16.
 */

import React, { PropTypes } from 'react';
import SearchInput from './SearchInput'
import SearchResultList from './SearchResultList'

let styles = {
  page: {
    padding: "200px 60px 20px",
    overflow: "auto",
    textAlign: "center"
  },
  content: {
    background: "rgba(255, 255, 255, 0.7)"
  },
  searchBar: {
    display: "inline-block",
    background: "rgba(255, 255, 255, 0.6)",
    width: "50%",
    textAlign: "left",
    padding: "10px 20px",
    border: "none"
  }
};

function Search ({ searchKey, resultList, search, onChange, params }) {
  if (params.query && params.query != searchKey) {
    setTimeout(() => onChange(params.query), 50);
  }
  return (
    <div style={styles.page}>
      <SearchInput style={styles.searchBar} placeholder="Search Garena" onChange={onChange} value={searchKey}/>
      <div style={styles.container}>
        <SearchResultList resultList={resultList}/>
      </div>
    </div>
  )
}

Search.propTypes = {
  keywordList: PropTypes.arrayOf(PropTypes.string),
  resultList: PropTypes.arrayOf(PropTypes.object)
};

export default Search;
