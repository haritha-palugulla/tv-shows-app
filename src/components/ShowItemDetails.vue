<template>
    <div class="row show-details m-t-100">
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
<style scoped>
.primary-clr{
	color:#c31e1e;
}
.row{
	width:1120px;
	text-align:center;
	margin:0 auto;
}
.w-40{
	width:40%;
	float:left;
	text-align:left;
}
.w-70{
	width:60%;
	float:left;
	text-align:right;
}
.show-details img{
	height: 400px;
    padding: 10px 20px;
	text-align:right
}
.show-details h6{
	font-size:20px;
	margin-top:40px;
	margin-bottom: 4px;
}
.show-details p{
	margin-bottom: 4px;
}
.show-details .content{
	text-align:left;
}
.m-t-20{
	margin-top:20px;
}
.m-t-100{
	margin-top:100px;
}
@media (max-width:600px){
	.row{
		width:auto;
		text-align:center;
		margin:0 auto;
	}
	.w-40{
		width:100%;
		text-align:center;
	}
	.w-70{
		width:100%;
		text-align:center;
	}
}
@media (min-width:1120px){
	.logo-text{
		position: relative;
		left: -67px;
	}
}
@media (max-width:767px){
	.row{
		width:auto;
		text-align:center;
		margin:0 auto;
		padding-bottom:30px;
	}
	.w-30{
		width:100%;
		text-align:center;
	}
	.w-70{
		width:100%;
		text-align:center;
	}
	.search-field{
		position: relative;
		top: -5px;
	}
}
@media (min-width:768px) (max-width:900px){
	.row{
		width:auto;
		text-align:center;
		margin:0 auto;
		padding-bottom:30px;
	}
	.w-30{
		width:100%;
		text-align:left;
	}
	.w-70{
		width:100%;
		text-align:left !important;
	}
	.search-field{
		position: relative;
		top: -5px;
	}
}
@media(min-width:1120px){
	.row{
		width:1120px;
		text-align:center;
		margin:0 auto;
	}
	.w-30{
		width:30%;
		float:left;
		text-align:left;
	}
	.w-70{
		width:70%;
		float:left;
		text-align:right;
	}
}
</style>