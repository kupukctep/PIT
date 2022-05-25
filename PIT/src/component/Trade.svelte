<script lang="ts">
    import { transactionStore } from '../store.js';
    import Button from "./Button.svelte";

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
        transactionStore.addPurchase(purchase);
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

    <Button class="btn-primary" on:click={buy}>Buy</Button>
</div>
