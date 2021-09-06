<template>
	<v-app>
		<v-btn elevation="2">Click here</v-btn>
		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: 'App',

	data: () => ({
		//
	})
};
</script>
