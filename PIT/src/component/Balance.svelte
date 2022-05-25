<script lang="ts">
    import Modal from "./Modal.svelte";
    import Operations from "./Assets.svelte";

    let total = 1201.50
    let depositAmount
    let showDepositModal = false


    function deposit() {
        showDepositModal = true
    }

    function withdraw() {
        showDepositModal = true
    }
</script>

<div>
    <p class="text-xl">Available: {total.toFixed(2)}</p>
    <button value="Deposit" type="button" on:click={deposit}>Deposit</button>
    <button value="Withdraw" type="button" on:click={withdraw}>Withdraw</button>
    <Operations/>
</div>

<Modal bind:show={showDepositModal} actionText="Continue"
       on:action={()=>total += depositAmount}>
    <div slot="header">
        Deposit amount
    </div>
    <div>
        <input type="number" placeholder="0.00" bind:value={depositAmount} min="0" step=".01" required/> EUR
    </div>
</Modal>
