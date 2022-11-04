import {
	searchShows
} from '@/modules/show-search';

import * as showSearchApis from '@/services/show-search'
const searchShowsApiSpy = jest.spyOn(showSearchApis, 'searchShowsApi');
describe('Show search module tests', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});
	it("showSearch calls searchShowsApi to get the api response", async () => {
		const searchText = 'girls';
		let showsList = [];
		self = this;
		await searchShows(searchText, (response) => {showsList = response});
		expect(searchShowsApiSpy).toHaveBeenCalled();
		expect(typeof showsList).toBe('object');
		expect(showsList.length).toBeGreaterThan(0);
		expect(showsList[0].id).not.toBeNull();
	})
})