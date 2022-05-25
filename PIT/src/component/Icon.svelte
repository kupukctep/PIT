<script type="ts">
  import {icons} from '../icons'

  export let name: string
  export let sizeClass = 'icon-md'
  export let focusable: any = false

  $: icon = icons[name]
</script>

<svg class="{$$props.class} icon-{name} {sizeClass}" fill="currentColor" {focusable}
     viewBox="0 0 {icon.box} {icon.box}">{@html icon.svg}</svg>

<style>
  .icon-sm {
    @apply w-4 h-4
  }

  .icon-md {
    @apply w-6 h-6
  }

  .icon-lg {
    @apply w-8 h-8
  }
</style>
