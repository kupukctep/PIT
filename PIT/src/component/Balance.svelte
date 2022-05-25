<script lang="ts">
    import Modal from "./Modal.svelte";
    import Operations from "./Assets.svelte";
    import Button from "./Button.svelte";
    import Trade from "./Trade.svelte";
    import {transactionStore} from '../store.js';

    let depositAmount = 1200.50
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
    <div class="flex justify-between mb-5">
        <div>
            <div class="text-sm text-gray-500">Available</div>
            <div class="text-xl font-bold">{depositAmount}€</div>
        </div>
        <div>
            <img src="pit-logo.svg" height="48" width="48" alt="PIT logo" />
        </div>
    </div>
    <div class="space-y-2 mb-3">
        <div class="grid grid-cols-2 gap-3">
            <Button class="btn-success" on:click={deposit}>Deposit</Button>
            <Button class="btn-danger w-100" on:click={withdraw}>Withdraw</Button>
        </div>
        <div class="grid grid-cols-2 gap-3">
            <Button class="btn-primary" on:click={sell}>Sell</Button>
            <Button class="btn-primary" on:click={buy}>Buy</Button>
        </div>
    </div>
    <Operations/>
</div>

<Modal bind:show={showDepositModal} actionText="Continue"
       on:action={()=> transactionStore.addDeposit({ amount: depositAmount }) }>
    <div slot="header">
        Deposit amount
    </div>
    <div>
        <input type="number" placeholder="0.00" bind:value={depositAmount} min="0" step=".01" required/> EUR
    </div>
</Modal>

<div>
    <Trade bind:showOptionModal="{showOptionModal}"/>
</div>
