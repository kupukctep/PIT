<script lang="ts">
    import {transactionStore} from '../store.js';
    import {DEPOSIT, PURCHASE} from '../transactions.js';

    let netAssetValue = calc($transactionStore);

    transactionStore.subscribe(transactionStore => netAssetValue = calc(transactionStore));

    function calc(transactionStore) {
        let value = 0
        transactionStore.forEach(transaction => {
            if (transaction.type === PURCHASE) {
                value -= transaction.payload.price * transaction.payload.amount;
            }
            if (transaction.type === DEPOSIT) {
                value += transaction.payload.amount;
            }
        });
        return value.toFixed(2);
    }

    function buy() {
        transactionStore.addPurchase(purchase);
        purchase = emptyPurchase();
    }
</script>

<div class="mt-4">
    <div class="text-sm text-gray-500">Net Asset Value</div>
    <div class="text-xl font-bold">{netAssetValue}€</div>
</div>
