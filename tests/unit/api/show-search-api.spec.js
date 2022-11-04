import {
	searchShowsApi
} from '@/services/show-search';

import api from '@/services/common';
const commonApiSpy = jest.spyOn(api, 'get');
describe('Show search api tests', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});
	it("showSearchApi calls common api to get response", () => {
		const searchText = 'girls';
		searchShowsApi(searchText);
		expect(commonApiSpy).toHaveBeenCalled();
	})
})
  
