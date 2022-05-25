<script lang="ts">
    import { transactionStore } from '../store.js';
    import { PURCHASE } from '../transactions.js';

    let netAssetValue = calc($transactionStore);

    transactionStore.subscribe(transactionStore => netAssetValue = calc(transactionStore));

    function calc(transactionStore) {
    let value = 0;
            transactionStore.forEach(transaction => {
                if (transaction.type === PURCHASE) {
                    value -= transaction.payload.price * transaction.payload.amount;
                }
            });
    return value;
    }

    function buy() {
        transactionStore.addPurchase(purchase);
        purchase = emptyPurchase();
    }
</script>

<div>
    { netAssetValue }
</div>
