<template>
    <main>
		<div class="search-view">
			<ShowItems v-if="isMounted" :shows="shows" :genre="results" />
		</div>
    </main>
</template>

<script>
import ShowItems from '@/components/ShowItems.vue'
import * as showSearchApi from "@/modules/show-search";

export default {
    name: 'ShowSearch',
    props: {
        searchStr: {
            type: String,
            default: ''
        }
    },
    components: {
        ShowItems
    },
    data() {
        return {
            shows: [],
            isMounted: false,
			results: null
        }
    },
    async beforeMount() {
        this.isMounted = false;
        await this.searchShows(this.searchStr);
        this.isMounted = true;
    },
    methods: {
        async searchShows(searchString) {
            let self = this;
            await showSearchApi.searchShows(searchString, (response) => {
                self.shows = response;
				self.results = response.length > 0 ? "Results" : "No matched found";
            });
        }
    }
}
</script>