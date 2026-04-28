<script>
// @ts-nocheck

    import RecipeIcon from "../lib/assets/RecipeIcon.svelte";

    import { recipes } from "../lib/assets/shared.svelte";
</script>

{#each recipes.info as recipe}
    <RecipeIcon {...recipe}/>
{/each}

