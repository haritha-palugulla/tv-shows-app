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

<style scoped>
.header {
     margin-bottom: 0px;
     display: flex;
     align-items: center;
     justify-content: space-between;
     margin-left:8px;
}
 nav {
     display: flex;
     align-items: center;
}
 svg {
     width: 24px;
     height: 24px;
     fill: currentColor;
     color: black;
}
 button {
     padding: 4px;
}
 button:focus {
     outline: none;
}
 horizontal {
     --count: 2;
     --gap: 16px;
}
 @media (min-width: 640px) {
     .horizontal {
         --count: 3;
         --gap: 24px;
    }
}
 @media (min-width: 768px) {
     .horizontal {
         --count: 4;
    }
}
 @media (min-width: 1024px) {
     .horizontal {
         --count: 5;
    }
}
 @media (min-width: 1280px) {
     .horizontal {
         --count: 6;
    }
}
 .item {
     width: calc((100% - ((var(--count) - 1) * var(--gap))) / var(--count));
     margin-right: var(--gap);
}
 button.inactive svg {
     color: #BBB;
}
</style>