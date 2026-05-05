<script>
	import favicon from '$lib/assets/favicon.svg';
	import Overlay from '../components/ui/overlay.svelte';
	import {isOverlayOpen} from '../stores/overlay.js';
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{#if $isOverlayOpen}
	<Overlay/>
{/if}

{@render children()}
