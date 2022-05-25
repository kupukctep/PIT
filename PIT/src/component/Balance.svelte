<script lang="ts">
    import Modal from "./Modal.svelte";
    import Operations from "./Operations.svelte";

    let total = 1201.50
    let showDepositModal = false

    function deposit() {
        showDepositModal = true
    }
    function withdraw() {
        showDepositModal = true
    }
</script>

<div>
    <p>Total: {total}</p>
    <button value="Deposit" type="button" on:click={deposit}>Deposit</button>
    <button value="Withdraw" type="button" on:click={withdraw}>Withdraw</button>
    <Operations/>
</div>

<Modal bind:show={showDepositModal} actionText="Continue">
    <div slot="header">
        Deposit amount
    </div>
    <div>
        <input type="number" placeholder="0.00"/> EUR
    </div>
</Modal>
