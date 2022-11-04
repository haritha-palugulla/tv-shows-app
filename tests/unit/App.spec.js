import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('Mounted App', () => {
	const wrapper = shallowMount(App);
	test('does a wrapper exist', () => {
		expect(wrapper.exists()).toBe(true)
	})
})

describe('App.vue', () => {
	it("Test Home view loading", () => {
		const homeRoute = 'Shows';
		const mockRouter = {
			push: jest.fn(route => expect(route.name).toBe(homeRoute))
		};
		const wrapper = shallowMount(App, {
			global: {
				mocks: {
					$router: mockRouter
				}
			}
		});
		wrapper.vm.searchShows(null);
	})
})

describe('App.vue', () => {
	it("Test Search view loading", () => {
		const searchRoute = 'ShowSearch';
		const searchText = 'girls';
		const mockRouter = {
			push: jest.fn(route => {
				expect(route.name).toBe(searchRoute);
				expect(route.params.searchStr).toBe(searchText);
			})
		};
		const wrapper = shallowMount(App, {
			global: {
				mocks: {
					$router: mockRouter
				}
			}
		});
		wrapper.vm.searchShows(searchText);
	})
})
