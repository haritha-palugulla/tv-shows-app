// api endpoints
import {
    getShowsApi, getShowApi
} from '@/services/shows'

const getShows = async function(callback) {
	return getShowsApi().then(response => {
		let shows = response.data.sort((prevValue, nextValue) =>
			prevValue.rating.average < nextValue.rating.average ? 1 : -1,
		);
		callback(shows);
    })
}

const getShowsGroupedByGenre = async function(callback) {
	return getShowsApi().then(response => {
		let showsByGen = response.data.sort((prevValue, nextValue) =>
			prevValue.rating.average < nextValue.rating.average ? 1 : -1,
		).reduce((genreList, show) => addShowToGenreList(genreList, show), []);
		callback(showsByGen);
    })
}

const getTopRatedLatestShows = async function(callback) {
	return getShowsApi().then(response => {
		let shows = response.data.sort((prevValue, nextValue) =>
			prevValue.ended < nextValue.ended ? 1 : -1,
		);
		callback(shows);
    })
}

// Adds 'show' to an existing genre in the 'genreList'. If no such genre exists, creates one and adds 'show'.
const addShowToGenreList = function(genreList, show) {
    for (let idx in show.genres) {
        let genre = show.genres[idx];
        let tempGrp = genreList.filter(genreTuple => genreTuple.genre == genre)[0];
        if (!tempGrp) {
            tempGrp = JSON.parse('{"genre":"' + genre + '","shows":[]}');
            genreList.push(tempGrp);
        }
        tempGrp.shows.push(show);
    }
    return genreList;
}

const getShow = async function(id, responseCallback) {
	return getShowApi(id).then(response => {responseCallback(response.data);});
}

export {
    getShows,
	getShowsGroupedByGenre,
	getTopRatedLatestShows,
	getShow
}