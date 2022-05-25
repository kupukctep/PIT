<script>
    import Icon from "./Icon.svelte";
</script>

<div class="fixed bottom-0 right-0 pb-6 pr-6">
    <div class="bg-amber-100 flex border border-amber-200 rounded-lg p-5" style="width: 450px">
        <div>
          <h3 class="text-lg font-bold mb-2">Personal investments made easy</h3>
            <div class="flex items-center space-x-2">
                <div><Icon name="check" class="text-green-500" /></div>
                <span>Track your recurring investments</span>
            </div>
            <div class="flex items-center space-x-2">
                <div><Icon name="check" class="text-green-500" /></div>
                <span>Consolidate all investments across different sources</span>
            </div>
            <div class="flex items-center space-x-2">
                <div><Icon name="check" class="text-green-500" /></div>
                <span>Simplifies TAX reporting</span>
            </div>
        </div>
        <div class="text-center flex items-center flex-col ml-auto">
            <img src="pit-logo.svg" height="72" width="72" alt="PIT logo" />
            <span class="text-xs font-bold">Personal Investments Tracker</span>
        </div>
    </div>
</div>
