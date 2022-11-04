<template>
    <nav class="cutom-class-nav navbar navbar-expand-lg navbar-dark bg-primary" :class="{'fixed-top' : screenSize == 320}" id="sideNav">
        <div class="navbar-brand js-scroll-trigger">
            <div class="row">
                <div class="w-30">
                    <router-link :to="initialViewUrl" title="Shows">
                        <h1 class="logo-text">{{ title }}</h1>
                    </router-link>
                </div>
                <div class="w-70">
                    <input ref="searchInput" class="search-field textfield-closed" type="search" placeholder="Search" @search="triggerSearch" >
                </div>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    name: 'AppHeader',
    props: {
		initialViewUrl: {
			type: String,
			default: "/"
		},
		title: {
			type:String,
			default:"Tv Shows"
		}
    },
    data() {
        return {
			parent: this.$parent,
            screenSize: 0
        };
    },
    methods: {
        triggerSearch() {
			let text = this.$refs.searchInput.value;
            this.parent.searchShows(text);
        }
    },
};
</script>