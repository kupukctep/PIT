<script lang="ts">
    let total = 0
    function deposit() {
        total++
    }
    function withdraw() {
        total--
    }
</script>

<div>
    <p>Total: {total}</p>
    <button value="Deposit" type="button" on:click={deposit}>Deposit</button>
    <button value="Withdraw" type="button" on:click={withdraw}>Withdraw</button>
</div>
