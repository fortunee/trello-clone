import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { loadProfile } from './actions';

const mapStateToProps = (state) => ({
    profile: state.profile,
    isLoading: state.isLoading,
    hasError: state.hasError,
});

const mapDispatchToProps = (dispatch) => ({
    loadProfile() {
        dispatch(loadProfile());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);