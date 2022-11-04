<template>
    <main>
        <ShowList v-if="isMounted" :shows="shows" :genre="results" />
    </main>
</template>

<script>
import ShowList from '@/components/ShowList.vue'
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
        ShowList
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

<style>
#app {
  font-family: 'Roboto', sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 49px;
    padding: 10px 25px;
}
body{
	background:#000;
}
</style>