<script>
    import Icon from "./Icon.svelte";
</script>

<div class="fixed bottom-0 left-0 right-0 pb-10">
    <div class="bg-amber-100 flex sm:mx-auto sm:w-full sm:max-w-3xl border border-amber-200 rounded-lg p-5">
        <div>
          <h3 class="text-lg font-bold mb-2">Personal investments made easy</h3>
            <div class="flex items-center space-x-2">
                <Icon name="check" />
                <span>Track your recurring investments</span>
            </div>
            <div class="flex items-center space-x-2">
                <Icon name="check" />
                <span>Consolidate all investments across different sources</span>
            </div>
            <div class="flex items-center space-x-2">
                <Icon name="check" />
                <span>Simplifies TAX reporting</span>
            </div>
        </div>
        <div class="text-center flex items-center flex-col ml-auto">
            <img src="pit-logo.svg" height="96" width="96" alt="PIT logo" />
            <span class="text-xs font-bold">Personal Investments Tracker</span>
        </div>
    </div>
</div>
