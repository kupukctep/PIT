<script lang="ts">
    import Icon from './Icon.svelte'

    export let icon: string | undefined = undefined
    export let size = 'normal'
    export let circular = false

    let buttonSizeClasses = ''
    let iconSizeClasses = ''

    if (size === 'small') {
        buttonSizeClasses = circular ? 'w-8 h-8' : 'py-1.5 px-3 text-sm font-medium'
        iconSizeClasses = circular ? 'icon-sm' : 'icon-sm -ml-1 mr-1'
    } else if (size === 'normal') {
        buttonSizeClasses = circular ? 'h-10 w-10' : 'py-2 px-4 text-sm font-medium'
        iconSizeClasses = circular ? 'icon-md' : 'icon-md -ml-2 mr-1'
    } else if (size === 'large') {
        buttonSizeClasses = circular ? 'h-12 w-12' : 'py-3 px-4 font-semibold shadow-md'
        iconSizeClasses = circular ? 'icon-lg' : 'icon-lg mr-2'
    }
</script>

<button {...$$restProps}
        class="btn {$$props.class ?? 'btn-default'} {buttonSizeClasses} {icon ? 'btn-icon' : ''} {circular ? 'btn-circular' : ''}" on:click>
    {#if icon}
        <Icon name={icon} sizeClass={iconSizeClasses}/>
        {#if !circular}
            <span><slot/></span>
        {/if}
    {:else}
        <slot/>
    {/if}
</button>

<style global>
    .btn {
        @apply border border-transparent rounded-md text-center
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-75
        disabled:opacity-50
    }

    .btn-icon {
        @apply inline-flex items-center
    }

    .btn-circular {
        @apply flex items-center justify-center rounded-full
    }

    .btn-primary {
        @apply text-white bg-primary-500 hover:bg-primary-600 focus:ring-primary-400
    }

    .btn-danger {
        @apply text-white bg-red-500 shadow-md hover:bg-danger-800 focus:ring-red-800
    }

    .btn-success {
        @apply text-white bg-green-500 shadow-md hover:bg-success-800 focus:ring-green-800
    }

    .btn-default {
        @apply focus:ring-primary-500 hover:bg-gray-50 bg-white text-gray-700 border border-gray-300
    }

    .btn-info {
        @apply text-white bg-sky-500 hover:bg-sky-600 focus:ring-sky-400
    }

    .btn-link {
        @apply text-primary-600 hover:text-primary-500 hover:bg-primary-100 focus:ring-primary-400
    }
</style>
