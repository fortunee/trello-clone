import {
    LOAD_PROFILE,
    LOAD_PROFILE_SUCCEEDED,
    loadProfile,
    loadProfileSucceeded,
    loadProfileFailed
} from '../actions';

describe('Dashboard Actions', () => {
    test('Load Profile Action', () => {
        const username = 'testUser';
        const expected = { type: LOAD_PROFILE, username };
        expect(loadProfile(username)).toEqual(expected)
    });

    test('Load Profile Succeeded Action', () => {
        const profile = { username: 'fortune', avatarUrl: '/avatar.jpg' };
        const expected = { type: LOAD_PROFILE_SUCCEEDED, profile };
        expect(loadProfileSucceeded(profile)).toEqual(expected)
    });
})