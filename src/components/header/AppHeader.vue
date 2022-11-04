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
<style scoped>
.cutom-class-nav{
	position: fixed;
    background: #000;
    z-index: 200000;
    width: 100%;
    margin: 0px !important;
    padding: 0px;
    top: -3px;
}
#app, main{
	padding:0px !important;
	margin-top:0px !important;
}
.navbar-brand{
	padding:20px 10px !important;
}
.search-field{
    background: transparent;
    border: 0px;
    border-bottom: 2px solid #ffff;
    width: 277px;
	position: relative;
    top: 8px;
	outline:none;
	color:#fff;
	font-size:15px;
}
a.nav-link.js-scroll-trigger.router-link-exact-active.router-link-active{
  color:white;
}
#sideNav{
  transition:all 100ms ease;
}
.navbar-dark .navbar-toggler{
  border-color:transparent;
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
@media only screen and (max-width: 991px){
	.elevated{
		box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
	}
	#mainMenu{
		transition:all 200ms ease;
		-webkit-transition:all 200ms ease;
		max-height:360px;
	}
	.menu{
		height: 0;
		visibility: hidden;
		opacity: 0;
	}
	.menu-active {
		height: 100%;
		visibility: visible;
		opacity: 1;
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
		text-align:left;
	}
	.w-70{
		width:100%;
		text-align:left;
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
a{
	text-decoration:none;
	color:#fff;
}
</style>