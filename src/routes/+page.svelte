<script>
// @ts-nocheck

    import RecipeIcon from "../assets/RecipeIcon.svelte";

    import { recipes } from "../assets/shared.svelte";
</script>

{#each recipes.info as recipe}
    <RecipeIcon {...recipe}/>
{/each}