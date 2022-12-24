<script lang="ts">
	import '@master/css';
	import '../styles/master.css';
	import '../styles/index.css';
	export let title: string;
</script>

<head>
	<title>
		{title}
	</title>
</head>
<main class="bg:gray-8 font:white px:64 py:32 min-h:100vh ">
	<slot />
</main>
