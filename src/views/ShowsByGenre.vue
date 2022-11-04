<template>
    <v-list ref="vertical" class="vertical" :button="false" @scroll-debounce="onScrollDebounce">
        <div v-for="genre in showsByGenre" v-bind:key="genre.genre">
            <ShowItems :genre="genre.genre" :shows="genre.shows"/>
        </div>
    </v-list>
</template>
<script>
import * as shows from "@/modules/shows";
import ShowItems from '@/components/ShowItems.vue'

export default {
    name: 'ShowsByGenre',
    props: {},
    components: {
        ShowItems
    },
    data() {
        return {
            showsByGenre: []
        }
    },
    async mounted() {
        let self = this;
        await shows.getShowsGroupedByGenre((response) => {
            self.showsByGenre = response
        });
    }
}
</script>