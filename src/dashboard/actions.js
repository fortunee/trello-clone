const LOAD_PROFILE = 'LOAD_PROFILE'
const LOAD_PROFILE_SUCCEEDED = 'LOAD_PROFILE_SUCCEEDED';
const LOAD_PROFILE_FAILED = 'LOAD_PROFILE_FAILED';

const loadProfile = () => ({ type: LOAD_PROFILE })

const loadProfileSucceeded = (profile) => ({
    type: LOAD_PROFILE_SUCCEEDED,
    profile
});

const loadProfileFailed = (error) => ({
    type: LOAD_PROFILE_FAILED,
    error
});

export {
    LOAD_PROFILE,
    LOAD_PROFILE_FAILED,
    LOAD_PROFILE_SUCCEEDED,
    loadProfile,
    loadProfileSucceeded,
    loadProfileFailed
};
