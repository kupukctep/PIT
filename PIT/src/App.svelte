<script lang="ts">
    import Balance from "./component/Balance.svelte";
    import Intro from "./component/Intro.svelte";
	import Trade from "./component/Trade.svelte";
	import TransactionLog from "./component/TransactionLog.svelte";
    import NetAssetValue from "./component/NetAssetValue.svelte";

</script>

<main class="min-h-screen bg-gray-100">
    <section class="relative flex items-center justify-between flex-col h-screen lg:overflow-hidden">
    <div class="bg-white shadow sm:rounded-lg mt-8">
        <div class="relative z-20 w-full">
            <div class="w-full mx-auto py-6 sm:px-0 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-3xl">
                    <div class="px-4 sm:px-6">
                        <Intro/>
                        <Balance/>
                        <Trade/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
	<NetAssetValue/>
</main>

<style lang="postcss" global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
