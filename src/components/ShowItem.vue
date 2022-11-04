<template>
    <router-link :to="{ name: 'ShowDetails', params:{'id': show.id}}">
        <div class="image" v-if="show != null && show.image != null" :style="{background: `url(${show.image.medium})`}">
        </div>
        <div class="content" v-if="show != null">
            <h6 ref="showNameRef">{{ show.name }}</h6>
            <p ref="showRatingref">{{ show.rating.average }}</p>
        </div>
    </router-link>
</template>

<script>
export default {
    name: 'ShowItem',
    props: {
        show: Object
    }
}
</script>