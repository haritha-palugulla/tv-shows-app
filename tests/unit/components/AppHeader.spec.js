import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('Mounted AppHeader', () => {
	const wrapper = shallowMount(AppHeader);
	test('does a wrapper exist', () => {
		expect(wrapper.exists()).toBe(true)
	})
})

describe('AppHeader.vue', () => {
	it("Renders props of given type", () => {
		const defaultTitle = "Tv Shows";
		const defaultUrl = "/";
		const wrapper = shallowMount(AppHeader);
		expect(typeof wrapper.props('title')).toBe("string");
		expect(typeof wrapper.props('initialViewUrl')).toBe("string");
		expect(typeof AppHeader.data).toBe('function');
	}),
	it("Renders default props", () => {
		const defaultTitle = "Tv Shows";
		const defaultUrl = "/";
		const wrapper = shallowMount(AppHeader);
		expect(wrapper.props('title')).toBe(defaultTitle);
		expect(wrapper.props('initialViewUrl')).toBe(defaultUrl);
	}),
	it("Renders the passed props", () => {
		const newTitle = "New Title";
		const newUrl = "/newUrl";
		const wrapper = shallowMount(AppHeader, {
			props: {
				title: newTitle,
				initialViewUrl: newUrl
			}
		});
		expect(wrapper.props('title')).toBe(newTitle);
		expect(wrapper.props('initialViewUrl')).toBe(newUrl);
	}),
	it("Triggers the search event on clicking input", () => {
		const searchText = "girls";
		const parentObj = { 
			searchShows : function(text) {
				expect(text).toBe(searchText);
			} 
		};
		let wrapper = shallowMount(AppHeader);
		wrapper.setData({parent: parentObj})
		
		const input = wrapper.find({ref: 'searchInput'});
		input.element.value = searchText;
		input.trigger('search');		
	})
})
  
