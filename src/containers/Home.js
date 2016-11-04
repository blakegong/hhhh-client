/**
 * Created by gongy on 4/11/16.
 */
import { connect } from 'react-redux';
import Home from '../components/Home';
import withLifecycle from '../utils/hoc-lifecycle';

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onWillMount: []
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLifecycle(Home));
