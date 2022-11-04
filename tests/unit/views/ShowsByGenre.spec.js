import { shallowMount } from '@vue/test-utils'
import ShowsByGenre from '@/views/ShowsByGenre.vue'

import * as shows from "@/modules/shows";

const getShowsGroupedByGenreSpy = jest.spyOn(shows, 'getShowsGroupedByGenre');

describe('Mounted ShowsByGenre', () => {
	const wrapper = shallowMount(ShowsByGenre);
	test('does a wrapper exist', () => {
		expect(wrapper.exists()).toBe(true)
	})
})

describe('ShowsByGenre.vue', () => {
	it("Renders given genres list JSON", () => {
		shallowMount(ShowsByGenre);
		expect(getShowsGroupedByGenreSpy).toHaveBeenCalled();
	})
})
