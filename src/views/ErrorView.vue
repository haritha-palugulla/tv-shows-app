<template>
  <div class="text-center white--text">
    <div class="row">
        <h1 class="pt-6">{{ title }}</h1>
		<p>{{ message }}</p>
        <router-link to="/" :title="'Shows'">
          <span color="primary" class="mt-4">Go to home</span>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ErrorView',
  props: {
    title: {
		type: String,
		default: 'Page Not found'
	},
	message: {
		type: String,
		default: 'Contact the administrator for more details.'
	},
  }
}
</script>