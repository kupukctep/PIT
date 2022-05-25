<script lang="ts">
    import { purchaseStore } from '../store.js';

    let purchase = emptyPurchase();

    function emptyPurchase() {
        return {
            ticker: '',
            amount: 0,
            price: 0.0,
            fee: 0.0,
        }
    }

    function buy() {
        purchaseStore.addPurchase(purchase);
        purchase = emptyPurchase();
    }
</script>

<div>
    <form>
        <label>Ticker: <input type="text" bind:value={purchase.ticker}></label>
        <label>Amount: <input type="number" bind:value={purchase.amount}></label>
        <label>Price: <input type="number" bind:value={purchase.price}></label>
        <label>Fee: <input type="number"bind:value={purchase.fee}></label>
    </form>
    <button value="buy" type="button" on:click={buy}>Buy</button>

    {#each $purchaseStore as purchase}
    	<div>{JSON.stringify(purchase)}</div>
    {/each}
</div>
