<script lang="ts">
    import Modal from "./Modal.svelte";
    import Operations from "./Assets.svelte";
    import Button from "./Button.svelte";
    import Trade from "./Trade.svelte";

    let total = 1201.50
    let depositAmount
    let showDepositModal = false
    let showOptionModal = false


    function deposit() {
        showDepositModal = true
    }

    function withdraw() {
        showDepositModal = true
    }

    function sell() {
        showOptionModal = true
    }

    function buy() {
        showOptionModal = true
    }
</script>

<div>
    <p class="text-xl">Available: {total.toFixed(2)}</p>
    <div>
        <Button class="btn-success" on:click={deposit}>Deposit</Button>
    <Button class="btn-danger" on:click={withdraw}>Withdraw</Button>
    </div>
    <div>
        <Button class="btn-success" on:click={sell}>Sell</Button>
        <Button class="btn-danger" on:click={buy}>Buy</Button>
    </div>
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

<div>
    <Trade showOptionModal="{showOptionModal}"/>
</div>
