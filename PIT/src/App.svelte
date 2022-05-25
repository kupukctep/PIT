<script lang="ts">
    import Balance from "./component/Balance.svelte";
    import Intro from "./component/Intro.svelte";
    import Trade from "./component/Trade.svelte";
    import TransactionLog from "./component/TransactionLog.svelte";
    import Header from "./component/Header.svelte";
</script>

<main class="bg-amber-50">
    <section class="relative flex items-center justify-between flex-col h-screen lg:overflow-hidden">
        <div class="relative z-20 w-full">
            <div class="w-full md:w-3/4 mx-auto py-6 sm:px-0 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-3xl">
                    <div class="px-4 sm:px-6">
                        <Header />
                        <Balance/>
                        <Trade/>
                    </div>
                </div>
            </div>
        </div>
    </section>
	<Intro/>
</main>

<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
