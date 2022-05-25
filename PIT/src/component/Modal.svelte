<script lang="ts">
    import {createEventDispatcher} from "svelte";

    export let show = false
    export let actionText
    export let cancelText = 'Cancel'

    const dispatch = createEventDispatcher()

    const close = () => {
        show = false
    }
    const action = () => {
        close()
        dispatch('action')
    }

    let modal
</script>

{#if show}
    <form on:submit|preventDefault={action}>
        <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" on:click={close}></div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div class="modal inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full sm:p-6"
                     role="dialog" aria-modal="true" bind:this={modal}>

                    <div class="mt-3 text-left sm:mt-5">
                        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                            <slot name="header"></slot>
                        </h3>
                        <div class="mt-2">
                            <p class="text-sm text-gray-500">
                                <slot/>
                            </p>
                        </div>
                    </div>

                    <slot name="footer">
                        <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                            <button on:click={close}>{cancelText}</button>
                            <button type="submit">{actionText}</button>
                        </div>
                    </slot>
                </div>
            </div>
        </div>
    </form>
{/if}
