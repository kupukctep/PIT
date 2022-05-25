<script lang="ts">
    let assets = [{ticker: 'APPL', quantity: 100, value : 21000},
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
    {#each assets as asset}
        <tr>
            <td>{asset.ticker}</td>
            <td>{asset.quantity}</td>
            <td>{asset.value}</td>
        </tr>
    {/each}
    </tbody>
</table>
