<script lang="ts">
    let operations = [{ticker: 'APPL', quantity: 100, value : 21000},
        {ticker: 'LYFT', quantity: 23, value: 15000},
        {ticker: 'WEN', quantity: 100, value: 50000}]
</script >
<table>
    <thead>
    <tr>
        <th>Ticker</th>
        <th>Quantity</th>
        <th>Value</th>
    </tr>
    </thead>
    <tbody>
    {#each operations as operation}
        <tr>
            <td>{operation.ticker}</td>
            <td>{operation.quantity}</td>
            <td>{operation.value}</td>
        </tr>
    {/each}
    </tbody>
</table>
