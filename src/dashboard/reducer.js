import { LOAD_PROFILE_SUCCEEDED, LOAD_PROFILE_FAILED, LOAD_PROFILE } from './actions';

const initialState = {
    profile: {},
    isLoading: false,
    hasLoaded: false,
    hasError: false,
    error: ''
};

export default (state=initialState, action={}) => {
    switch(action.type) {
        case LOAD_PROFILE:
            return {
                ...state,
                isLoading: true,
                hasError: false
            }
        case LOAD_PROFILE_SUCCEEDED: 
            return {
                ...state,
                profile: action.profile,
                isLoading: false,
                hasLoaded: true,
            };
        case LOAD_PROFILE_FAILED:
            return {
                ...state,
                hasLoaded: true,
                hasError: true,
                error: action.error
            }
        default:
            return state;
    }
};
