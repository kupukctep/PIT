<script lang="ts">
    import { transactionStore } from '../store.js';
    //
    // let assets = [{ticker: 'APPL', quantity: 100, value : 21000},
    //     {ticker: 'LYFT', quantity: 23, value: 15000},
    //     {ticker: 'WEN', quantity: 100, value: 50000}]
</script >

<table class="min-w-full divide-y divide-gray-200">
    <thead class="bg-white">
    <tr>
        <th scope="col"
            class="font-bold px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            TICKER
        </th>
        <th scope="col"
            class="font-bold px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            QUANTITY
        </th>

        <th scope="col"
            class="font-bold px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
            VALUE
        </th>
    </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
    {#each $transactionStore as transaction}
        <tr>
            <td class="px-6 py-2">{transaction.payload.ticker}</td>
            <td class="px-6 py-2">{transaction.payload.amount}</td>
            <td class="px-6 py-2 text-right">{transaction.payload.price}</td>
        </tr>
    {/each}
    </tbody>
</table>
