<script lang="ts">
	// dependencies
	import Router from 'svelte-spa-router';

	// components
	import Header from './components/layout/Header.svelte';
	import Footer from './components/layout/Footer.svelte';
	import Content from './components/layout/Content.svelte';


	import routes from './routes';
</script>

<div id="wrap">
	<!-- Header -->
	<Header />
	<!-- Contents -->
	<Content>
		<Router {routes} />
	</Content>
	<!-- footer -->
	<Footer />
</div>

<style>
</style>