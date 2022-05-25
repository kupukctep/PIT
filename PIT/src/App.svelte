<script lang="ts">
	import Balance from "./component/Balance.svelte";
    import Intro from "./component/Intro.svelte";
	import Trade from "./component/Trade.svelte";

	export let name;
</script>

<main class="bg-amber-200">
	<Intro />
	<Balance/>
	<Trade/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
