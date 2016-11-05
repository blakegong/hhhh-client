/**
 * Created by gongy on 4/11/16.
 */
import { connect } from 'react-redux';
import Home from '../components/Home';
import withLifecycle from '../utils/hoc-lifecycle';
import {push} from 'react-router-redux';
import Actions from '../actions/';

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onWillMount: [],
    goTo: (url) => {
      dispatch(push(url));
      dispatch(Actions.updateSearchKey.requested(''))
    },
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLifecycle(Home));
