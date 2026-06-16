<script>
    //@ts-nocheck
    import RecipeIcon from "$lib/assets/RecipeIcon.svelte";

    import Overlay from "$lib/assets/Overlay.svelte";
    import OverlayBtn from "$lib/assets/OverlayBtn.svelte"

    import { recipes, showing_icons, currently_showing } from "$lib/assets/shared.svelte";

    import { isOverlayOpen } from "$lib/assets/shared.svelte";  


</script>

<header>
        <input id="search_add_bar" type="text" bind:value={currently_showing.value.name} placeholder="Vyhľadať">

        <OverlayBtn />
</header>

{#if showing_icons.value}
<div id="icons_parent">

    

    <div id="recipes">
        {#each recipes.info as recipe (recipe.id)}
            <RecipeIcon {...recipe}/>
        {/each}
    </div>

    {#if isOverlayOpen.value}
        <Overlay />
    {/if}

</div>
{:else}
    <div id="individual_recipe_parent">
        <button onclick={() => showing_icons.value = true} id="arrow_back_button">←</button>

        <div id="recipe_summary">
            {#each currently_showing.value.ingredients as ingredient}
                <div class="ingredient_info">
                    <p>{ingredient[0]}</p>
                    <p>-</p>
                    <p>{ingredient[1]}</p>
                </div>
            {/each}
        </div>

        <div id="individual_recipe">
            <img id="main_picture" src={currently_showing.value.image_url} alt="">

            <div id="recipe_steps">
                <h1>{currently_showing.value.name}</h1>

                {#each currently_showing.value.description as paragraph}
                    <h2>{paragraph[0]}</h2>
                    <p>{paragraph[1]}</p>
                {/each}
            </div>
        </div>
    </div>
{/if}   

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

    

    #individual_recipe_parent {
        width: 100%;

        display: flex;

        user-select: none;
    }
        #recipe_summary {
            width: 10%;
            height: inherit;

            display: flex;
            flex-direction: column;
            justify-content: space-around;

        }
            .ingredient_info {
                display: flex;
                justify-content: space-around;

                color: rgb(75, 75, 75);

                font-size: small;
            }

        #main_picture {
            width: inherit;

            margin-top: 10px;

            justify-self: flex-end;
            float: right;
        }

        #arrow_back_button {
            background-color: #ffffff;
            border: 0px solid white;

            font-size: x-large;

            cursor: pointer;

            align-self: flex-start;
        }

        #individual_recipe {
            width: 89%;

            justify-self: right;
        }
            #recipe_steps {
                justify-self: center;
                align-self: center;
                float: center;
            }

</style>