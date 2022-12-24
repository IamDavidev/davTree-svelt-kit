<script lang="ts">
	import '@/styles/index.css';
	export let title: string;
</script>

<svelte:head>
	<link rel="icon" href="/DavTreeIcon.png" />
	<title>{title}</title>
</svelte:head>

<main class="bg-black p-16 min-h-screen  text-white">
	<nav class="my-4">
		<a href="/" class="bg-blue-400 px-8 py-4 rounded-lg text-black"> go to home</a>
	</nav>
	<slot />
</main>
