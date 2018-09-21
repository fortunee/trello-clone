import request from 'superagent';

const BASE_URL = 'https://api.github.com';

const getUserProfile = (username) => request.get(`${BASE_URL}/users/${username}`);

export {
    getUserProfile
}
