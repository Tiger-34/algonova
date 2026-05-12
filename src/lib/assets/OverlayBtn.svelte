<script>
    import { isOverlayOpen } from "./shared.svelte";
</script>

{isOverlayOpen.value}
<button on:click={() => {isOverlayOpen.value = !isOverlayOpen.value}}>Open Overlay</button>