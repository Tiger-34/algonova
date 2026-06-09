<script>
    //@ts-nocheck
    import { createRecipe, adding_info, isOverlayOpen } from "./shared.svelte";

    let current_ingredient = $state("");

    let current_amount = $state("");

    let current_amount_units = $state("");

    
    let units_arr = ["ks","ml","l","g","kg"];
    let tempor_ingredients = $state([]);
</script>

<div class="overlay">
    <div id="parent">
        <button id="close-btn" aria-label="Close dialog" title="Close dialog" onclick={() => isOverlayOpen.value = false}>
            ✕
        </button>

        <h2>Add New Recipe</h2>

        <div class="form-group">
            <label for="recipe-name">Recipe Name</label>
            <input id="recipe-name" type="text" bind:value={adding_info.new_recipe_info.name} placeholder="e.g., Spaghetti Carbonara">
        </div>

        <div class="form-group">
            <label for="cook-time">Cook Time (minutes)</label>
            <input id="cook-time" type="number" bind:value={adding_info.new_recipe_info.cook_time} placeholder="20">
        </div>

        <div class="form-group">
            <label for="image-url">Image URL</label>
            <input id="image-url" type="text" bind:value={adding_info.new_recipe_info.image_url} placeholder="https://...">
        </div>

        <div class="ingredients-section">
            <h3>Ingredients</h3>
            
            <div class="ingredient-input">
                <input type="text" bind:value={current_ingredient} placeholder="Ingredient name">

                <input type="number" bind:value={current_amount} placeholder="Amount" class="amount-input">

                <select bind:value={current_amount_units} class="units-select">
                    {#each units_arr as unit}
                        <option value={unit}>{unit}</option>  
                    {/each}
                </select>

                <button class="add-btn" onclick={() => {
                    if (current_ingredient && current_amount) {
                        tempor_ingredients.push([current_ingredient, `${current_amount}${current_amount_units}`]);
                        current_ingredient = '';
                        current_amount = '';
                    }
                }}>Add</button>
            </div>

            <div class="ingredients-list">
                {#each tempor_ingredients as tempor_ingredient, index}
                    <div class="ingredient-item">
                        <span>{tempor_ingredient[0]} · {tempor_ingredient[1]}</span>
                        <button class="delete-btn" onclick={() => tempor_ingredients.splice(index, 1)}>Remove</button>
                    </div>
                {/each}
            </div>
        </div>

        <button class="submit-btn" onclick={() => {
            createRecipe(adding_info.new_recipe_info.name, adding_info.new_recipe_info.description, tempor_ingredients, adding_info.new_recipe_info.cook_time, adding_info.new_recipe_info.image_url);
            isOverlayOpen.value = false;
        }}>Save Recipe</button>
    </div>
</div>

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    #parent {
        background: white;
        padding: 32px;
        border-radius: 16px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 90%;
        max-width: 500px;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        animation: slideUp 0.3s ease;
    }

    @keyframes slideUp {
        from {
            transform: translateY(20px);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }

    h2 {
        margin: 0;
        color: #333;
        font-size: 24px;
        font-weight: 600;
    }

    h3 {
        margin: 0 0 12px 0;
        color: #555;
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    #close-btn {
        position: absolute;
        top: 16px;
        right: 16px;
        width: 40px;
        height: 40px;
        background: #f0f0f0;
        border: none;
        font-size: 20px;
        cursor: pointer;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #666;
        transition: all 0.2s ease;
        outline: none;
    }

    #close-btn:hover {
        background-color: #e0e0e0;
        color: #333;
        transform: rotate(90deg);
    }

    #close-btn:focus-visible {
        box-shadow: 0 0 0 3px rgba(100, 150, 255, 0.3);
    }

    .form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    label {
        font-size: 14px;
        font-weight: 500;
        color: #555;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    input[type="text"],
    input[type="number"] {
        padding: 12px 16px;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-size: 14px;
        transition: all 0.2s ease;
        font-family: inherit;
        outline: none;
    }

    input[type="text"]:focus,
    input[type="number"]:focus {
        border-color: #6496ff;
        box-shadow: 0 0 0 3px rgba(100, 150, 255, 0.1);
    }

    input::placeholder {
        color: #aaa;
    }

    .ingredients-section {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding-top: 16px;
        border-top: 1px solid #e0e0e0;
    }

    .ingredient-input {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .ingredient-input input[type="text"] {
        flex: 1;
        min-width: 150px;
    }

    .amount-input {
        width: 80px !important;
    }

    .units-select {
        padding: 12px 16px;
        border: 2px solid #e0e0e0;
        border-radius: 8px;
        font-size: 14px;
        cursor: pointer;
        background: white;
        transition: all 0.2s ease;
        outline: none;
        font-family: inherit;
    }

    .units-select:focus {
        border-color: #6496ff;
        box-shadow: 0 0 0 3px rgba(100, 150, 255, 0.1);
    }

    .add-btn {
        padding: 12px 20px;
        background: #6496ff;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        white-space: nowrap;
        outline: none;
    }

    .add-btn:hover {
        background: #5280d9;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(100, 150, 255, 0.3);
    }

    .add-btn:active {
        transform: translateY(0);
    }

    .ingredients-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-height: 200px;
        overflow-y: auto;
    }

    .ingredient-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 16px;
        background: #f5f5f5;
        border-radius: 8px;
        font-size: 14px;
    }

    .ingredient-item span {
        color: #333;
        flex: 1;
    }

    .delete-btn {
        padding: 6px 12px;
        background: #ff6b6b;
        color: white;
        border: none;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
        outline: none;
        white-space: nowrap;
    }

    .delete-btn:hover {
        background: #ff5252;
        transform: scale(1.05);
    }

    .delete-btn:active {
        transform: scale(0.95);
    }

    .submit-btn {
        padding: 14px 24px;
        background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        outline: none;
        align-self: flex-end;
        min-width: 120px;
    }

    .submit-btn:hover {
        background: linear-gradient(135deg, #45a049 0%, #3d8b40 100%);
        box-shadow: 0 6px 16px rgba(76, 175, 80, 0.3);
        transform: translateY(-2px);
    }

    .submit-btn:active {
        transform: translateY(0);
    }

    @media (max-width: 600px) {
        #parent {
            width: 95%;
            padding: 24px;
            gap: 16px;
        }

        .ingredient-input {
            flex-direction: column;
        }

        .amount-input {
            width: 100% !important;
        }

        .add-btn {
            width: 100%;
        }

        .submit-btn {
            align-self: stretch;
        }
    }
</style>