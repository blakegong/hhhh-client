/**
 * Created by gongy on 4/11/16.
 */

import { connect } from 'react-redux';
import Actions from '../actions';
import withLifecycle from '../utils/hoc-lifecycle';
import UrlList from '../components/UrlList';

const mapStateToProps = (state, ownProps) => {
  return {
    urlList: state.urlList
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const fetchUrlList = () => dispatch(Actions.fetchUrlList.requested());

  return {
    addUrl: (url) => dispatch(Actions.createUrl.requested(url)),
    updateUrl: (url) => dispatch(Actions.updateUrl.requested(url)),
    removeUrl: (url) => dispatch(Actions.deleteUrl.requested(url)),
    onWillMount: [fetchUrlList]
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLifecycle(UrlList));
