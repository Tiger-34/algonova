<script>
	let { children } = $props();
</script>

<svelte:head>
	<!-- Základ -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="IE=edge">

<!-- Popis -->
<meta name="description" content="The coockbook in svelte">
<meta name="keywords" content="coockbok, coocking, coock, social coocking,social media for coockbok, svelte, sveltekit">
<meta name="author" content="Max, Jan">
<meta name="generator" content="SvelteKit">

<!-- Roboty / indexácia -->
<meta name="robots" content="index, follow">
<meta name="googlebot" content="index, follow">
<meta name="bingbot" content="index, follow">

<!-- Téma -->
<meta name="theme-color" content="#000000">
<meta name="color-scheme" content="light dark">

<!-- Mobilné -->
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="App">
<meta name="apple-mobile-web-app-status-bar-style" content="default">	

<!-- Cache -->
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="pragma" content="no-cache">

<!-- Refresh -->
<meta http-equiv="refresh" content="30">

<!-- Open Graph (Facebook, Discord...) -->
<head>
<meta property="og:title" content="Moja stránka">

<meta
property="og:image"
content="https://example.com/card.png">

<meta
property="og:image:width"
content="1200">

<meta
property="og:image:height"
content="630">
</head>

<!-- Apple -->
	<meta name="apple-itunes-app" content="app-id=123">

<!-- Microsoft -->
	<meta name="msapplication-TileColor" content="#000">
	<meta name="msapplication-config" content="/browserconfig.xml">

<!-- Geo -->
	<meta name="geo.region" content="SK">
	<meta name="geo.position" content="48.1486;17.1077">

<!-- Verifikácia -->
	<meta name="google-site-verification" content="TOKEN">
	<meta name="facebook-domain-verification" content="TOKEN">

<!-- Jazyk -->
	<meta http-equiv="content-language" content="sk">

</svelte:head>

{@render children()}


