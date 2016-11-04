/**
 * Created by gongy on 5/11/16.
 */

import React, { PropTypes } from 'react';
import SearchBar from './SearchBar'
import SearchResultList from './SearchResultList'

function Search ({ keywordList, resultList, search }) {
  return (
    <div>
      <SearchBar keywordList={keywordList} search={search} placeholder="Search Garena"/>
      <SearchResultList resultList={resultList}/>
    </div>
  )
}

Search.propTypes = {
  keywordList: PropTypes.arrayOf(PropTypes.string),
  resultList: PropTypes.arrayOf(PropTypes.object)
};

export default Search;
