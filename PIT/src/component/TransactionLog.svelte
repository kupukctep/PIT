<script lang="ts">
    import { transactionStore } from '../store.js';
</script>

<div>
    {#each $transactionStore as transaction}
    	<div>{JSON.stringify(transaction)}</div>
    {/each}
</div>
