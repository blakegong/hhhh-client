/**
 * Created by gongy on 4/11/16.
 */
import { connect } from 'react-redux';
import Actions from '../actions/';
import withLifecycle from '../utils/hoc-lifecycle';
import Search from '../components/search/Search';

const mapStateToProps = (state) => {
  return {
    keywordList: state.search.keywordList,
    resultList: state.search.resultList
  }
};

const mapDispatchToProps = (dispatch) => {
  const search = (query) => dispatch(Actions.fetchSearchResult.requested(query));
  return {
    search,

    onWillMount: [() => search('')]
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLifecycle(Search));
