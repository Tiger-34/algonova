<script>
    //@ts-nocheck
    import RecipeIcon from "$lib/assets/RecipeIcon.svelte";

    import Overlay from "$lib/assets/Overlay.svelte";
    import Overlaybtn from "$lib/assets/OverlayBtn.svelte";

    import { recipes } from "$lib/assets/shared.svelte";

    import { isOverlayOpen } from "$lib/assets/shared.svelte";
    import OverlayBtn from "$lib/assets/OverlayBtn.svelte";
</script>

{#each recipes.info as recipe}
    <RecipeIcon {...recipe}/>
{/each}

<OverlayBtn />

{#if isOverlayOpen.value}
    <Overlay />
{/if}
