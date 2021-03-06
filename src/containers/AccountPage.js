/**
 * Created by gongy on 4/11/16.
 */
import { connect } from 'react-redux';
import AccountPage from '../components/AccountPage';
import Actions from '../actions/';
import withLifecycle from '../utils/hoc-lifecycle';

const mapStateToProps = (state) => {
    return {
        account: state.account
    }
};

const mapDispatchToProps = (dispatch) => {
    const fetchUrlList = () => dispatch(Actions.fetchUrlList.requested());

    return {
        addUrl: (url) => dispatch(Actions.createUrl.requested(url)),
        onWillMount: [fetchUrlList]
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withLifecycle(AccountPage));
