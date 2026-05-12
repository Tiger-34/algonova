<script>
    import { isOverlayOpen } from '../../stores/overlay.js';
</script>

{$isOverlayOpen}
<button on:click={() => {isOverlayOpen.set(true)}}>Open Overlay</button>