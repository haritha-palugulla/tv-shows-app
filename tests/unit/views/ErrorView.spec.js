import { mount } from '@vue/test-utils'
import ErrorView from '@/views/ErrorView.vue'

describe('ErrorView.vue', () => {
	it("Renders props when passed", () => {
		const text = "Hello UI";
		const msg = "Error message";
		const wrapper = mount(ErrorView, {
			props: {
				title: text,
				message: msg
			}
		});
		expect(wrapper.props('title')).toBe(text);
		expect(wrapper.props('message')).toBe(msg);
	})
})
  
