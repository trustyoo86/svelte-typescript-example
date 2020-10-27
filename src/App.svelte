<script lang="ts">
	// components
	import Header from './components/layout/Header.svelte';
	import Footer from './components/layout/Footer.svelte';
	import Content from './components/layout/Content.svelte';
	
	// routes
	import Routes from './Routes.svelte';
</script>

<div id="wrap">
	<!-- Header -->
	<Header />
	<!-- Contents -->
	<Content>
		<Routes />
	</Content>
	<!-- footer -->
	<Footer />
</div>

<style>
</style>