<script>
    //@ts-nocheck
    import RecipeIcon from "$lib/assets/RecipeIcon.svelte";

    import Overlay from "$lib/assets/Overlay.svelte";
    import OverlayBtn from "$lib/assets/OverlayBtn.svelte"

    import { recipes } from "$lib/assets/shared.svelte";

    import { isOverlayOpen } from "$lib/assets/shared.svelte";

    import { adding_info } from "$lib/assets/shared.svelte";

</script>

<div id="parent">

    <header>
        <input id="search_add_bar" type="text" bind:value={adding_info.name} placeholder="Vyhľadať">

        <OverlayBtn />
    </header>

    <div id="recipes">
        {#each recipes.info as recipe (recipe.id)}
            <RecipeIcon {...recipe}/>
        {/each}
    </div>

    {#if isOverlayOpen.value}
        <Overlay />
    {/if}

</div>

<style>

    #recipes {
        display: flex;
        flex-wrap: wrap;
        flex-shrink: 1;
        justify-content: space-around;

        margin: 10px;
    }

    header {
        height: 60px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 10px;
        
        background-color: #2cff24;
        
    }

    #search_add_bar {
        width: 190px;
        height: 30px;

        border: 5px solid #ffffff;
        border-radius: 10px;

        margin: 25px;

        font-size: large;
    }

</style>