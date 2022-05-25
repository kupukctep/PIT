<script lang="ts">
    import { transactionStore } from '../store.js';

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
    <button value="buy" type="button" on:click={buy}>Buy</button>
</div>
