<script>
    //@ts-nocheck
    import { adding_info, isOverlayOpen } from "./shared.svelte";

    let current_ingredient = $state("");

    let current_amount = $state("");

    let current_amount_units = $state("");

    
    let units_arr = ["ks","ml","l","g","kg"];
    let tempor_ingredients = $state([]);
</script>

<div class="overlay">
    <div id="parent">
        <button onclick={() => isOverlayOpen.value = false}>
            X
        </button>

        názov<input type="text" bind:value={adding_info.new_recipe_info.name}>

        čas prípravy <input type="number" bind:value={adding_info.new_recipe_info.cook_time}>

        obrázok <input type="text" bind:value={adding_info.new_recipe_info.image_url}>

        <div>
            ingrediencia <input type="text"bind:value={current_ingredient}>

            koľko? <input type="number" bind:value={current_amount}>

            <select bind:value={current_amount_units}>
                {#each units_arr as unit}
                    <option value={unit}>{unit}</option>  
                {/each}
            </select>

            <button onclick={() => tempor_ingredients.push([current_ingredient,`${current_amount}${current_amount_units}`])}>pridať</button> <!--pridava ingrediencie-->

            {#each tempor_ingredients as tempor_ingredient}
                <p>{tempor_ingredient[0]} - {tempor_ingredient[1]}</p>
                <button onclick={() => tempor_ingredients.splice(tempor_ingredients.indexOf(tempor_ingredient),1)}>X</button> <!--odstranuje ingrediencie-->
            {/each}
        </div>
    </div>

</div>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #parent {
        background-color: white;
        padding: 20px;
        border-radius: 8px;

        display: flex;
        flex-direction: column;
    }
</style>