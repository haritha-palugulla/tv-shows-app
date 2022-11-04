import {
	searchShowsApi
} from '@/services/show-search'

const searchShows = async function(searchStr, callback) {
	return searchShowsApi(searchStr).then(response => {
        let showsList = response.data.map((show) => show.show);
		callback(showsList);
    })
}

export {
	searchShows
}