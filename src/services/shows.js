import api from './common.js';

const SHOWS_ENDPOINT = '/shows';

// Get all Shows
const getShowsApi = () => api.get(SHOWS_ENDPOINT);

// Get Show details
const getShowApi = (show_id) => api.get(SHOWS_ENDPOINT + '/' + show_id);

export { getShowsApi, getShowApi }
