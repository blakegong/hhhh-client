/**
 * Created by gongy on 4/11/16.
 */
import { connect } from 'react-redux';
import Actions from '../actions/';
import {push} from 'react-router-redux'
import withLifecycle from '../utils/hoc-lifecycle';
import Search from '../components/search/Search';

const mapStateToProps = (state) => {
  return {
    searchKey: state.search.searchKey,
    keywordList: state.search.keywordList,
    resultList: state.search.resultList
  }
};

const mapDispatchToProps = (dispatch) => {
  const search = (query) => dispatch(Actions.fetchSearchResult.requested(query));
  const onChange = (searchKey) => {
    dispatch(push('/a/search/'));
    dispatch(Actions.updateSearchKey.requested(searchKey));
  };
  return {
    search,
    onChange,

    onWillMount: [() => search('')]
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLifecycle(Search));
