import {
	getShowsApi, getShowApi
} from '@/services/shows';

import api from '@/services/common';

describe('Show search api tests', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	}),
	it("getShowsApi calls common api to get response as a Promise", () => {
		let commonApiSpy = jest.spyOn(api, 'get');
		let response = getShowsApi();
		expect(commonApiSpy).toHaveBeenCalledWith("/shows");
		expect(response).not.toBeNull();
		expect(typeof response).toBe('object');
	}),
	it("getShowApi calls common api to get response as a Promise", () => {
		let commonApiSpy = jest.spyOn(api, 'get');
		const showId = '1';
		let response = getShowApi(showId);
		expect(commonApiSpy).toHaveBeenCalledWith("/shows/" + showId);
		expect(response).not.toBeNull();
		expect(typeof response).toBe('object');
	})
})
  
