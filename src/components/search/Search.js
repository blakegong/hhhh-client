/**
 * Created by gongy on 5/11/16.
 */

import React, { PropTypes } from 'react';
import SearchBar from './SearchBar'
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
};

function Search ({ keywordList, resultList, search }) {
  return (
    <div style={styles.page}>
      <SearchBar keywordList={keywordList} search={search} placeholder="Search Garena"/>
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
