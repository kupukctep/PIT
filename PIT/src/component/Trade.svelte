<script lang="ts">
    let ticker = '';
    let amount = 0;
    let price = 0.0;
    let fee = 0.0;

    function buy() {
    }
</script>

<div>
    <form>
        <label>Ticker: <input type="text" bind:value={ticker}></label>
        <label>Amount: <input type="number" bind:value={amount}></label>
        <label>Price: <input type="number" bind:value={price}></label>
        <label>Fee: <input type="number"bind:value={fee}></label>
    </form>
    <button value="buy" type="button" on:click={buy}>Buy</button>
</div>
