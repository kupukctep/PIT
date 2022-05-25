<script lang="ts">
    import Balance from "./component/Balance.svelte";
    import Intro from "./component/Intro.svelte";
    import Trade from "./component/Trade.svelte";
</script>

<main class="bg-amber-200">
    <Intro/>
    <Balance/>
    <Trade/>
</main>

<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
