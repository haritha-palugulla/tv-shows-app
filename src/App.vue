<template>
    <main>
        <AppHeader/>
        <router-view />
    </main>
</template>

<script>
import AppHeader from '@/components/header/AppHeader.vue'
import router from '@/router';

export default {
    name: 'App',
    components: {
        AppHeader
    },
	data() {
		return {
			homeViewUrl: "/"
		}
	},
    methods: {
        searchShows(text) {
            if (!text) {
                this.loadHomeView();
            } else {
                this.loadSearchView(text);
            }
        },
        loadHomeView() {
            router.push({
                name: 'Shows'
            });
        },
        loadSearchView(searchText) {
            router.push({
                name: 'ShowSearch',
                params: {
                    searchStr: searchText,
                    key: Date.now()
                }
            });
        }
    },
}
</script>

