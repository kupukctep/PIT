<script lang="ts">
    import Modal from "./Modal.svelte";
    import Operations from "./Assets.svelte";
    import Button from "./Button.svelte";

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
    <Button class="btn-success" on:click={deposit}>Deposit</Button>
    <Button class="btn-danger" on:click={withdraw}>Withdraw</Button>
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
