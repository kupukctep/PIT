<script lang="ts">
    import Modal from "./Modal.svelte";
    import Operations from "./Assets.svelte";
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
    <p class="text-xl">Available: {depositAmount}</p>
    <div>
        <button value="Deposit" type="button" on:click={deposit}>Deposit</button>
        <button value="Withdraw" type="button" on:click={withdraw}>Withdraw</button>
    </div>
    <div>
        <button value="Sell" type="button" on:click={sell}>Sell</button>
        <button value="Buy" type="button" on:click={buy}>Buy</button>
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
