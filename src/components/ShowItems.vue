<template>
    <div class="header m-t-40">
        <h2>{{ genre }}</h2>
        <nav>
            <button v-if="hasPrev || hasNext" @click="prevHor($event)" :class="{'active': hasPrev, 'inactive': !hasPrev}">
                <svg viewBox="0 0 24 24">
                    <path d="m9.8 12 5 5a1 1 0 1 1-1.4 1.4l-5.7-5.7a1 1 0 0 1 0-1.4l5.7-5.7a1 1 0 0 1 1.4 1.4l-5 5z" />
                </svg>
            </button>
            <button v-if="hasPrev || hasNext" @click="nextHor($event)" :class="{'active': hasNext, 'inactive': !hasNext}">
                <svg viewBox="0 0 24 24">
                    <path d="m14.3 12.1-5-5a1 1 0 0 1 1.4-1.4l5.7 5.7a1 1 0 0 1 0 1.4l-5.7 5.7a1 1 0 0 1-1.4-1.4l5-5z" />
                </svg>
            </button>
        </nav>
    </div>
    <vue-horizontal ref="horizontal" class="horizontal" :button="false" @scroll-debounce="onScrollDebounce">
        <div class="item" v-for="show in shows" v-bind:key="show.id">
            <ShowItem :show="show" />
        </div>
    </vue-horizontal>
</template>

<script>
import VueHorizontal from "vue-horizontal";
import ShowItem from '@/components/ShowItem.vue'

export default {
    name: 'ShowItems',
    props: {
        genre: {
            type: String,
            default: ""
        },
        shows: {
            type: Array,
            default: () => []
        }
    },
    components: {
        VueHorizontal,
        ShowItem
    },
    data() {
        return {
            hasPrev: false,
            hasNext: true
        }
    },
    methods: {
        prevHor(event) {
            this.$refs.horizontal.prev(event)
        },
        nextHor(event) {
            this.$refs.horizontal.next(event)
        },
        onScrollDebounce({
            hasPrev,
            hasNext
        }) {
            this.hasPrev = hasPrev;
            this.hasNext = hasNext;
        }
    }
}
</script>