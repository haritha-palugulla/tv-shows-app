import api from './common.js';

const SEARCH_ENDPOINT = '/search/shows';

// Search shows
const searchShowsApi = (searchStr) => api.get(SEARCH_ENDPOINT, {params:{'q': searchStr}});

export { searchShowsApi }
