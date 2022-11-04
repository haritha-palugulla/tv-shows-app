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

<style scoped>
.image {
     background-position: center !important;
     background-size: cover !important;
     background-repeat: no-repeat !important;
     position: relative;
     width: 160px;
     margin: 8px 10px;
     height: 227px;
}
.content {
    margin-top: 6px;
	height: 10px;
}
 .content h6 {
     font-size: 14px;
     text-transform: capitalize;
     line-height: 14px;
     margin-bottom: 6px;
     text-align: left;
     padding: 0px 10px;
     margin-top: 10px;
     color:#fff;
}
 .content p {
     line-height: 1.5;
     font-size: 12px;
     margin-top: 8px;
     margin-left: 10px;
     display: -webkit-box;
     -webkit-line-clamp: 2;
     -webkit-box-orient: vertical;
     overflow: hidden;
     position: relative;
     top: -265px;
     background: #c31e1e;
     color: #fff;
     padding: 8px 7px;
     border-bottom-right-radius: 10px;
     display: inline-block;
     left: -70px;
}
 .content span{
     color: #fff;
     font-size: 12px;
     float: left;
     margin-left: 10px;
     border: 1px solid red;
     padding: 2px 10px;
     border-radius: 2px;
}
a{
	text-decoration:none;
	color:#fff;
}
@media (max-width:600px){
	.row{
		width:auto;
		text-align:center;
		margin:0 auto;
	}
	.w-30{
		width:100;
		text-align:right;
	}
	.w-70{
		width:100%;
		text-align:right;
	}
}
</style>