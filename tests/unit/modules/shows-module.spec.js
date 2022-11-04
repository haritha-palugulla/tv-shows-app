import {
	getShows, getShowsGroupedByGenre, getShow
} from '@/modules/shows';

import * as getShowsApiCollection from '@/services/shows'

describe('Shows module tests', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	}),
	it("getShows gives list of shows sorted by rating", async () => {
		const getShowsApiSpy = jest.spyOn(getShowsApiCollection, 'getShowsApi');
		let showsList = [];
		self = this;
		await getShows((response) => {showsList = response});
		expect(getShowsApiSpy).toHaveBeenCalled();
		expect(typeof showsList).toBe('object');
		expect(showsList.length).toBeGreaterThan(0);
		expect(showsList[0].id).not.toBeNull();
		
		//check if sorted by rating
		if(showsList.length > 1)
			expect(showsList[0].rating.average).toBeGreaterThan(showsList[1].rating.average);
	}),
	it("getShowsGroupedByGenre gives shows grouped as list of genres", async () => {
		const getShowsGroupedByGenreSpy = jest.spyOn(getShowsApiCollection, 'getShowsApi');
		let genreList = [];
		self = this;
		await getShowsGroupedByGenre((response) => {genreList = response});
		expect(getShowsGroupedByGenreSpy).toHaveBeenCalled();
		expect(typeof genreList).toBe('object');
		expect(genreList.length).toBeGreaterThan(0);
		expect(genreList[0].genre).not.toBeNull();
		expect(genreList[0].shows.length).toBeGreaterThan(0);
	}),
	it("getShow gives a show", async () => {
		const getShowSpy = jest.spyOn(getShowsApiCollection, 'getShowApi');
		const showId = '1';
		let show;
		self = this;
		await getShow(showId, (response) => {show = response});
		expect(getShowSpy).toHaveBeenCalledWith('1');
		expect(typeof show).not.toBeNull();
		expect(typeof show).toBe('object');
		expect(show.id).toBe(1);
	})
})
