<template>
    <div class="row show-details">
        <div class="w-40">
            <div class="image">
                <img :src="showInfo.image.original">
            </div>
        </div>
        <div class="w-60">
            <div class="content" v-if = "typeof showInfo !== 'undefined'">
                <h6 class="primary-clr">{{ showInfo.name }}</h6>
                <p>Rating : {{ showInfo.rating.average }} / 10 <i class="fa fa-star primary-clr"></i></p>
				<p v-html="showInfo.summary"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShowItemDetails',
    props: {
        showInfo: Object
    }
}
</script>